import styles from './Testimonials.module.css'

const testimonials = [
  {
    title: 'Por fin una estrategia para mi piel',
    text: 'Llegué sin saber bien qué necesitaba y Charlotte me ayudó a entenderlo. Dejé de probar cosas al azar y empecé a cuidar mi piel con criterio real.',
    name: 'ANDREA',
    city: 'Escazú',
  },
  {
    title: 'La Skin Expert que estaba buscando',
    text: 'La experiencia Skin Expertise no se parece a nada que haya vivido antes. Charlotte escucha de verdad, diagnostica con honestidad y acompaña cada proceso con naturalidad.',
    name: 'VALERIA',
    city: 'Santa Ana',
  },
  {
    title: 'Un espacio donde me siento en manos correctas',
    text: 'En La Clinique la experiencia empieza desde que entran a entender tu piel, tu historia y tus expectativas. Es boutique, cercana y muy profesional.',
    name: 'MARCELA',
    city: 'San José',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h3 className={styles.heading}>
          Lo que dicen<br /><em>nuestras clientas</em>
        </h3>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.sparkle}>✦</div>
              <h5 className={styles.cardTitle}>{t.title}</h5>
              <p className={styles.cardText}>"{t.text}"</p>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.city}>{t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
