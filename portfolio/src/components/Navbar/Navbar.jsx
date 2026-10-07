import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { profile } from '../../data/profile'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(l => l.href.slice(1))
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-4 inset-x-0 mx-auto max-w-5xl z-50 px-4 transition-all duration-300`}
      role="banner"
    >
      <div className={`glass-nav rounded-full px-5 py-2.5 flex justify-between items-center transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase focus-visible:ring-2"
          aria-label="Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary-container)] border border-[var(--color-primary)]/40 animate-pulse" aria-hidden="true" />
          <span>{profile.nameShort !== "YN" ? profile.name.split(' ')[0] + '.DEV' : 'AI.PORTFOLIO'}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`font-mono text-[11px] font-medium tracking-wide px-3 py-1 rounded-full transition-all duration-150 ${
                  isActive
                    ? 'text-[var(--color-primary)] bg-[var(--color-secondary-container)]/30'
                    : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)]/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 pr-2 border-r border-[var(--color-outline-variant)]/40 text-[var(--color-on-surface-variant)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)]/50 transition-colors focus-visible:ring-2"
              title="GitHub"
              aria-label="View GitHub profile"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">code</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-1.5 rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)]/50 transition-colors focus-visible:ring-2"
              title="Email"
              aria-label="Send email"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
            </a>
          </div>

          <a
            href={profile.resume}
            download
            className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] font-medium text-[var(--color-on-primary)] bg-[var(--color-primary-container)] px-3 py-1.5 rounded-full hover:brightness-105 active:scale-95 transition-all shadow-sm focus-visible:ring-2"
            aria-label="Download resume PDF"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-[13px]" aria-hidden="true">download</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[var(--color-surface-container)]/50 text-[var(--color-on-surface-variant)] transition-colors focus-visible:ring-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 glass-nav rounded-2xl overflow-hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col py-2" aria-label="Mobile navigation links">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`px-5 py-3 font-mono text-[12px] font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-[var(--color-primary)] bg-[var(--color-secondary-container)]/20'
                        : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)]/50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                )
              })}
              <div className="px-5 py-3 border-t border-[var(--color-outline-variant)]/30 flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-[var(--color-primary)] hover:underline"
                >
                  GitHub
                </a>
                <span className="text-[var(--color-outline-variant)]">•</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[11px] text-[var(--color-primary)] hover:underline"
                >
                  Email
                </a>
                <span className="text-[var(--color-outline-variant)]">•</span>
                <a
                  href={profile.resume}
                  download
                  className="font-mono text-[11px] text-[var(--color-primary)] hover:underline"
                >
                  Resume ↓
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
