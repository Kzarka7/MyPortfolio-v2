import { useState } from "react";

export default function FooterLinks({ item }) {
  const [hov, setHov] = useState(false);
  const Icon = item.icon;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Icon
          style={{
            fontSize: "22px",
            color: hov ? "var(--primary)" : "var(--text)",
            transition: "color 0.2s, transform 0.2s",
            transform: hov ? "scale(1.25)" : "scale(1)",
            display: "block",
          }}
        />
      </a>

      {/* Tooltip */}
      <div
        style={{
          position: "absolute",
          bottom: "140%",
          left: "50%",
          transform: hov
            ? "translateX(-50%) scale(1)"
            : "translateX(-50%) scale(0)",
          transformOrigin: "bottom center",
          transition: "transform 0.2s ease-in-out",
          background: "var(--text-dark)",
          border: "0.5px solid var(--disabled)",
          padding: "5px 12px",
          whiteSpace: "nowrap",
          zIndex: 50,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--primary)",
            letterSpacing: "0.1em",
          }}
        >
          {item.label}
        </span>
        <div
          style={{
            position: "absolute",
            bottom: "-4px",
            left: "50%",
            transform: "translateX(-50%) rotate(45deg)",
            width: "6px",
            height: "6px",
            background: "var(--text-dark)",
            borderRight: "0.5px solid var(--disabled)",
            borderBottom: "0.5px solid var(--disabled)",
          }}
        />
      </div>
    </div>
  );
}
