import Link from 'next/link'
import BookingButton from './BookingButton'
import PhotoSlot from './PhotoSlot'
import styles from './SkinExpertiseContinuity.module.css'

export default function SkinExpertiseContinuity() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.topText}>
            <p className={styles.eyebrow}>Le conseil</p>
            <h2 className={styles.heading}>
              La sesión termina.<br /><em>El acompañamiento continúa.</em>
            </h2>
            <p className={styles.lead}>
              Cuidar bien una piel no consiste en acumular sesiones. Consiste en comprender su evolución, organizar una rutina realista y elegir el siguiente tratamiento cuando tenga sentido. Mi trabajo también es ayudarte a aprovechar mejor los productos que ya tienes, corregir excesos y construir continuidad.
            </p>
          </div>

          <div className={styles.portrait}>
            <PhotoSlot variant="cutout" label="Foto de Charlotte sin fondo (PNG recortado), de medio cuerpo" />
          </div>
        </div>

        <div className={styles.grid}>
          <article id="primera-valoracion" className={styles.card}>
            <p className={styles.cardEyebrow}>Primera valoración</p>
            <h3 className={styles.cardTitle}>Antes de elegir un tratamiento, descubramos tu piel.</h3>
            <p className={styles.cardText}>
              Empezamos con una conversación y un análisis estético personalizado. Conoceré tus hábitos, los productos que utilizas y tus prioridades. Juntas definiremos el siguiente paso más adecuado para ti; puede ser una experiencia Skin Expertise, un programa de cuidado o, cuando corresponde, una valoración médica.
            </p>
            <BookingButton className={styles.btn}>Reservar mi primera valoración</BookingButton>
          </article>

          <article className={styles.card}>
            <p className={styles.cardEyebrow}>Acompañamiento · Première</p>
            <h3 className={styles.cardTitle}>Un cuidado que evoluciona contigo.</h3>
            <p className={styles.cardText}>
              Para quienes desean construir resultados con continuidad, Première propone sesiones periódicas, seguimiento y ajustes a medida que la piel cambia. El valor está en tener una experta que conoce tu historia y acompaña tus decisiones.
            </p>
            <Link href="/#membresia" className={styles.btn}>Descubrir el acompañamiento</Link>
          </article>
        </div>

        <p className={styles.manifesto}>
          No se trata de hacer más. <em>Se trata de elegir mejor,</em> y de tener a alguien de confianza a tu lado.
        </p>
      </div>
    </section>
  )
}
