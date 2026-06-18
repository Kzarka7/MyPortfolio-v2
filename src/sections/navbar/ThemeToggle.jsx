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
      /* ── 🛠️ UPDATE: We inject the exact slide distances as custom CSS properties directly via Tailwind [--name:value] ── */
      className={`relative flex items-center justify-between w-14 md:w-16 h-7 md:h-8 p-1 rounded-full cursor-pointer overflow-hidden transition-all duration-300 border-[1.5px] 
        [--slide-dist:30px] md:[--slide-dist:34px] 
        ${
          themeHover
            ? "border-[var(--primary-C2)]"
            : isDark
            ? "border-[var(--border-3D)] bg-transparent"
            : "border-[var(--text-dark)] bg-[var(--text)]"
        }`}
    >
      {/* Icon Display (Sun/Moon Background Layer) */}
      <motion.div
        /* ── 🛠️ UPDATE: Reads the active CSS property. If it's light mode, it shifts right by the responsive variable amount ── */
        animate={{ x: isDark ? 0 : "var(--slide-dist)" }}
        transition={{ type: "spring", stiffness: 1000000, damping: 5000 }}
        className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center bg-transparent"
      >
        {isDark ? (
          <FiSun
            className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--text)] transition-colors duration-200"
            style={{ color: themeHover ? "var(--primary)" : undefined }}
          />
        ) : (
          <FiMoon
            className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--text-dark)] transition-colors duration-200"
            style={{ color: themeHover ? "var(--primary)" : undefined }}
          />
        )}
      </motion.div>

      {/* Moving Circle (The Switch Slider Ball) */}
      <motion.div
        /* ── 🛠️ UPDATE: Shifts left dynamically on light mode based on the responsive layout tracking ── */
        animate={{ x: isDark ? 0 : "calc(-1 * var(--slide-dist))" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          boxShadow: themeHover
            ? isDark
              ? "0 0 12px var(--primary-99)"
              : "0 0 12px rgba(0, 0, 0, 0.5)"
            : "none",
        }}
        className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-[box-shadow,background-color] duration-500 ${
          themeHover
            ? "bg-[var(--primary)]"
            : isDark
            ? "bg-[var(--text)]"
            : "bg-[var(--text-dark)]"
        }`}
      >
        {isDark ? (
          <FiMoon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--text-dark)]" />
        ) : (
          <FiSun className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--text)]" />
        )}
      </motion.div>
    </button>
  );
}