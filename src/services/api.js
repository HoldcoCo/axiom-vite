/**
 * Client-side API: qualify locally, submit leads via /api/lead.
 */
import { serializeFormAnswers } from "../data/formQuestions.js";

/**
 * @param {{ q1: string, q2: string, q3: string }} a
 * @param {boolean} checklistOnly
 * @returns {boolean}
 */
export function qualify(a, checklistOnly) {
  return !checklistOnly && (a.q1 === "a" || a.q1 === "b");
}

/**
 * Posts the landing form to the serverless /api/lead handler.
 * Never throws — network failures return `{ ok: false, error: "network" }`.
 * @param {{
 *   answers: { q1: string, q2: string, q3: string },
 *   contact: { name: string, firm: string, email: string, phone: string },
 *   checklistOnly: boolean,
 *   qualified: boolean
 * }} payload
 * @returns {Promise<{ ok: true, emailSent?: boolean } | { ok: false, error: string }>}
 */
export async function submitLead(payload) {
  const body = {
    form: {
      name: payload.contact.name,
      firm: payload.contact.firm,
      email: payload.contact.email,
      phone: payload.contact.phone,
    },
    answers: serializeFormAnswers(payload.answers, payload.checklistOnly),
    checklistOnly: payload.checklistOnly,
    qualified: payload.qualified,
    website: "",
  };

  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.status === 429) return { ok: false, error: "rate_limit" };
    if (response.status === 400) return { ok: false, error: "validation" };
    if (response.status === 503) return { ok: false, error: "config" };
    if (!response.ok) return { ok: false, error: "upstream" };

    const data = await response.json();
    if (
      typeof data === "object" &&
      data !== null &&
      "ok" in data &&
      data.ok === true
    ) {
      return {
        ok: true,
        emailSent: "emailSent" in data && data.emailSent === true,
      };
    }
    return { ok: false, error: "upstream" };
  } catch {
    return { ok: false, error: "network" };
  }
}

/** @deprecated Calendar stubs kept for unused CalendarView; booking is external. */
export const Api = {
  qualify,
  submitLead,
  confirmBooking(payload) {
    console.info("[booking]", payload);
    return Promise.resolve();
  },
  isDayFull(d) {
    return (d.getDate() * 7 + d.getMonth() * 3) % 11 === 0;
  },
  isSlotTaken(d, i) {
    return (d.getDate() + i * 5) % 7 === 0;
  },
};
