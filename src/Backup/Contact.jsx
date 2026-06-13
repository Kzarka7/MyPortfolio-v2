import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)
  const [hovered, setHovered] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form submitted:', form)

    setSent(true)

    setTimeout(() => {
      setSent(false)
    }, 4000)

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  const inputStyle = (field) => ({
    width: '100%',
    background: '#151515',
    border:
      focused === field
        ? '0.5px solid #50c2f780'
        : '0.5px solid #ffffff12',
    padding: '13px 16px',
    fontFamily: 'Martian Mono, monospace',
    fontSize: '12px',
    color: '#E8E8E0',
    outline: 'none',
    letterSpacing: '0.03em',
    transition: 'border-color 0.2s',
    cursor: 'text',
  })

  const labelStyle = {
    fontFamily: 'Martian Mono, monospace',
    fontSize: '14px',
    color: 'var(--text-soft)',
    letterSpacing: '0.14em',
    marginBottom: '6px',
    textTransform: 'uppercase',
    display: 'block',
  }

  return (
    <section
      id="contact"
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
          padding: '80px 0',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <div
            style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: '12px',
              color: 'var(--text-page)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                width: '20px',
                height: '0.5px',
                background: 'var(--text-page)',
                display: 'block',
              }}
            />
            [ 05 ] — Contact
          </div>

          <h2
            style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: '#E8E8E0',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            Let's build
            <br />
            <span style={{ color: 'var(--text-soft)' }}>something.</span>
          </h2>

          <p
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: '16px',
              color: 'var(--text-caption)',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Open to internship opportunities, collaborations, and any
            project you think I'd be a good fit for. Drop a message below.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            transition: { duration: 0.25 },
            boxShadow: '0 12px 30px rgba(79,195,247,0.12)',
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            border: '0.5px solid var(--border-dark)',
            background: '#0f0f0f',
            padding: '40px',
            position: 'relative',
          }}
        >
          {/* Corner Brackets */}
          <svg
            style={{ position: 'absolute', top: '-1px', left: '-1px' }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              d="M14 1H1V14"
              fill="none"
              stroke="var(--corner-bracket)"
              strokeWidth="1.5"
            />
          </svg>

          <svg
            style={{ position: 'absolute', top: '-1px', right: '-1px' }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              d="M0 1H13V14"
              fill="none"
              stroke="var(--corner-bracket)"
              strokeWidth="1.5"
            />
          </svg>

          <svg
            style={{ position: 'absolute', bottom: '-1px', left: '-1px' }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              d="M14 13H1V0"
              fill="none"
              stroke="var(--corner-bracket)"
              strokeWidth="1.5"
            />
          </svg>

          <svg
            style={{ position: 'absolute', bottom: '-1px', right: '-1px' }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              d="M0 13H13V0"
              fill="none"
              stroke="var(--corner-bracket)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Container Label */}
          <div
            style={{
              fontFamily: 'Martian Mono, monospace',
              fontSize: '9px',
              color: 'var(--disabled)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>FORM_TRANSMISSION.JSX</span>
            <span>STATUS: READY</span>
          </div>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Name + Email */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}
            >
              <div>
                <span style={labelStyle}>Name</span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  style={inputStyle('name')}
                  required
                  autoComplete="off"
                />
              </div>

              <div>
                <span style={labelStyle}>Email</span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="you@email.com"
                  style={inputStyle('email')}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: '0.5px',
                background: 'rgba(255,255,255,0.04)',
              }}
            />

            {/* Message */}
            <div>
              <span style={labelStyle}>Message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                required
                autoComplete="off"
                style={{
                  ...inputStyle('message'),
                  resize: 'none',
                }}
              />
            </div>

            {/* Divider */}
            <div
              style={{
                height: '0.5px',
                background: 'rgba(255,255,255,0.04)',
              }}
            />

            {/* Submit Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'Martian Mono, monospace',
                  fontSize: '9px',
                  color: 'var(--disabled)',
                  letterSpacing: '0.1em',
                }}
              >
                {sent
                  ? '// transmission received'
                  : '// all fields are required'}
              </span>

              {/* Animated Button */}
              <button
                type="submit"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  position: 'relative',
                  background: sent
                    ? 'rgba(79,195,247,0.1)'
                    : '#4fc2f7c2',
                  color: sent ? '#4FC3F7' : '#0E0E0E',
                  fontFamily: 'Martian Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '0 20px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: sent
                    ? '0.5px solid var(--accent-border)'
                    : 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: sent
                    ? 'none'
                    : 'inset 0 0 1.2em -0.5em rgba(255,255,255,0.25)',
                }}
              >
                <span
                  style={{
                    marginRight: '42px',
                  }}
                >
                  {sent
                    ? 'MESSAGE_SENT'
                    : 'SEND_MESSAGE'}
                </span>

                <div
                  style={{
                    position: 'absolute',
                    margin: '7px 7px',
                    right: '0',
                    background: sent ? '#4FC3F7' : '#0E0E0E',
                    height: '32px',
                    width: hovered
                      ? 'calc(100% - 7.5%)'
                      : '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: sent
                      ? '0 0 10px rgba(79,195,247,0.35)'
                      : '0.1em 0.1em 0.6em 0.15em rgba(79,195,247,0.35)',
                  }}
                >
                  {sent ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      style={{
                        width: '18px',
                        color: '#0E0E0E',
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M9 16.17l-3.88-3.88L3.7 13.71 9 19l12-12-1.41-1.41z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      style={{
                        width: '18px',
                        color: '#4FC3F7',
                        transform: hovered
                          ? 'translateX(2px)'
                          : 'translateX(0)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M3.4 20.4L22 12 3.4 3.6 3 10l13 2-13 2z"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
