/**
 * FaqSection presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function FaqSection({ v }) {
  return (
    <section
      aria-labelledby="faq-h"
      style={{ background: "#F3F6F9" }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px clamp(48px,7vw,112px)",
        }}
      >
        <h2
          id="faq-h"
          data-reveal
          style={{
            flex: "1 1 300px",
            maxWidth: "440px",
            margin: "0",
            font: "600 clamp(34px,4vw,52px)/1.05 'Plus Jakarta Sans',sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Objections ground (FAQ)
        </h2>
        <div
          data-reveal
          style={{
            flex: "2 1 520px",
            borderTop: "1px solid #0E1B2C",
          }}
        >
          <div style={{ borderBottom: "1px solid #CBD5E0" }}>
            <h3 style={{ margin: "0" }}>
              <button
                type="button"
                id="faq-b0"
                aria-expanded={v.faq.e0}
                aria-controls="faq-p0"
                onClick={v.faq.o0}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  padding: "26px 0",
                  background: "none",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  font: "600 19px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
                className="x21"
              >
                Is this a sales call?
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    font: "300 28px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#0B4881",
                    transition: "transform .3s",
                    transform: `rotate(${v.faq.t0})`,
                  }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id="faq-p0"
              role="region"
              aria-labelledby="faq-b0"
              style={{
                display: "grid",
                gridTemplateRows: v.faq.r0,
                transition: "grid-template-rows .35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0",
                    padding: "0 48px 28px 0",
                    maxWidth: "64ch",
                    font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#3D4B5C",
                  }}
                >
                  No, and you can hold us to the agenda above. The
                  third item is the only part about our product, it
                  runs five minutes, and it only happens if you ask
                  for it.
                </p>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid #CBD5E0" }}>
            <h3 style={{ margin: "0" }}>
              <button
                type="button"
                id="faq-b1"
                aria-expanded={v.faq.e1}
                aria-controls="faq-p1"
                onClick={v.faq.o1}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  padding: "26px 0",
                  background: "none",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  font: "600 19px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
                className="x22"
              >
                Will you keep calling me afterwards?
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    font: "300 28px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#0B4881",
                    transition: "transform .3s",
                    transform: `rotate(${v.faq.t1})`,
                  }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id="faq-p1"
              role="region"
              aria-labelledby="faq-b1"
              style={{
                display: "grid",
                gridTemplateRows: v.faq.r1,
                transition: "grid-template-rows .35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0",
                    padding: "0 48px 28px 0",
                    maxWidth: "64ch",
                    font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#3D4B5C",
                  }}
                >
                  We send the checklist the same day. After that,
                  nothing unless you ask. No sequence, no drip
                  campaign, no second call you didn't book.
                </p>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid #CBD5E0" }}>
            <h3 style={{ margin: "0" }}>
              <button
                type="button"
                id="faq-b2"
                aria-expanded={v.faq.e2}
                aria-controls="faq-p2"
                onClick={v.faq.o2}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  padding: "26px 0",
                  background: "none",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  font: "600 19px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
                className="x23"
              >
                Do I need to share client information?
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    font: "300 28px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#0B4881",
                    transition: "transform .3s",
                    transform: `rotate(${v.faq.t2})`,
                  }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id="faq-p2"
              role="region"
              aria-labelledby="faq-b2"
              style={{
                display: "grid",
                gridTemplateRows: v.faq.r2,
                transition: "grid-template-rows .35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0",
                    padding: "0 48px 28px 0",
                    maxWidth: "64ch",
                    font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#3D4B5C",
                  }}
                >
                  No. Nothing in the fifteen minutes needs a client
                  name, a file or a number. If something specific
                  comes up, keep it anonymous.
                </p>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid #CBD5E0" }}>
            <h3 style={{ margin: "0" }}>
              <button
                type="button"
                id="faq-b3"
                aria-expanded={v.faq.e3}
                aria-controls="faq-p3"
                onClick={v.faq.o3}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                  padding: "26px 0",
                  background: "none",
                  border: "0",
                  cursor: "pointer",
                  textAlign: "left",
                  font: "600 19px/1.4 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
                className="x24"
              >
                I'm in the middle of filing season. Can we speak in
                January?
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    font: "300 28px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#0B4881",
                    transition: "transform .3s",
                    transform: `rotate(${v.faq.t3})`,
                  }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id="faq-p3"
              role="region"
              aria-labelledby="faq-b3"
              style={{
                display: "grid",
                gridTemplateRows: v.faq.r3,
                transition: "grid-template-rows .35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: "0",
                    padding: "0 48px 28px 0",
                    maxWidth: "64ch",
                    font: "400 17px/1.62 'Plus Jakarta Sans',system-ui,sans-serif",
                    color: "#3D4B5C",
                  }}
                >
                  Yes, and January is genuinely fine. Book a January
                  slot now and take the checklist today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
