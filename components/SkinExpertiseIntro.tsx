import Image from 'next/image'
import PhotoSlot from './PhotoSlot'
import BookingButton from './BookingButton'
import SkinExpertiseWhatIs from './SkinExpertiseWhatIs'
import styles from './SkinExpertiseIntro.module.css'

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
            <PhotoSlot label="Manos de Charlotte en un modelage, o Charlotte con una paciente en cabina" />
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

    </>
  )
}
