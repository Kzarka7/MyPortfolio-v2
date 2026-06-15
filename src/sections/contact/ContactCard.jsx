import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CornerBrackets from "../../components/CornerBrackets";
import Button from "../../components/Button";

const MAX_CHARS = 1000;

/* ── Ease-out expo — fluid, never linear ── */
const EASE = [0.16, 1, 0.3, 1];

/* ── EmailJS Keys ── */
const SERVICE_ID = "service_pdcj379";
const TEMPLATE_ID = "template_jqa9msp";
const PUBLIC_KEY = "hJegStJOIQE5IWyyM";

export default function ContactCard() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [hov, setHov] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ── Whitelist Security Email Submission System ── */
  /* ── Clean & Balanced Submission Security ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailClean = form.email.trim().toLowerCase();

    // 1. Structural Verification: Ensures standard structure with a valid 2-6 char TLD
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailClean)) {
      alert("Transmission failed: Invalid email structure detected.");
      return;
    }

    const parts = emailClean.split("@");
    const username = parts[0];
    const domain = parts[1];

    // 2. Streamlined Mash Filter: Rejects obvious keyboard mashes (e.g., asdfg, qweqwe)
    // Checks for 5+ consecutive consonants OR a simple character repetition
    const continuousConsonants = /[^aeiouy._%+-]{5,}/i;
    const repeatingPattern = /(.)\1{4,}/;

    if (
      continuousConsonants.test(username) ||
      repeatingPattern.test(username) ||
      domain.includes("qwe") ||
      username === "test"
    ) {
      alert(
        "System Warning: Submission blocked. Please use a valid email identity.",
      );
      return;
    }

    // ── Validation Passed: Fire EmailJS Pipeline ──
    try {
      setSending(true);

      const currentTimestamp = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: emailClean,
          time: currentTimestamp,
          message: form.message.trim(),
        },
        PUBLIC_KEY,
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("System Interface Fault - EmailJS Error:", err);
      alert(
        "Transmission pipeline interrupted. Please review your server keys.",
      );
    } finally {
      setSending(false);
    }
  };

  const charCount = form.message.length;
  const pct = charCount / MAX_CHARS;
  const isNearLimit = pct >= 0.8;
  const isAtLimit = pct >= 1;

  const counterColor = isAtLimit
    ? "#ef4444"
    : isNearLimit
      ? "#f59e0b"
      : "var(--muted)";

  const inputStyle = (field) => ({
    width: "100%",
    background: "transparent",
    border:
      focused === field
        ? "0.5px solid var(--border-67)"
        : "0.5px solid var(--border-2E)",
    padding: "13px 16px",
    fontFamily: "var(--font-mono)",
    fontSize: "12px",
    color: "var(--text)",
    outline: "none",
    letterSpacing: "0.03em",
    transition: "border-color 0.2s ease",
    cursor: "text",
  });

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "14px",
    color: "var(--primary)",
    letterSpacing: "0.14em",
    marginBottom: "6px",
    textTransform: "uppercase",
    display: "block",
  };

  return (
    <motion.div
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: EASE }}
      style={{
        border: hov
          ? "0.5px solid var(--border-67)"
          : "0.5px solid var(--border-2E)",
        background: "var(--surface)",
        padding: "40px",
        position: "relative",
        willChange: "transform",
        transition: "border 0.3s ease",
      }}
    >
      <CornerBrackets color="var(--primary)" size="14" strokeWidth="1.2" />

      {/* Label row */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "var(--disabled)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: "28px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>FORM_TRANSMISSION.JSX</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={sending ? "sending" : sent ? "sent" : "ready"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {sending
              ? "STATUS: SENDING"
              : sent
                ? "STATUS: SENT"
                : "STATUS: READY"}
          </motion.span>
        </AnimatePresence>
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {/* Name + Email */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <div>
            <span style={labelStyle}>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              placeholder="Your name"
              style={inputStyle("name")}
              required
              autoComplete="off"
              disabled={sending}
            />
          </div>
          <div>
            <span style={labelStyle}>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              placeholder="you@email.com"
              style={inputStyle("email")}
              required
              autoComplete="off"
              disabled={sending}
            />
          </div>
        </div>

        {/* Message + character counter */}
        <div>
          <span style={labelStyle}>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            placeholder="Tell me about your project or opportunity..."
            rows={8}
            maxLength={MAX_CHARS}
            required
            autoComplete="off"
            disabled={sending}
            style={{ ...inputStyle("message"), resize: "none" }}
          />

          {/* Character counter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "var(--border-2E)",
                marginRight: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.div
                animate={{
                  scaleX: pct,
                  backgroundColor: isAtLimit
                    ? "#ef4444"
                    : isNearLimit
                      ? "#f59e0b"
                      : "var(--primary)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  transformOrigin: "left",
                  willChange: "transform",
                }}
              />
            </div>

            <motion.span
              animate={{ color: counterColor }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                flexShrink: 0,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {charCount} / {MAX_CHARS}
            </motion.span>
          </div>
        </div>

        {/* Submit row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={sending ? "sending" : sent ? "received" : "required"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--disabled)",
                letterSpacing: "0.1em",
              }}
            >
              {sending
                ? "// processing upload data..."
                : sent
                  ? "// transmission received"
                  : "// all fields are required"}
            </motion.span>
          </AnimatePresence>

          <Button
            variant="pill-send"
            type="submit"
            disabled={sending}
            sent={sent}
          >
            {sending ? "SENDING..." : sent ? "MESSAGE SENT" : "SEND MESSAGE"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
