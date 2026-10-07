/**
 * Qualification form questions and option labels for CRM notes / emails.
 */

/** @type {Record<string, { question: string, options: Record<string, string> }>} */
export const FORM_QUESTIONS = {
  q1: {
    question: "Do you sign off on Lebanese audit files?",
    options: {
      a: "Yes, I'm a partner or signing auditor",
      b: "I work on them, someone else signs",
      c: "No, I'm in accounting, tax or advisory",
    },
  },
  q2: {
    question: "Roughly how many FY2026 files will your firm handle?",
    options: {
      a: "Under 10",
      b: "10 to 30",
      c: "More than 30",
    },
  },
  q3: {
    question: "What slows your files down most?",
    options: {
      a: "Rebuilding the client's ledger before we can start",
      b: "Reconciling exchange rates across the year",
      c: "Chasing supporting documents",
      d: "Cash and bank evidence",
      e: "Something else, I'll explain on the call",
    },
  },
};

/**
 * Turn raw answer letters into serialized Q&A for ERPNext / email.
 * @param {{ q1: string, q2: string, q3: string }} answers
 * @param {boolean} checklistOnly
 * @returns {{ question: string, answers: string[] }[]}
 */
export function serializeFormAnswers(answers, checklistOnly) {
  if (checklistOnly) {
    return [
      {
        question: "Request type",
        answers: ["Checklist only — no call"],
      },
    ];
  }

  /** @type {{ question: string, answers: string[] }[]} */
  const rows = [];
  for (const key of ["q1", "q2", "q3"]) {
    const def = FORM_QUESTIONS[key];
    const letter = answers[key];
    if (!def || typeof letter !== "string" || letter.length === 0) continue;
    const label = def.options[letter];
    if (!label) continue;
    rows.push({ question: def.question, answers: [label] });
  }
  return rows;
}
