import Image from 'next/image'
import BookingButton from './BookingButton'
import styles from './SkinExpertiseIntro.module.css'

const features = [
  {
    title: 'Tecnología de Vanguardia',
    body: 'Nuestra clínica se enorgullece de ofrecer lo último en tratamientos de piel no invasivos.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="2.3" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: 'Tratamientos Signature',
    body: 'Protocolos exclusivos, diseñados con criterio para cada tipo de piel y objetivo.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 15l6-6" /><path d="M17.5 3.5a2.1 2.1 0 013 3L18 9l-3-3z" /><path d="M6 14l4 4-1.5 3L4 17.5z" />
      </svg>
    ),
  },
  {
    title: 'Equipo de Expertos',
    body: 'Profesionales certificados que acompañan cada paso de tu proceso con cercanía.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 3h8v4a4 4 0 01-8 0V3z" /><path d="M5 3h3M16 3h3M5 3v2a3 3 0 003 3M19 3v2a3 3 0 01-3 3" />
        <path d="M12 13v4M9 21h6M9.5 17h5l1 4h-7l1-4z" />
      </svg>
    ),
  },
]

export default function SkinExpertiseIntro() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>La Clinique · Escazú</p>
        <h1 className={styles.heading}>
          Un espacio privado donde relajarte<br />
          y vivir el <em>cuidado experto de tu piel</em>
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
              Ubicado en uno de los rincones más tranquilos de Escazú, este espacio boutique está dedicado a la belleza, la confianza y la calma. En La Clinique nuestra filosofía se centra en realzar y respetar tus rasgos únicos.
            </p>
            <p className={styles.body}>
              Creemos que un buen cuidado de piel es ciencia y también criterio. Combinamos protocolos con respaldo clínico y técnicas estéticas pensadas para cada piel, con resultados naturales adaptados a tus objetivos. Ya sea que busques tratamiento médico, cuidado preventivo o armonización estética, nuestro enfoque prioriza la salud de tu piel a largo plazo.
            </p>
            <BookingButton className={styles.btn}>
              <span>Reservar una cita</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8h12M9 3l5 5-5 5" /></svg>
            </BookingButton>
          </div>
        </div>

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
  )
}
