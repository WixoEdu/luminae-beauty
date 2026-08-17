import Image from 'next/image'
import SkinExpertiseWhatIs from './SkinExpertiseWhatIs'
import styles from './SkinExpertiseIntro.module.css'

const features = [
  {
    title: 'Escuchar',
    body: 'Comprendemos tu historia, tus hábitos, tu rutina, los tratamientos anteriores, lo que te preocupa y cómo deseas sentirte en tu piel.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 10a8 8 0 1116 0v5a2 2 0 01-2 2h-1v-6h3M4 10v6h3v-6H4" />
        <path d="M9 19a3 3 0 003 3" />
      </svg>
    ),
  },
  {
    title: 'Analizar',
    body: 'Observamos la condición estética actual: barrera, hidratación, textura, sensibilidad, luminosidad, pigmentación visible y tolerancia. No sustituye un diagnóstico dermatológico. Cuando identificamos signos que requieren valoración médica, te orientamos.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Diseñar',
    body: 'Establecemos prioridades y creamos una estrategia. Puede incluir simplificación de rutina, protocolos de cabina, cuidado en casa, mantenimiento o coordinación con medicina estética.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 15l6-6" /><path d="M17.5 3.5a2.1 2.1 0 013 3L18 9l-3-3z" /><path d="M6 14l4 4-1.5 3L4 17.5z" />
      </svg>
    ),
  },
  {
    title: 'Acompañar',
    body: 'La piel cambia. Revisamos su respuesta y adaptamos el plan conforme evoluciona.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-7-4.35-9.5-8.8C1 8.6 2.5 5 6 5c2 0 3.3 1.1 4 2 .7-.9 2-2 4-2 3.5 0 5 3.6 3.5 7.2C19 16.65 12 21 12 21z" />
      </svg>
    ),
  },
]

export default function SkinExpertiseIntro() {
  return (
    <>
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>La Clinique · Escazú</p>
        <h1 className={styles.heading}>
          Tu piel no necesita más tratamientos al azar. Necesita <em>criterio</em>.
        </h1>

        <div className={styles.top}>
          <div className={styles.imgMain}>
            <Image
              src="/about_main.jpg"
              alt="Interior La Clinique Escazú"
              fill
              priority
              sizes="(max-width:900px) 100vw, 55vw"
              style={{ objectFit: 'cover' }}
            />
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
              Skin Expertise es una experiencia personalizada para comprender el estado actual de tu piel, revisar su historia, tu rutina y los tratamientos anteriores, y diseñar una estrategia que pueda evolucionar contigo.
            </p>
            <p className={styles.body}>
              No es un facial estándar ni una recomendación automática de productos. Es el punto de partida para dejar de probar sin dirección y comenzar a cuidar tu piel con un plan.
            </p>
            <a href="https://wa.me/50689700298" target="_blank" rel="noopener noreferrer" className={styles.btn}>
              <span>Reservar mi primera experiencia Skin Expertise</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8h12M9 3l5 5-5 5" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <SkinExpertiseWhatIs />

    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.features}>
          {features.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h5 className={styles.featureTitle}>{f.title}</h5>
              <p className={styles.featureBody}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
