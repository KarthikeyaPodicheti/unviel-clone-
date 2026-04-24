"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import ContactPanel from "@/components/ContactPanel";

const textStyle: React.CSSProperties = {
  fontSize: "0.65625rem",
  lineHeight: "1.25",
  letterSpacing: "0.015em",
  textTransform: "uppercase",
  fontFamily: '"NB International Pro", ui-sans-serif, system-ui, sans-serif',
};

const labelStyle: React.CSSProperties = {
  ...textStyle,
  opacity: 0.3,
  minWidth: "146px",
  flexShrink: 0,
};

const valueStyle: React.CSSProperties = {
  ...textStyle,
  paddingLeft: "9.125rem",
};

const clients = [
  "Balenciaga",
  "Boiler Room",
  "Byredo",
  "Coty",
  "Dries Van Noten",
  "Heliot Emil",
  "Isabel Marant",
  "LVMH Gaïa",
  "Moët & Chandon",
  "Nodaleto",
  "Puma",
  "Red Star FC",
  "Salomon",
  "Silencio",
  "Warp Records",
];

const services = [
  "Creative Direction",
  "AI",
  "Graphic Identity",
  "Digital Design",
  "Strategy",
];

const press = [
  { name: "TheBoldWay (Podcast)", url: "#" },
  { name: "Resampl", url: "#" },
  { name: "The Brand Identity", url: "#" },
  { name: "Little Black Book", url: "#" },
];

const recognitions = [
  "Gen:48 Edition #1 : Finalist",
  "Gen:48 Edition #2 : Grand Prix",
  "Gen:48 Edition #3 : Jury Selection",
];

export default function StudioPage() {
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
        }}
      >
        {/* Left column - content */}
        <div
          style={{
            flex: "0 0 66%",
            maxWidth: "66%",
            paddingTop: "9rem",
            paddingLeft: "14px",
            paddingRight: "40px",
            paddingBottom: "80px",
            overflowY: "auto",
          }}
        >
          {/* Description */}
          <div style={{ maxWidth: "580px", marginBottom: "80px" }}>
            <p style={{ ...textStyle, color: "#000", lineHeight: "1.25" }}>
              UNVEIL® is a creative studio using artificial intelligence to
              expand human creativity. The eye represents our most essential
              tool in a world overwhelmed with visual stimuli. We collaborate
              across diverse industries and cultural landscapes reflecting our
              belief that variety drives our creative process. Each project at
              UNVEIL® is backed by thorough research, ensuring that our
              creative decisions are deliberate and meaningful. No project is
              too small for us, we see each one as an opportunity to express
              ourselves. We love what we do.
            </p>
          </div>

          {/* Clients */}
          <Section label="Clients">
            {clients.map((client) => (
              <div key={client} style={valueStyle}>
                {client}
              </div>
            ))}
          </Section>

          {/* Services */}
          <Section label="Services">
            {services.map((service) => (
              <div key={service} style={valueStyle}>
                {service}
              </div>
            ))}
          </Section>

          {/* Press */}
          <Section label="Press">
            {press.map((item) => (
              <a
                key={item.name}
                href={item.url}
                style={{
                  ...valueStyle,
                  display: "block",
                  textDecoration: "none",
                  color: "#000",
                  transition:
                    "opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)",
                }}
              >
                {item.name}
              </a>
            ))}
          </Section>

          {/* Recognitions */}
          <Section label="Recognitions">
            {recognitions.map((item) => (
              <div key={item} style={valueStyle}>
                {item}
              </div>
            ))}
          </Section>
        </div>

        {/* Right column - Eye image */}
        <div
          style={{
            flex: "0 0 34%",
            maxWidth: "34%",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <img
            src="https://www.datocms-assets.com/127841/1718879753-unveil-studio-eye.png?dpr=1&fit=max&h=2048&q=90&w=2048"
            alt="UNVEIL® Studio Eye"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "right top",
              display: "block",
              filter: "saturate(0) contrast(1.3)",
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>

      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0",
        marginBottom: "48px",
      }}
    >
      <div style={labelStyle}>{label}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        {children}
      </div>
    </div>
  );
}
