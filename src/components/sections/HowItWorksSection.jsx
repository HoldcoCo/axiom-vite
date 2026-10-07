/**
 * HowItWorksSection presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function HowItWorksSection({ v }) {
  return (
    <section aria-labelledby="how-h" style={{ background: "#fff" }}>
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)",
        }}
      >
        <h2
          id="how-h"
          data-reveal
          style={{
            margin: "0 0 clamp(40px,5vw,64px)",
            font: "600 clamp(34px,4vw,52px)/1.05 'Plus Jakarta Sans',sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          How it works
        </h2>
        <ol
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: "40px clamp(32px,4vw,56px)",
          }}
        >
          <li
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "24px",
              borderTop: "1px solid #0E1B2C",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                font: "400 clamp(64px,6vw,88px)/0.9 'Plus Jakarta Sans',sans-serif",
                color: "#0B4881",
              }}
            >
              1
              <span
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#0B4881",
                }}
              ></span>
            </span>
            <p
              style={{
                margin: "0",
                font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                }}
              >
                {"Step 1. "}
              </span>
              Answer the three questions and pick a time. Weekday
              mornings and afternoons, and the calendar runs into
              January.
            </p>
          </li>
          <li
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "24px",
              borderTop: "1px solid #0E1B2C",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                font: "400 clamp(64px,6vw,88px)/0.9 'Plus Jakarta Sans',sans-serif",
                color: "#0B4881",
              }}
            >
              2
              <span
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#0B4881",
                }}
              ></span>
            </span>
            <p
              style={{
                margin: "0",
                font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                }}
              >
                {"Step 2. "}
              </span>
              You get a confirmation and a calendar invite straight
              away, plus a WhatsApp reminder the day before.
            </p>
          </li>
          <li
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingTop: "24px",
              borderTop: "1px solid #0E1B2C",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                font: "400 clamp(64px,6vw,88px)/0.9 'Plus Jakarta Sans',sans-serif",
                color: "#0B4881",
              }}
            >
              3
              <span
                style={{
                  width: "28px",
                  height: "2px",
                  background: "#0B4881",
                }}
              ></span>
            </span>
            <p
              style={{
                margin: "0",
                font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                  clip: "rect(0 0 0 0)",
                }}
              >
                {"Step 3. "}
              </span>
              We call you. Fifteen minutes, the agenda above, and the
              checklist in your inbox. Nothing after that unless you
              ask for it.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
