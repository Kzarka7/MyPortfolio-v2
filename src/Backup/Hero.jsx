import { useState, useRef } from 'react'
import { hover, motion, useInView } from 'framer-motion'
import { info } from '../data/portfolio'
import { FiDownload } from 'react-icons/fi'

import profileImage1 from '../assets/profile-image.png'

function CornerTL({ size = 16 }) {
  return (
    <svg style={{ position:'absolute', top:'-1px', left:'-1px' }} width={size} height={size} viewBox="0 0 14 14">
      <path d="M14 1H1V14" fill="none" stroke="var(--corner-bracket)" strokeWidth="2"/>
    </svg>
  )
}
function CornerTR({ size = 16 }) {
  return (
    <svg style={{ position:'absolute', top:'-1px', right:'-1px' }} width={size} height={size} viewBox="0 0 14 14">
      <path d="M0 1H13V14" fill="none" stroke="var(--corner-bracket)" strokeWidth="2"/>
    </svg>
  )
}
function CornerBL({ size = 16 }) {
  return (
    <svg style={{ position:'absolute', bottom:'-1px', left:'-1px' }} width={size} height={size} viewBox="0 0 14 14">
      <path d="M10 9H1V0" fill="none" stroke="var(--corner-bracket)" strokeWidth="2"/>
    </svg>
  )
}
function CornerBR({ size = 16 }) {
  return (
    <svg style={{ position:'absolute', bottom:'-1px', right:'-1px' }} width={size} height={size} viewBox="0 0 14 14">
      <path d="M0 13H13V0" fill="none" stroke="var(--corner-bracket)" strokeWidth="2"/>
    </svg>
  )
}

export default function Hero() {
  const [projectsHover, setProjectsHover] = useState(false)
  const [contactHover, setContactHover] = useState(false)
  const [hovered, setHovered] = useState(false)

  const heroRef = useRef(null)

  const isInView = useInView(heroRef, {
    once: false,
    amount: 0.2,
  })

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  })

  return (
    <section
      ref={heroRef}
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '60px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >

        {/* LEFT */}
        <div>

          <motion.div {...fade(0)} style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: 'var(--disabled)',
            letterSpacing: '0.12em',
            marginBottom: '20px',
          }}>
            X: 0000 / Y: 0000 / SECTOR_INIT
          </motion.div>

          <motion.div {...fade(0.1)} style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '12px',
            color: 'var(--text-page)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px',
          }}>
            <span style={{ width:'24px', height:'0.5px', background:'var(--text-page)' }} />
            {info.role}
          </motion.div>

          <motion.h1 {...fade(0.18)} style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: 'clamp(36px, 5vw, 54px)',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '10px',
          }}>
            {info.name.split(' ')[0]}<br />
            <span style={{ color: 'var(--text-soft)' }}>BENEDICT M. GALA</span>
          </motion.h1>

          <motion.p {...fade(0.26)} style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '17px',
            fontWeight: 500,
            color: 'var(--muted)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '22px',
          }}>
            {info.tagline}
          </motion.p>

          <motion.p {...fade(0.32)} style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '14px',
            color: 'var(--text-caption)',
            lineHeight: 1.75,
            maxWidth: '600px',
            marginBottom: '32px',
            fontWeight: 300,
          }}>
            {info.bio}
          </motion.p>

          <motion.div {...fade(0.4)} style={{ display: 'flex', gap: '12px' }}>

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              onMouseEnter={() => setProjectsHover(true)}
              onMouseLeave={() => setProjectsHover(false)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Martian Mono, monospace',
                fontSize: '14px',
                fontWeight: 700,
                color: projectsHover ? 'var(--text)' : 'var(--text-black)',
                background: 'var(--accent)',
                border: '2px solid var(--accent-border)',
                padding: '16px 24px',
                cursor: 'pointer',
                letterSpacing: projectsHover ? '0.09em' : '0.06em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: projectsHover ? 'scale(1.05)' : 'scale(1)',
                boxShadow: projectsHover
                  ? '4px 5px 17px -4px rgba(79,195,247,0.45)'
                  : 'none',
              }}
            >
              <span style={{
                position: 'absolute',
                left: '-50px',
                top: 0,
                width: projectsHover ? '250%' : '0',
                height: '100%',
                background: 'var(--accent-dark)',
                transform: 'skewX(45deg)',
                transition: 'width 1s',
                zIndex: 0,
              }} />

              <span style={{ position: 'relative', zIndex: 1 }}>
                VIEW PROJECTS
              </span>
            </a>

            {/* GET IN TOUCH */}
            <a
              href="#contact"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Martian Mono, monospace',
                fontSize: '14px',
                fontWeight: 500,
                color: contactHover ? 'var(--text-black)' : 'var(--text)',
                background: 'transparent',
                border: '2px solid var(--accent-border)',
                padding: '16px 24px',
                cursor: 'pointer',
                letterSpacing: contactHover ? '0.09em' : '0.06em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: contactHover ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span style={{
                position: 'absolute',
                left: '-50px',
                top: 0,
                width: contactHover ? '250%' : '0',
                height: '100%',
                background: 'var(--accent)',
                transform: 'skewX(45deg)',
                transition: 'width 1s',
                zIndex: 0,
              }} />

              <span style={{ position: 'relative', zIndex: 1 }}>
                GET IN TOUCH
              </span>
            </a>

            {/* DOWNLOAD RESUME (unchanged structure, smooth scroll aware hover still works) */}
            <a
              href="#"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                position: 'relative',
                color: 'var(--text)',
                border: '2px solid var(--accent-border)',
                fontFamily: 'Martian Mono, monospace',
                fontSize: '14px',
                letterSpacing: '0.08em',
                padding: '0 20px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 1s ease',
              }}
            >
              <span style={{ marginRight: '42px' }}>
                DOWNLOAD RESUME
              </span>

              <div
                style={{
                  position: 'absolute',
                  margin: '7px 7px',
                  right: '0',
                  fontSize: hovered ? '18px' : '16px',
                  color: hovered ? 'var(--text-black)' : 'var(--accent)',
                  background: hovered ? 'var(--accent)' : 'var(--text-black)',
                  border: '1.5px solid var(--accent)',
                  height: '35px',
                  width: hovered ? 'calc(100% - 5.5%)' : '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <FiDownload />
              </div>
            </a>

          </motion.div>
        </div>

        {/* RIGHT IMAGE (restored, unchanged structure feel) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Outer pulsing glow ring */}
          <motion.div
            animate={{ boxShadow: [
              '0 0 0px 0px rgba(168, 85, 247, 0)',
              '0 0 28px 16px rgba(168, 85, 247, 0.1)',
              '0 0 0px 0px rgba(168, 85, 247, 0)',
            ]}}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: '-10px', border: '0.5px solid green', pointerEvents: 'none' }}
          />

          {/* Square image frame */}
          <div style={{
            width: '100%',
            aspectRatio: '1 / 1',
            border: '0.5px solid var(--border-dark)',
            overflow: 'hidden',
            position: 'relative',
            background: 'var(--surface)',
          }}>
            <CornerTL size={16} />
            <CornerTR size={16} />
            <CornerBL size={16} />
            <CornerBR size={16} />

            <img
              src={profileImage1}
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.1)', scale: '0.8' }}
            />

            {/* Bottom gradient overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 70%)' }} />

            {/* Name tag */}
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
              <div style={{ fontFamily: 'Martian Mono, monospace', fontSize: '8px', color: 'var(--disabled', letterSpacing: '0.14em', marginBottom: '3px' }}>
                // PROFILE_IMG
              </div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '12px', color: 'var(--text)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                {info.name}
              </div>
            </div>

            {/* Scan line */}
            <motion.div
              animate={{ top: ['-2px', '102%', '-2px'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 2.5 }}
              style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(79,195,247,0.5), transparent)', pointerEvents: 'none' }}
            />
          </div>

          {/* OPEN TO INTERNSHIP badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            style={{ position: 'absolute', top: '-14px', right: '-14px', display: 'flex', alignItems: 'center', gap: '7px', background: 'rgba(14,14,14,0.95)', border: '0.5px solid var(--accent-border)', padding: '6px 12px', backdropFilter: 'blur(8px)' }}
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)', display: 'block', flexShrink: 0 }}
            />
            <span style={{ fontFamily: 'Martian Mono, monospace', fontSize: '9px', color: 'var(--text-secondary)', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
              OPEN TO INTERNSHIP
            </span>
          </motion.div>

          {/* Measurement annotation */}
          <div style={{ position: 'absolute', right: '-44px', top: '50%', transform: 'translateY(-50%) rotate(90deg)', fontFamily: 'Martian Mono, monospace', fontSize: '8px', color: 'var(--disabled)', letterSpacing: '0.16em', whiteSpace: 'nowrap' }}>
            320×320 · 1:1
          </div>

        </motion.div>

      </div>
    </section>
  )
}