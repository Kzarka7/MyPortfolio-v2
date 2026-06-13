import { useState } from "react";
import { motion } from "framer-motion";

import { sectionHeader } from "../../data/sections";
import SectionHeader from "../../components/SectionHeader";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          padding: "80px 0",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <SectionHeader {...sectionHeader.contact} />

        <ContactCard />
      </div>
    </section>
  );
}
