// Section heading component with consistent styling
export default function SectionHeading({ eyebrow, title, subtitle, center = false, icon }) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto space-y-2' : 'space-y-2'}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full glass-base font-mono text-xs font-medium text-[var(--color-primary)] tracking-wide ${center ? 'mx-auto' : ''}`}>
          {icon && (
            <span className="material-symbols-outlined text-[14px]">{icon}</span>
          )}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className="font-['Space_Grotesk'] text-3xl font-semibold tracking-tight text-[var(--color-on-surface)] leading-tight"
        style={{ letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-on-surface-variant)] text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
