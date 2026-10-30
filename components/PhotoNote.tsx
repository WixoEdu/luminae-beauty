import { IS_PRODUCTION } from '@/lib/site'
import styles from './PhotoNote.module.css'

// Staging-only marker: tells the client which real photo/video is still needed
// for the slot it sits in. Renders nothing in production.
export default function PhotoNote({ children, top = false }: { children: React.ReactNode; top?: boolean }) {
  if (IS_PRODUCTION) return null
  return (
    <span className={`${styles.note} ${top ? styles.top : ''}`}>
      <span aria-hidden="true">◐</span> Foto pendiente · {children}
    </span>
  )
}
