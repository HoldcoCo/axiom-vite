/**
 * Build presentational models for qualification questions, fields, and FAQ.
 */

/**
 * Radio option UI styles and pick handlers for q1–q3.
 * @param {{ q1: string, q2: string, q3: string }} answers
 * @param {Record<string, number>} errors
 * @param {(question: string, letter: string) => void} onPick
 * @returns {{ ui: Record<string, { c: boolean, b: string, bg: string }>, pick: Record<string, () => void> }}
 */
export function buildQuestionUi(answers, errors, onPick) {
  const ui = {};
  const pick = {};
  [
    ["q1", "abc"],
    ["q2", "abc"],
    ["q3", "abcde"],
  ].forEach(([q, ls]) =>
    [...ls].forEach((l) => {
      const c = answers[q] === l;
      ui[q + l] = {
        c,
        b: c ? "#0B4881" : errors[q] ? "#B42318" : "#CBD5E0",
        bg: c ? "#EEF4FA" : "#fff",
      };
      pick[q + l] = () => onPick(q, l);
    }),
  );
  return { ui, pick };
}

/**
 * Border and aria-invalid maps for contact fields.
 * @param {Record<string, number>} errors
 * @returns {{ ib: Record<string, string>, inv: Record<string, string> }}
 */
export function buildFieldBorders(errors) {
  const ib = {};
  const inv = {};
  ["name", "firm", "email", "phone"].forEach((k) => {
    ib[k] = errors[k] ? "#B42318" : "#CBD5E0";
    inv[k] = errors[k] ? "true" : "false";
  });
  return { ib, inv };
}

/**
 * FAQ accordion open-state helpers for four items.
 * @param {number} openIndex
 * @param {(index: number) => void} onToggle
 * @returns {Record<string, string | (() => void)>}
 */
export function buildFaqUi(openIndex, onToggle) {
  const faq = {};
  [0, 1, 2, 3].forEach((i) => {
    const o = openIndex === i;
    faq["e" + i] = o ? "true" : "false";
    faq["r" + i] = o ? "1fr" : "0fr";
    faq["t" + i] = o ? "45deg" : "0deg";
    faq["o" + i] = () => onToggle(i);
  });
  return faq;
}
