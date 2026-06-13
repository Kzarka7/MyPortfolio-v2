import { useState } from "react";
import { motion } from "framer-motion";

import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [themeHover, setThemeHover] = useState(false);

  const themeToggleStyle = {
    width: "64px",
    height: "32px",
    border: isDark
      ? "1.5px solid var(--text-dark)"
      : "1.5px solid var(--border-3D)",
    background: isDark ? "transparent" : "var(--text)",
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "4px",
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.3s ease",

    borderRadius: "50px",
    border: themeHover
      ? "1.5px solid var(--primary-C2)"
      : isDark
        ? "1.5px solid var(--border-3D)"
        : "1.5px solid var(--text-dark)",
  };

  const themeSolidStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",

    background: themeHover
      ? "var(--primary)"
      : isDark
        ? "var(--text)"
        : "var(--text-dark)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    boxShadow: themeHover
      ? isDark
        ? "0 0 12px var(--primary-99)"
        : "0 0 12px rgba(0, 0, 0, 0.5)"
      : "none",
    transition: "boxShadow 0.5s ease, background 0.5s ease",
  };

  const themeLightStyle = {
    width: "20px",
    height: "20px",
    background: "transparent",
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button
      onClick={() => setIsDark((d) => !d)}
      onMouseEnter={() => setThemeHover(true)}
      onMouseLeave={() => setThemeHover(false)}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        ...themeToggleStyle,
      }}
    >
      {/* Text */}
      <motion.div
        animate={{ x: isDark ? 0 : 34 }}
        transition={{ type: "spring", stiffness: 1000000, damping: 5000 }}
        style={{
          ...themeLightStyle,
        }}
      >
        {isDark ? (
          <FiSun
            size={16}
            color={themeHover ? "var(--primary)" : "var(--text)"}
          />
        ) : (
          <FiMoon
            size={16}
            color={themeHover ? "var(--primary)" : "var(--text-dark)"}
          />
        )}
      </motion.div>

      {/* Moving Circle */}
      <motion.div
        animate={{ x: isDark ? 0 : -34 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          ...themeSolidStyle,
        }}
      >
        {isDark ? (
          <FiMoon size={16} color={"var(--text-dark)"} />
        ) : (
          <FiSun size={16} color={"var(--text)"} />
        )}
      </motion.div>
    </button>
  );
}
