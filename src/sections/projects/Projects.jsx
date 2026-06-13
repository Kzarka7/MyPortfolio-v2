import { useState } from "react";

import { sectionHeader } from "../../data/sections";
import { projectsData } from "../../data/projects";
import SectionHeader from "../../components/SectionHeader";
import ProjectCard from "./ProjectCard";

function ArrowButton({ direction, onClick, disabled }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "46px",
        height: "46px",
        border: disabled
          ? "0.5px solid var(--disabled)"
          : hov
            ? "0.5px solid var(--primary)"
            : "0.5px solid var(--primary-C2)",
        background: hov && !disabled ? "var(--surface-blue-05)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--surface-blue-05)",
          transform: hov && !disabled ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: direction === "left" ? "right" : "left",
          transition: "transform 0.2s ease",
        }}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={
          disabled
            ? "var(--disabled)"
            : hov
              ? "var(--primary)"
              : "var(--primary-C2)"
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.2s", position: "relative", zIndex: 1 }}
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    if (current > 0) goTo(current - 1);
  };
  const next = () => {
    if (current < projectsData.length - 1) goTo(current + 1);
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          padding: "80px 0",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <SectionHeader {...sectionHeader.projects} />

        {/* ── Controls ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "24px",
          }}
        >
          {/* Dot indicators */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {projectsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? "32px" : "10px",
                  height: "10px",
                  borderRadius: i === current ? "50px" : "50%",
                  background:
                    i === current ? "var(--primary)" : "var(--disabled)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  boxShadow:
                    i === current ? "0 0 8px var(--primary-99)" : "none",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--primary-C2)",
              letterSpacing: "0.1em",
            }}
          >
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projectsData.length).padStart(2, "0")}
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "10px" }}>
            <ArrowButton
              direction="left"
              onClick={prev}
              disabled={current === 0}
            />
            <ArrowButton
              direction="right"
              onClick={next}
              disabled={current === projectsData.length - 1}
            />
          </div>
        </div>

        {/* ── Card ── */}
        <ProjectCard project={projectsData[current]} direction={direction} />
      </div>
    </section>
  );
}
