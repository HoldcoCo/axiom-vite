/**
 * Landing-page app state, navigation, form/calendar actions, and view-model.
 */
import { useEffect, useRef, useState } from "react";
import { qualify, submitLead } from "../services/api.js";
import { getBookingBounds } from "../utils/dates.js";
import { getFormErrors } from "../utils/validation.js";
import {
  buildViewModel,
  confirmBookingTransition,
  getBookingRedirectUrl,
} from "../utils/viewModel.js";
import { useReveal } from "./useReveal.js";
import { useVslPlayer } from "./useVslPlayer.js";

/**
 * Create the initial state from optional preview props.
 * @param {{ previewState?: string }} props
 */
function createInitialState(props) {
  return {
    view: props.previewState ?? "landing",
    result: props.previewState === "thanks" ? "booked" : null,
    transcript: false,
    faq: -1,
    a: { q1: "", q2: "", q3: "" },
    f: { name: "", firm: "", email: "", phone: "" },
    checklistOnly: false,
    tried: false,
    submitting: false,
    submitError: null,
    monthOff: 0,
    day: null,
    slot: null,
  };
}

/**
 * Human-readable message for submit failures.
 * @param {string} error
 * @returns {string}
 */
function submitErrorMessage(error) {
  if (error === "rate_limit") {
    return "Too many attempts. Please wait a minute and try again.";
  }
  if (error === "config") {
    return "Booking is temporarily unavailable. Please try again shortly.";
  }
  if (error === "validation") {
    return "Please check your details and try again.";
  }
  if (error === "network") {
    return "Network error. Check your connection and try again.";
  }
  return "Something went wrong submitting your request. Please try again.";
}

/**
 * @param {{ previewState?: string, showQuote?: boolean }} props
 * @returns {Record<string, unknown>} View-model for presentational components.
 */
export function useAppController(props) {
  const [state, setState] = useState(() => createInitialState(props));
  const { setupReveal, scrollTo } = useReveal();
  const { vt, vPlaying, vStarted } = useVslPlayer();

  const lastViewRef = useRef(state.view);
  const toFormRef = useRef(false);
  const previewRef = useRef(props.previewState);
  const revealApi = useRef({ setupReveal, scrollTo });
  revealApi.current = { setupReveal, scrollTo };
  const submittingRef = useRef(false);

  // Sync external previewState prop (design / Storybook previews).
  useEffect(() => {
    if (props.previewState && props.previewState !== previewRef.current) {
      previewRef.current = props.previewState;
      setState((st) => ({
        ...st,
        view: props.previewState,
        result:
          props.previewState === "thanks"
            ? st.result || "booked"
            : st.result,
      }));
    }
  }, [props.previewState]);

  // On view change: scroll top, re-bind reveals, optional jump to #book.
  useEffect(() => {
    const prev = lastViewRef.current;
    lastViewRef.current = state.view;
    if (prev === state.view) return;

    if (state.view !== "landing" || !toFormRef.current) {
      window.scrollTo({ top: 0 });
    }
    if (state.view === "landing") {
      requestAnimationFrame(() => {
        revealApi.current.setupReveal();
        if (toFormRef.current) {
          toFormRef.current = false;
          revealApi.current.scrollTo("book");
        }
      });
    }
  }, [state.view]);

  const merged = { ...state, vt, vPlaying, vStarted };
  const { maxOff } = getBookingBounds();

  const actions = {
    scrollToForm: (ev) => {
      ev.preventDefault();
      if (state.view !== "landing") {
        toFormRef.current = true;
        setState((st) => ({ ...st, view: "landing" }));
      } else {
        scrollTo("book");
      }
    },
    goHome: (ev) => {
      ev.preventDefault();
      if (state.view !== "landing") {
        setState((st) => ({ ...st, view: "landing" }));
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    toggleTranscript: () =>
      setState((st) => ({ ...st, transcript: !st.transcript })),
    pickAnswer: (question, letter) =>
      setState((st) => ({
        ...st,
        a: { ...st.a, [question]: letter },
      })),
    onField: (ev) => {
      const { name, value } = ev.target;
      setState((st) => ({ ...st, f: { ...st.f, [name]: value } }));
    },
    toggleChecklist: (ev) =>
      setState((st) => ({ ...st, checklistOnly: ev.target.checked })),
    submit: async (ev) => {
      ev.preventDefault();
      if (submittingRef.current) return;

      const { a, f, checklistOnly } = state;
      if (Object.keys(getFormErrors(a, f, checklistOnly)).length > 0) {
        setState((st) => ({ ...st, tried: true, submitError: null }));
        return;
      }

      const qualified = qualify(a, checklistOnly);
      submittingRef.current = true;
      setState((st) => ({
        ...st,
        submitting: true,
        submitError: null,
        tried: true,
      }));

      const result = await submitLead({
        answers: a,
        contact: f,
        checklistOnly,
        qualified,
      });

      submittingRef.current = false;

      if (!result.ok) {
        setState((st) => ({
          ...st,
          submitting: false,
          submitError: submitErrorMessage(result.error),
        }));
        return;
      }

      // Qualified → external calendar (replaces in-app calendar view).
      if (qualified) {
        const bookingUrl = getBookingRedirectUrl();
        if (bookingUrl.length > 0) {
          window.location.assign(bookingUrl);
          return;
        }
        setState((st) => ({
          ...st,
          submitting: false,
          submitError:
            "Booking link is not configured. Please contact us directly.",
        }));
        return;
      }

      setState((st) => ({
        ...st,
        submitting: false,
        submitError: null,
        view: "thanks",
        result: "unqualified",
      }));
    },
    prevMonth: () =>
      setState((st) => ({
        ...st,
        monthOff: Math.max(0, st.monthOff - 1),
      })),
    nextMonth: () =>
      setState((st) => ({
        ...st,
        monthOff: Math.min(maxOff, st.monthOff + 1),
      })),
    selectDay: (isoDate) =>
      setState((st) => ({ ...st, day: isoDate, slot: null })),
    selectSlot: (slot) => setState((st) => ({ ...st, slot })),
    confirmBooking: (when) => {
      const patch = confirmBookingTransition(merged, when);
      if (patch) setState((st) => ({ ...st, ...patch }));
    },
    skipBooking: () => setState((st) => ({ ...st, view: "nobooking" })),
    backToCalendar: () => setState((st) => ({ ...st, view: "calendar" })),
    toggleFaq: (index) =>
      setState((st) => ({
        ...st,
        faq: st.faq === index ? -1 : index,
      })),
  };

  return buildViewModel(merged, props, actions);
}
