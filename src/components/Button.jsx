import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCheck } from "react-icons/fi";
import { MdSend } from "react-icons/md";

export default function Button({
  children,
  href,
  variant = "solid",
  type = "button",
  download = false,
  sent = false,
  label,
  target = "_self",
  ...props
}) {
  const [hov, setHov] = useState(false);
  const Tag = href ? "a" : "button";

  const tagProps = {
    ...(href ? { href, target, ...(download && { download: true }) } : { type }),
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    ...props,
  };

  const isPillResume = variant === "pill-resume";
  const isPillSend = variant === "pill-send";
  const isPill = isPillResume || isPillSend;

  // ── 1. Variant Style Map ──
  const variantClasses = {
    // 🟢 FIXED: Removed background color conflict from solid base
    solid: `justify-center px-6 py-4 text-[14px] border-2 border-[var(--primary-E2)] transition-all duration-[800ms] ${
      hov ? "text-[var(--text)] scale-105 shadow-[4px_5px_16px_2px_var(--primary-59)]" : "text-[var(--text-dark)] scale-100 shadow-none"
    }`,
    ghost: `justify-center px-6 py-4 text-[14px] bg-[var(--surface-0D)] border-2 border-[var(--primary-E2)] transition-all duration-[800ms] ${
      hov ? "text-[var(--text-dark)] scale-105 shadow-[4px_5px_16px_2px_var(--primary-59)]" : "text-[var(--primary-E2)] scale-100 shadow-none"
    }`,
    "pill-resume": "justify-start px-6 py-4 text-[14px] h-full min-w-[210px] bg-[var(--surface-0D)] text-[var(--primary-E2)] border-2 border-[var(--primary-E2)]",
    "pill-send": `justify-start px-4 py-6 text-[12px] h-[46px] min-w-[180px] ${
      sent 
        ? "bg-[var(--surface-0D)] text-[var(--primary-E2)] border-[0.5px] border-[var(--primary-E2)]" 
        : "bg-[var(--primary-E2)] text-[var(--text-dark)] border-none"
    }`,
  };

  // ── 2. Pill Expand Box Style Mapping ──
  const pillBoxClasses = isPillResume
    ? `absolute right-[7px] h-[35px] border-[1.5px] border-[var(--border-67)] flex items-center justify-center shrink-0 z-10 transition-all duration-500 ease-in-out ${
        hov ? "bg-[var(--primary)] w-[calc(100%-14px)] shadow-[0_0_8px_2px_var(--primary-59)]" : "bg-[var(--text-dark)] w-[35px] shadow-none"
      }`
    : `absolute right-[7px] h-[35px] flex items-center justify-center shrink-0 z-10 transition-all duration-500 ease-in-out ${
        sent
          ? "bg-[var(--primary)] w-[35px] shadow-[0_0_8px_2px_var(--primary)]"
          : hov
            ? "bg-[var(--text-dark)] w-[calc(100%-14px)] shadow-[0_0_4px_2px_var(--surface-05)]"
            : "bg-[var(--text-dark)] w-[35px] shadow-none"
      }`;

  const PillIcon = () => {
    if (isPillSend) {
      return sent ? (
        <FiCheck size={18} className="text-[var(--text-dark)] shrink-0" />
      ) : (
        <MdSend size={16} className="text-[var(--primary-E2)] shrink-0" />
      );
    }
    return (
      <FiDownload
        size={18}
        className={`shrink-0 transition-colors duration-200 ${
          hov ? "text-[var(--text-dark)]" : "text-[var(--primary-E2)]"
        }`}
      />
    );
  };

  return (
    <Tag
      style={{ fontFamily: "var(--font-mono)" }}
      className={`relative overflow-hidden inline-flex items-center font-bold tracking-[0.06em] no-underline whitespace-nowrap cursor-pointer select-none ${variantClasses[variant]}`}
      {...tagProps}
    >
      {/* ── High-Performance Angled Slide Layer ── */}
      {(variant === "solid" || variant === "ghost") && (
        <>
          {/* Base Background Color for Solid state before hover */}
          {variant === "solid" && (
            <span className="absolute inset-0 bg-[var(--primary-E2)] z-0 pointer-events-none" />
          )}
          
          {/* Slanted Wipe Pane */}
          <motion.span
            initial={{ left: "-150%" }} // 🟢 FIXED: Sent far off-screen so the tail doesn't leak into view on load
            animate={{ left: hov ? "-15%" : "-150%" }} // 🟢 FIXED: Restructured coordinates to completely slide clear
            transition={{ duration: 1, ease: [0.3, 1, 0.3, 1] }}
            style={{
              backgroundColor: variant === "solid" ? "#0c5f78" : "var(--primary-E2)",
            }}
            className="absolute top-0 h-full w-[140%] -skew-x-[35deg] z-0 pointer-events-none"
          />
        </>
      )}

      {/* Button Text Payload Content */}
      <span className={`relative z-10 transition-all duration-[600ms] ${isPill ? "mr-[42px]" : ""}`}>
        {children ?? label}
      </span>

      {/* Slide Expanding Sliding Pill Assembly */}
      {isPill && (
        <div className={pillBoxClasses}>
          <PillIcon />
        </div>
      )}
    </Tag>
  );
}