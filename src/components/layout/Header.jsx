/**
 * Header presentational component.
 */
import React from "react";

/**
 * @param {{ v: Record<string, unknown> }} props
 */
export default function Header({ v }) {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "50",
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "saturate(1.4) blur(10px)",
        WebkitBackdropFilter: "saturate(1.4) blur(10px)",
        borderBottom: "1px solid #E3E9EF",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <a
          href="#top"
          onClick={v.goHome}
          aria-label="AXIOM home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#0B4881",
          }}
        >
          <img
            src="assets/axiom-erp-logo.png"
            alt="AXIOM ERP"
            width="140"
            height="47"
            style={{ display: "block", height: "38px", width: "auto" }}
          />
        </a>
        {v.isLanding && (
          <>
            <a
              href="#book"
              onClick={v.scrollToForm}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "42px",
                padding: "0 18px",
                background: "#0B4881",
                color: "#fff",
                font: "600 14.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                borderRadius: "3px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background .2s",
              }}
              className="x1"
            >
              Book 15 min call
            </a>
          </>
        )}
        {v.notLanding && (
          <>
            <a
              href="#top"
              onClick={v.goHome}
              style={{
                font: "500 14.5px/1 'Plus Jakarta Sans',system-ui,sans-serif",
                color: "#0B4881",
              }}
            >
              Back to the page
            </a>
          </>
        )}
      </div>
    </header>
  );
}
