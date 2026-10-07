/**
 * Date/time helpers for VSL progress and booking calendar bounds.
 */
const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
const iso = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromIso = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const longDate = (d) =>
  d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/**
 * Compute booking window: today, end date, and max month offset.
 * @returns {{ today: Date, end: Date, maxOff: number }}
 */
export function getBookingBounds() {
  const now = new Date(),
    today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let end = new Date(2027, 0, 31);
  if (end < today)
    end = new Date(today.getFullYear(), today.getMonth() + 4, 0);
  const maxOff =
    (end.getFullYear() - today.getFullYear()) * 12 +
    end.getMonth() -
    today.getMonth();
  return { today, end, maxOff };
}

export { fmt, iso, fromIso, longDate };
