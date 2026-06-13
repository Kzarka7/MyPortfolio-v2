import { motion } from "framer-motion";

export default function Availabity({ style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        background: "var(--surface-blue-05)",
        border: "0.5px solid var(--border-67)",
        padding: "6px 12px",
        backdropFilter: "blur(8px)",

        ...style,
      }}
    >
      <motion.span
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--primary)",
          boxShadow: "0 0 6px var(--primary)",
          display: "block",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--primary)",
          letterSpacing: "0.1em",
          whiteSpace: "nowrap",
        }}
      >
        OPEN TO INTERNSHIP
      </span>
    </motion.div>
  );
}
