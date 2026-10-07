/**
 * BookingSection presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function BookingSection({ v }) {
  return (
    <section
      id="book"
      aria-labelledby="book-h"
      style={{ background: "#F3F6F9", scrollMarginTop: "68px" }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px clamp(48px,6vw,96px)",
        }}
      >
        <div
          data-reveal
          style={{ flex: "1 1 300px", maxWidth: "420px" }}
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
              id="book-h"
              style={{
                margin: "0",
                font: "600 clamp(32px,3.6vw,46px)/1.08 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
                textWrap: "balance",
              }}
            >
              Answer these questions and pick your relevant time
            </h2>
            <p
              style={{
                margin: "0",
                font: "400 18px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
                textWrap: "pretty",
              }}
            >
              So the fifteen minutes is actually useful, and so we
              don't waste yours.
            </p>
          </div>
        </div>
        <form
          data-reveal
          noValidate
          onSubmit={v.submit}
          aria-labelledby="book-h"
          style={{
            flex: "2 1 560px",
            background: "#fff",
            border: "1px solid #DCE3EB",
            borderRadius: "4px",
            padding: "clamp(24px,4vw,48px)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <fieldset
            style={{
              border: "0",
              margin: "0",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <legend
              style={{
                padding: "0",
                marginBottom: "16px",
                display: "flex",
                gap: "14px",
                font: "600 18px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#0E1B2C",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  font: "500 13px/1.9 'IBM Plex Mono',monospace",
                  color: "#0B4881",
                }}
              >
                01
              </span>
              Do you sign off on Lebanese audit files?
            </legend>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q1a.b}`,
                background: v.ui.q1a.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x5"
            >
              <input
                type="radio"
                name="q1"
                value="a"
                checked={v.ui.q1a.c}
                onChange={v.pick.q1a}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Yes, I'm a partner or signing auditor
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q1b.b}`,
                background: v.ui.q1b.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x6"
            >
              <input
                type="radio"
                name="q1"
                value="b"
                checked={v.ui.q1b.c}
                onChange={v.pick.q1b}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                I work on them, someone else signs
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q1c.b}`,
                background: v.ui.q1c.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x7"
            >
              <input
                type="radio"
                name="q1"
                value="c"
                checked={v.ui.q1c.c}
                onChange={v.pick.q1c}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                No, I'm in accounting, tax or advisory
              </span>
            </label>
          </fieldset>
          <fieldset
            style={{ border: "0", margin: "0", padding: "0" }}
          >
            <legend
              style={{
                padding: "0",
                marginBottom: "16px",
                display: "flex",
                gap: "14px",
                font: "600 18px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#0E1B2C",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  font: "500 13px/1.9 'IBM Plex Mono',monospace",
                  color: "#0B4881",
                }}
              >
                02
              </span>
              Roughly how many FY2026 files will your firm handle?
            </legend>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(150px,1fr))",
                gap: "14px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "15px 18px",
                  border: `1px solid ${v.ui.q2a.b}`,
                  background: v.ui.q2a.bg,
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "border-color .15s,background .15s",
                }}
                className="x8"
              >
                <input
                  type="radio"
                  name="q2"
                  value="a"
                  checked={v.ui.q2a.c}
                  onChange={v.pick.q2a}
                  style={{
                    width: "18px",
                    height: "18px",
                    margin: "0",
                    flex: "none",
                    accentColor: "#0B4881",
                  }}
                />
                <span
                  style={{
                    font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  }}
                >
                  Under 10
                </span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "15px 18px",
                  border: `1px solid ${v.ui.q2b.b}`,
                  background: v.ui.q2b.bg,
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "border-color .15s,background .15s",
                }}
                className="x9"
              >
                <input
                  type="radio"
                  name="q2"
                  value="b"
                  checked={v.ui.q2b.c}
                  onChange={v.pick.q2b}
                  style={{
                    width: "18px",
                    height: "18px",
                    margin: "0",
                    flex: "none",
                    accentColor: "#0B4881",
                  }}
                />
                <span
                  style={{
                    font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  }}
                >
                  10 to 30
                </span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "15px 18px",
                  border: `1px solid ${v.ui.q2c.b}`,
                  background: v.ui.q2c.bg,
                  borderRadius: "3px",
                  cursor: "pointer",
                  transition: "border-color .15s,background .15s",
                }}
                className="x10"
              >
                <input
                  type="radio"
                  name="q2"
                  value="c"
                  checked={v.ui.q2c.c}
                  onChange={v.pick.q2c}
                  style={{
                    width: "18px",
                    height: "18px",
                    margin: "0",
                    flex: "none",
                    accentColor: "#0B4881",
                  }}
                />
                <span
                  style={{
                    font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  }}
                >
                  More than 30
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset
            style={{
              border: "0",
              margin: "0",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <legend
              style={{
                padding: "0",
                marginBottom: "16px",
                display: "flex",
                gap: "14px",
                font: "600 18px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#0E1B2C",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  font: "500 13px/1.9 'IBM Plex Mono',monospace",
                  color: "#0B4881",
                }}
              >
                03
              </span>
              What slows your files down most?
            </legend>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q3a.b}`,
                background: v.ui.q3a.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x11"
            >
              <input
                type="radio"
                name="q3"
                value="a"
                checked={v.ui.q3a.c}
                onChange={v.pick.q3a}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Rebuilding the client's ledger before we can start
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q3b.b}`,
                background: v.ui.q3b.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x12"
            >
              <input
                type="radio"
                name="q3"
                value="b"
                checked={v.ui.q3b.c}
                onChange={v.pick.q3b}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Reconciling exchange rates across the year
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q3c.b}`,
                background: v.ui.q3c.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x13"
            >
              <input
                type="radio"
                name="q3"
                value="c"
                checked={v.ui.q3c.c}
                onChange={v.pick.q3c}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Chasing supporting documents
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q3d.b}`,
                background: v.ui.q3d.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x14"
            >
              <input
                type="radio"
                name="q3"
                value="d"
                checked={v.ui.q3d.c}
                onChange={v.pick.q3d}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Cash and bank evidence
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "15px 18px",
                border: `1px solid ${v.ui.q3e.b}`,
                background: v.ui.q3e.bg,
                borderRadius: "3px",
                cursor: "pointer",
                transition: "border-color .15s,background .15s",
              }}
              className="x15"
            >
              <input
                type="radio"
                name="q3"
                value="e"
                checked={v.ui.q3e.c}
                onChange={v.pick.q3e}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span
                style={{
                  font: "400 16px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                }}
              >
                Something else, I'll explain on the call
              </span>
            </label>
          </fieldset>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: "20px",
              paddingTop: "32px",
              borderTop: "1px solid #E6ECF2",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                htmlFor="f-name"
                style={{
                  font: "500 14px/1.3 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                Full name
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                autoComplete="name"
                value={v.f.name}
                onChange={v.onField}
                aria-invalid={v.inv.name}
                style={{
                  height: "50px",
                  padding: "0 14px",
                  border: `1px solid ${v.ib.name}`,
                  borderRadius: "3px",
                  font: "400 16px 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                  background: "#fff",
                  transition: "border-color .15s,box-shadow .15s",
                }}
                className="x16"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                htmlFor="f-firm"
                style={{
                  font: "500 14px/1.3 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                Firm
              </label>
              <input
                id="f-firm"
                name="firm"
                type="text"
                autoComplete="organization"
                value={v.f.firm}
                onChange={v.onField}
                aria-invalid={v.inv.firm}
                style={{
                  height: "50px",
                  padding: "0 14px",
                  border: `1px solid ${v.ib.firm}`,
                  borderRadius: "3px",
                  font: "400 16px 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                  background: "#fff",
                  transition: "border-color .15s,box-shadow .15s",
                }}
                className="x17"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                htmlFor="f-email"
                style={{
                  font: "500 14px/1.3 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                Email
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                value={v.f.email}
                onChange={v.onField}
                aria-invalid={v.inv.email}
                style={{
                  height: "50px",
                  padding: "0 14px",
                  border: `1px solid ${v.ib.email}`,
                  borderRadius: "3px",
                  font: "400 16px 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                  background: "#fff",
                  transition: "border-color .15s,box-shadow .15s",
                }}
                className="x18"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                htmlFor="f-phone"
                style={{
                  font: "500 14px/1.3 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                Mobile / WhatsApp
              </label>
              <input
                id="f-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+961"
                value={v.f.phone}
                onChange={v.onField}
                aria-invalid={v.inv.phone}
                style={{
                  height: "50px",
                  padding: "0 14px",
                  border: `1px solid ${v.ib.phone}`,
                  borderRadius: "3px",
                  font: "400 16px 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                  background: "#fff",
                  transition: "border-color .15s,box-shadow .15s",
                }}
                className="x19"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {v.showErr && (
              <>
                <p
                  role="alert"
                  style={{
                    margin: "0",
                    font: "500 14.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#B42318",
                  }}
                >
                  Please complete the highlighted fields.
                </p>
              </>
            )}
            {v.submitError && (
              <p
                role="alert"
                style={{
                  margin: "0",
                  font: "500 14.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#B42318",
                }}
              >
                {v.submitError}
              </p>
            )}
            <div>
              <button
                type="submit"
                disabled={!!v.submitting}
                aria-busy={v.submitting ? "true" : "false"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  height: "56px",
                  padding: "0 36px",
                  background: v.submitting ? "#9FB3C8" : "#0B4881",
                  color: "#fff",
                  border: "0",
                  font: "600 16.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                  borderRadius: "3px",
                  cursor: v.submitting ? "wait" : "pointer",
                  transition: "background .2s",
                }}
                className="x20"
              >
                {v.submitting ? "Submitting…" : "Submit"}
                {!v.submitting && (
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
                )}
              </button>
            </div>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "16px 18px",
                background: "#F3F6F9",
                borderRadius: "3px",
                cursor: "pointer",
                font: "400 15.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#3D4B5C",
              }}
            >
              <input
                type="checkbox"
                checked={v.checklistOnly}
                onChange={v.toggleChecklist}
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "2px 0 0",
                  flex: "none",
                  accentColor: "#0B4881",
                }}
              />
              <span>
                Not ready to talk? Tick here and we'll just send you
                the checklist no call, no follow-up.
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
