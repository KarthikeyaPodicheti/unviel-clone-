"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import ContactPanel from "@/components/ContactPanel";

/* Research images from DatoCMS - extracted from the live site */
const researchImages = [
  { src: "https://www.datocms-assets.com/127841/1718879753-unveil-studio-eye.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "square" },
  { src: "https://www.datocms-assets.com/127841/1738056668-unveil_dvn_beauty_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1733301858-unveil_opn_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "landscape" },
  { src: "https://www.datocms-assets.com/127841/1730790591-unveil_byredo_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1727168766-unveil_heliot_emil_aw25_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1724044159-unveil_ntdnth_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "landscape" },
  { src: "https://www.datocms-assets.com/127841/1770050655-13.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "landscape" },
  { src: "https://www.datocms-assets.com/127841/1776879940-unveil_meeting_table_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "landscape" },
  { src: "https://www.datocms-assets.com/127841/1776256169-unveil_balenciaga_s26_0.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1772304391-unveil_cohl_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1769854589-unveil_unfixed_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1768225802-unveil_drift_schott_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1742049508-unveil_444_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1720422523-unveil_puma_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "landscape" },
  { src: "https://www.datocms-assets.com/127841/1776704797-unveil_nodaleto_1.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1770050677-17.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "landscape" },
  { src: "https://www.datocms-assets.com/127841/1772304458-unveil_cohl_2.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
  { src: "https://www.datocms-assets.com/127841/1772304654-unveil_cohl_4_t.png?dpr=1&fit=max&h=512&q=80&w=512", ratio: "portrait" },
];

const textStyle: React.CSSProperties = {
  fontSize: "0.65625rem",
  lineHeight: "1.25",
  letterSpacing: "0.015em",
  textTransform: "uppercase",
  fontFamily: '"NB International Pro", ui-sans-serif, system-ui, sans-serif',
};

export default function ResearchPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        overflow: "auto",
      }}
    >
      <NavBar onContactClick={() => setContactOpen((prev) => !prev)} />

      {/* Description block */}
      <div
        style={{
          paddingTop: "9rem",
          paddingLeft: "14px",
          paddingRight: "14px",
          maxWidth: "580px",
          marginBottom: "3rem",
        }}
      >
        <p style={{ ...textStyle, color: "#000", lineHeight: "1.25" }}>
          UNVEIL® sees serendipity as an integral part of its creative
          process. Rather than resisting the randomness and chaos of AI, the
          studio leans into it — using these unpredictable outputs as raw
          material for exploration and discovery. UNVEIL® is actively
          seeking out accidents, viewing them not as errors, but as
          opportunities.
        </p>
      </div>

      {/* Image grid - responsive columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "61px 99px",
          padding: "80px 0",
        }}
      >
        {researchImages.map((img, i) => (
          <button
            key={i}
            type="button"
            style={{
              display: "block",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "zoom-in",
              overflow: "hidden",
              aspectRatio:
                img.ratio === "portrait"
                  ? "4/5"
                  : img.ratio === "landscape"
                    ? "16/10"
                    : "1/1",
            }}
          >
            <img
              src={img.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </button>
        ))}
      </div>

      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
