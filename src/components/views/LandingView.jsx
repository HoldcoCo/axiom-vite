/**
 * Composes all landing-page sections inside the main landmark.
 */
import React from "react";
import {
  HeroSection,
  WhyNowSection,
  AgendaSection,
  TakeawaySection,
  ExpertSection,
  BookingSection,
  HowItWorksSection,
  FaqSection,
  BehindSection,
} from "../sections/index.js";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function LandingView({ v }) {
  return (
    <main id="top">
      <HeroSection v={v} />
      <WhyNowSection v={v} />
      <AgendaSection v={v} />
      <TakeawaySection v={v} />
      <ExpertSection v={v} />
      <BookingSection v={v} />
      <HowItWorksSection v={v} />
      <FaqSection v={v} />
      <BehindSection v={v} />
    </main>
  );
}
