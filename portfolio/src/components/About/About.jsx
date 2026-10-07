import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const statItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="About Me"
              icon="person"
              title="Engineering AI, One System at a Time"
              id="about-heading"
            />

            <div className="space-y-4 text-[var(--color-on-surface-variant)] leading-relaxed text-base">
              {profile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Machine Learning',
                'LLM Fine-tuning',
                'RAG Systems',
                'Agentic AI',
                'Cloud ML',
                'Open Source',
                'Systems Design',
                'Research',
              ].map((interest) => (
                <span key={interest} className="tech-tag">
                  {interest}
                </span>
              ))}
            </div>

            {/* Education quick card */}
            <GlassCard className="rounded-xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-primary-fixed)] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px] text-[var(--color-primary)]" aria-hidden="true">school</span>
              </div>
              <div>
                <p className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-sm">
                  B.Tech — Computer Science & Engineering (AI & ML)
                </p>
                <p className="text-[var(--color-on-surface-variant)] text-xs mt-0.5">
                  {profile.institution} • {profile.university}
                </p>
                <p className="font-mono text-[10px] text-[var(--color-primary)] mt-1 tracking-wide">
                  2023 — {profile.expectedGraduation} (Expected)
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profile.quickStats.map((stat) => (
                <motion.div key={stat.label} variants={statItem}>
                  <GlassCard className="rounded-xl p-5 text-center hover:shadow-md">
                    <div
                      className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--color-primary)] mb-1"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* What I bring card */}
            <GlassCard className="rounded-xl p-5 space-y-3">
              <h3 className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-sm">
                What I bring to the table
              </h3>
              <ul className="space-y-2">
                {[
                  { icon: 'psychology', text: 'Strong ML fundamentals from first principles' },
                  { icon: 'build', text: 'End-to-end system building, not just notebooks' },
                  { icon: 'science', text: 'Research-oriented approach to problem solving' },
                  { icon: 'public', text: 'Active contributor to open-source ML tools' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)] mt-0.5 shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Resume CTA */}
            <a
              href={profile.resume}
              download
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-active font-mono text-xs font-semibold text-[var(--color-primary)] hover:brightness-105 active:scale-95 transition-all focus-visible:ring-2"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">download</span>
              Download Full Resume
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
