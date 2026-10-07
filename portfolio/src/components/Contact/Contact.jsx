import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const FORM_STATE = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
}

const contactChannels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
    description: profile.email,
    color: 'text-[var(--color-primary)]',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'Atulp45',
    href: profile.github,
    icon: 'code',
    description: 'github.com/Atulp45',
    color: 'text-[var(--color-primary)]',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'atul-prajapati',
    href: profile.linkedin,
    icon: 'badge',
    description: 'in/atul-prajapati-353776339',
    color: 'text-[var(--color-secondary)]',
    external: true,
  },
]

const subjectOptions = [
  'Internship / Research Opportunity',
  'Research Collaboration',
  'Open Source / Mentorship',
  'General Engineering Discussion',
  'Other',
]

export default function Contact() {
  const [formState, setFormState] = useState(FORM_STATE.IDLE)
  const [formData, setFormData] = useState({ name: '', email: '', subject: subjectOptions[0], message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email'
    if (!formData.message.trim()) errs.message = 'Message is required'
    else if (formData.message.trim().length < 10) errs.message = 'Message is too short'
    else if (formData.message.trim().length > 2000) errs.message = 'Message is too long (max 2000 chars)'
    return errs
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setFormState(FORM_STATE.SUBMITTING)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message')
      }

      setFormState(FORM_STATE.SUCCESS)
      setFormData({ name: '', email: '', subject: subjectOptions[0], message: '' })
    } catch (err) {
      console.error('Contact form error:', err.message)
      setFormState(FORM_STATE.ERROR)
    }
  }

  const inputClass = (field) =>
    `w-full px-3.5 py-2.5 rounded-xl bg-[var(--color-surface-container-low)]/80 border ${
      errors[field]
        ? 'border-[var(--color-error)]'
        : 'border-[var(--color-outline-variant)]/60 focus:border-[var(--color-secondary)]'
    } focus:ring-2 focus:ring-[var(--color-secondary)]/20 focus:outline-none text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] transition-all`

  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard className="rounded-3xl p-8 sm:p-12 border border-white/90 shadow-2xl relative overflow-hidden">
          {/* Ambient glow */}
          <div className="ambient-circle w-96 h-96 bg-[var(--color-secondary-fixed)]/30 -bottom-20 -right-20 pointer-events-none" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">

            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-secondary-fixed)]/50 text-[var(--color-secondary)] font-mono text-[11px]">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">mail</span>
                Get in touch
              </div>

              <div>
                <h2
                  id="contact-heading"
                  className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[var(--color-on-surface)] leading-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Let's build something meaningful.
                </h2>
                <p className="text-[var(--color-on-surface-variant)] text-sm mt-3 leading-relaxed max-w-sm">
                  Interested in collaborating on AI/ML research, discussing interesting engineering problems, open-source, or internship opportunities?
                </p>
              </div>

              {/* Contact channels */}
              <div className="space-y-3">
                {contactChannels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl glass-base glass-hover group focus-visible:ring-2"
                    aria-label={`${ch.label}: ${ch.description}`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--color-primary-fixed)] flex items-center justify-center shrink-0">
                      <span className={`material-symbols-outlined text-[18px] ${ch.color}`} aria-hidden="true">{ch.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                        {ch.label}
                      </p>
                      <p className="font-mono text-[10px] text-[var(--color-on-surface-variant)] truncate">{ch.description}</p>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-outline)] ml-auto shrink-0" aria-hidden="true">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="bg-[var(--color-surface-container-lowest)]/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-[var(--color-surface-container-highest)]/80 shadow-inner">
                <AnimatePresence mode="wait">
                  {formState === FORM_STATE.SUCCESS ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-3"
                    >
                      <div className="w-14 h-14 rounded-full bg-[var(--color-secondary-fixed)] flex items-center justify-center mx-auto">
                        <span className="material-symbols-outlined text-[32px] text-[var(--color-secondary)]" aria-hidden="true">check_circle</span>
                      </div>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-lg">Message sent!</h3>
                      <p className="text-[var(--color-on-surface-variant)] text-sm">I'll get back to you as soon as possible.</p>
                      <button
                        onClick={() => setFormState(FORM_STATE.IDLE)}
                        className="font-mono text-xs text-[var(--color-primary)] hover:underline mt-2 focus-visible:ring-2"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      noValidate
                      aria-label="Contact form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="contact-name" className="font-mono text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Jane Smith"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass('name')}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                          />
                          {errors.name && (
                            <p id="name-error" className="font-mono text-[10px] text-[var(--color-error)]" role="alert">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="contact-email" className="font-mono text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                            Your Email *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass('email')}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="font-mono text-[10px] text-[var(--color-error)]" role="alert">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="contact-subject" className="font-mono text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          Subject
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={inputClass('subject')}
                        >
                          {subjectOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="contact-message" className="font-mono text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          placeholder="Hi, I'd like to discuss..."
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className={inputClass('message')}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="font-mono text-[10px] text-[var(--color-error)]" role="alert">{errors.message}</p>
                        )}
                      </div>

                      {formState === FORM_STATE.ERROR && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="font-mono text-[11px] text-[var(--color-error)] bg-[var(--color-error-container)] px-3 py-2 rounded-lg"
                          role="alert"
                        >
                          Something went wrong. Please try emailing directly at {profile.email}
                        </motion.p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={formState === FORM_STATE.SUBMITTING}
                        whileTap={{ scale: 0.97 }}
                        className="w-full py-3 rounded-xl bg-[var(--color-primary-container)] text-[var(--color-on-primary)] font-mono text-xs font-semibold hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2"
                      >
                        {formState === FORM_STATE.SUBMITTING ? (
                          <>
                            <span className="material-symbols-outlined text-[16px] animate-spin" aria-hidden="true">progress_activity</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">send</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
