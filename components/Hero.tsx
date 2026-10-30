import Link from 'next/link'
import PhotoSlot from './PhotoSlot'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <PhotoSlot variant="hero" label="Manos de Charlotte realizando un modelage, o Charlotte recibiendo a una paciente (luz natural, espacio libre a la izquierda para el texto)" />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Bonjour · Bienvenue à La Clinique</p>
        <h1 className={styles.title}>
          L&apos;art du soin,<br />
          <em>à la française.</em>
        </h1>
        <p className={styles.support}>El arte francés de cuidar la piel, en Escazú.</p>
        <p className={styles.sub}>
          El savoir-faire de Charlotte, una experiencia diseñada para tu piel y el placer de sentirte acompañada. Cada gesto tiene una intención; cada cuidado, su momento.
        </p>
        <div className={styles.actions}>
          <Link href="/skin-expertise" className={styles.btnPrimary}>Descubrir Skin Expertise</Link>
          <a href="#medicina-estetica" className={styles.btnGhost}>
            <span className={styles.playIcon} aria-hidden="true">
              <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                <path d="M0 0l9 5-9 5V0z" />
              </svg>
            </span>
            Medicina Estética
          </a>
        </div>
        <p className={styles.signal}>
          Skin Expertise by Charlotte · Formación francesa · CIDESCO Internacional · Escazú, Costa Rica
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Bajar</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
