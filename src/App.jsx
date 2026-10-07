/**
 * AXIOM landing page root: wires the app controller into layout + views.
 */
import React from "react";
import { useAppController } from "./hooks/useAppController.js";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import {
  LandingView,
  CalendarView,
  ResultView,
} from "./components/views/index.js";

/**
 * @param {{ previewState?: string, showQuote?: boolean }} props
 */
export default function App(props) {
  const v = useAppController(props);

  return (
    <>
      <Header v={v} />
      {v.isLanding && <LandingView v={v} />}
      {v.isCalendar && <CalendarView v={v} />}
      {v.isResult && <ResultView v={v} />}
      <Footer />
    </>
  );
}
