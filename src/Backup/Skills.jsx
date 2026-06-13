import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiJavascript, SiTypescript, SiHtml5, SiReact, SiFramer, SiTailwindcss, SiNodedotjs, SiGit, SiVite, SiPostman } from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { DiVisualstudio } from 'react-icons/di'

const skillCategories = [
  {
    category: 'Languages',
    items: [
      { name: 'HTML5',      active: true, icon: SiHtml5,       color: '#E34F26', desc: 'Semantic, accessible markup' },
      { name: 'CSS3',       active: true, icon: FaCss3Alt,     color: '#1572B6', desc: 'Grid, flexbox, animations' },
      { name: 'JavaScript', active: true, icon: SiJavascript,  color: '#F7DF1E', desc: 'ES2023+, async/await, DOM' },
      { name: 'TypeScript', active: true, icon: SiTypescript,  color: '#3178C6', desc: 'Strict mode, generics, types' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React',         active: true, icon: SiReact,       color: '#61DAFB', desc: 'Hooks, context, RSC' },
      { name: 'Framer Motion', active: true, icon: SiFramer,      color: '#ffffff', desc: 'Animations, gestures' },
      { name: 'Tailwind CSS',  active: true, icon: SiTailwindcss, color: '#06B6D4', desc: 'Utility-first styling' },
      { name: 'Node.js',       active: true, icon: SiNodedotjs,   color: '#339933', desc: 'Backend development and APIs' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git',       active: true, icon: SiGit,          color: '#F05032', desc: 'Version control, branching' },
      { name: 'Vite',      active: true, icon: SiVite,         color: '#646CFF', desc: 'Build tool, HMR, bundling' },
      { name: 'VS Code',   active: true, icon: DiVisualstudio, color: '#007ACC', desc: 'Primary dev environment' },
      { name: 'REST APIs', active: true, icon: SiPostman,      color: '#FF6C37', desc: 'API design & testing' },
    ],
  },
]

function SkillCard({ skill, index }) {
  const [hov, setHov] = useState(false)
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: hov ? `0.5px solid ${skill.color}55` : '0.5px solid var(--border-dark)',
        padding: '24px 20px',
        background: hov ? `${skill.color}08` : 'var(--surface)',
        transition: 'all 0.25s',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      {/* Corner brackets — same as contact form */}
      <svg style={{ position:'absolute', top:'-1px', left:'-1px' }} width="10" height="10" viewBox="0 0 10 10">
        <path d="M10 1H1V10" fill="none" stroke={hov ? skill.color : 'var(--corner-bracket)'} strokeWidth="2" style={{ transition: 'stroke 0.25s ease' }}/>
      </svg>
      <svg style={{ position:'absolute', top:'-1px', right:'-1px' }} width="10" height="10" viewBox="0 0 10 10">
        <path d="M0 1H9V10" fill="none" stroke={hov ? skill.color : 'var(--corner-bracket)'} strokeWidth="2" style={{ transition: 'stroke 0.25s ease' }}/>
      </svg>
      <svg style={{ position:'absolute', bottom:'-1px', left:'-1px' }} width="10" height="10" viewBox="0 0 10 10">
        <path d="M10 9H1V0" fill="none" stroke={hov ? skill.color : 'var(--corner-bracket)'} strokeWidth="2" style={{ transition: 'stroke 0.25s ease' }}/>
      </svg>
      <svg style={{ position:'absolute', bottom:'-1px', right:'-1px' }} width="10" height="10" viewBox="0 0 10 10">
        <path d="M0 9H9V0" fill="none" stroke={hov ? skill.color : 'var(--corner-bracket)'} strokeWidth="2" style={{ transition: 'stroke 0.25s ease' }}/>
      </svg>

      {/* top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1.5px',
        background: skill.color,
        transform: hov ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.5s ease',
      }} />

      {/* Icon + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '48px', height: '48px',
          border: hov ? `0.5px solid ${skill.color}44` : '0.5px solid var(--border-dark)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? `${skill.color}12` : 'rgba(255,255,255,0.02)',
          transition: 'all 0.25s',
          flexShrink: 0,
        }}>
          <Icon style={{ fontSize: '24px', color: hov ? skill.color : 'var(--text)', transition: 'color 0.25s' }} />
        </div>
        <div>
          <div style={{
            fontFamily: 'Martian Mono, monospace',
            fontSize: '14px',
            fontWeight: 700,
            color: hov ? `${skill.color}` : 'var(--text)',
            letterSpacing: '0.02em',
            transition: 'color 0.25s',
            marginBottom: '2px',
          }}>
            {skill.name}
          </div>
          <div style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: '12px',
            color: hov ? `${skill.color}d2` : 'var(--text-secondary)',
            letterSpacing: '0.02em',
            transition: 'color 0.25s',
          }}>
            {skill.desc}
          </div>
        </div>
      </div>

      {/* Proficiency bar */}
      <div style={{ height: '2px', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.active ? '100%' : '50%' }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%',
            background: hov ? skill.color : 'var(--border-semi-light)',
            transition: 'background 0.25s',
            boxShadow: hov ? `0 0 6px ${skill.color}` : 'none',
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'flex-end', marginBottom: '56px' }}
        >
          <div>
            <div style={{ fontFamily: 'Martian Mono, monospace', fontSize: '10px', color: 'var(--text-page)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '0.5px', background: 'var(--text-page)', display: 'block' }} />
              [ 02 ] — Skills
            </div>
            <h2 style={{ fontFamily: 'Martian Mono, monospace', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Tech<span style={{ color: 'var(--text-soft)' }}> Stack</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'Geist, sans-serif', fontSize: '14px', color: 'var(--disabled)', lineHeight: 1.8, fontWeight: 300 }}>
            Tools and technologies I work with daily. Each card shows the tech, a short description of how I use it, and a proficiency bar. Hover to reveal brand colors.
          </p>
        </motion.div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'Martian Mono, monospace', fontSize: '12px', fontWeight: 500, color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  {cat.category}
                </div>
                <div style={{ flex: 1, height: '0.5px', background: 'var(--accent-line)' }} />
                <div style={{ fontFamily: 'Martian Mono, monospace', fontSize: '9px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                  {cat.items.length} tools
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {cat.items.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
