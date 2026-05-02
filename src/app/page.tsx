"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import ViewToggle, { type ViewMode } from "@/components/ViewToggle";
import CardFan3D from "@/components/CardFan3D";
import IndexList from "@/components/IndexList";
import ContactPanel from "@/components/ContactPanel";

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("overview");
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100svh",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#fafafa",
      }}
    >
      <NavBar onContactClick={() => setContactOpen((prev) => !prev)} />

      {/* Overview mode: 3D card fan */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: viewMode === "overview" ? 1 : 0,
          pointerEvents: viewMode === "overview" ? "auto" : "none",
          transition: "opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)",
          zIndex: 1,
        }}
      >
        <CardFan3D />
      </div>

      {/* Index mode: project list */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: viewMode === "index" ? 1 : 0,
          pointerEvents: viewMode === "index" ? "auto" : "none",
          transition: "opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)",
          zIndex: viewMode === "index" ? 2 : 0,
        }}
      >
        <IndexList />
      </div>

      <ViewToggle mode={viewMode} onChange={setViewMode} />
      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}