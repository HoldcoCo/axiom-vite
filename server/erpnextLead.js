/**
 * ERPNext Lead + Opportunity creation — same flow as axiom_survey.
 *
 * 1. Find existing Lead by email (or create one)
 * 2. Create an Opportunity linked to that Lead
 * 3. Attach form answers as a CRM Note on the Opportunity
 * 4. Send a thank-you email
 */
import { mapToFrappeLead, mapToFrappeOpportunity } from "./mapToFrappeLead.js";
import { formatAnswersAsHtmlNote } from "./serializeAnswers.js";
import { sendThankYouEmail } from "./thankYouEmail.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEAD_NAME_PATTERN = /CRM-LEAD-\d{4}-\d+/i;

/**
 * Loads ERPNext credentials from env (same vars as axiom_survey / axiom_website).
 * @returns {{
 *   baseUrl: string,
 *   apiKey: string,
 *   apiSecret: string,
 *   leadSource: string,
 *   company: string,
 *   opportunityType: string
 * } | null}
 */
export function getErpNextConfig() {
  const baseUrl = firstEnv("ERPNEXT_BASE_URL", "FRAPPE_URL");
  const apiKey = firstEnv("ERPNEXT_API_KEY", "FRAPPE_API_KEY");
  const apiSecret = firstEnv("ERPNEXT_API_SECRET", "FRAPPE_API_SECRET");
  const leadSource = firstEnv("ERPNEXT_LEAD_SOURCE") ?? "Website";
  const company = firstEnv("ERPNEXT_COMPANY") ?? "";
  const opportunityType = firstEnv("ERPNEXT_OPPORTUNITY_TYPE") ?? "";

  if (baseUrl === null || apiKey === null || apiSecret === null) return null;

  return {
    baseUrl: baseUrl.replace(/\/$/, ""),
    apiKey,
    apiSecret,
    leadSource,
    company,
    opportunityType,
  };
}

/**
 * @param {...string} keys
 * @returns {string | null}
 */
function firstEnv(...keys) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return null;
}

/**
 * @param {Record<string, unknown>} responseBody
 * @returns {string[]}
 */
function collectErrorTexts(responseBody) {
  const texts = [];
  if (typeof responseBody.message === "string") texts.push(responseBody.message);
  if (typeof responseBody.exception === "string")
    texts.push(responseBody.exception);
  if (typeof responseBody._server_messages === "string") {
    texts.push(responseBody._server_messages);
    try {
      const messages = JSON.parse(responseBody._server_messages);
      if (Array.isArray(messages)) {
        for (const entry of messages) {
          if (typeof entry !== "string") continue;
          texts.push(entry);
          try {
            const parsed = JSON.parse(entry);
            if (typeof parsed.message === "string") texts.push(parsed.message);
          } catch {
            // ignore
          }
        }
      }
    } catch {
      // ignore
    }
  }
  return texts;
}

/**
 * @param {Record<string, unknown>} responseBody
 * @returns {string}
 */
function parseErpNextError(responseBody) {
  for (const message of collectErrorTexts(responseBody)) {
    const stripped = message.replace(/<[^>]+>/g, "").trim();
    if (stripped.length > 0 && !stripped.startsWith("{")) return stripped;
  }
  return "ERPNext rejected the request.";
}

/**
 * @param {Record<string, unknown>} responseBody
 * @returns {string | null}
 */
function extractLeadNameFromDuplicateEmailError(responseBody) {
  for (const text of collectErrorTexts(responseBody)) {
    const hrefMatch = text.match(/\/lead\/(CRM-LEAD-\d{4}-\d+)/i);
    if (hrefMatch && typeof hrefMatch[1] === "string") return hrefMatch[1];
    const nameMatch = text.match(LEAD_NAME_PATTERN);
    if (nameMatch && typeof nameMatch[0] === "string") return nameMatch[0];
  }
  return null;
}

/**
 * @param {Record<string, unknown>} responseBody
 * @returns {boolean}
 */
function isDuplicateEmailError(responseBody) {
  return collectErrorTexts(responseBody).some((text) =>
    text.toLowerCase().includes("email address must be unique"),
  );
}

/**
 * @param {{ baseUrl: string, apiKey: string, apiSecret: string }} config
 * @param {string} path
 * @param {RequestInit} init
 * @returns {Promise<Response>}
 */
async function erpNextFetch(config, path, init) {
  const url = `${config.baseUrl}${path}`;
  const tokenAuth = `token ${config.apiKey}:${config.apiSecret}`;
  const basicAuth = `Basic ${Buffer.from(`${config.apiKey}:${config.apiSecret}`).toString("base64")}`;

  const response = await sendErpNextRequest(url, init, tokenAuth);
  if (response.status !== 401) return response;
  return sendErpNextRequest(url, init, basicAuth);
}

/**
 * @param {string} url
 * @param {RequestInit} init
 * @param {string} authorization
 * @returns {Promise<Response>}
 */
async function sendErpNextRequest(url, init, authorization) {
  const headers = new Headers(init.headers);
  headers.set("Authorization", authorization);
  headers.set("Accept", "application/json");
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  return fetch(url, { ...init, headers });
}

/**
 * Type guard for the landing-page lead POST body.
 * @param {unknown} value
 * @returns {boolean}
 */
export function isLeadPayload(value) {
  if (typeof value !== "object" || value === null) return false;
  const obj = /** @type {Record<string, unknown>} */ (value);
  if (typeof obj.checklistOnly !== "boolean") return false;
  if (typeof obj.qualified !== "boolean") return false;
  if (!Array.isArray(obj.answers)) return false;
  if (typeof obj.form !== "object" || obj.form === null) return false;
  const form = /** @type {Record<string, unknown>} */ (obj.form);
  if (typeof form.name !== "string") return false;
  if (typeof form.email !== "string") return false;
  if (typeof form.firm !== "string") return false;
  if (typeof form.phone !== "string") return false;
  if (obj.website !== undefined && typeof obj.website !== "string") return false;
  return obj.answers.every((item) => {
    if (typeof item !== "object" || item === null) return false;
    const row = /** @type {Record<string, unknown>} */ (item);
    return (
      typeof row.question === "string" &&
      Array.isArray(row.answers) &&
      row.answers.every((a) => typeof a === "string")
    );
  });
}

/**
 * @param {{ baseUrl: string, apiKey: string, apiSecret: string }} config
 * @param {string} email
 * @returns {Promise<string | null>}
 */
async function findLeadByEmail(config, email) {
  const filters = encodeURIComponent(JSON.stringify([["email_id", "=", email]]));
  const fields = encodeURIComponent(JSON.stringify(["name"]));
  const response = await erpNextFetch(
    config,
    `/api/resource/Lead?filters=${filters}&fields=${fields}&limit_page_length=1`,
    { method: "GET" },
  );
  if (!response.ok) {
    console.error(
      "[erpnext] Lead lookup failed",
      response.status,
      parseErpNextError(/** @type {Record<string, unknown>} */ (await response.json())),
    );
    return null;
  }
  const body = /** @type {{ data?: Array<{ name?: string }> }} */ (
    await response.json()
  );
  const leadName = body.data?.[0]?.name;
  return typeof leadName === "string" && leadName.length > 0 ? leadName : null;
}

/**
 * @param {{ baseUrl: string, apiKey: string, apiSecret: string, company: string }} config
 * @returns {Promise<string | null>}
 */
async function resolveCompanyName(config) {
  if (config.company.length > 0) return config.company;

  const fields = encodeURIComponent(JSON.stringify(["name"]));
  const response = await erpNextFetch(
    config,
    `/api/resource/Company?fields=${fields}&limit_page_length=1`,
    { method: "GET" },
  );
  if (!response.ok) return null;
  const body = /** @type {{ data?: Array<{ name?: string }> }} */ (
    await response.json()
  );
  const companyName = body.data?.[0]?.name;
  return typeof companyName === "string" && companyName.length > 0
    ? companyName
    : null;
}

/**
 * @param {ReturnType<typeof getErpNextConfig>} config
 * @param {{ form: { name: string, firm: string, email: string, phone: string } }} payload
 * @returns {Promise<{ ok: true, name: string } | { ok: false, message: string }>}
 */
async function createLead(config, payload) {
  if (config === null) return { ok: false, message: "config" };

  const leadDoc = mapToFrappeLead({
    name: payload.form.name,
    company: payload.form.firm,
    email: payload.form.email,
    phone: payload.form.phone,
    source: config.leadSource,
  });

  const response = await erpNextFetch(config, "/api/resource/Lead", {
    method: "POST",
    body: JSON.stringify(leadDoc),
  });
  const body = /** @type {Record<string, unknown> & { data?: { name?: string } }} */ (
    await response.json()
  );

  if (!response.ok) {
    if (isDuplicateEmailError(body)) {
      const duplicate = extractLeadNameFromDuplicateEmailError(body);
      if (duplicate !== null) return { ok: true, name: duplicate };
    }
    const message = parseErpNextError(body);
    console.error("[erpnext] Lead create failed", response.status, message);
    return { ok: false, message };
  }

  const leadName = body.data?.name;
  if (typeof leadName !== "string" || leadName.length === 0) {
    return { ok: false, message: "Lead was created but ERPNext returned no name." };
  }
  return { ok: true, name: leadName };
}

/**
 * @param {NonNullable<ReturnType<typeof getErpNextConfig>>} config
 * @param {string} leadName
 * @param {{ form: { name: string, firm: string, email: string, phone: string } }} payload
 * @param {string} companyName
 */
async function createOpportunity(config, leadName, payload, companyName) {
  const opportunityDoc = mapToFrappeOpportunity({
    leadName,
    name: payload.form.name,
    company: payload.form.firm,
    email: payload.form.email,
    phone: payload.form.phone,
    companyAccount: companyName,
    opportunityType: config.opportunityType,
  });

  const response = await erpNextFetch(config, "/api/resource/Opportunity", {
    method: "POST",
    body: JSON.stringify(opportunityDoc),
  });
  const body = /** @type {Record<string, unknown> & { data?: { name?: string } }} */ (
    await response.json()
  );

  if (!response.ok) {
    const message = parseErpNextError(body);
    console.error("[erpnext] Opportunity create failed", response.status, message);
    return { ok: false, message };
  }

  const opportunityName = body.data?.name;
  if (typeof opportunityName !== "string" || opportunityName.length === 0) {
    return {
      ok: false,
      message: "Opportunity was created but ERPNext returned no name.",
    };
  }
  return { ok: true, name: opportunityName };
}

/**
 * @param {NonNullable<ReturnType<typeof getErpNextConfig>>} config
 * @param {string} opportunityName
 * @param {string} noteHtml
 */
async function addOpportunityNote(config, opportunityName, noteHtml) {
  const response = await erpNextFetch(
    config,
    `/api/resource/Opportunity/${encodeURIComponent(opportunityName)}`,
    {
      method: "PUT",
      body: JSON.stringify({
        notes: [{ note: noteHtml, doctype: "CRM Note" }],
      }),
    },
  );
  if (response.ok) return;

  console.error(
    "[erpnext] Opportunity note update failed, falling back to comment",
    response.status,
  );

  const commentParams = new URLSearchParams({
    reference_doctype: "Opportunity",
    reference_name: opportunityName,
    content: noteHtml,
  });
  await erpNextFetch(config, "/api/method/frappe.desk.form.utils.add_comment", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: commentParams.toString(),
  });
}

/**
 * Submit year-end landing form: Lead (new or existing) + Opportunity + note + email.
 * @param {{
 *   form: { name: string, firm: string, email: string, phone: string },
 *   answers: { question: string, answers: string[] }[],
 *   checklistOnly: boolean,
 *   qualified: boolean
 * }} payload
 * @param {NonNullable<ReturnType<typeof getErpNextConfig>>} config
 * @returns {Promise<{ status: number, body: { ok: boolean, error?: string, emailSent?: boolean } }>}
 */
export async function submitLandingLeadToErpNext(payload, config) {
  const email = payload.form.email.trim();
  const name = payload.form.name.trim();
  if (name.length === 0 || !EMAIL_PATTERN.test(email)) {
    return { status: 400, body: { ok: false, error: "validation" } };
  }

  const companyName = await resolveCompanyName(config);
  if (companyName === null) {
    console.error("[erpnext] Missing ERPNEXT_COMPANY");
    return { status: 503, body: { ok: false, error: "config" } };
  }

  const noteHtml = formatAnswersAsHtmlNote(payload.answers, {
    checklistOnly: payload.checklistOnly,
    qualified: payload.qualified,
  });

  let leadName = await findLeadByEmail(config, email);
  if (leadName === null) {
    const leadResult = await createLead(config, payload);
    if (!leadResult.ok) {
      return { status: 502, body: { ok: false, error: "upstream" } };
    }
    leadName = leadResult.name;
  }

  const opportunityResult = await createOpportunity(
    config,
    leadName,
    payload,
    companyName,
  );
  if (!opportunityResult.ok) {
    return { status: 502, body: { ok: false, error: "upstream" } };
  }

  await addOpportunityNote(config, opportunityResult.name, noteHtml);

  const emailSent = await sendThankYouEmail({
    to: email,
    name,
    firm: payload.form.firm.trim(),
    checklistOnly: payload.checklistOnly,
    qualified: payload.qualified,
    answers: payload.answers,
  });

  return { status: 200, body: { ok: true, emailSent } };
}

/**
 * Shared handler for Vercel `/api/lead` and the Vite dev middleware.
 * @param {unknown} body
 * @returns {Promise<{ status: number, body: { ok: boolean, error?: string, emailSent?: boolean } }>}
 */
export async function handleLeadRequest(body) {
  if (!isLeadPayload(body)) {
    return { status: 400, body: { ok: false, error: "validation" } };
  }

  const payload = /** @type {{
 *   form: { name: string, firm: string, email: string, phone: string },
 *   answers: { question: string, answers: string[] }[],
 *   checklistOnly: boolean,
 *   qualified: boolean,
 *   website?: string
 * }} */ (body);

  // Honeypot: bots fill hidden "website" — pretend success.
  if (typeof payload.website === "string" && payload.website.trim().length > 0) {
    return { status: 200, body: { ok: true } };
  }

  const config = getErpNextConfig();
  if (config === null) {
    console.error("[api/lead] Missing ERPNEXT_* environment variables");
    return { status: 503, body: { ok: false, error: "config" } };
  }

  return submitLandingLeadToErpNext(payload, config);
}
