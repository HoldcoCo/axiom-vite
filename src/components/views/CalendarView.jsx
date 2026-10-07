/**
 * CalendarView presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function CalendarView({ v }) {
  return (
    <main
      style={{ background: "#F3F6F9", minHeight: "calc(100vh - 68px)" }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(40px,6vw,80px) clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px clamp(40px,5vw,72px)",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1 1 280px",
            maxWidth: "380px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <p
            style={{
              margin: "0",
              font: "500 12px/1 'IBM Plex Mono',monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0B4881",
            }}
          >
            Step 1 of 2 · Pick a time
          </p>
          <h1
            style={{
              margin: "0",
              font: "600 clamp(34px,3.8vw,48px)/1.06 'Plus Jakarta Sans',sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            Pick your time
          </h1>
          <p
            style={{
              margin: "0",
              font: "400 17px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
              color: "#3D4B5C",
            }}
          >
            Weekday mornings and afternoons, and the calendar runs into
            January.
          </p>
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
                Promise
              </dt>
              <dd
                style={{
                  margin: "0",
                  font: "500 15.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                No demo unless you ask
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
                Time zone
              </dt>
              <dd
                style={{
                  margin: "0",
                  font: "500 15.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Beirut
              </dd>
            </div>
          </dl>
        </div>
        <div
          style={{
            flex: "2 1 560px",
            background: "#fff",
            border: "1px solid #DCE3EB",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                flex: "1 1 320px",
                padding: "28px",
                borderRight: "1px solid #E6ECF2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <h2
                  aria-live="polite"
                  style={{
                    margin: "0",
                    font: "600 18px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                  }}
                >
                  {v.monthLabel}
                </h2>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    type="button"
                    aria-label="Previous month"
                    disabled={v.prevDisabled}
                    onClick={v.prevMonth}
                    style={{
                      width: "38px",
                      height: "38px",
                      border: "1px solid #CBD5E0",
                      borderRadius: "3px",
                      background: "#fff",
                      cursor: "pointer",
                      display: "grid",
                      placeItems: "center",
                      color: "#0B4881",
                      opacity: v.prevOpacity,
                    }}
                    className="x25"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 2L4 7l5 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    disabled={v.nextDisabled}
                    onClick={v.nextMonth}
                    style={{
                      width: "38px",
                      height: "38px",
                      border: "1px solid #CBD5E0",
                      borderRadius: "3px",
                      background: "#fff",
                      cursor: "pointer",
                      display: "grid",
                      placeItems: "center",
                      color: "#0B4881",
                      opacity: v.nextOpacity,
                    }}
                    className="x26"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                aria-hidden="true"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7,1fr)",
                  gap: "4px",
                  marginBottom: "6px",
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.06em",
                  color: "#5A6878",
                  textAlign: "center",
                }}
              >
                <span style={{ padding: "6px 0" }}>MON</span>
                <span style={{ padding: "6px 0" }}>TUE</span>
                <span style={{ padding: "6px 0" }}>WED</span>
                <span style={{ padding: "6px 0" }}>THU</span>
                <span style={{ padding: "6px 0" }}>FRI</span>
                <span style={{ padding: "6px 0" }}>SAT</span>
                <span style={{ padding: "6px 0" }}>SUN</span>
              </div>
              <div
                role="grid"
                aria-label="Available dates"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7,1fr)",
                  gap: "4px",
                }}
              >
                {v.days.map((d, $index) => (
                  <React.Fragment key={$index}>
                    <button
                      type="button"
                      disabled={d.disabled}
                      aria-label={d.aria}
                      aria-pressed={d.sel}
                      onClick={d.onClick}
                      style={{
                        aspectRatio: "1",
                        minHeight: "40px",
                        border: `1px solid ${d.border}`,
                        borderRadius: "3px",
                        background: d.bg,
                        color: d.color,
                        font: "500 15px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                        cursor: d.cursor,
                        visibility: d.vis,
                        transition: "background .15s,border-color .15s",
                      }}
                    >
                      {d.label}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div
              style={{
                flex: "1 1 220px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {v.noDay && (
                <>
                  <p
                    style={{
                      margin: "0",
                      font: "400 15.5px/1.55 'Plus Jakarta Sans',system-ui,sans-serif",
                      color: "#5A6878",
                    }}
                  >
                    Choose a date to see open times.
                  </p>
                </>
              )}
              {v.hasDay && (
                <>
                  <p
                    style={{
                      margin: "0",
                      font: "600 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                    }}
                  >
                    {v.dayLabel}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        font: "500 11.5px/1 'IBM Plex Mono',monospace",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#5A6878",
                      }}
                    >
                      Morning
                    </span>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill,minmax(86px,1fr))",
                        gap: "8px",
                      }}
                    >
                      {v.amSlots.map((s, $index) => (
                        <React.Fragment key={$index}>
                          <button
                            type="button"
                            disabled={s.disabled}
                            aria-pressed={s.sel}
                            onClick={s.onClick}
                            style={{
                              height: "42px",
                              border: `1px solid ${s.border}`,
                              borderRadius: "3px",
                              background: s.bg,
                              color: s.color,
                              font: "500 14.5px/1 'IBM Plex Mono',monospace",
                              cursor: s.cursor,
                              textDecoration: s.deco,
                              transition:
                                "background .15s,border-color .15s",
                            }}
                          >
                            {s.t}
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                    <span
                      style={{
                        marginTop: "8px",
                        font: "500 11.5px/1 'IBM Plex Mono',monospace",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#5A6878",
                      }}
                    >
                      Afternoon
                    </span>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill,minmax(86px,1fr))",
                        gap: "8px",
                      }}
                    >
                      {v.pmSlots.map((s, $index) => (
                        <React.Fragment key={$index}>
                          <button
                            type="button"
                            disabled={s.disabled}
                            aria-pressed={s.sel}
                            onClick={s.onClick}
                            style={{
                              height: "42px",
                              border: `1px solid ${s.border}`,
                              borderRadius: "3px",
                              background: s.bg,
                              color: s.color,
                              font: "500 14.5px/1 'IBM Plex Mono',monospace",
                              cursor: s.cursor,
                              textDecoration: s.deco,
                              transition:
                                "background .15s,border-color .15s",
                            }}
                          >
                            {s.t}
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "20px 28px",
              borderTop: "1px solid #E6ECF2",
              background: "#FAFBFC",
            }}
          >
            <p
              aria-live="polite"
              style={{
                margin: "0",
                font: "500 15px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#0E1B2C",
              }}
            >
              {v.selectionLabel}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <button
                type="button"
                onClick={v.confirmBooking}
                disabled={v.noSlot}
                style={{
                  height: "50px",
                  padding: "0 26px",
                  border: "0",
                  borderRadius: "3px",
                  background: v.confirmBg,
                  color: "#fff",
                  font: "600 15.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                  cursor: v.confirmCursor,
                  transition: "background .2s",
                }}
              >
                Confirm booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
