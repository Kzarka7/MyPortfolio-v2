import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { info } from "../../data/portfolio";

import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  /* ── scroll blur ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

    overflow: "hidden",

    maxWidth: "1200px",
    margin: "20px auto 0 auto",
    padding: "0 32px",

    borderRadius: "16px",

    background: scrolled ? "#ffffff08" : "#ffffff06",

    backdropFilter: "blur(50px)",
    WebkitBackdropFilter: "blur(50px)",

    border: "1px solid var(--border-3D)",

    boxShadow: "0 8px 24px rgba(27, 27, 27, 0.3)",

    transition: "all 0.3s ease",
  };

  const innerStyle = {
    padding: "16px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--text)",
    letterSpacing: "0.01em",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...navStyle,
      }}
    >
      <div style={innerStyle}>
        {/* Logo */}
        <a href="#about" style={logoStyle}>
          {info.name.split(" ")[0]}&nbsp;
          <span style={{ color: "var(--primary)" }}>BENEDICT M. GALA</span>
        </a>

        {/* Nav links */}
        <NavLinks />

        {/* Theme toggle — no function yet */}
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
