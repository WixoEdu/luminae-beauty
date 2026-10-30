import styles from './PhotoSlot.module.css'

// Visible placeholder that marks where a real photo still needs to go.
export default function PhotoSlot({
  label,
  variant = 'default',
}: {
  label: string
  variant?: 'default' | 'hero' | 'cutout'
}) {
  return (
    <div className={`${styles.slot} ${styles[variant]}`} role="img" aria-label={`Foto pendiente: ${label}`}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M4 8a2 2 0 012-2h1.5l1-1.5h7L17.5 6H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" />
        <circle cx="12" cy="12.5" r="3.5" />
      </svg>
      <span className={styles.title}>Foto pendiente</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
