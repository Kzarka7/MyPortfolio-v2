import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import projectImage1 from '../assets/project-image-1.png'

const projects = [
  {
    id: '001',
    title: 'BingeRoll',
    roles: ['Project Manager', 'Lead Developer'],
    desc: 'Bingeroll is a responsive web application designed for searching, cataloging, and managing media titles. The platform connects to external media databases to retrieve real-time data on movies and television series, including plot summaries, release dates, and cast details.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: projectImage1,
    github: 'https://github.com/Kzarka7/BingeRoll',
    live: 'https://kzarka7.github.io/BingeRoll/',
    status: 'LIVE',
    year: '2024',
  },
  {
    id: '002',
    title: 'Design System',
    roles: 'UI/UX & Developer',
    desc: 'Component library with 40+ primitives, dark/light design tokens, accessibility-first patterns, and full Storybook documentation. Adopted across 3 internal teams within the first month of release.',
    tags: ['Storybook', 'Tailwind', 'Figma', 'React'],
    image: 'https://placehold.co/1200x520/0f0f0f/4FC3F7?text=PROJECT+SCREENSHOT',
    github: '#',
    live: '#',
    status: 'LIVE',
    year: '2024',
  },
  {
    id: '003',
    title: 'Portfolio CMS',
    roles: 'Full Stack Developer',
    desc: 'Headless CMS-driven portfolio with animated page transitions, dynamic routing, and a custom content editing dashboard. Deployed on Vercel with ISR for near-instant page loads.',
    tags: ['Next.js', 'Sanity', 'Framer Motion', 'Vercel'],
    image: 'https://placehold.co/1200x520/0f0f0f/4FC3F7?text=PROJECT+SCREENSHOT',
    github: '#',
    live: '#',
    status: 'WIP',
    year: '2023',
  },
]

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }),
}

function ArrowButton({ direction, onClick, disabled }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '46px', height: '46px',
        border: disabled ? '0.5px solid var(--accent-dark)' : hov ? '0.5px solid var(--accent-soft)' : '0.5px solid var(--accent-hover)',
        background: hov && !disabled ? '#4fc3f70f' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        flexShrink: 0, position: 'relative', overflow: 'hidden',
      }}
    >
      <span style={{
        position: 'absolute', inset: 0,
        background: 'rgba(79,195,247,0.04)',
        transform: hov && !disabled ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: direction === 'left' ? 'right' : 'left',
        transition: 'transform 0.2s ease',
      }} />
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke={disabled ? 'var(--accent-dark)' : hov ? 'var(--accent-soft)' : 'var(--accent-hover)'}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ transition: 'stroke 0.2s', position: 'relative', zIndex: 1 }}
      >
        {direction === 'left' ? <path d="M15 18l-6-6 6-6"/> : <path d="M9 18l6-6-6-6"/>}
      </svg>
    </button>
  )
}

export default function Projects() {
  const [current, setCurrent]     = useState(0)
  const [direction, setDirection] = useState(1)
  const [cardHover, setCardHover] = useState(false)

  const goTo = (index) => {
    if (index === current) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => { if (current > 0) goTo(current - 1) }
  const next = () => { if (current < projects.length - 1) goTo(current + 1) }
  const project = projects[current]

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ padding: '80px 0', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px' }}
        >
          <div>
            <div style={{ fontFamily: 'Martian Mono, monospace', fontSize: '12px', color: 'var(--text-page)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '0.5px', background: 'var(--text-page)', display: 'block' }} />
              [ 03 ] — Work
            </div>
            <h2 style={{ fontFamily: 'Martian Mono, monospace', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
              Projects
            </h2>
          </div>
          <div style={{ fontFamily: 'Martian Mono, monospace', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </div>
        </motion.div>

        {/* Controls row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {projects.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                borderRadius: i === current ? '3px' : '50%',
                background: i === current ? 'var(--accent)' : 'var(--accent-dark)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all 0.35s ease',
                boxShadow: i === current ? '0 0 8px rgba(79,195,247,0.6)' : 'none',
                flexShrink: 0,
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <ArrowButton direction="left"  onClick={prev} disabled={current === 0} />
            <ArrowButton direction="right" onClick={next} disabled={current === projects.length - 1} />
          </div>
        </div>

        {/* Animated card — scroll fade-up wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            transition: { duration: 0.25 },
            boxShadow: '0 12px 30px rgba(79,195,247,0.12)',
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            overflow: 'hidden',
            position: 'relative',
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
                border: '0.5px solid var(--border-dark)',
                background: 'var(--surface)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top gradient line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #4FC3F7 0%, rgba(79,195,247,0.1) 100%)', zIndex: 2 }} />

              {/* Corner brackets (FIXED) */}

              {/* TOP LEFT */}
              <svg style={{ position:'absolute', top:'-1px', left:'-1px', zIndex:3 }} width="12" height="12" viewBox="0 0 12 12">
                <path d="M12 1H1V12" fill="none" stroke="var(--corner-bracket)" strokeWidth="1.5"/>
              </svg>

              {/* TOP RIGHT (FIXED) */}
              <svg style={{ position:'absolute', top:'-1px', right:'-1px', zIndex:3 }} width="12" height="12" viewBox="0 0 12 12">
                <path d="M0 1H11V12" fill="none" stroke="var(--corner-bracket)" strokeWidth="1.5"/>
              </svg>

              {/* BOTTOM LEFT (FIXED) */}
              <svg style={{ position: 'absolute', bottom: '-1px', left: '-1px', zIndex:3 }} width="12" height="12" viewBox="0 0 12 12">
                <path d="M12 11H1V0" fill="none" stroke="var(--corner-bracket)" strokeWidth="1.5" />
              </svg>

              {/* BOTTOM RIGHT */}
              <svg style={{ position:'absolute', bottom:'-1px', right:'-1px', zIndex:3 }} width="12" height="12" viewBox="0 0 12 12">
                <path d="M0 11H11V0" fill="none" stroke="var(--corner-bracket)" strokeWidth="1.5"/>
              </svg>

              {/* Image */}
              <div style={{ width: '100%', height: '400px', aspectRatio: '16/9', position: 'relative', padding: '32px 36px', }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85)',  border: '1px solid var(--border-dark)', }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,15,15,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', top: '48px', right: '52px', fontFamily: 'Martian Mono, monospace', fontSize: '9px', color: project.status === 'LIVE' ? 'var(--text-secondary)' : '#FFB347', border: `0.5px solid ${project.status === 'LIVE' ? 'var(--accent-border)' : 'rgba(255,179,71,0.4)'}`, background: 'rgba(14,14,14,0.85)', padding: '5px 12px', letterSpacing: '0.12em', backdropFilter: 'blur(6px)' }}>
                  {project.status}
                </div>
                <div style={{ position: 'absolute', top: '48px', left: '52px', fontFamily: 'Martian Mono, monospace', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.12em' }}>
                  — {project.id} · {project.year}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '32px 36px', borderTop: '0.5px solid #4fc3f71a', }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Martian Mono, monospace', fontSize: '22px', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '8px', lineHeight: 1.2 }}>
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {project.roles.map(role => (
                        <span key={role} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', letterSpacing: '0.14em', textTransform: 'uppercase', border: '0.5px solid var(--accent-border)', padding: '4px 12px', background: 'rgba(79,195,247,0.04)' }}>
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
                    <a href={project.github} target="_blank" rel="noreferrer" style={{ fontFamily: 'Martian Mono, monospace', fontSize: '10px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', border: '0.5px solid rgba(255,255,255,0.07)', padding: '8px 14px', transition: 'color 0.2s, border-color 0.2s', }}
                      onMouseEnter={e => { e.currentTarget.style.color='#4FC3F7'; e.currentTarget.style.borderColor='rgba(79,195,247,0.4)' }}
                      onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)' }}
                    >GitHub ↗</a>
                    <a href={project.live} target="_blank" rel="noreferrer" style={{ fontFamily: 'Martian Mono, monospace', fontSize: '10px', color: '#0E0E0E', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#4FC3F7', padding: '8px 14px', transition: 'opacity 0.2s', fontWeight: 700 }}
                      onMouseEnter={e => e.currentTarget.style.opacity='0.8'}
                      onMouseLeave={e => e.currentTarget.style.opacity='1'}
                    >Live ↗</a>
                  </div>
                </div>

                <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.05)', marginBottom: '16px' }} />

                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '16px', color: 'var(--text-caption)', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: 'Martian Mono, monospace', fontSize: '9px', color: '#4fc2f7c2v', border: '0.5px solid var(--accent-border)', padding: '4px 10px', letterSpacing: '0.08em', background: 'rgba(79,195,247,0.02)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
