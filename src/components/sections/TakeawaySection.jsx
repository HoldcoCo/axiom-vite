/**
 * TakeawaySection presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function TakeawaySection({ v }) {
  return (
    <section
      aria-labelledby="take-h"
      style={{ background: "#0B4881", color: "#fff" }}
    >
      <div
        data-reveal
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(56px,7vw,88px) clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "32px clamp(40px,5vw,72px)",
        }}
      >
        <h2
          id="take-h"
          style={{
            flex: "1 1 280px",
            margin: "0",
            font: "600 clamp(30px,3.3vw,42px)/1.1 'Plus Jakarta Sans',sans-serif",
            letterSpacing: "-0.015em",
            textWrap: "balance",
          }}
        >
          You leave with the checklist either way
        </h2>
        <p
          style={{
            flex: "2 1 420px",
            margin: "0",
            font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
            color: "#E4EDF7",
            textWrap: "pretty",
          }}
        >
          The FY2026 Year-End Audit-Readiness Checklist: eleven
          sections written for Lebanese files, with the items that
          most often turn into a scope limitation marked. We send it
          after the call, noted against whatever you raised. If we
          never speak again, it's still yours.
        </p>
        <div style={{ flex: "0 0 auto" }}>
          <a
            href="#book"
            onClick={v.scrollToForm}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              height: "56px",
              padding: "0 28px",
              background: "#fff",
              color: "#0B4881",
              font: "600 16.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
              borderRadius: "3px",
              textDecoration: "none",
              transition: "background .2s",
            }}
            className="x4"
          >
            Book 15 min call
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
