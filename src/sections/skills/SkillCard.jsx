import { useState } from "react";
import { motion } from "framer-motion";
import CornerBrackets from "../../components/CornerBrackets";

export default function SkillCard({ skill, index }) {
  const [hov, setHov] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: hov
          ? `0.5px solid ${skill.color}55`
          : "0.5px solid var(--border-2E)",
        padding: "24px 20px",
        background: hov ? `${skill.color}08` : "var(--surface)",
        transition: "all 0.25s",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* Corner brackets */}
      <CornerBrackets color={hov ? skill.color : "var(--primary)"} />

      {/* Accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1.5px",
          background: skill.color,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            border: hov
              ? `0.5px solid ${skill.color}44`
              : "1.5px solid var(--border-2E)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: hov ? `${skill.color}12` : "var(--surface-blue-05)",
          }}
        >
          <Icon
            style={{
              fontSize: "24px",
              color: hov ? skill.color : "var(--text)",
            }}
          />
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 700,
              color: hov ? skill.color : "var(--text-gray)",
            }}
          >
            {skill.name}
          </div>

          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: hov ? `${skill.color}d2` : "var(--text-gray)",
            }}
          >
            {skill.desc}
          </div>
        </div>
      </div>

      {/* Bar */}
      <div
        style={{
          height: "2px",
          background: "var(--border-2E)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: skill.active ? "100%" : "50%",
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: index * 0.06,
          }}
          style={{
            height: "100%",
            background: hov ? skill.color : "var(--disabled)",
          }}
        />
      </div>
    </motion.div>
  );
}
