import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiCodingninjas } from 'react-icons/si'
import { FaGraduationCap, FaAward, FaSchool } from 'react-icons/fa'

const education = [
  {
    id: '001',
    type: 'DEGREE',
    period: '2023 — Present',
    title: 'BS Computer Engineering',
    institution: 'Cebu Technological University — Danao Campus',
    desc: 'Pursuing a Bachelor of Science in Computer Engineering with a focus on software development and embedded systems.',
    icon: FaGraduationCap,
    color: '#4FC3F7',
    status: 'ONGOING',
  },
  {
    id: '002',
    type: 'SENIOR HIGH',
    period: '2021 — 2023',
    title: 'GAS Strand',
    institution: 'COMPOSTELA NATIONAL HIGH SCHOOL',
    desc: 'General Academic Strand. Graduated with honors.',
    icon: FaSchool,
    color: '#4FC3F7',
    status: 'COMPLETED',
  },
]

const certificates = [
  {
    id: 'C001',
    type: 'CERTIFICATE',
    year: '2024',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    icon: FaAward,
    color: '#4FC3F7',
    status: 'VERIFIED',
  },
  {
    id: 'C002',
    type: 'CERTIFICATE',
    year: '2024',
    title: 'Your Certificate Here',
    issuer: 'Issuing Organization',
    icon: FaAward,
    color: '#4FC3F7',
    status: 'ONGOING',
  },
  {
    id: 'C003',
    type: 'CERTIFICATE',
    year: '2023', 
    title: 'Your Certificate Here',
    issuer: 'Issuing Organization',
    icon: FaAward,
    color: '#4FC3F7',
    status: 'VERIFIED',
  },
]

function EducationCard({ item, index }) {
  const [hov, setHov] = useState(false)
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr',
        gap: '20px',
        padding: '24px 20px',
        borderBottom: '0.5px solid #ffffff0a',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <span style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '2px',
        background: item.color,
        transform: hov ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top',
        transition: 'transform 0.3s ease',
      }} />

      {/* Left — icon column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '40px', height: '40px',
          border: hov ? `0.5px solid ${item.color}` : '0.5px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? `rgba(79,195,247,0.05)` : 'transparent',
          transition: 'all 0.25s',
          flexShrink: 0,
        }}>
          <Icon style={{ fontSize: '16px', color: hov ? item.color : '#a7a7a7', transition: 'color 0.25s' }} />
        </div>
        {/* vertical connector line */}
        <div style={{
          width: '0.5px',
          flex: 1,
          background: '#a7a7a7',
          minHeight: '20px',
        }} />
      </div>

      {/* Right — content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: '#4fc2f7c2',
            letterSpacing: '0.14em',
          }}>
            {item.type}
          </span>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: item.status === 'ONGOING' ? '#4FC3F7' : '#a7a7a7',
            border: `0.5px solid ${item.status === 'ONGOING' ? 'rgba(79,195,247,0.3)' : 'rgba(255,255,255,0.07)'}`,
            padding: '2px 7px',
            letterSpacing: '0.1em',
          }}>
            {item.status}
          </span>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
            marginLeft: 'auto',
          }}>
            {item.period}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'Martian Mono, monospace',
          fontSize: '18px',
          fontWeight: 700,
          color: hov ? '#ffffff' : '#d2d2d2',
          marginBottom: '4px',
          transition: 'color 0.2s',
          letterSpacing: '-0.01em',
        }}>
          {item.title}
        </h3>

        <div style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '18px',
          fontWeight: 500,
          color: hov ? '#4FC3F7' : '#4fc2f7c2',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          {item.institution}
        </div>

        <p style={{
          fontFamily: 'Geist, sans-serif',
          fontSize: '15px',
          color: 'var(--text-caption)',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

function CertCard({ cert, index }) {
  const [hov, setHov] = useState(false)
  const Icon = cert.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '18px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '12px 20px',
        borderBottom: '0.5px solid #ffffff0a',
        cursor: 'pointer',
        transition: 'all 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '2px',
        background: cert.color,
        transition: 'width 0.2s',
        transform: hov ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top',
        transition: 'transform 0.3s ease',
      }} />

      <div style={{
          width: '40px', height: '40px',
          border: hov ? `0.5px solid ${cert.color}` : '0.5px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? `rgba(79,195,247,0.05)` : 'transparent',
          transition: 'all 0.25s',
          flexShrink: 0,
        }}>
        <Icon style={{ fontSize: '16px', color: hov ? cert.color : '#a7a7a7', transition: 'color 0.25s' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: '#4fc2f7c2',
            letterSpacing: '0.14em',
          }}>
            {cert.type}
          </span>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: cert.status === 'ONGOING' ? '#4FC3F7' : '#a7a7a7',
            border: `0.5px solid ${cert.status === 'ONGOING' ? 'rgba(79,195,247,0.3)' : 'rgba(255,255,255,0.07)'}`,
            padding: '2px 7px',
            letterSpacing: '0.1em',
          }}>
            {cert.status}
          </span>
          <span style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '10px',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
            marginLeft: 'auto',
          }}>
            {cert.year}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'Martian Mono, monospace',
          fontSize: '18px',
          fontWeight: 700,
          color: hov ? '#ffffff' : '#d2d2d2',
          marginBottom: '4px',
          transition: 'color 0.2s',
          letterSpacing: '-0.01em',
        }}>
          {cert.title}
        </h3>

        <div style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '18px',
          fontWeight: 500,
          color: hov ? '#4FC3F7' : '#4fc2f7c2',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          {cert.issuer}
        </div>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section
      id="education"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{
        padding: '80px 0',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
      }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
          }}
        >
          <div>
            <div style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: '12px',
              color: 'var(--text-page)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ width: '20px', height: '0.5px', background: 'var(--text-page)', display: 'block' }} />
              [ 04 ] — Background
            </div>
            <h2 style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: '#E8E8E0',
              letterSpacing: '-0.01em',
            }}>
              Education
            </h2>
          </div>
        </motion.div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'start',
        }}>

          {/* LEFT — Education timeline */}
          <div>
            <div style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: '12px',
              color: 'var(--muted)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              Academic
              <span style={{ flex: 1, height: '0.5px', background: 'var(--accent-line)', display: 'block' }} />
            </div>

            {education.map((item, i) => (
              <EducationCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* RIGHT — Certificates */}
          <div>
            <div style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: '12px',
              color: 'var(--muted',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              Certificates
              <span style={{ flex: 1, height: '0.5px', background: 'var(--accent-line)', display: 'block' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {certificates.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
