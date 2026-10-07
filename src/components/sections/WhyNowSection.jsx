/**
 * WhyNowSection presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function WhyNowSection({ v }) {
  return (
    <section
      aria-labelledby="why-h"
      style={{ background: "#F3F6F9" }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)",
        }}
      >
        <div
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(100%,380px),1fr))",
            gap: "24px 72px",
            alignItems: "end",
            marginBottom: "clamp(40px,5vw,64px)",
          }}
        >
          <h2
            id="why-h"
            style={{
              margin: "0",
              font: "600 clamp(34px,4vw,52px)/1.05 'Plus Jakarta Sans',sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            Why now
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "56ch",
              font: "400 18px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
              color: "#3D4B5C",
              textWrap: "pretty",
            }}
          >
            Most year-ends are a repeat of the last one. This one
            isn't. Three things land on the same balance sheet, and
            all three are cheaper to deal with in December than in
            April.
          </p>
        </div>
        <ol
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: "20px",
          }}
        >
          <li
            data-reveal
            style={{
              position: "relative",
              background: "#fff",
              border: "1px solid #DCE3EB",
              borderRadius: "4px",
              padding: "0 28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 -28px 28px",
                padding: "18px 28px",
                borderBottom: "1px solid #E6ECF2",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#0B4881",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "1px",
                  background: "#C9D5E2",
                }}
              ></span>
              <span
                style={{
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.12em",
                  color: "#5A6878",
                }}
              >
                01
              </span>
            </div>
            <h3
              style={{
                margin: "0 0 14px",
                font: "600 clamp(30px,2.8vw,38px)/1.05 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
                color: "#0B4881",
              }}
            >
              31 December 2026
            </h3>
            <p
              style={{
                margin: "0",
                font: "400 16px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#0E1B2C",
                }}
              >
                The last year-end inside the window.
              </strong>
              Law 330's exceptional revaluation regime and the
              Decision 338 adjustments close with this balance sheet.
              Class 4 and 5 balances restate at the year-end rate one
              final time.
            </p>
          </li>
          <li
            data-reveal
            style={{
              position: "relative",
              background: "#fff",
              border: "1px solid #DCE3EB",
              borderRadius: "4px",
              padding: "0 28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 -28px 28px",
                padding: "18px 28px",
                borderBottom: "1px solid #E6ECF2",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#0B4881",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "1px",
                  background: "#C9D5E2",
                }}
              ></span>
              <span
                style={{
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.12em",
                  color: "#5A6878",
                }}
              >
                02
              </span>
            </div>
            <h3
              style={{
                margin: "0 0 14px",
                font: "600 clamp(30px,2.8vw,38px)/1.05 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
                color: "#0B4881",
              }}
            >
              1 January 2027
            </h3>
            <p
              style={{
                margin: "0",
                font: "400 16px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#0E1B2C",
                }}
              >
                IFRS 18 applies.
              </strong>
              For entities reporting under IFRS, 2026 becomes the
              restated comparative. Mapping the chart of accounts to
              the new categories is 2026 work, not 2027 work.
            </p>
          </li>
          <li
            data-reveal
            style={{
              position: "relative",
              background: "#fff",
              border: "1px solid #DCE3EB",
              borderRadius: "4px",
              padding: "0 28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "0 -28px 28px",
                padding: "18px 28px",
                borderBottom: "1px solid #E6ECF2",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#0B4881",
                }}
              ></span>
              <span
                style={{
                  flex: "1",
                  height: "1px",
                  background: "#C9D5E2",
                }}
              ></span>
              <span
                style={{
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.12em",
                  color: "#5A6878",
                }}
              >
                03
              </span>
            </div>
            <h3
              style={{
                margin: "0 0 14px",
                font: "600 clamp(30px,2.8vw,38px)/1.05 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
                color: "#0B4881",
              }}
            >
              31 January 2027
            </h3>
            <p
              style={{
                margin: "0",
                font: "400 16px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#0E1B2C",
                }}
              >
                FY2025 auditor reports are due.
              </strong>
              Under the revised schedule after Law 46, they land in
              the same weeks as FY2026 planning. Two years of work in
              one month.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
