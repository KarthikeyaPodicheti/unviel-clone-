"use client";

export type ViewMode = "overview" | "index";

interface ViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const btnStyle: React.CSSProperties = {
  fontSize: "0.65625rem",
  lineHeight: "1.05",
  letterSpacing: "0.015em",
  textTransform: "uppercase",
  fontFamily: '"NB International Pro", ui-sans-serif, system-ui, sans-serif',
  cursor: "pointer",
  background: "none",
  border: "none",
  color: "#000",
  position: "relative",
  padding: "7px 16px",
};

export default function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "11px",
        right: "4px",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <button
        type="button"
        onClick={() => onChange("overview")}
        className="unveil-button"
        style={{
          ...btnStyle,
          borderRadius: "6px 0 0 6px",
        }}
      >
        <span
          style={{
            opacity: mode === "overview" ? 1 : 0.3,
            transition:
              "opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        >
          Overview
        </span>
      </button>
      <button
        type="button"
        onClick={() => onChange("index")}
        className="unveil-button"
        style={{
          ...btnStyle,
          borderRadius: "0 6px 6px 0",
        }}
      >
        <span
          style={{
            opacity: mode === "index" ? 1 : 0.3,
            transition:
              "opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        >
          Index
        </span>
      </button>
    </div>
  );
}
