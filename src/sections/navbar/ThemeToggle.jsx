import { useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [themeHover, setThemeHover] = useState(false);

  return (
    <button
      onClick={() => setIsDark((d) => !d)}
      onMouseEnter={() => setThemeHover(true)}
      onMouseLeave={() => setThemeHover(false)}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center justify-between w-14 h-7 p-1 rounded-full cursor-hidden overflow-hidden transition-all duration-300 border-[1.5px] ${
        themeHover
          ? "border-[var(--primary-C2)]"
          : isDark
          ? "border-[var(--border-3D)] bg-transparent"
          : "border-[var(--text-dark)] bg-[var(--text)]"
      }`}
    >
      {/* Icon Display (Sun/Moon Background Layer) */}
      <motion.div
        animate={{ x: isDark ? 0 : 30 }}
        transition={{ type: "spring", stiffness: 1000000, damping: 5000 }}
        className="w-4 h-4 flex items-center justify-center bg-transparent"
      >
        {isDark ? (
          <FiSun
            size={14}
            color={themeHover ? "var(--primary)" : "var(--text)"}
          />
        ) : (
          <FiMoon
            size={14}
            color={themeHover ? "var(--primary)" : "var(--text-dark)"}
          />
        )}
      </motion.div>

      {/* Moving Circle (The Switch Slider Ball) */}
      <motion.div
        animate={{ x: isDark ? 0 : -30 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          boxShadow: themeHover
            ? isDark
              ? "0 0 12px var(--primary-99)"
              : "0 0 12px rgba(0, 0, 0, 0.5)"
            : "none",
        }}
        className={`w-4 h-4 rounded-full flex items-center justify-center transition-[box-shadow,background-color] duration-500 ${
          themeHover
            ? "bg-[var(--primary)]"
            : isDark
            ? "bg-[var(--text)]"
            : "bg-[var(--text-dark)]"
        }`}
      >
        {isDark ? (
          <FiMoon size={14} color="var(--text-dark)" />
        ) : (
          <FiSun size={14} color="var(--text)" />
        )}
      </motion.div>
    </button>
  );
}