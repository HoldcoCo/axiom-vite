/**
 * Assemble the page view-model (`v`) consumed by layout, sections, and views.
 */
import { Api } from "../services/api.js";
import { AM, PM } from "../data/slots.js";
import { fromIso, longDate, getBookingBounds } from "./dates.js";
import { getFormErrors } from "./validation.js";
import { buildCalendarDays, buildTimeSlots } from "./calendarUi.js";
import {
  buildQuestionUi,
  buildFieldBorders,
  buildFaqUi,
} from "./formUi.js";
import {
  createVslCaption,
  createVslBackground,
} from "../components/vsl/index.js";

/**
 * @typedef {object} AppState
 * @property {string} view
 * @property {string | null} result
 * @property {boolean} transcript
 * @property {number} faq
 * @property {{ q1: string, q2: string, q3: string }} a
 * @property {{ name: string, firm: string, email: string, phone: string }} f
 * @property {boolean} checklistOnly
 * @property {boolean} tried
 * @property {boolean} [submitting]
 * @property {string | null} [submitError]
 * @property {number} monthOff
 * @property {string | null} day
 * @property {string | null} slot
 * @property {boolean} [vPlaying]
 * @property {boolean} [vStarted]
 * @property {number} [vt]
 * @property {string} [bookedLabel]
 */

/**
 * @typedef {object} ViewActions
 * @property {(ev: Event) => void} scrollToForm
 * @property {(ev: Event) => void} goHome
 * @property {() => void} toggleTranscript
 * @property {(question: string, letter: string) => void} pickAnswer
 * @property {(ev: Event) => void} onField
 * @property {(ev: Event) => void} toggleChecklist
 * @property {(ev: Event) => void} submit
 * @property {() => void} prevMonth
 * @property {() => void} nextMonth
 * @property {(isoDate: string) => void} selectDay
 * @property {(slot: string) => void} selectSlot
 * @property {(when: string) => void} confirmBooking
 * @property {() => void} skipBooking
 * @property {() => void} backToCalendar
 * @property {(index: number) => void} toggleFaq
 */

/**
 * Build the derived UI object passed to presentational components.
 * @param {AppState} state
 * @param {{ showQuote?: boolean }} props
 * @param {ViewActions} actions
 * @returns {Record<string, unknown>}
 */
export function buildViewModel(state, props, actions) {
  const s = state;
  const e = s.tried ? getFormErrors(s.a, s.f, s.checklistOnly) : {};
  const { ui, pick } = buildQuestionUi(s.a, e, actions.pickAnswer);
  const { ib, inv } = buildFieldBorders(e);
  const faq = buildFaqUi(s.faq, actions.toggleFaq);

  const { today, end, maxOff } = getBookingBounds();
  const { base, days } = buildCalendarDays({
    today,
    end,
    monthOff: s.monthOff,
    selectedDay: s.day,
    onSelectDay: actions.selectDay,
  });

  const dd = s.day ? fromIso(s.day) : null;
  const when = dd && s.slot ? `${longDate(dd)} · ${s.slot} Beirut time` : "";

  return {
    isLanding: s.view === "landing",
    notLanding: s.view !== "landing",
    isCalendar: s.view === "calendar",
    isResult: s.view === "thanks" || s.view === "nobooking",
    isBooked: s.view === "thanks" && s.result === "booked",
    isUnqualified: s.view === "thanks" && s.result !== "booked",
    isNoBooking: s.view === "nobooking",
    notBooked: !(s.view === "thanks" && s.result === "booked"),
    scrollToForm: actions.scrollToForm,
    goHome: actions.goHome,
    toggleTranscript: actions.toggleTranscript,
    transcriptRows: s.transcript ? "1fr" : "0fr",
    transcriptRotate: s.transcript ? "45deg" : "0deg",
    transcriptExpanded: s.transcript ? "true" : "false",
    vCaption: createVslCaption(s.vt || 0, true),
    vBg: createVslBackground(s.vt || 0, true),
    showQuote: !!props.showQuote,
    showFallback: !props.showQuote,
    ui,
    pick,
    ib,
    inv,
    f: s.f,
    faq,
    onField: actions.onField,
    checklistOnly: s.checklistOnly,
    toggleChecklist: actions.toggleChecklist,
    showErr: Object.keys(e).length > 0,
    submitting: !!s.submitting,
    submitError: s.submitError ?? null,
    submit: actions.submit,
    monthLabel: base.toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    }),
    prevDisabled: s.monthOff <= 0,
    nextDisabled: s.monthOff >= maxOff,
    prevOpacity: s.monthOff <= 0 ? 0.35 : 1,
    nextOpacity: s.monthOff >= maxOff ? 0.35 : 1,
    prevMonth: actions.prevMonth,
    nextMonth: actions.nextMonth,
    days,
    noDay: !dd,
    hasDay: !!dd,
    dayLabel: dd ? longDate(dd) : "",
    amSlots: buildTimeSlots(AM, dd, s.slot, 0, actions.selectSlot),
    pmSlots: buildTimeSlots(PM, dd, s.slot, AM.length, actions.selectSlot),
    selectionLabel: when || "No time selected",
    noSlot: !when,
    confirmBg: when ? "#0B4881" : "#9FB3C8",
    confirmCursor: when ? "pointer" : "not-allowed",
    confirmBooking: () => actions.confirmBooking(when),
    skipBooking: actions.skipBooking,
    backToCalendar: actions.backToCalendar,
    bookedLabel: s.bookedLabel || when || "—",
  };
}

/**
 * Confirm a booking slot and return the thanks-view state patch.
 * @param {AppState} state
 * @param {string} when
 * @returns {Partial<AppState> | null}
 */
export function confirmBookingTransition(state, when) {
  if (!when) return null;
  Api.confirmBooking({ contact: state.f, date: state.day, time: state.slot });
  return { view: "thanks", result: "booked", bookedLabel: when };
}

/**
 * Public booking calendar URL (Cal.com / external scheduler).
 * @returns {string}
 */
export function getBookingRedirectUrl() {
  const url = import.meta.env.VITE_BOOKING_URL;
  return typeof url === "string" && url.trim().length > 0
    ? url.trim()
    : "";
}
