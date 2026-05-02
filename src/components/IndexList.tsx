"use client";

import { projects } from "@/types/website";

const textStyle: React.CSSProperties = {
  fontSize: "0.65625rem",
  lineHeight: "0.8125rem",
  letterSpacing: "0.015em",
  textTransform: "uppercase",
  fontFamily: '"NB International Pro", ui-sans-serif, system-ui, sans-serif',
};

export default function IndexList() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        paddingTop: "40px",
        overflowY: "auto",
        overflowX: "hidden",
        background: "#fafafa",
      }}
    >
      <div
        style={{
          padding: "144px 14px 80px",
          maxWidth: "900px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "60px 1fr 1fr",
            gap: "0 28px",
            paddingBottom: "20px",
          }}
        >
          <span style={{ ...textStyle, opacity: 1 }}>Year</span>
          <span style={{ ...textStyle, opacity: 1 }}>Project</span>
          <span style={{ ...textStyle, opacity: 1 }}>Category</span>
        </div>

        {/* Project rows */}
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/project/${project.slug}`}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 1fr",
              gap: "0 28px",
              padding: "5px 0",
              textDecoration: "none",
              color: "#000",
              transition:
                "opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "";
            }}
          >
            <span style={{ ...textStyle, opacity: 0.3 }}>
              {project.year}
            </span>
            <span style={{ ...textStyle, opacity: 0.3 }}>
              {project.title}
            </span>
            <span style={{ ...textStyle, opacity: 0.3 }}>
              {project.tags.join(" / ")}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
