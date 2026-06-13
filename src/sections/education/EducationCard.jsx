import { useState } from "react";
import { motion } from "framer-motion";

export default function EducationCard({ education, index }) {
  const [hov, setHov] = useState(false);
  const Icon = education.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "20px",
        padding: "24px 20px",
        borderBottom: "0.5px solid var(--border-3D)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2px",
          background: education.color,
          transition: "width 0.2s",
          transform: hov ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: "transform 0.3s ease",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: hov
              ? `0.5px solid ${education.color}`
              : "0.5px solid var(--border-3D)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: hov ? `var(--surface-0D)` : "transparent",
            transition: "all 0.25s",
            flexShrink: 0,
          }}
        >
          <Icon
            style={{
              fontSize: "16px",
              color: hov ? education.color : "var(--text-gray)",
              transition: "color 0.25s",
            }}
          />
        </div>

        {/* vertical connector line */}
        <div
          style={{
            width: "0.5px",
            flex: 1,
            background: "var(--muted)",
            minHeight: "20px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "6px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--primary-C2)",
              border: "0.5px solid var(--border-2E)",
              padding: "2px 8px",
              letterSpacing: "0.14em",
            }}
          >
            {education.type}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color:
                education.status === "ONGOING"
                  ? "var(--primary)"
                  : "var(--text-gray)",
              background: "var(--surface-blue-05)",
              border: `0.5px solid ${education.status === "ONGOING" ? "var(--border-67)" : "var(--border-3D)"}`,
              padding: "2px 8px",
              letterSpacing: "0.1em",
            }}
          >
            {education.status}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-gray)",
              letterSpacing: "0.1em",
              marginLeft: "auto",
            }}
          >
            {education.year}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "18px",
            fontWeight: 700,
            color: hov ? "var(--text)" : "var(--text-gray)",
            marginBottom: "4px",
            transition: "color 0.2s",
            letterSpacing: "-0.01em",
          }}
        >
          {education.title}
        </h3>

        <div
          style={{
            fontFamily: "var(--font-barl)",
            fontSize: "18px",
            fontWeight: 500,
            color: hov ? "var(--primary)" : "var(--primary-C2)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          {education.institution}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            color: "var(--text-gray)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {education.desc}
        </p>
      </div>
    </motion.div>
  );
}
