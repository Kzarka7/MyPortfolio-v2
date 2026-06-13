import { useState } from "react";
import { motion } from "framer-motion";

import CornerBrackets from "../../components/CornerBrackets";
import Button from "../../components/Button";

export default function ContactCard() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

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
    transition: "border-color 0.2s",
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
      initial={{ opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
        boxShadow: "0 12px 30px var(--primary-1F)",
      }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: [0.5, 1, 0.5, 1] }}
      style={{
        border: "0.5px solid var(--border-2E)",
        background: "var(--surface)",
        padding: "40px",
        position: "relative",
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
        <span>{sent ? "STATUS: SENT" : "STATUS: READY"}</span>
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
            />
          </div>
        </div>

        {/* Message */}
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
            required
            autoComplete="off"
            style={{ ...inputStyle("message"), resize: "none" }}
          />
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
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--disabled)",
              letterSpacing: "0.1em",
            }}
          >
            {sent ? "// transmission received" : "// all fields are required"}
          </span>

          <Button variant="pill-send" type="submit" sent={sent}>
            {sent ? "MESSAGE SENT" : "SEND MESSAGE"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
