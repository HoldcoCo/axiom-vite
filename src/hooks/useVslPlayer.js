/**
 * VSL pseudo-player: always autoplays and loops; no user controls.
 */
import { useEffect, useRef, useState } from "react";
import { VSL_DUR } from "../data/vsl.js";

/**
 * @returns {{ vt: number, vPlaying: boolean, vStarted: boolean }}
 */
export function useVslPlayer() {
  const [vt, setVt] = useState(0);
  const timerRef = useRef(
    /** @type {ReturnType<typeof setInterval> | null} */ (null),
  );

  useEffect(() => {
    let last = performance.now();
    timerRef.current = setInterval(() => {
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      setVt((prev) => {
        const next = (prev || 0) + dt;
        return next >= VSL_DUR ? next - VSL_DUR : next;
      });
    }, 100);

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return { vt, vPlaying: true, vStarted: true };
}
