"use client";

import { usePathname } from "next/navigation";

/* Exact text-11 style from original CSS */
const textStyle: React.CSSProperties = {
  fontSize: "0.65625rem",
  lineHeight: "1.05",
  letterSpacing: "0.015em",
  textTransform: "uppercase",
  fontFamily: '"NB International Pro", ui-sans-serif, system-ui, sans-serif',
};

const navItems = [
  { label: "UNVEIL ® Projects", href: "/", id: "projects" },
  { label: "Research", href: "/research", id: "research" },
  { label: "Studio", href: "/studio", id: "studio" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function NavBar({
  onContactClick,
}: {
  onContactClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        display: "flex",
        padding: "6px",
        gap: "4px",
        backfaceVisibility: "hidden",
      }}
    >
      {navItems.map((item) => {
        const isActive =
          item.id === "projects"
            ? pathname === "/"
            : pathname === item.href;

        const isContact = item.id === "contact";

        const cellStyle: React.CSSProperties = {
          ...textStyle,
          display: "flex",
          alignItems: "flex-end",
          minWidth: "120px",
          height: "44px",
          padding: "12px 16px",
          color: "#000",
          textDecoration: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          pointerEvents: "all",
          borderRadius: "6px",
          position: "relative",
        };

        const itemContent = (
          <span
            style={{
              opacity: isActive ? 1 : 0.3,
              transition:
                "opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
          >
            {item.label}
          </span>
        );

        if (isContact) {
          return (
            <button
              key={item.id}
              type="button"
              onClick={onContactClick}
              className="unveil-button"
              style={cellStyle}
            >
              {itemContent}
            </button>
          );
        }

        return (
          <a
            key={item.id}
            href={item.href}
            className="unveil-button"
            style={cellStyle}
          >
            {itemContent}
          </a>
        );
      })}
    </header>
  );
}
