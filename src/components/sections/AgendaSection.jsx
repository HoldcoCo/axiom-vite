/**
 * AgendaSection presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function AgendaSection({ v }) {
  return (
    <section
      aria-labelledby="agenda-h"
      style={{ background: "#fff" }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px clamp(48px,7vw,112px)",
        }}
      >
        <div
          data-reveal
          style={{ flex: "1 1 300px", maxWidth: "440px" }}
        >
          <div
            style={{
              position: "sticky",
              top: "108px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h2
              id="agenda-h"
              style={{
                margin: "0",
                font: "600 clamp(34px,4vw,52px)/1.05 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              The 15-minute agenda
            </h2>
            <p
              style={{
                margin: "0",
                font: "400 18px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              You should know exactly what a call is before you agree
              to it. This is all of it.
            </p>
          </div>
        </div>
        <ol
          style={{
            flex: "2 1 520px",
            listStyle: "none",
            margin: "0",
            padding: "0",
            borderTop: "1px solid #0E1B2C",
          }}
        >
          <li
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "64px minmax(0,1fr)",
              gap: "8px 20px",
              padding: "32px 0",
              borderBottom: "1px solid #DCE3EB",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                font: "500 14px/1.9 'IBM Plex Mono',monospace",
                color: "#0B4881",
              }}
            >
              01
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  font: "600 21px/1.35 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                What's different about this year-end:
              </h3>
              <p
                style={{
                  margin: "0",
                  maxWidth: "62ch",
                  font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#3D4B5C",
                  textWrap: "pretty",
                }}
              >
                {
                  "The three dates above, against your client base rather than in general. Which of them actually touch your files, and which don't. "
                }
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "2px",
                    padding: "3px 10px",
                    border: "1px solid #BFD0E2",
                    borderRadius: "2px",
                    background: "#EEF4FA",
                    font: "500 13px/1.4 'IBM Plex Mono',monospace",
                    color: "#0B4881",
                    whiteSpace: "nowrap",
                  }}
                >
                  Five minutes.
                </span>
              </p>
            </div>
          </li>
          <li
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "64px minmax(0,1fr)",
              gap: "8px 20px",
              padding: "32px 0",
              borderBottom: "1px solid #DCE3EB",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                font: "500 14px/1.9 'IBM Plex Mono',monospace",
                color: "#0B4881",
              }}
            >
              02
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  font: "600 21px/1.35 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                Where your hours actually go:
              </h3>
              <p
                style={{
                  margin: "0",
                  maxWidth: "62ch",
                  font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#3D4B5C",
                  textWrap: "pretty",
                }}
              >
                {
                  "This is the part we're really after. We're building audit software in Beirut and we'd rather hear this from the people who do the work than assume it. "
                }
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "2px",
                    padding: "3px 10px",
                    border: "1px solid #BFD0E2",
                    borderRadius: "2px",
                    background: "#EEF4FA",
                    font: "500 13px/1.4 'IBM Plex Mono',monospace",
                    color: "#0B4881",
                    whiteSpace: "nowrap",
                  }}
                >
                  Five minutes.
                </span>
              </p>
            </div>
          </li>
          <li
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "64px minmax(0,1fr)",
              gap: "8px 20px",
              padding: "32px 0",
              borderBottom: "1px solid #DCE3EB",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                font: "500 14px/1.9 'IBM Plex Mono',monospace",
                color: "#0B4881",
              }}
            >
              03
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  font: "600 21px/1.35 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                What we're building - only if you ask
              </h3>
              <p
                style={{
                  margin: "0",
                  maxWidth: "62ch",
                  font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#3D4B5C",
                  textWrap: "pretty",
                }}
              >
                {
                  "If you'd rather spend the whole fifteen minutes on the first two, we will, and nothing gets sent afterwards. "
                }
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "2px",
                    padding: "3px 10px",
                    border: "1px solid #BFD0E2",
                    borderRadius: "2px",
                    background: "#EEF4FA",
                    font: "500 13px/1.4 'IBM Plex Mono',monospace",
                    color: "#0B4881",
                    whiteSpace: "nowrap",
                  }}
                >
                  Five minutes.
                </span>
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
