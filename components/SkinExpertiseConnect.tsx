import Image from 'next/image'
import styles from './SkinExpertiseConnect.module.css'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  )
}

const stats = [
  { value: '10+', label: 'Años de', sub: 'experiencia' },
  { value: '98%', label: 'Clientes', sub: 'satisfechos' },
  { value: '4.9', label: 'Puntuación', sub: 'media' },
  { value: '5K',  label: 'Transfor-', sub: 'maciones' },
]

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
          <p className={styles.handle}>@laclinique.cr</p>
          <a href="#" className={styles.btn}>
            <span>Síguenos</span>
            <span className={styles.iconCircle}><InstagramIcon /></span>
          </a>
        </div>

        <div className={styles.imgRight}>
          <Image src="/promo_01.jpg" alt="Resultado de tratamiento La Clinique" fill sizes="(max-width:900px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>

      <div className={`container ${styles.statsRow}`}>
        {stats.map((s) => (
          <div key={s.sub} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}<br /><em>{s.sub}</em></span>
          </div>
        ))}
      </div>
    </section>
  )
}
