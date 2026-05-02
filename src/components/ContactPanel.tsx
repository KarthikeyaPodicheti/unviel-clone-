"use client";

import { contactInfo } from "@/types/website";

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const textStyle: React.CSSProperties = {
  fontSize: "0.65625rem",
  lineHeight: "1.05",
  letterSpacing: "0.015em",
  textTransform: "uppercase",
  fontFamily: '"NB International Pro", ui-sans-serif, system-ui, sans-serif',
};

const linkStyle: React.CSSProperties = {
  ...textStyle,
  color: "#000",
  textDecoration: "none",
  display: "block",
  opacity: 0.3,
  transition: "opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
};

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            cursor: "pointer",
          }}
        />
      )}

      {/* Panel - slides from right using the section+div pattern from original */}
      <div
        style={{
          position: "fixed",
          top: "40px",
          right: 0,
          bottom: 0,
          width: "27rem",
          maxWidth: "100vw",
          zIndex: 99,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(2.5rem)",
          WebkitBackdropFilter: "blur(2.5rem)",
          padding: "80px 14px 40px",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition:
            "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <a
          href={`mailto:${contactInfo.email}`}
          style={linkStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.3";
          }}
        >
          {contactInfo.email}
        </a>
        <a
          href={contactInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.3";
          }}
        >
          {contactInfo.instagram}
        </a>
        <a
          href={contactInfo.addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.3";
          }}
        >
          {contactInfo.address}
        </a>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1em" }}>
          <a href="/cookie-policy" style={{ ...linkStyle, fontSize: "0.5rem" }}>
            Cookie Policy
          </a>
          <a href="/privacy-policy" style={{ ...linkStyle, fontSize: "0.5rem" }}>
            Privacy Policy
          </a>
          <a href="/legal-notice" style={{ ...linkStyle, fontSize: "0.5rem" }}>
            Legal Notice
          </a>
        </div>
      </div>
    </>
  );
}
