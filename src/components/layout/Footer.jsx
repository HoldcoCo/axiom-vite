/**
 * Site footer.
 */

export default function Footer() {
  return (
    <footer style={{ background: "#0B1F33", color: "#C4D2E0" }}>
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "32px clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px 32px",
          font: "400 14.5px/1.5 'Plus Jakarta Sans',system-ui,sans-serif",
        }}
      >
        <p style={{ margin: "0" }}>
          <span
            style={{
              fontWeight: "600",
              letterSpacing: "0.14em",
              color: "#fff",
            }}
          >
            AXIOM
          </span>
          {" · a HoldCo Corp product · Beirut, Lebanon"}
        </p>
        <nav
          aria-label="Footer"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <a
            href="mailto:info@holdco.co"
            style={{ color: "#C4D2E0" }}
            className="x30"
          >
            Contact
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="https://wa.me/0096176451755"
            style={{ color: "#C4D2E0" }}
            className="x31"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}
