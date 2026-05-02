"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import IndexList from "@/components/IndexList";
import ContactPanel from "@/components/ContactPanel";

export default function IndexPage() {
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
        overflow: "hidden",
        backgroundColor: "#fafafa",
      }}
    >
      <NavBar onContactClick={() => setContactOpen((prev) => !prev)} />
      <IndexList />
      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
