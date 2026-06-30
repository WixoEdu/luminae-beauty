import styles from './Testimonials.module.css'

const testimonials = [
  {
    title: 'Mejoras naturales',
    text: 'Recomiendo a todos los que buscan mejorar su piel y darse el regalo del rejuvenecimiento y sentirse en su mejor versión.',
    name: 'LAURA',
    city: 'Madrid',
  },
  {
    title: 'La aliada de belleza en quien más confío',
    text: 'Vine por la experiencia y me quedé por la confianza, la claridad y el cuidado. Mi objetivo fue crear resultados que se sienten como la mejor versión de mí.',
    name: 'SOFÍA',
    city: 'Barcelona',
  },
  {
    title: 'Una filosofía de autocuidado',
    text: 'Luminae no es solo un centro estético, es un ritual de bienestar arraigado en la conciencia plena para realzar de forma natural la belleza del rostro y el cuerpo.',
    name: 'NATALIE',
    city: 'Valencia',
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
