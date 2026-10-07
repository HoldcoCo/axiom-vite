/**
 * ResultView presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function ResultView({ v }) {
  return (
    <main
      style={{
        background: "#F3F6F9",
        minHeight: "calc(100vh - 68px)",
        display: "grid",
        placeItems: "center",
        padding: "clamp(40px,6vw,80px) clamp(20px,4vw,40px)",
      }}
    >
      <div
        role="status"
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "#fff",
          border: "1px solid #DCE3EB",
          borderRadius: "4px",
          padding: "clamp(32px,5vw,56px)",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {v.isBooked && (
          <>
            <span
              aria-hidden="true"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#0B4881",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10.5l4 4 8-9"
                  stroke="#fff"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
            <h1
              style={{
                margin: "0",
                font: "600 clamp(32px,3.6vw,44px)/1.08 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              Booking confirmed
            </h1>
            <dl style={{ margin: "0", borderTop: "1px solid #DCE3EB" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid #DCE3EB",
                }}
              >
                <dt
                  style={{
                    font: "500 12px/1.6 'IBM Plex Mono',monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#5A6878",
                  }}
                >
                  When
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "500 15.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                    textAlign: "right",
                  }}
                >
                  {v.bookedLabel}
                </dd>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid #DCE3EB",
                }}
              >
                <dt
                  style={{
                    font: "500 12px/1.6 'IBM Plex Mono',monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#5A6878",
                  }}
                >
                  Duration
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "500 15.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                  }}
                >
                  15 minutes
                </dd>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid #DCE3EB",
                }}
              >
                <dt
                  style={{
                    font: "500 12px/1.6 'IBM Plex Mono',monospace",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#5A6878",
                  }}
                >
                  Format
                </dt>
                <dd
                  style={{
                    margin: "0",
                    font: "500 15.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                  }}
                >
                  Virtual Meeting
                </dd>
              </div>
            </dl>
            <p
              style={{
                margin: "0",
                font: "400 17px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
              }}
            >
              You get a confirmation and a calendar invite straight
              away, plus a WhatsApp reminder the day before.
            </p>
          </>
        )}
        {v.isUnqualified && (
          <>
            <span
              aria-hidden="true"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#0B4881",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10.5l4 4 8-9"
                  stroke="#fff"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
            <h1
              style={{
                margin: "0",
                font: "600 clamp(32px,3.6vw,44px)/1.08 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              We'll get back to you
            </h1>
            <p
              style={{
                margin: "0",
                font: "400 17px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
              }}
            >
              The FY2026 Year-End Audit-Readiness Checklist is on its
              way to your inbox.
            </p>
          </>
        )}
        {v.isNoBooking && (
          <>
            <p
              style={{
                margin: "0",
                font: "500 12px/1 'IBM Plex Mono',monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#5A6878",
              }}
            >
              No booking
            </p>
            <h1
              style={{
                margin: "0",
                font: "600 clamp(32px,3.6vw,44px)/1.08 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              You haven't picked a time yet
            </h1>
            <p
              style={{
                margin: "0",
                font: "400 17px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
              }}
            >
              Your answers are saved. The calendar runs into January, so
              come back whenever suits.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <button
                type="button"
                onClick={v.backToCalendar}
                style={{
                  height: "52px",
                  padding: "0 26px",
                  border: "0",
                  borderRadius: "3px",
                  background: "#0B4881",
                  color: "#fff",
                  font: "600 15.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                  cursor: "pointer",
                }}
                className="x27"
              >
                Pick a time
              </button>
            </div>
          </>
        )}
        <div
          style={{ paddingTop: "20px", borderTop: "1px solid #E6ECF2" }}
        >
          {v.isBooked && (
            <>
              <a
                href="https://axiomerp.co"
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  height: "52px",
                  padding: "0 26px",
                  background: "#0B4881",
                  color: "#fff",
                  font: "600 15.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                  borderRadius: "3px",
                  textDecoration: "none",
                  transition: "background .2s",
                }}
                className="x28"
              >
                Go to the Axiom ERP website
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
            </>
          )}
          {v.notBooked && (
            <>
              <a
                href="#top"
                onClick={v.goHome}
                style={{
                  font: "500 15px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Back to the page
              </a>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
