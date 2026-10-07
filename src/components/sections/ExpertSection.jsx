/**
 * ExpertSection presentational component.
 */

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function ExpertSection({ v }) {
  return (
    <section
      aria-labelledby="expert-h"
      style={{ background: "#0B1F33", color: "#fff" }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,128px) clamp(20px,4vw,40px)",
        }}
      >
        <h2
          id="expert-h"
          data-reveal
          style={{
            margin: "0 0 clamp(40px,5vw,56px)",
            font: "600 clamp(34px,4vw,52px)/1.05 'Plus Jakarta Sans',sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Who you'll be speaking with
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px clamp(32px,4vw,56px)",
            alignItems: "flex-start",
          }}
        >
          <div
            data-reveal
            style={{
              flex: "1 1 240px",
              maxWidth: "340px",
              aspectRatio: "4/5",
              borderRadius: "4px",
              overflow: "hidden",
              background: "#D4D4D4",
            }}
          >
            <img
              src="assets/ziad.png"
              alt="Ziad, Managing Director at Axiom"
              width="320"
              height="427"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          <div
            data-reveal
            style={{
              flex: "2 1 400px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              font: "400 17px/1.66 'Plus Jakarta Sans',system-ui,sans-serif",
              color: "#D2DEEA",
            }}
          >
            <p
              style={{
                margin: "0",
                font: "400 clamp(22px,2vw,26px)/1.35 'Plus Jakarta Sans',sans-serif",
                color: "#fff",
              }}
            >
              I'm Ziad, Managing Director at Axiom in Beirut.
            </p>
            <p style={{ margin: "0", textWrap: "pretty" }}>
              I've spent this year asking Lebanese auditors what actually takes
              the time on a file. Nobody says testing. They say rebuilding
              client ledgers, reconciling rates that were booked three different
              ways, and chasing documents that exist but aren't attached to
              anything.
            </p>
            <p style={{ margin: "0", textWrap: "pretty" }}>
              I'm building software for that, and I'd rather build it with the
              people who'll use it than guess at it. 21 conversations so far,
              and most of them have changed something.
            </p>
            <p
              style={{
                margin: "0",
                paddingTop: "18px",
                borderTop: "1px solid rgba(255,255,255,0.14)",
                fontWeight: "500",
                color: "#fff",
              }}
            >
              You'll be speaking with me. Not a call center, not a sales team.
            </p>
          </div>
          <aside
            data-reveal
            aria-label="From the conversations"
            style={{
              flex: "1 1 260px",
              maxWidth: "360px",
              background: "#fff",
              color: "#0E1B2C",
              borderRadius: "4px",
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                font: "500 56px/0.6 'Plus Jakarta Sans',sans-serif",
                color: "#0B4881",
                height: "26px",
              }}
            >
              “
            </span>
            {v.showQuote && (
              <>
                <blockquote
                  style={{
                    margin: "0",
                    font: "400 21px/1.45 'Plus Jakarta Sans',sans-serif",
                    color: "#0E1B2C",
                  }}
                >
                  [Quote from an auditor already spoken to]
                </blockquote>
              </>
            )}
            {v.showFallback && (
              <>
                <p
                  style={{
                    margin: "0",
                    font: "400 21px/1.45 'Plus Jakarta Sans',sans-serif",
                    color: "#0E1B2C",
                  }}
                >
                  21 conversations with Lebanese audit and accounting firms
                  since September.
                </p>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
