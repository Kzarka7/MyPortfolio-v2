import { motion } from "framer-motion";

import { educationData } from "../../data/education";
import { sectionHeader } from "../../data/sections";
import EducationCard from "./EducationCard";
import SectionHeader from "../../components/SectionHeader";

export default function Education() {
  return (
    <section
      id="education"
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
        {/* Section Header */}
        <SectionHeader {...sectionHeader.education} />

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "start",
          }}
        >
          {educationData.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-gray)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {cat.category}
                <span
                  style={{
                    flex: 1,
                    height: "0.5px",
                    background: "var(--muted)",
                    display: "block",
                  }}
                />
              </div>

              {cat.items.map((education, index) => (
                <EducationCard
                  key={education.id}
                  education={education}
                  index={index}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
