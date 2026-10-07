import { motion } from 'motion/react'
import { featuredProjects, projects } from '../../data/projects'
import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const categoryColors = {
  primary: {
    badge: 'bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed)]',
    dot: 'bg-[var(--color-primary)]',
  },
  secondary: {
    badge: 'bg-[var(--color-secondary-fixed)]/60 text-[var(--color-on-secondary-fixed)]',
    dot: 'bg-[var(--color-secondary)]',
  },
  tertiary: {
    badge: 'bg-[var(--color-tertiary-fixed)] text-[var(--color-on-tertiary-fixed)]',
    dot: 'bg-[var(--color-tertiary)]',
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ProjectCard({ project }) {
  const colors = categoryColors[project.categoryColor] || categoryColors.primary
  const hasDemo = project.demo && project.demo !== ''
  const hasGithub = project.github && project.github !== '' && !project.github.includes('YOUR_GITHUB')

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="h-full"
    >
      <GlassCard className="rounded-2xl p-6 h-full flex flex-col space-y-5 border border-white/70">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 ${colors.badge}`}>
            <span className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`} aria-hidden="true" />
            {project.category}
          </span>
          {project.featured && (
            <span className="font-mono text-[10px] text-[var(--color-outline)]">Featured</span>
          )}
        </div>

        {/* Title & description */}
        <div className="flex-1 space-y-2">
          <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[var(--color-surface-container-low)]/70 border border-[var(--color-surface-container-highest)]/60">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="font-mono text-[10px] text-[var(--color-outline)] block">{m.label}</span>
                <span className="font-mono text-[11px] font-bold text-[var(--color-primary)]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-[var(--color-surface-container-highest)]/60">
          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--color-primary-container)] text-[var(--color-on-primary)] font-mono text-[11px] font-medium hover:brightness-110 active:scale-95 transition-all shadow-sm focus-visible:ring-2"
            >
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">open_in_new</span>
              Live Demo
            </a>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--color-surface-container)]/60 text-[var(--color-outline)] font-mono text-[11px] cursor-not-allowed">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">link_off</span>
              Demo TBD
            </span>
          )}

          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-xl glass-base hover:bg-[var(--color-surface-container-high)]/60 text-[var(--color-on-surface)] transition-all focus-visible:ring-2"
              title="View source on GitHub"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">code</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center p-2 rounded-xl glass-base text-[var(--color-outline)] cursor-not-allowed"
              title="GitHub link not yet set"
              aria-label="GitHub link not available"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">code_off</span>
            </span>
          )}
        </div>
      </GlassCard>
    </motion.article>
  )
}

export default function Projects() {
  const allProjects = projects

  return (
    <section id="projects" className="py-20" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Projects"
            icon="science"
            title="Featured Engineering Work"
            subtitle="End-to-end AI systems, ML pipelines, and software that solves real problems."
            id="projects-heading"
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-base glass-hover font-mono text-xs font-medium text-[var(--color-primary)] focus-visible:ring-2"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">code</span>
            See all repositories on GitHub
            <span className="material-symbols-outlined text-[13px] text-[var(--color-outline)]" aria-hidden="true">north_east</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
