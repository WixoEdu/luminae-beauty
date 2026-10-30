import Image from 'next/image'
import { gestos } from '@/lib/content'
import PhotoNote from './PhotoNote'
import BookingButton from './BookingButton'
import SkinExpertiseWhatIs from './SkinExpertiseWhatIs'
import styles from './SkinExpertiseIntro.module.css'

const icons = [
  // Le geste
  <svg key="geste" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M8 12V5.5a1.5 1.5 0 013 0V11m0-5.5a1.5 1.5 0 013 0V11m0-4a1.5 1.5 0 013 0v7a6 6 0 01-6 6h-1a5 5 0 01-4-2l-3-4a1.5 1.5 0 012.2-2L8 15" />
  </svg>,
  // Sur mesure
  <svg key="mesure" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 15l6-6" /><path d="M17.5 3.5a2.1 2.1 0 013 3L18 9l-3-3z" /><path d="M6 14l4 4-1.5 3L4 17.5z" />
  </svg>,
  // Le modelage
  <svg key="modelage" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s-7-4.35-9.5-8.8C1 8.6 2.5 5 6 5c2 0 3.3 1.1 4 2 .7-.9 2-2 4-2 3.5 0 5 3.6 3.5 7.2C19 16.65 12 21 12 21z" />
  </svg>,
  // Le conseil
  <svg key="conseil" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 10a8 8 0 1116 0v5a2 2 0 01-2 2h-1v-6h3M4 10v6h3v-6H4" />
    <path d="M9 19a3 3 0 003 3" />
  </svg>,
]

export default function SkinExpertiseIntro() {
  return (
    <>
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Skin Expertise by Charlotte · Le savoir-faire français</p>
        <h1 className={styles.heading}>
          Una sesión como ninguna otra. Porque tu piel <em>tampoco lo es.</em>
        </h1>

        <div className={styles.top}>
          <div className={styles.imgMain}>
            <Image
              src="/about_main.jpg"
              alt="Rostro con piel luminosa, mano junto a la mejilla"
              fill
              priority
              sizes="(max-width:900px) 100vw, 55vw"
              style={{ objectFit: 'cover' }}
            />
            <PhotoNote>manos de Charlotte en un modelage o Charlotte con una paciente en cabina</PhotoNote>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.imgSecondary}>
              <Image
                src="/service_01.jpg"
                alt="Tratamiento facial personalizado"
                fill
                sizes="(max-width:900px) 40vw, 320px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p className={styles.body}>
              Una experiencia facial de estética profesional creada sur mesure por Charlotte Dibon. Lectura de piel, gestos expertos, modelage francés cuando corresponde y una estrategia para seguir cuidándote más allá de la cabina.
            </p>
            <div className={styles.actions}>
              <BookingButton className={styles.btn}>
                <span>Descubrir mi primera visita</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8h12M9 3l5 5-5 5" /></svg>
              </BookingButton>
              <a href="#sesion" className={styles.link}>Cómo transcurre una sesión</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SkinExpertiseWhatIs />

    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.features}>
          {gestos.map((g, i) => (
            <div key={g.code} className={styles.feature}>
              <div className={styles.featureIcon}>{icons[i]}</div>
              <p className={styles.featureCode}>{g.code}</p>
              <h5 className={styles.featureTitle}>{g.title}</h5>
              <p className={styles.featureBody}>{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
