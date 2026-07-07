import Image from 'next/image'
import styles from './SkinExpertiseDoctor.module.css'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 4h-2a4 4 0 00-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3z" /></svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
  )
}

export default function SkinExpertiseDoctor() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <Image
            src="/owner.png"
            alt="Charlotte Dibon"
            fill
            sizes="(max-width:900px) 100vw, 45vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.name}>Charlotte Dibon</h2>
          <p className={styles.role}>Skin Expert · Fundadora de La Clinique</p>
          <hr className={styles.divider} />
          <p className={styles.bio}>
            Soy Charlotte Dibon, y creé La Clinique porque creo que la estética puede ser refinada y cercana a la vez. Las clientas vienen por los resultados, pero se quedan por la confianza, la claridad y el acompañamiento real. Mi objetivo es lograr resultados que se sientan como tu mejor versión: nunca exagerados, siempre con criterio.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}><InstagramIcon /></a>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}><FacebookIcon /></a>
            <a href="#" aria-label="Correo" className={styles.socialIcon}><MailIcon /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
