import Image from 'next/image'
import Link from 'next/link'
import PhotoSlot from './PhotoSlot'
import FlagLine from './FlagLine'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imgMain}>
            <PhotoSlot label="Detalle de las manos de Charlotte trabajando la piel" />
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
          <FlagLine />
          <p className={styles.body}>
            Un oficio que se aprende con el tiempo, se perfecciona con las manos y se ejerce con criterio. En La Clinique, cada experiencia comienza escuchándote. Porque ninguna piel es igual a otra, y porque la belleza merece algo más que respuestas estándar.
          </p>
          <Link href="/skin-expertise" className={styles.btn}>Conocer el savoir-faire de Charlotte</Link>
        </div>
      </div>
    </section>
  )
}
