import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiGithub, SiFacebook, SiGmail } from 'react-icons/si'
import { FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/Kzarka7',         icon: SiGithub     },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-benedict-gala-665b69412/',      icon: FaLinkedinIn },
  { label: 'Facebook', href: 'https://www.facebook.com/JownB.7',   icon: SiFacebook   },
  { label: 'Email',    href: 'mailto:johngala2018@email.com',      icon: SiGmail      },
]

const contactInfo = [
  { icon: FaEnvelope,      label: 'johngala2018@email.com',                 },
  { icon: FaPhone,         label: '+63 992 606 4299',                       },
  { icon: FaMapMarkerAlt,  label: 'Maslog, Danao City, Cebu, Philippines'   },
]

function SocialIcon({ item }) {
  const [hov, setHov] = useState(false)
  const Icon = item.icon

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', cursor: 'pointer' }}
      >
        <Icon style={{
          fontSize: '22px',
          color: hov ? '#4FC3F7' : '#E8E8E0',
          transition: 'color 0.2s, transform 0.2s',
          transform: hov ? 'scale(1.25)' : 'scale(1)',
          display: 'block',
        }} />
      </a>

      {/* Tooltip */}
      <div style={{
        position: 'absolute',
        bottom: '140%',
        left: '50%',
        transform: hov ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
        transformOrigin: 'bottom center',
        transition: 'transform 0.2s ease-in-out',
        background: '#0E0E0E',
        border: '0.5px solid var(--accent-border)',
        padding: '5px 12px',
        whiteSpace: 'nowrap',
        zIndex: 50,
        pointerEvents: 'none',
      }}>
        <span style={{ fontFamily: 'Martian Mono, monospace', fontSize: '10px', color: '#4FC3F7', letterSpacing: '0.1em' }}>
          {item.label}
        </span>
        <div style={{
          position: 'absolute',
          bottom: '-4px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '6px', height: '6px',
          background: '#0E0E0E',
          borderRight: '0.5px solid var(--accent-border)',
          borderBottom: '0.5px solid var(--accent-border)',
        }} />
      </div>
    </div>
  )
}

function ContactItem({ item }) {
  const Icon = item.icon
  const content = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Icon style={{ fontSize: '12px', color: '#E8E8E0', flexShrink: 0 }} />
      <span style={{ fontFamily: 'Martian Mono, monospace', fontSize: '12px', color: 'var(--text)', letterSpacing: '0.04em' }}>
        {item.label}
      </span>
    </div>
  )
  return item.href
    ? <a href={item.href} style={{ textDecoration: 'none' }}>{content}</a>
    : content
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '0.5px solid #4fc3f726',
      background: '#0e0e0e67',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 0 28px' }}>

        {/* ── 3-COLUMN GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '20px',
          paddingBottom: '20px',
          borderBottom: '0.5px solid #ffffff2f',
        }}>

          {/* COL 1 — Name + School */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: '18px',
              fontWeight: 700,
              color: '#E8E8E0',
              letterSpacing: '-0.01em',
              marginBottom: '10px',
              lineHeight: 1.2,
            }}>
              JOHN
              <span style={{ color: 'var(--text-soft)' }}> BENEDICT M. GALA</span>
            </div>
            <div style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '14px',
              color: 'var(--muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              lineHeight: 1.6,
            }}>
              Intern Student<br />
              Bachelor of Science in Computer Engineering<br />
              Cebu Technological University - Danao Campus
            </div>
          </motion.div>

          {/* COL 2 — Email, Phone, Address */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '12px',
              color: 'var(--muted)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              Contact Info
              <span style={{ flex: 1, height: '0.5px', background: 'var(--accent-line)', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contactInfo.map((item, i) => (
                <ContactItem key={i} item={item} />
              ))}
            </div>
          </motion.div>

          {/* COL 3 — Social Links + Availability */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <div style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '12px',
              color: 'var(--muted)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              Find me on
              <span style={{ flex: 1, height: '0.5px', background: 'var(--accent-line)', display: 'block' }} />
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px',}}>
              {socialLinks.map(s => (
                <SocialIcon key={s.label} item={s} />
              ))}
            </div>

            {/* Availability badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              border: '0.5px solid rgba(79,195,247,0.15)',
              background: 'rgba(79,195,247,0.02)',
            }}>
              <span style={{
                width: '6px', height: '6px',
                background: 'var(--text-active)',
                borderRadius: '50%',
                boxShadow: '0 0 6px var(--text-active)',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Martian Mono, monospace',
                fontSize: '9px',
                color: 'var(--text-active)',
                letterSpacing: '0.1em',
              }}>
                OPEN TO INTERNSHIP
              </span>
            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: 'var(--text-disabled',
            letterSpacing: '0.08em',
          }}>
            © {year} · JOHN BENEDICT M. GALA · ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  )
}
