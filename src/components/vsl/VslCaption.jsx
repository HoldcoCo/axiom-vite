/**
 * VSL caption + active scene compositor.
 */
import React from "react";
import { VSL, VSL_DUR, VSL_CUES } from "../../data/vsl.js";
import { createVslScene } from "./VslScenes.jsx";

/**
 * @param {number} t Current VSL time in seconds
 * @param {boolean} vPlaying Whether the VSL is playing
 */
export function createVslCaption(t, vPlaying) {
  const h = React.createElement;
  const i = Math.max(
    0,
    VSL_CUES.findIndex(([a, b]) => t >= a && t < b),
  );
  const idx = t >= VSL_DUR ? VSL.length - 1 : i;
  const [a, b] = VSL_CUES[idx],
    p = Math.min(1, (t - a) / Math.max(0.1, b - a));
  const words = VSL[idx].split(" ");
  const shown = Math.ceil(p * words.length * 1.25);
  const cap = h(
    "p",
    {
      key: "c" + idx,
      style: {
        margin: 0,
        font: "400 clamp(15px,1.55vw,20px)/1.4 'Plus Jakarta Sans',sans-serif",
        color: "#fff",
        textWrap: "balance",
        maxWidth: "46ch",
        animation: "vslIn .5s ease both",
      },
    },
    words.map((w, k) =>
      h(
        "span",
        {
          key: k,
          style: {
            opacity: k < shown ? 1 : 0.25,
            transition: "opacity .35s ease",
          },
        },
        w + (k < words.length - 1 ? " " : ""),
      ),
    ),
  );
  const ps = vPlaying ? "running" : "paused",
    segDur = (b - a).toFixed(2);
  return h(
    "div",
    {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      },
    },
    h(
      "div",
      {
        key: "s" + idx,
        style: {
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `vslScene .55s cubic-bezier(.16,.9,.2,1) both, vslPush ${segDur}s linear both`,
          animationPlayState: `${ps}, ${ps}`,
        },
      },
      h(
        "div",
        { style: { transform: `translateX(${idx % 2 ? 1 : -1}px)` } },
        createVslScene(idx, vPlaying),
      ),
    ),
    h("span", {
      key: "w" + idx,
      "aria-hidden": true,
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 2,
        background: "#6FA8DC",
        transformOrigin: idx % 2 ? "right" : "left",
        animation: "vslWipe .6s cubic-bezier(.6,0,.2,1) both",
        animationPlayState: ps,
      },
    }),
    cap,
  );
}
