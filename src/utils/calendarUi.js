/**
 * Build calendar day cells and time-slot button models for the booking UI.
 */
import { Api } from "../services/api.js";
import { iso, longDate } from "./dates.js";

/**
 * @typedef {{
 *   label: string,
 *   vis: string,
 *   disabled: boolean,
 *   border: string,
 *   bg: string,
 *   color: string,
 *   cursor: string,
 *   sel: string,
 *   aria: string,
 *   onClick?: () => void
 * }} DayCell
 */

/**
 * Build a padded month grid of day cells for the booking calendar.
 * @param {{
 *   today: Date,
 *   end: Date,
 *   monthOff: number,
 *   selectedDay: string | null,
 *   onSelectDay: (isoDate: string) => void
 * }} opts
 * @returns {{ base: Date, days: DayCell[] }}
 */
export function buildCalendarDays({
  today,
  end,
  monthOff,
  selectedDay,
  onSelectDay,
}) {
  const base = new Date(today.getFullYear(), today.getMonth() + monthOff, 1);
  const lead = (base.getDay() + 6) % 7;
  const dim = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate();
  /** @type {DayCell[]} */
  const days = [];

  for (let i = 0; i < Math.ceil((lead + dim) / 7) * 7; i++) {
    const n = i - lead + 1;
    if (n < 1 || n > dim) {
      days.push({
        label: "",
        vis: "hidden",
        disabled: true,
        border: "transparent",
        bg: "transparent",
        color: "transparent",
        cursor: "default",
        sel: "false",
        aria: "",
      });
      continue;
    }

    const d = new Date(base.getFullYear(), base.getMonth(), n);
    const wd = d.getDay();
    const ok =
      wd !== 0 && wd !== 6 && d > today && d <= end && !Api.isDayFull(d);
    const sel = selectedDay === iso(d);

    days.push({
      label: String(n),
      vis: "visible",
      disabled: !ok,
      sel: sel ? "true" : "false",
      aria: longDate(d) + (ok ? "" : ", unavailable"),
      border: sel ? "#0B4881" : ok ? "#C9D5E2" : "transparent",
      bg: sel ? "#0B4881" : ok ? "#fff" : "transparent",
      color: sel ? "#fff" : ok ? "#0E1B2C" : "#A3AFBC",
      cursor: ok ? "pointer" : "default",
      onClick: () => onSelectDay(iso(d)),
    });
  }

  return { base, days };
}

/**
 * @typedef {{
 *   t: string,
 *   disabled: boolean,
 *   sel: string,
 *   deco: string,
 *   border: string,
 *   bg: string,
 *   color: string,
 *   cursor: string,
 *   onClick: () => void
 * }} SlotCell
 */

/**
 * Map a list of time strings into slot button models.
 * @param {string[]} list
 * @param {Date | null} day
 * @param {string | null} selectedSlot
 * @param {number} indexOffset
 * @param {(slot: string) => void} onSelectSlot
 * @returns {SlotCell[]}
 */
export function buildTimeSlots(
  list,
  day,
  selectedSlot,
  indexOffset,
  onSelectSlot,
) {
  if (!day) return [];
  return list.map((t, i) => {
    const taken = Api.isSlotTaken(day, i + indexOffset);
    const sel = selectedSlot === t;
    return {
      t,
      disabled: taken,
      sel: sel ? "true" : "false",
      deco: taken ? "line-through" : "none",
      border: sel ? "#0B4881" : taken ? "#E6ECF2" : "#C9D5E2",
      bg: sel ? "#0B4881" : "#fff",
      color: sel ? "#fff" : taken ? "#A3AFBC" : "#0E1B2C",
      cursor: taken ? "default" : "pointer",
      onClick: () => onSelectSlot(t),
    };
  });
}
