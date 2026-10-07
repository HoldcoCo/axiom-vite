/**
 * Animated VSL scene graphics keyed by caption index.
 */
import React from "react";

/**
 * @param {number} i Scene index
 * @param {boolean} vPlaying Whether the VSL is playing
 */
export function createVslScene(i, vPlaying) {
  const h = React.createElement,
    ps = vPlaying ? "running" : "paused";
  const A = (n, d = 0.7, dl = 0, x = {}) => ({
    animation: `${n} ${(d * 0.7).toFixed(2)}s cubic-bezier(.16,.9,.2,1) ${(dl * 0.6).toFixed(2)}s both`,
    animationPlayState: ps,
    ...x,
  });
  const mono = {
    font: "500 11px/1.3 'IBM Plex Mono',monospace",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.62)",
  };
  const serif = (sz) => ({
    font: `400 ${sz}/1 'Plus Jakarta Sans',sans-serif`,
    letterSpacing: "-0.02em",
    color: "#fff",
  });
  const blue = "#6FA8DC",
    line = "rgba(255,255,255,0.22)";
  const col = (kids, g = 12) =>
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: g,
        },
      },
      ...kids,
    );
  const ring = (arcs) =>
    h(
      "svg",
      {
        width: 150,
        height: 150,
        viewBox: "0 0 150 150",
        style: { transform: "rotate(-90deg)" },
      },
      h("circle", {
        cx: 75,
        cy: 75,
        r: 56,
        fill: "none",
        stroke: "rgba(255,255,255,0.08)",
        strokeWidth: 10,
      }),
      ...arcs.map((a, k) =>
        h("circle", {
          key: k,
          cx: 75,
          cy: 75,
          r: 56,
          fill: "none",
          pathLength: 300,
          stroke: a.c,
          strokeWidth: 10,
          strokeDashoffset: -(k * 100 + 3),
          style: A("vslArc", 0.9, a.d, {
            strokeDasharray: "94 206",
            opacity: a.o ?? 1,
          }),
        }),
      ),
    );
  switch (i) {
    case 0:
      return col([
        h(
          "div",
          { style: { position: "relative", width: 150, height: 120 } },
          ...[2, 1, 0].map((k) =>
            h(
              "div",
              {
                key: k,
                style: A("vslIn", 0.6, (2 - k) * 0.18, {
                  position: "absolute",
                  left: k * 14,
                  top: k * -10,
                  width: 110,
                  height: 120,
                  border: `1px solid ${k ? line : "rgba(255,255,255,0.6)"}`,
                  background: k ? "rgba(255,255,255,0.03)" : "#12304D",
                  borderRadius: 3,
                }),
              },
              !k &&
                h(
                  "div",
                  {
                    style: {
                      padding: 14,
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                    },
                  },
                  ...[80, 60, 70].map((w, j) =>
                    h("span", {
                      key: j,
                      style: A("vslGrow", 0.5, 0.6 + j * 0.12, {
                        height: 3,
                        width: w + "%",
                        background: line,
                        transformOrigin: "left",
                      }),
                    }),
                  ),
                  h(
                    "svg",
                    {
                      width: 80,
                      height: 30,
                      viewBox: "0 0 80 30",
                      style: { marginTop: 10 },
                    },
                    h("path", {
                      d: "M4 22c8-14 12-14 12-4s6 4 10-4 6-6 8 2 8 4 12-2 10-6 30-4",
                      fill: "none",
                      stroke: blue,
                      strokeWidth: 1.8,
                      pathLength: 300,
                      strokeDasharray: 300,
                      style: A("vslDraw", 1.6, 1.1),
                    }),
                  ),
                ),
            ),
          ),
        ),
        h(
          "span",
          { style: A("vslFade", 0.6, 1.4, mono) },
          "Lebanese audit files",
        ),
      ]);
    case 1:
      return col(
        [
          h("span", { style: A("vslFade", 0.5, 0, mono) }, "Law 330 window"),
          h(
            "div",
            { style: A("vslPop", 0.7, 0.1, serif("clamp(48px,6vw,80px)")) },
            "31.12.2026",
          ),
          h(
            "div",
            {
              style: {
                position: "relative",
                width: "min(320px,70%)",
                height: 14,
                display: "flex",
                alignItems: "center",
              },
            },
            h("span", {
              style: A("vslGrow", 1.4, 0.4, {
                flex: 1,
                height: 2,
                background: blue,
                transformOrigin: "left",
              }),
            }),
            h("span", {
              style: A("vslPop", 0.4, 1.7, {
                width: 3,
                height: 14,
                background: "#fff",
              }),
            }),
          ),
        ],
        14,
      );
    case 2:
      return col([
        h("span", { style: A("vslFade", 0.5, 0, mono) }, "Run out with it"),
        h(
          "div",
          {
            style: A("vslPop", 0.6, 0.1, {
              position: "relative",
              padding: "14px 22px",
              border: `1px solid ${line}`,
              borderRadius: 3,
            }),
          },
          h("span", { style: serif("clamp(28px,3.4vw,44px)") }, "Decision 338"),
          h("span", {
            style: A("vslStrike", 0.9, 0.9, {
              position: "absolute",
              left: "-2%",
              top: "50%",
              height: 2,
              background: blue,
            }),
          }),
        ),
      ]);
    case 3:
      return h(
        "div",
        { style: { display: "flex", gap: 16, alignItems: "stretch" } },
        ...[
          ["2026", "Comparative · restated", true],
          ["2027", "IFRS 18", false],
        ].map(([y, l, hi], k) =>
          h(
            "div",
            {
              key: y,
              style: A("vslIn", 0.6, k * 0.35, {
                width: "clamp(110px,14vw,160px)",
                padding: "18px 16px",
                border: `1px solid ${hi ? blue : line}`,
                background: hi ? "rgba(111,168,220,0.1)" : "transparent",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }),
            },
            h("span", { style: serif("clamp(32px,3.6vw,46px)") }, y),
            ...[70, 90, 55].map((w, j) =>
              h("span", {
                key: j,
                style: A("vslGrow", 0.45, 0.6 + k * 0.3 + j * 0.1, {
                  height: 3,
                  width: w + "%",
                  background: hi ? blue : line,
                  transformOrigin: "left",
                }),
              }),
            ),
            h("span", { style: { ...mono, fontSize: 10 } }, l),
          ),
        ),
      );
    case 4:
      return h(
        "div",
        {
          style: {
            width: "min(420px,92%)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          },
        },
        h("span", { style: A("vslFade", 0.5, 0, mono) }, "January 2027"),
        h(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              borderTop: `1px solid ${line}`,
            },
          },
          ...[1, 2, 3, 4].map((w) =>
            h(
              "span",
              {
                key: w,
                style: {
                  ...mono,
                  fontSize: 10,
                  paddingTop: 6,
                  borderLeft: `1px solid ${line}`,
                  paddingLeft: 6,
                },
              },
              "W" + w,
            ),
          ),
        ),
        ...[
          ["FY2025 auditor reports", "#fff", 0.4],
          ["FY2026 planning", blue, 1.0],
        ].map(([l, c, d]) =>
          h(
            "div",
            {
              key: l,
              style: { display: "flex", flexDirection: "column", gap: 6 },
            },
            h(
              "span",
              {
                style: A("vslFade", 0.4, d, {
                  ...mono,
                  color: "rgba(255,255,255,0.85)",
                }),
              },
              l,
            ),
            h("span", {
              style: A("vslGrow", 1.1, d + 0.1, {
                height: 10,
                background: c,
                borderRadius: 2,
                transformOrigin: "left",
                opacity: 0.9,
              }),
            }),
          ),
        ),
      );
    case 5:
      return h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 22 } },
        h(
          "div",
          {
            style: A("vslPop", 0.7, 0, {
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: `1px dashed ${line}`,
              background: "#12304D",
              display: "grid",
              placeItems: "center",
              ...mono,
              fontSize: 10,
            }),
          },
          "Ziad",
        ),
        h(
          "div",
          {
            style: A("vslSlide", 0.7, 0.4, {
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }),
          },
          h("span", { style: serif("clamp(26px,3vw,38px)") }, "Beirut"),
          h(
            "span",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                ...mono,
              },
            },
            h("span", {
              style: A("vslPulse", 1.6, 0.9, {
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: blue,
                animationIterationCount: "infinite",
              }),
            }),
            "Audit software",
          ),
        ),
      );
    case 6:
      return h(
        "div",
        { style: { position: "relative", width: 150, height: 150 } },
        h(
          "svg",
          {
            width: 150,
            height: 150,
            viewBox: "0 0 150 150",
            style: { transform: "rotate(-90deg)" },
          },
          h("circle", {
            cx: 75,
            cy: 75,
            r: 56,
            fill: "none",
            stroke: "rgba(255,255,255,0.08)",
            strokeWidth: 2,
          }),
          h("circle", {
            cx: 75,
            cy: 75,
            r: 56,
            fill: "none",
            stroke: blue,
            strokeWidth: 2,
            pathLength: 300,
            strokeDasharray: 300,
            style: A("vslDraw", 2.2, 0.1),
          }),
        ),
        h(
          "span",
          {
            style: A("vslPop", 0.6, 0.5, {
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              ...serif("64px"),
            }),
          },
          "?",
        ),
      );
    case 7:
      return h(
        "div",
        {
          style: {
            width: "min(400px,92%)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          },
        },
        ...[
          ["Testing", 14, "rgba(255,255,255,0.3)"],
          ["Rebuilding", 88, blue],
          ["Reconciling", 74, blue],
          ["Chasing", 80, blue],
        ].map(([l, w, c], k) =>
          h(
            "div",
            {
              key: l,
              style: {
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                alignItems: "center",
                gap: 12,
              },
            },
            h(
              "span",
              {
                style: A("vslFade", 0.4, k * 0.35, {
                  ...mono,
                  color: k ? "#fff" : "rgba(255,255,255,0.5)",
                  textDecoration: k ? "none" : "line-through",
                }),
              },
              l,
            ),
            h("span", {
              style: A("vslGrow", 0.9, 0.15 + k * 0.35, {
                height: 10,
                width: w + "%",
                background: c,
                borderRadius: 2,
                transformOrigin: "left",
              }),
            }),
          ),
        ),
      );
    case 8:
    case 9: {
      const opt = i === 9;
      return h(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px,3vw,32px)",
          },
        },
        h(
          "div",
          { style: { position: "relative" } },
          ring([
            { c: "#fff", d: opt ? 0 : 0.1 },
            { c: blue, d: opt ? 0 : 0.7 },
            {
              c: opt ? "rgba(255,255,255,0.35)" : "#A9C8E6",
              d: opt ? 0 : 1.3,
            },
          ]),
          h(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              },
            },
            h("span", { style: serif("40px") }, "15"),
            h("span", { style: { ...mono, fontSize: 10 } }, "min"),
          ),
        ),
        h(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 12 } },
          ...[
            ["#fff", "This year-end"],
            [blue, "Your hours"],
            [
              opt ? "rgba(255,255,255,0.35)" : "#A9C8E6",
              opt ? "Only if you ask" : "What we're building",
            ],
          ].map(([c, l], k) =>
            h(
              "span",
              {
                key: k,
                style: A(
                  "vslSlide",
                  0.5,
                  opt ? (k === 2 ? 0.2 : 0) : 0.2 + k * 0.6,
                  {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    ...mono,
                    color: "rgba(255,255,255,0.88)",
                    opacity: opt && k < 2 ? 0.55 : 1,
                  },
                ),
              },
              h("span", {
                style: {
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: c,
                },
              }),
              l,
              h("span", { style: { color: "rgba(255,255,255,0.5)" } }, "· 5"),
            ),
          ),
        ),
      );
    }
    case 10:
      return h(
        "div",
        {
          style: A("vslIn", 0.6, 0, {
            width: "min(300px,80%)",
            background: "#fff",
            color: "#0E1B2C",
            borderRadius: 4,
            padding: "18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            boxShadow: "0 20px 40px -20px rgba(0,0,0,.5)",
          }),
        },
        h(
          "span",
          {
            style: {
              font: "500 10px/1.3 'IBM Plex Mono',monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0B4881",
            },
          },
          "FY2026 Year-End Checklist",
        ),
        ...[0, 1, 2, 3, 4].map((k) =>
          h(
            "div",
            {
              key: k,
              style: { display: "flex", alignItems: "center", gap: 10 },
            },
            h(
              "svg",
              {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                style: { flex: "none" },
              },
              h("rect", {
                x: 0.5,
                y: 0.5,
                width: 15,
                height: 15,
                rx: 2,
                fill: "none",
                stroke: "#C9D5E2",
              }),
              h("path", {
                d: "M4 8.5l3 3 5-6",
                fill: "none",
                stroke: "#0B4881",
                strokeWidth: 1.8,
                pathLength: 300,
                strokeDasharray: 300,
                style: A("vslDraw", 0.4, 0.5 + k * 0.3),
              }),
            ),
            h("span", {
              style: A("vslGrow", 0.4, 0.4 + k * 0.3, {
                height: 4,
                width: [80, 65, 75, 55, 70][k] + "%",
                background: "#DCE3EB",
                borderRadius: 2,
                transformOrigin: "left",
              }),
            }),
          ),
        ),
      );
    default:
      return null;
  }
}
