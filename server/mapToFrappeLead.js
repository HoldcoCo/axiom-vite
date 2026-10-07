/**
 * ERPNext Lead / Opportunity field mapping (same pattern as axiom_survey).
 */

/**
 * Splits a full name into first/last; first_name must never be empty.
 * @param {string} fullName
 * @returns {{ first_name: string, last_name: string }}
 */
export function splitLeadName(fullName) {
  const trimmed = fullName.trim();
  if (trimmed.length === 0) {
    return { first_name: "Lead", last_name: "" };
  }
  const parts = trimmed.split(/\s+/);
  const first = parts[0] ?? "Lead";
  const last = parts.slice(1).join(" ");
  return { first_name: first, last_name: last };
}

/**
 * Maps landing-page contact fields onto an ERPNext Lead document body.
 * @param {{
 *   name: string,
 *   company: string,
 *   email: string,
 *   phone: string,
 *   source?: string
 * }} input
 * @returns {Record<string, string>}
 */
export function mapToFrappeLead(input) {
  const { first_name, last_name } = splitLeadName(input.name);
  const phone = input.phone.trim();
  const company = input.company.trim();
  const lead_name =
    input.name.trim().length > 0 ? input.name.trim() : first_name;

  /** @type {Record<string, string>} */
  const doc = {
    lead_name,
    first_name,
    email_id: input.email.trim(),
    source: input.source && input.source.length > 0 ? input.source : "Website",
  };

  if (last_name.length > 0) doc.last_name = last_name;
  if (company.length > 0) doc.company_name = company;
  if (phone.length > 0) {
    doc.phone = phone;
    doc.mobile_no = phone;
  }

  return doc;
}

/**
 * Maps a Lead onto an ERPNext Opportunity insert body.
 * @param {{
 *   leadName: string,
 *   name: string,
 *   company: string,
 *   email: string,
 *   phone: string,
 *   companyAccount: string,
 *   opportunityType: string
 * }} input
 * @returns {Record<string, string>}
 */
export function mapToFrappeOpportunity(input) {
  const company = input.company.trim();
  const contactName = input.name.trim();
  const mobile = input.phone.trim();

  /** @type {Record<string, string>} */
  const payload = {
    naming_series: "CRM-OPP-.YYYY.-",
    opportunity_from: "Lead",
    party_name: input.leadName,
    status: "Open",
    company: input.companyAccount,
    contact_email: input.email.trim(),
    customer_name: company.length > 0 ? company : contactName,
  };

  if (mobile.length > 0) payload.contact_mobile = mobile;
  if (input.opportunityType.length > 0) {
    payload.opportunity_type = input.opportunityType;
  }

  return payload;
}
