import Image from 'next/image'
import styles from './SkinExpertiseConnect.module.css'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  )
}

export default function SkinExpertiseConnect() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.top}`}>
        <div className={styles.imgLeft}>
          <Image src="/service_01.jpg" alt="Cuidado de piel La Clinique" fill sizes="(max-width:900px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
        </div>

        <div className={styles.textCol}>
          <h3 className={styles.heading}>
            Conéctate con nosotros<br /><em>en instagram</em>
          </h3>
          <p className={styles.handle}>@lacliniquecr</p>
          <a href="https://www.instagram.com/lacliniquecr/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
            <span>Síguenos</span>
            <span className={styles.iconCircle}><InstagramIcon /></span>
          </a>
        </div>

        <div className={styles.imgRight}>
          <Image src="/promo_01.jpg" alt="Resultado de tratamiento La Clinique" fill sizes="(max-width:900px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>

    </section>
  )
}
