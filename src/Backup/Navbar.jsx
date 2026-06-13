import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { info } from '../data/portfolio'

const links = [
  { label: 'About',      href: '#about',      id: 'about'      },
  { label: 'Skills',     href: '#skills',     id: 'skills'     },
  { label: 'Projects',   href: '#projects',   id: 'projects'   },
  { label: 'Education',  href: '#education',  id: 'education'  },
  { label: 'Contact',    href: '#contact',    id: 'contact'    },
]

export default function Navbar() { 
  const [scrolled, setScrolled]       = useState(false)
  const [activeId, setActiveId]       = useState('')
  const [isDark, setIsDark]           = useState(true)
  const [themeHover, setThemeHover]   = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  /* ── scroll blur ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const observers = []

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

    maxWidth: '1200px',
    margin: '20px auto 0 auto',
    padding: '0 32px',

    borderRadius: '16px',

    background: scrolled
      ? 'rgba(255, 255, 255, 0.03)'
      : 'rgba(255, 255, 255, 0.01)',

    backdropFilter: 'blur(50px)',
    WebkitBackdropFilter: 'blur(50px)',

    border: scrolled
      ? '1px solid #4fc3f726'
      : '1px solid #ffffff3d',

    boxShadow: scrolled
      ? `
      0 8px 32px rgba(0,0,0,0.35),
      inset 0 1px 0 rgba(255,255,255,0.08)
      `
      : `
      0 8px 24px rgba(0,0,0,0.15),
      inset 0 1px 0 rgba(255,255,255,0.05)
      `,

    transition: 'all 0.3s ease',
  }

  const innerStyle = {
    padding: '16px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const logoStyle = {
    fontFamily: 'Martian Mono, monospace',
    fontSize: '16px',
    fontWeight: 700,
    color: 'var(--text)',
    letterSpacing: '0.01em',
    textDecoration: 'none',
    cursor: 'pointer',
  }

  const getLinkStyle = (id) => {
    const isActive  = activeId === id
    const isHovered = hoveredLink === id
    return {
      fontFamily: 'Martian Mono, monospace',
      fontSize: '12px',
      fontWeight: 500,
      color: isActive || isHovered ? 'var(--text-active)' : 'var(--muted)',
      textDecoration: 'none',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      transition: 'color 0.2s',
      cursor: 'pointer',
      position: 'relative',
      paddingBottom: '2px',
    }
  }

  const activeLineStyle = (id) => ({
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '1px',
    background: 'var(--text-active)',
    boxShadow: '0 0 6px var(--text-active)',
    opacity: activeId === id ? 1 : 0,
    transition: 'opacity 0.25s',
  })

  const themeToggleStyle = {
    width: '64px',
    height: '32px',
    borderRadius: '999px',
    border: isDark ? '2px solid #050505' : '2px solid #ffffff3d',
    background: isDark ? 'transparent' : '#FFFFFF',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: -12  }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...navStyle,
        overflow: 'hidden',
      }}
    >
      <div style={innerStyle}>

        {/* Logo */}
        <a href="#about" style={logoStyle}>
          {info.name.split(' ')[0]}&nbsp;
          <span style={{ color: 'var(--text-soft)' }}>BENEDICT M. GALA</span>
        </a>

        {/* Nav links */}
        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
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

        {/* Theme toggle — no function yet */}
        <button
          onClick={() => setIsDark(d => !d)}
          onMouseEnter={() => setThemeHover(true)}
          onMouseLeave={() => setThemeHover(false)}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            ...themeToggleStyle,
            border: themeHover
              ? '2px solid #4fc2f7c2'
              : isDark
              ? '2px solid #ffffff3d'
              : '2px solid #050505',
          }}
          >
          {/* Moving Circle */}
          <motion.div
            animate={{
              x: isDark ? 32 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: themeHover
                ? 'var(--text-color)'
                : isDark
                ? '#f5f5f5'
                : '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              boxShadow: themeHover
                ? '0 0 12px rgba(79,195,247,0.5)'
                : '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
          {isDark ? (
            <FiMoon
              size={16}
              color={themeHover ? '#050505' : '#050505'}
            />
          ) : (
            <FiSun
              size={16}
              color={themeHover ? '#050505' : '#E8E8E8'}
            />
          )}
        </motion.div>

          {/* Text */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: isDark ? 'flex-start' : 'flex-end',
              fontFamily: 'Martian Mono, monospace',
              fontSize: '8px',
              letterSpacing: '0.12em',
              fontWeight: 700,
            }}
          >
            {isDark ? (
              <FiSun
                size={16}
                color={themeHover ? 'var(--text-color)' : '#E8E8E8'}
              />
            ) : (
              <FiMoon
                size={16}
                color={themeHover ? 'var(--text-color)' : '#050505'}
              />
            )}
          </div>
        </button>

      </div>
    </motion.div>
  )
}
