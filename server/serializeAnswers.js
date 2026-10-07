/**
 * HTML helpers for CRM notes and thank-you emails.
 */

/**
 * Escapes text for safe HTML inclusion.
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Formats serialized answers as a Quill-style HTML CRM Note on Opportunity.
 * @param {{ question: string, answers: string[] }[]} serialized
 * @param {{ checklistOnly: boolean, qualified: boolean }} meta
 * @returns {string}
 */
export function formatAnswersAsHtmlNote(serialized, meta) {
  const paragraphs = [
    "<p><strong>AXIOM Year-End Landing — 15 min call form</strong></p>",
    `<p>Checklist only: ${meta.checklistOnly ? "Yes" : "No"}</p>`,
    `<p>Qualified for booking: ${meta.qualified ? "Yes" : "No"}</p>`,
    "<p><strong>Answers</strong></p>",
  ];

  serialized.forEach((item, i) => {
    const answers = item.answers.map(escapeHtml).join(", ");
    paragraphs.push(
      `<p>${String(i + 1)}. ${escapeHtml(item.question)}<br>${answers}</p>`,
    );
  });

  return `<div class="ql-editor read-mode">${paragraphs.join("")}</div>`;
}
