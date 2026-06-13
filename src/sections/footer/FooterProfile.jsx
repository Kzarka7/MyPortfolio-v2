import { motion } from "framer-motion";

export default function FooterProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "18px",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.01em",
          marginBottom: "10px",
          lineHeight: 1.2,
        }}
      >
        JOHN
        <span style={{ color: "var(--primary)" }}> BENEDICT M. GALA</span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-barl)",
          fontSize: "14px",
          color: "var(--text-gray)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          lineHeight: 1.6,
        }}
      >
        Intern Student
        <br />
        Bachelor of Science in Computer Engineering
        <br />
        Cebu Technological University - Danao Campus
      </div>
    </motion.div>
  );
}
