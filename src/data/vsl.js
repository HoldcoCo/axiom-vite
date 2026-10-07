/**
 * VSL script copy, duration, and timed caption cue ranges.
 */

const VSL = [
  "If you sign off on Lebanese files, you already know this year-end isn't like the last one.",
  "31 December closes the Law 330 window.",
  "The Decision 338 adjustments run out with it.",
  "IFRS 18 turns 2026 into the comparative you'll be restating.",
  "And under the revised deadlines, FY2025 auditor reports land in the same weeks you're planning FY2026.",
  "I'm Ziad. I build audit software in Beirut, and this year I've been asking auditors one question instead of guessing at the answer:",
  "where do your hours actually go on a file?",
  "Nobody says testing. They say rebuilding, reconciling and chasing.",
  "So fifteen minutes. What's different about this year-end for your clients, where your hours go, and what we're building.",
  "That last part only if you want it.",
  "You get the year-end checklist either way.",
];
const VSL_DUR = 60;
const VSL_CUES = (() => {
  const w = VSL.map((s) => s.split(/\s+/).length + 3),
    tot = w.reduce((a, b) => a + b, 0);
  let acc = 0;
  return w.map((x) => {
    const st = acc;
    acc += (x / tot) * VSL_DUR;
    return [st, acc];
  });
})();

export { VSL, VSL_CUES, VSL_DUR };
