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
        background: hov ? `${skill.color}08` : "var(--surface)",
      }}
      className="relative flex flex-col gap-3.5 p-6 transition-all duration-250 ease-out"
    >
      {/* Corner brackets */}
      <CornerBrackets 
        color={hov ? skill.color : "var(--primary)"} 
        size="10" 
        strokeWidth="0.8" 
      />

      {/* Accent line */}
      <div
        style={{
          background: skill.color,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute top-0 left-0 right-0 h-[1.5px] origin-left transition-transform duration-500 ease-in-out"
      />

      {/* Icon & Content Row Container */}
      <div className="flex items-center gap-3.5">
        
        {/* Icon Frame Wrapper */}
        <div
          style={{
            border: hov
              ? `0.5px solid ${skill.color}44`
              : "1.5px solid var(--border-2E)",
            background: hov ? `${skill.color}12` : "var(--surface-blue-05)",
          }}
          className="w-12 h-12 flex items-center justify-center shrink-0"
        >
          <Icon
            style={{ color: hov ? skill.color : "var(--text)" }}
            className="text-[24px]"
          />
        </div>

        {/* Text Details Block */}
        <div className="min-w-0">
          <div
            style={{ 
              fontFamily: "var(--font-mono)",
              color: hov ? skill.color : "var(--text-gray)" 
            }}
            className="text-[14px] font-bold tracking-tight truncate"
          >
            {skill.name}
          </div>

          <div
            style={{ 
              fontFamily: "var(--font-body)",
              color: hov ? `${skill.color}d2` : "var(--text-gray)" 
            }}
            className="text-[12px] leading-snug mt-0.5 line-clamp-2"
          >
            {skill.desc}
          </div>
        </div>
      </div>

      {/* Animated Proficiency Bar */}
      <div className="h-[2px] bg-[var(--border-2E)] overflow-hidden w-full mt-auto">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: index * 0.06,
          }}
          style={{ background: hov ? skill.color : "var(--disabled)" }}
          className="h-full"
        />
      </div>
    </motion.div>
  );
}