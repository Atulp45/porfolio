// Reusable Glass Card component
export default function GlassCard({ children, className = '', active = false, hover = true, ...props }) {
  const baseClass = active ? 'glass-active' : 'glass-base'
  const hoverClass = hover && !active ? 'glass-hover' : ''
  return (
    <div
      className={`${baseClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
