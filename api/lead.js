/**
 * Vercel serverless function: year-end landing form → ERPNext Lead + Opportunity.
 * Credentials stay server-side (ERPNEXT_* / SMTP_*).
 */
import { handleLeadRequest } from "../server/erpnextLead.js";

const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MS = 60_000;
/** @type {Map<string, number[]>} */
const hits = new Map();

/**
 * @param {string} ip
 * @returns {boolean}
 */
function allowRequest(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

/**
 * @param {import("@vercel/node").VercelRequest} req
 * @returns {string}
 */
function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  if (Array.isArray(forwarded) && forwarded[0]) return forwarded[0];
  return req.socket?.remoteAddress ?? "unknown";
}

/**
 * @param {import("@vercel/node").VercelRequest} req
 * @param {import("@vercel/node").VercelResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method" });
    return;
  }

  const ip = clientIp(req);
  if (!allowRequest(ip)) {
    res.status(429).json({ ok: false, error: "rate_limit" });
    return;
  }

  try {
    const result = await handleLeadRequest(req.body);
    res.status(result.status).json(result.body);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[api/lead] Unhandled error", message);
    res.status(502).json({ ok: false, error: "upstream", detail: message });
  }
}
