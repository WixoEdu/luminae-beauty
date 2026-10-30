import styles from './FlagLine.module.css'

// Thin tricolor rule (blue, white, red) used as a French "distintivo".
export default function FlagLine() {
  return <span className={styles.flag} aria-hidden="true" />
}
