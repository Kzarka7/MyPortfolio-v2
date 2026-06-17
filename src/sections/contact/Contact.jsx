import { useState } from "react";
import { motion } from "framer-motion";

import { sectionHeader } from "../../data/sections";
import SectionHeader from "../../components/SectionHeader";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center relative z-10"
    >
      <div className="py-20 px-4 md:px-6 lg:px-0 max-w-[1200px] w-full mx-auto">
        {/* Section Header */}
        <SectionHeader {...sectionHeader.contact} />

        {/* Contact Content Card Component */}
        <ContactCard />
      </div>
    </section>
  );
}