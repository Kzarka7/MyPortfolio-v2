import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "SYSTEM: INITIALIZING CORE PROTOCOLS...",
  "VIRTUAL DOM: CONNECTING DATA DISKS...",
  "METRICS: FETCHING TELEMETRY CHANNEL...",
  "GUI: RENDERING HUD GRAPHICS ACTIVE.",
  "SECURITY: HANDSHAKE SUCCESSFUL.",
];

export default function Preloader({ onComplete }) {
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);

  // 🔄 Synchronized: Cycles through the 5 log entries exactly every 800ms
  useEffect(() => {
    if (currentLog < BOOT_LOGS.length - 1) {
      const logTimeout = setTimeout(() => {
        setCurrentLog((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(logTimeout);
    }
  }, [currentLog]);

  // 🔄 Exact Precision: Ticks up to exactly 100% at the 4000ms mark, then holds for 1000ms
  useEffect(() => {
    const totalLoadingTime = 4000; 
    const tickRate = 40; 
    const totalTicks = totalLoadingTime / tickRate; 
    const incrementPerTick = 100 / totalTicks; 

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // ── 🎯 THE FINAL HOLD ──
          setTimeout(onComplete, 1000); 
          return 100;
        }
        return Math.min(prev + incrementPerTick, 100);
      });
    }, tickRate);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scaleY: 0.005, // Collapses vertically like an old CRT television screen switching off
        transition: { duration: 0.4, ease: [0.85, 0, 0.15, 1] },
      }}
      style={{
        fontFamily: "var(--font-mono)",
      }}
      className="fixed inset-0 bg-[#06090e] z-[9999] flex flex-col justify-center items-center p-5 overflow-hidden"
    >
      {/* 🟢 Ambient Cyberpunk Radar Glows (Option 2) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top Left Deep Blue Glow */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#0055ff] rounded-full filter blur-[120px]"
        />
        
        {/* Bottom Right Cyan Glow */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[var(--primary,#00f0ff)] rounded-full filter blur-[120px]"
        />
      </div>

      {/* Background Matrix Scanning Line Grid Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Main Terminal Shell Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[420px] relative z-[2]"
      >
        {/* Terminal Text Log */}
        <div className="h-[45px] mb-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentLog}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.15 }}
              className="text-[12px] text-[var(--primary,#00f0ff)] tracking-[0.05em] m-0 flex items-center"
            >
              <span>&gt;&nbsp;{BOOT_LOGS[currentLog]}</span>
              {/* Blinking Terminal Prompt Cursor Block */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  ease: "steps(2)",
                }}
                className="inline-block w-[7px] h-[14px] bg-[var(--primary,#00f0ff)] ml-1.5"
              />
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Outer Tech Frame Grid */}
        <div className="border-[0.5px] border-[var(--border-2E,#222)] p-1 relative bg-[rgba(0,240,255,0.01)]">
          {/* Tech decorative crosshairs */}
          <div className="absolute top-[-3px] left-[-3px] w-[6px] h-[6px] border-l border-t border-[var(--primary,#00f0ff)]" />
          <div className="absolute bottom-[-3px] right-[-3px] w-[6px] h-[6px] border-r border-b border-[var(--primary,#00f0ff)]" />

          {/* Progress Bar Track */}
          <div className="h-[6px] bg-white/[0.01] w-full overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.04 }}
              className="h-full bg-gradient-to-r from-[#0055ff] to-[var(--primary,#00f0ff)]"
              style={{ boxShadow: "0 0 8px rgba(0, 240, 255, 0.4)" }}
            />
          </div>
        </div>

        {/* Counter & Status Display */}
        <div className="flex justify-between mt-2.5 text-[10px] text-[var(--text-gray,#888)] tracking-[0.1em]">
          <span className="flex items-center gap-1.5">
            {/* Pulsing online network indicator dot */}
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className={`w-[5px] h-[5px] rounded-full ${
                progress === 100 ? "bg-[#00ffaa]" : "bg-[var(--primary,#00f0ff)]"
              }`}
            />
            SYS_BOOT_SEQUENCE
          </span>
          <span className="text-[var(--text,#fff)] font-bold">
            {Math.round(progress).toString().padStart(2, "0")}%
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}