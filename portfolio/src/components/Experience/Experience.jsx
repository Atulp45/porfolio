import { motion } from 'motion/react'
import { experiences, achievements, education } from '../../data/experience'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Experience */}
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Experience"
            icon="work"
            title="Professional Experience"
            id="experience-heading"
          />

          {experiences.length === 0 ? (
            <GlassCard className="rounded-xl p-8 text-center space-y-2">
              <span className="material-symbols-outlined text-[40px] text-[var(--color-outline)]" aria-hidden="true">work_outline</span>
              <p className="font-mono text-xs text-[var(--color-on-surface-variant)]">
                Experience entries will appear here. Update <code className="bg-[var(--color-surface-container)] px-1 rounded">src/data/experience.js</code>.
              </p>
            </GlassCard>
          ) : (
            <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--color-primary)]/40 before:via-[var(--color-secondary)]/30 before:to-transparent">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-7 top-5 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-background)]" aria-hidden="true" />

                  <GlassCard className="rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-base">
                          {exp.role}
                        </h3>
                        <p className="text-[var(--color-primary)] text-sm font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-[10px] text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container)] px-2 py-1 rounded-md">
                          {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                        </span>
                        <p className="font-mono text-[10px] text-[var(--color-outline)] mt-1">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-on-surface-variant)]">
                          <span className="text-[var(--color-secondary)] mt-1 shrink-0" aria-hidden="true">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Education */}
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Education"
            icon="school"
            title="Academic Background"
          />
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="rounded-2xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-fixed)] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px] text-[var(--color-primary)]" aria-hidden="true">school</span>
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-base leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-[var(--color-primary)] text-sm font-medium">{edu.specialization}</p>
                      <p className="text-[var(--color-on-surface-variant)] text-sm">{edu.institution}</p>
                      <p className="font-mono text-[10px] text-[var(--color-outline)] mt-0.5">{edu.university} • {edu.location}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right space-y-1">
                    <span className="font-mono text-[11px] text-[var(--color-on-surface-variant)] bg-[var(--color-surface-container)] px-2.5 py-1 rounded-lg block">
                      {edu.startYear} — {edu.endYear}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--color-primary)] font-semibold block">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5 pl-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-on-surface-variant)]">
                      <span className="text-[var(--color-secondary)] mt-0.5 shrink-0" aria-hidden="true">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Certifications & Achievements"
            icon="emoji_events"
            title="Credentials & Recognition"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlassCard className="rounded-xl p-4 space-y-2 hover:shadow-md h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[var(--color-secondary-fixed)]/50 text-[var(--color-on-secondary-fixed)] uppercase tracking-wide">
                      {ach.type}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-outline)]">{ach.year}</span>
                  </div>
                  <h4 className="font-['Space_Grotesk'] font-semibold text-[var(--color-on-surface)] text-sm leading-snug">
                    {ach.title}
                  </h4>
                  <p className="text-[var(--color-primary)] text-xs font-medium">{ach.organization}</p>
                  <p className="text-[var(--color-on-surface-variant)] text-xs leading-relaxed flex-1">{ach.description}</p>
                  {ach.credential && (
                    <a
                      href={ach.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--color-secondary)] hover:underline font-mono mt-auto focus-visible:ring-2"
                    >
                      <span className="material-symbols-outlined text-[13px]" aria-hidden="true">open_in_new</span>
                      View Credential
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  )
}
