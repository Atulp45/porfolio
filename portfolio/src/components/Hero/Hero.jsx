import { motion } from 'motion/react'
import { profile } from '../../data/profile'

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.github,
    icon: 'code',
    color: 'text-[var(--color-primary)]',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: 'badge',
    color: 'text-[var(--color-secondary)]',
    external: true,
  },
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
    color: 'text-[var(--color-primary)]',
    external: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 min-h-screen flex items-center"
      aria-label="Introduction"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Identity */}
          <motion.div
            className="lg:col-span-7 space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-base border border-[var(--color-secondary-container)]/60 shadow-sm">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-secondary)]" />
                </span>
                <span className="font-mono text-[11px] font-medium text-[var(--color-secondary)] tracking-wide">
                  {profile.availabilityStatus}
                </span>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)] font-mono text-[11px] font-semibold tracking-wider uppercase">
                {profile.year}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--color-surface-container-highest)]/60 text-[var(--color-primary)] border border-[var(--color-outline-variant)]/40 font-mono text-[11px] font-medium">
                CSE — AI & ML
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-[var(--color-secondary-fixed)]/50 text-[var(--color-on-secondary-fixed)] border border-[var(--color-secondary-fixed-dim)]/60 font-mono text-[11px] font-medium">
                CGPA: {profile.cgpa}
              </span>
            </motion.div>

            {/* Name & role */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1
                className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-bold text-[var(--color-on-surface)] leading-tight tracking-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Hello, I'm{' '}
                <span className="text-[var(--color-primary)]">{profile.name}</span>
              </h1>
              <p
                className="font-['Space_Grotesk'] text-xl font-medium text-[var(--color-primary)] tracking-tight"
              >
                {profile.tagline}
              </p>
            </motion.div>

            {/* Mission blockquote */}
            <motion.blockquote
              variants={itemVariants}
              className="glass-base border-l-4 border-l-[var(--color-primary)] rounded-xl p-4 space-y-1"
            >
              <p className="text-[var(--color-on-surface)] text-lg italic leading-relaxed">
                "Building intelligent systems, ML applications, and software that solves real-world problems."
              </p>
              <p className="font-mono text-[10px] text-[var(--color-on-surface-variant)]">
                // Focus: RAG pipelines • LLM fine-tuning • Agentic AI • Cloud ML
              </p>
            </motion.blockquote>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[var(--color-on-primary)] font-mono text-xs font-semibold tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-md focus-visible:ring-2"
                style={{ background: 'linear-gradient(135deg, rgba(0,97,148,0.9), rgba(0,104,122,0.85))' }}
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">rocket_launch</span>
                View Projects
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-base text-[var(--color-on-surface)] font-mono text-xs font-semibold tracking-wide hover:glass-active active:scale-95 transition-all focus-visible:ring-2"
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">download</span>
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-base glass-hover text-[var(--color-on-surface)] group focus-visible:ring-2"
                  aria-label={link.label}
                >
                  <span className={`material-symbols-outlined text-[18px] ${link.color} group-hover:scale-110 transition-transform`} aria-hidden="true">
                    {link.icon}
                  </span>
                  <span className="font-mono text-[11px] font-semibold truncate max-w-[160px]">
                    {link.label}
                  </span>
                  {link.external && (
                    <span className="material-symbols-outlined text-[13px] text-[var(--color-outline)]" aria-hidden="true">north_east</span>
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Glass frame */}
              <div className="absolute inset-0 rounded-3xl glass-base border border-white/80 shadow-2xl shadow-[var(--color-primary)]/10 p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden relative border border-[var(--color-surface-container-highest)]/40 bg-[var(--color-surface-container-low)]">
                  <img
                    src="/profile.jpg"
                    alt={`Portrait of ${profile.name}, AI & ML Student`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Placeholder when no image */}
                  <div
                    className="absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-[var(--color-primary-fixed)] to-[var(--color-surface-container)] hidden"
                    aria-hidden="true"
                  >
                    <span className="material-symbols-outlined text-[72px] text-[var(--color-primary)]/40">person</span>
                    <span className="font-mono text-[10px] text-[var(--color-on-surface-variant)] mt-2">Add /public/profile.jpg</span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-inverse-surface)]/30 via-transparent to-transparent pointer-events-none" />
                  {/* Bottom label */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-[var(--color-surface-container-lowest)]/80 backdrop-blur-md flex items-center justify-between">
                    <span className="font-mono text-[10px] font-semibold tracking-wide flex items-center gap-1.5 text-[var(--color-on-surface)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" aria-hidden="true" />
                      B.Tech CSE (AI & ML) '{profile.expectedGraduation?.slice(-2) || '26'}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-primary)] font-medium">
                      {profile.institution?.split(' ')[0] || 'BCE'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-3 -right-4 glass-active px-3 py-1.5 rounded-xl text-[var(--color-primary)] font-mono text-[11px] flex items-center gap-1.5 shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <span className="material-symbols-outlined text-[15px]" aria-hidden="true">verified</span>
                <span>AI / ML</span>
              </motion.div>

              {/* Floating stat */}
              <motion.div
                className="absolute -bottom-3 -left-4 glass-active px-3 py-1.5 rounded-xl font-mono text-[11px] flex items-center gap-2 shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <span className="material-symbols-outlined text-[15px] text-[var(--color-secondary)]" aria-hidden="true">school</span>
                <span className="text-[var(--color-on-surface)] font-semibold">3rd Year</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
