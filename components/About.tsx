import Image from 'next/image'
import styles from './About.module.css'

const quickLinks = [
  'Promociones actuales',
  'Tratamientos exclusivos',
  'Nuestro equipo',
]

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imgMain}>
            <Image src="/about_main.jpg" alt="Clínica Luminae" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.imgSquare}>
            <Image src="/about_square.jpg" alt="Detalle tratamiento" fill sizes="200px" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Tratamientos Estéticos en tu Ciudad</p>
          <h3 className={styles.heading}>
            Realza tu<br />
            <em>belleza única</em><br />
            con tratamientos personalizados<br />
            y <em>tecnología avanzada</em>
          </h3>
          <p className={styles.body}>
            En Luminae nuestra filosofía se centra en restaurar y resaltar tus rasgos únicos. Creamos equilibrio y armonía para darte una renovada sensación de ti misma.
          </p>
          <nav className={styles.quickLinks}>
            {quickLinks.map((label, i) => (
              <a key={i} href="#" className={styles.quickLink}>
                <span>{label}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
