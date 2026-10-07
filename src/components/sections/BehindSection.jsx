/**
 * BehindSection presentational component.
 */

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function BehindSection({ v }) {
  return (
    <section aria-labelledby="behind-h" style={{ background: "#E7ECF1" }}>
      <div
        data-reveal
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "48px clamp(48px,7vw,112px)",
        }}
      >
        <div
          style={{
            flex: "2 1 480px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            font: "400 17px/1.66 'Plus Jakarta Sans',system-ui,sans-serif",
            color: "#3D4B5C",
          }}
        >
          <h2
            id="behind-h"
            style={{
              margin: "0 0 8px",
              font: "600 clamp(30px,3.4vw,44px)/1.08 'Plus Jakarta Sans',sans-serif",
              letterSpacing: "-0.03em",
              color: "#0E1B2C",
            }}
          >
            Who's behind Axiom
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "66ch",
              textWrap: "pretty",
            }}
          >
            Axiom builds business software in Beirut. Two products sit under the
            name: Axiom ERP, used by companies here for accounting, inventory,
            sales, purchasing and payroll; and Axiom ARC, audit software built
            for firms working in this market.
          </p>
          <p
            style={{
              margin: "0",
              maxWidth: "66ch",
              textWrap: "pretty",
            }}
          >
            Axiom is a HoldCo Corp product. HoldCo has been building and running
            technology for businesses in Lebanon and the region for 6 years.
          </p>
          <p
            style={{
              margin: "8px 0 0",
              paddingTop: "20px",
              borderTop: "1px solid #C9D3DD",
              font: "500 14px/1.6 'IBM Plex Mono',monospace",
              color: "#0E1B2C",
            }}
          >
            {"Sodeco Square, Block E, First Floor, Beirut · "}
            <a href="tel:+96176451755" style={{ color: "#0E1B2C" }}>
              +961 76 451 755
            </a>
            {" · "}
            <a href="mailto:info@holdco.co" style={{ color: "#0E1B2C" }}>
              info@holdco.co
            </a>
          </p>
        </div>
        <div
          style={{
            flex: "1 1 260px",
            maxWidth: "380px",
            aspectRatio: "16/9",
            border: "1px solid #DCE3EB",
            borderRadius: "4px",
            background: "#fff",
            display: "grid",
            placeItems: "center",
            padding: "32px",
          }}
        >
          <img
            src="assets/holdco-corp-logo.png"
            alt="HoldCo Corp"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "280px",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
