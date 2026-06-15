import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CornerBrackets from "../../components/CornerBrackets";

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProjectsCard({ project, direction }) {
  const [current, setCurrent] = useState(0);
  const [cardHover, setCardHover] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
  const [liveHover, setLiveHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
        boxShadow: "0 12px 30px var(--primary-1F)",
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: [0.5, 1, 0.5, 1],
      }}
      style={{
        position: "relative",
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={project.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            border: "0.5px solid var(--border-2E)",
            background: "var(--surface)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top gradient line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "var(--primary-C2)",
              zIndex: 2,
            }}
          />

          {/* Corner brackets (FIXED) */}
          <CornerBrackets color="var(--primary)" size="14" strokeWidth="1.2" />

          {/* Image */}
          <div
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(false)}
            style={{
              width: "100%",
              height: "400px",
              aspectRatio: "16/9",
              position: "relative",
              padding: "32px 36px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                border: imgHover
                  ? "1px solid var(--primary)"
                  : "1px solid var(--primary-C2)",
                transition: "border 0.3s ease",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.85)",
                  transform: imgHover ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.4s ease",
                }}
              />
            </div>
            <div style={{ position: "absolute", inset: 0 }} />
            <div
              style={{
                position: "absolute",
                top: "48px",
                right: "52px",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--primary)",
                border: "0.5px solid var(--border-67)",
                background: "var(--surface-blue-05)",
                padding: "5px 12px",
                letterSpacing: "0.12em",
                backdropFilter: "blur(6px)",
              }}
            >
              {project.status}
            </div>
            <div
              style={{
                position: "absolute",
                top: "48px",
                left: "52px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--primary-C2)",
                letterSpacing: "0.12em",
              }}
            >
              — {project.id} · {project.year}
            </div>
          </div>

          {/* Card body */}
          <div
            style={{
              padding: "32px 36px",
              borderTop: "0.5px solid var(--border-2E)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "20px",
                marginBottom: "16px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      style={{
                        fontFamily: "var(--font-barl)",
                        fontSize: "16px",
                        color: "var(--primary)",
                        border: "0.5px solid var(--border-67)",
                        padding: "4px 12px",
                        letterSpacing: "0.14em",
                        background: "var(--surface-blue-05)",
                        textTransform: "uppercase",
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexShrink: 0,
                }}
              >
                <a
                  onMouseEnter={() => setGithubHover(true)}
                  onMouseLeave={() => setGithubHover(false)}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: githubHover ? "var(--primary)" : "var(--text-gray)",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: githubHover
                      ? "0.5px solid var(--border-67)"
                      : "0.5px solid var(--border-3D)",
                    padding: "8px 14px",
                    transition: "color 0.2s, border-color 0.2s",
                    background: "var(--surface-blue-05)",
                  }}
                >
                  GitHub ↗
                </a>
                <a
                  onMouseEnter={() => setLiveHover(true)}
                  onMouseLeave={() => setLiveHover(false)}
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-dark)",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: liveHover
                      ? "var(--primary)"
                      : "var(--primary-C2)",
                    padding: "8px 14px",
                    transition: "background 0.3s",
                    fontWeight: 700,
                  }}
                >
                  Live ↗
                </a>
              </div>
            </div>

            <div style={{ height: "0.5px", marginBottom: "16px" }} />

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--text-gray)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "20px",
              }}
            >
              {project.desc}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--primary-C2)",
                    border: "0.5px solid var(--border-67)",
                    padding: "4px 10px",
                    letterSpacing: "0.08em",
                    background: "var(--surface-blue-05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
