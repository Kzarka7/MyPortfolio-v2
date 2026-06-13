import { useState, useEffect } from "react";
import { links } from "../../data/navbar";

export default function NavLinks() {
  const [activeId, setActiveId] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const observers = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const getLinkStyle = (id) => {
    const isActive = activeId === id;
    const isHovered = hoveredLink === id;
    return {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      fontWeight: 500,
      color: isActive || isHovered ? "var(--primary)" : "var(--text-gray)",
      textDecoration: "none",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      transition: "color 0.2s",
      cursor: "pointer",
      position: "relative",
      paddingBottom: "2px",
    };
  };

  const activeLineStyle = (id) => ({
    position: "absolute",
    bottom: "-6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "1.5px",
    background: "var(--primary)",
    boxShadow: "0 0 12px var(--primary)",
    opacity: activeId === id ? 1 : 0,
    transition: "opacity 0.25s",
  });

  return (
    <ul
      style={{
        display: "flex",
        gap: "28px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {links.map(({ label, href, id }) => (
        <li key={id}>
          <a
            href={href}
            style={getLinkStyle(id)}
            onMouseEnter={() => setHoveredLink(id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {label}
            {/* Active line indicator */}
            <span style={activeLineStyle(id)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
