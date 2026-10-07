/**
 * Manages scroll-reveal IntersectionObserver lifecycle.
 */
import { useEffect, useRef } from "react";
import { setupRevealObserver, scrollToSection } from "../utils/reveal.js";

/**
 * @returns {{
 *   setupReveal: () => void,
 *   scrollTo: (id: string) => void
 * }}
 */
export function useReveal() {
  const ioRef = useRef(/** @type {IntersectionObserver | null} */ (null));

  /** Tear down the current observer, if any. */
  function disconnect() {
    ioRef.current?.disconnect();
    ioRef.current = null;
  }

  /** (Re)bind reveal animations on the current document. */
  function setupReveal() {
    disconnect();
    ioRef.current = setupRevealObserver();
  }

  useEffect(() => {
    setupReveal();
    return disconnect;
    // Mount-only: bind once; callers re-invoke setupReveal after view changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    setupReveal,
    scrollTo: scrollToSection,
  };
}
