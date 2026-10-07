/**
 * Animated grid/glow background for the VSL player.
 */
import React from "react";

/**
 * @param {number} vt Current VSL time in seconds
 * @param {boolean} vPlaying Whether the VSL is playing
 */
export function createVslBackground(vt, vPlaying) {
  const h = React.createElement,
    t = vt || 0,
    ps = vPlaying ? "running" : "paused";
  const x = 30 + Math.sin(t / 4) * 25,
    y = 40 + Math.cos(t / 5) * 20;
  return h(
    "div",
    {
      "aria-hidden": true,
      style: {
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      },
    },
    h("div", {
      style: {
        position: "absolute",
        inset: "-44px",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
        animation: "vslGrid 6s linear infinite",
        animationPlayState: ps,
      },
    }),
    h("div", {
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%",
        width: "60%",
        aspectRatio: "1",
        transform: "translate(-50%,-50%)",
        borderRadius: "50%",
        background:
          "radial-gradient(closest-side, rgba(11,72,129,0.55), rgba(11,72,129,0))",
        transition: "left .2s linear, top .2s linear",
      },
    }),
  );
}
