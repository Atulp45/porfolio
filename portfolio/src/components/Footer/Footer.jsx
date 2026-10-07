import { profile } from '../../data/profile'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'code', external: true },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'badge', external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail', external: false },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="bg-[var(--color-surface-container-low)]/70 backdrop-blur-2xl border-t border-[var(--color-surface-container-highest)]/80"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
              {profile.name !== 'YOUR_NAME' ? profile.name : 'Portfolio'}
            </div>
            <p className="text-[var(--color-on-surface-variant)] text-xs leading-relaxed max-w-xs">
              {profile.tagline}
            </p>
            <p className="font-mono text-[10px] text-[var(--color-outline)]">
              AI/ML • Software Engineering • Research
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-[10px] text-[var(--color-outline)] uppercase tracking-wider mb-3">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-[var(--color-on-surface-variant)] text-xs hover:text-[var(--color-primary)] transition-colors focus-visible:ring-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] text-[var(--color-outline)] uppercase tracking-wider">Connect</p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="w-8 h-8 rounded-lg bg-[var(--color-surface-container)] flex items-center justify-center text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container-high)] transition-all focus-visible:ring-2"
                  aria-label={link.label}
                >
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">{link.icon}</span>
                </a>
              ))}
            </div>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-primary)] hover:underline focus-visible:ring-2"
            >
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">download</span>
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-outline-variant)]/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[10px] text-[var(--color-outline)]">
            © {year} {profile.name !== 'YOUR_NAME' ? profile.name : 'Portfolio'} — B.Tech AI & ML
          </p>
          <p className="font-mono text-[10px] text-[var(--color-outline)]">
            Built with React • Motion • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
