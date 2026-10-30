import Image from 'next/image'
import Link from 'next/link'
import PhotoNote from './PhotoNote'
import styles from './About.module.css'

const quickLinks = [
  { label: 'Skin Expertise by Charlotte',      href: '/skin-expertise' },
  { label: 'Medicina Estética Regenerativa',   href: '#medicina-estetica' },
  { label: 'El Método La Clinique',            href: '#metodo' },
]

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imgMain}>
            <Image src="/about_main.jpg" alt="Rostro con piel luminosa, mano junto a la mejilla" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            <PhotoNote>detalle de las manos de Charlotte trabajando la piel</PhotoNote>
          </div>
          <div className={styles.imgSquare}>
            <Image src="/about_square.jpg" alt="Detalle tratamiento" fill sizes="200px" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>La promesa</p>
          <h3 className={styles.heading}>
            En Francia, cuidar una piel<br />
            no es solo un servicio.<br />
            Es un <em>oficio.</em>
          </h3>
          <p className={styles.body}>
            Un oficio que se aprende con el tiempo, se perfecciona con las manos y se ejerce con criterio. En La Clinique, cada experiencia comienza escuchándote. Porque ninguna piel es igual a otra, y porque la belleza merece algo más que respuestas estándar.
          </p>
          <Link href="/skin-expertise" className={styles.btn}>Conocer el savoir-faire de Charlotte</Link>
          <nav className={styles.quickLinks}>
            {quickLinks.map(({ label, href }) => (
              <Link key={label} href={href} className={styles.quickLink}>
                <span>{label}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
