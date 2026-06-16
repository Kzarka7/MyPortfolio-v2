import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🟢 Added AnimatePresence
import { FiMenu, FiX } from "react-icons/fi"; // 🟢 Added FiX to swap icons when open

import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🟢 Toggle tracking state

  /* ── scroll blur ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* 🟢 Combined <motion.nav> container. flex-col keeps the dropdown positioned right under the pill */
    <motion.nav
      initial={{ opacity: 0, y: "-100%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [5, 5, 5, 5] }}
      className="fixed top-4 left-4 right-4 z-[100] flex flex-col items-center max-w-[1200px] mx-auto md:left-0 md:right-0"
    >
      {/* ⚠️ REMOVED 'overflow-hidden' from here so the dropdown box can overflow out of this bar */}
      <div
        className={`w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-2xl border border-[var(--border-3D)] shadow-[0_8px_24px_rgba(27,27,27,0.3)] backdrop-blur-[50px] transition-all duration-300 ease-in-out ${
          scrolled ? "bg-[#ffffff08]" : "bg-[#ffffff06]"
        }`}
      >
        <a
          href="#about"
          style={{ fontFamily: "var(--font-mono)" }}
          className="font-bold text-[16px] text-[var(--text)] tracking-[0.01em] no-underline cursor-pointer select-none"
        >
          JOHN
          <span className="text-[var(--primary)] md:hidden">.</span>
          <span className="text-[var(--primary)] hidden md:inline">
            &nbsp;BENEDICT M. GALA
          </span>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)} // 🟢 Toggles visibility state true/false
            className="flex md:hidden items-center justify-center p-1.5 rounded-lg text-[var(--text)] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {/* 🟢 Swaps icon seamlessly based on state */}
            {isOpen ? (
              <FiX className="w-[22px] h-[22px]" />
            ) : (
              <FiMenu className="w-[22px] h-[22px]" />
            )}
          </button>
        </div>
      </div>

      {/* 🟢 Animated Presence nested inside the shared parent layout block */}
      <AnimatePresence className="block md:hidden">
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
}
