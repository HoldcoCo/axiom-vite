/**
 * HeroSection presentational component.
 */

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function HeroSection({ v }) {
  return (
    <section
      aria-labelledby="hero-h"
      style={{
        background: "#fff",
        borderBottom: "1px solid #E3E9EF",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding:
            "clamp(48px,7vw,104px) clamp(20px,4vw,40px) clamp(56px,7vw,112px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))",
          gap: "clamp(40px,5vw,72px)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <h1
            id="hero-h"
            style={{
              margin: "0",
              font: "600 clamp(40px,5.1vw,70px)/1.04 'Plus Jakarta Sans',sans-serif",
              letterSpacing: "-0.022em",
              color: "#0E1B2C",
              textWrap: "balance",
            }}
          >
            31 December 2026 is the last year-end inside the Law 330 window.
          </h1>
          <p
            style={{
              margin: "0",
              maxWidth: "34ch",
              font: "400 clamp(19px,1.6vw,22px)/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
              color: "#3D4B5C",
              textWrap: "pretty",
            }}
          >
            Fifteen minutes on what that changes for the files you open in
            January.
          </p>
          <dl
            style={{
              margin: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              borderTop: "1px solid #DCE3EB",
              borderBottom: "1px solid #DCE3EB",
            }}
          >
            <div
              style={{
                padding: "16px 20px 16px 0",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                borderRight: "1px solid #DCE3EB",
              }}
            >
              <dt
                style={{
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5A6878",
                }}
              >
                Duration
              </dt>
              <dd
                style={{
                  margin: "0",
                  font: "500 16px/1.35 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                15 minutes
              </dd>
            </div>
            <div
              style={{
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                borderRight: "1px solid #DCE3EB",
              }}
            >
              <dt
                style={{
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5A6878",
                }}
              >
                Format
              </dt>
              <dd
                style={{
                  margin: "0",
                  font: "500 16px/1.35 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                Virtual Meeting
              </dd>
            </div>
            <div
              style={{
                padding: "16px 0 16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <dt
                style={{
                  font: "500 11.5px/1 'IBM Plex Mono',monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#5A6878",
                }}
              >
                Promise
              </dt>
              <dd
                style={{
                  margin: "0",
                  font: "500 16px/1.35 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#0E1B2C",
                }}
              >
                No demo unless you ask
              </dd>
            </div>
          </dl>
          <div>
            <a
              href="#book"
              onClick={v.scrollToForm}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                height: "56px",
                padding: "0 28px",
                background: "#0B4881",
                color: "#fff",
                font: "600 16.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                borderRadius: "3px",
                textDecoration: "none",
                transition: "background .2s",
              }}
              className="x2"
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            role="region"
            aria-label="Short video, 60 to 75 seconds"
            style={{
              position: "relative",
              aspectRatio: "16/11",
              borderRadius: "6px",
              overflow: "hidden",
              background: "#0B1F33",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)",
              backgroundSize: "44px 44px",
              boxShadow: "0 30px 60px -30px rgba(11,31,51,0.45)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "24px",
                top: "22px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(255,255,255,0.82)",
                font: "500 11.5px/1 'IBM Plex Mono',monospace",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#6FA8DC",
                }}
              ></span>
              {"Short video "}
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "24px",
                top: "18px",
                font: "400 clamp(44px,6vw,84px)/1 'Plus Jakarta Sans',sans-serif",
                letterSpacing: "-0.03em",
                color: "rgba(255,255,255,0.07)",
              }}
            >
              31.12
            </div>
            {v.vBg}
            <div
              aria-live="polite"
              style={{
                position: "absolute",
                left: "clamp(20px,3.5vw,40px)",
                right: "clamp(20px,3.5vw,40px)",
                top: "52px",
                bottom: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pointerEvents: "none",
                overflow: "hidden",
              }}
            >
              {v.vCaption}
            </div>
          </div>
          <button
            type="button"
            onClick={v.toggleTranscript}
            aria-expanded={v.transcriptExpanded}
            aria-controls="vsl-transcript"
            style={{
              alignSelf: "flex-start",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "0",
              padding: "6px 0",
              cursor: "pointer",
              font: "500 14px/1 'Plus Jakarta Sans',system-ui,sans-serif",
              color: "#0B4881",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                transition: "transform .25s",
                transform: `rotate(${v.transcriptRotate})`,
              }}
            >
              +
            </span>
            {"Transcript · 60 seconds "}
          </button>
          <div
            id="vsl-transcript"
            style={{
              display: "grid",
              gridTemplateRows: v.transcriptRows,
              transition: "grid-template-rows .35s ease",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <div
                style={{
                  padding: "20px 24px",
                  borderLeft: "2px solid #0B4881",
                  background: "#F3F6F9",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  font: "400 15px/1.6 'Plus Jakarta Sans',system-ui,sans-serif",
                  color: "#3D4B5C",
                }}
              >
                <p style={{ margin: "0" }}>
                  If you sign off on Lebanese files, you already know this
                  year-end isn't like the last one.
                </p>
                <p style={{ margin: "0" }}>
                  31 December closes the Law 330 window. The Decision 338
                  adjustments run out with it. IFRS 18 turns 2026 into the
                  comparative you'll be restating. And under the revised
                  deadlines, FY2025 auditor reports land in the same weeks
                  you're planning FY2026.
                </p>
                <p style={{ margin: "0" }}>
                  I'm Ziad. I build audit software in Beirut, and this year I've
                  been asking auditors one question instead of guessing at the
                  answer: where do your hours actually go on a file?
                </p>
                <p style={{ margin: "0" }}>
                  Nobody says testing. They say rebuilding, reconciling and
                  chasing.
                </p>
                <p style={{ margin: "0" }}>
                  So fifteen minutes. What's different about this year-end for
                  your clients, where your hours go, and what we're building.
                  That last part only if you want it.
                </p>
                <p style={{ margin: "0" }}>
                  You get the year-end checklist either way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
