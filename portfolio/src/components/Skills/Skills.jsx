import { motion } from 'motion/react'
import { skillCategories } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const iconBgMap = {
  'bg-secondary-fixed': 'bg-[var(--color-secondary-fixed)]',
  'bg-primary-fixed': 'bg-[var(--color-primary-fixed)]',
  'bg-tertiary-fixed': 'bg-[var(--color-tertiary-fixed)]',
  'bg-surface-variant': 'bg-[var(--color-surface-variant)]',
}

const iconColorMap = {
  'text-secondary': 'text-[var(--color-secondary)]',
  'text-primary': 'text-[var(--color-primary)]',
  'text-tertiary': 'text-[var(--color-tertiary)]',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="Technical Skills"
          icon="layers"
          title="Core Engineering Stack"
          subtitle="Synthesizing ML theory with production-grade software engineering."
          center
          id="skills-heading"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((cat) => {
            const iconBg = iconBgMap[cat.iconBg] || 'bg-[var(--color-primary-fixed)]'
            const iconColor = iconColorMap[cat.iconColor] || 'text-[var(--color-primary)]'

            return (
              <motion.div key={cat.id} variants={cardVariants}>
                <GlassCard className="rounded-2xl p-5 space-y-4 h-full hover:border-[var(--color-secondary-container)]/80 transition-all duration-200">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{cat.icon}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-base font-semibold text-[var(--color-on-surface)]">
                      {cat.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[var(--color-outline)] mt-0.5 tracking-wide">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-2" aria-label={`${cat.title} skills`}>
                    {cat.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-lg bg-[var(--color-surface-container-lowest)]/70 border border-[var(--color-surface-container-highest)]/60"
                      >
                        <span className="font-mono text-[11px] font-medium text-[var(--color-on-surface)]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--color-outline)] shrink-0 ml-1">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
