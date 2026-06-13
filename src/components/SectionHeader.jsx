import { motion } from "framer-motion";

export default function SectionHeader({
  number,
  label,
  title,
  highlight,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "flex-end",
        marginBottom: "40px",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--primary-C2)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              width: "20px",
              height: "0.5px",
              background: "var(--primary-C2)",
              display: "block",
            }}
          />
          [ {number} ] — {label}
        </div>

        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(26px, 3.5vw, 42px)",
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {title}
          {highlight && (
            <span style={{ color: "var(--primary)" }}> {highlight}</span>
          )}
        </h2>
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--muted)",
          lineHeight: 1.8,
          fontWeight: 300,
          textAlign: "end",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
