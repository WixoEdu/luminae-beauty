import Image from 'next/image'
import styles from './Approach.module.css'

const steps = [
  { n: '01', title: 'Escuchar',     body: 'Conocemos tu piel, tu rutina, tus hábitos, tus tratamientos previos, tus objetivos y tus expectativas.' },
  { n: '02', title: 'Diagnosticar', body: 'Evaluamos qué necesita realmente tu piel y qué no es prioridad todavía.' },
  { n: '03', title: 'Diseñar',      body: 'Creamos una estrategia personalizada que puede integrar Skin Expertise, medicina estética regenerativa, skincare y mantenimiento.' },
  { n: '04', title: 'Acompañar',    body: 'Tu piel cambia. Tu plan también debe evolucionar. Por eso damos seguimiento, ajustamos recomendaciones y construimos resultados progresivos.' },
]

export default function Approach() {
  return (
    <section className={styles.approach}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>El Método La Clinique</p>
          <h3 className={styles.heading}>
            Escuchar. Diagnosticar.<br />
            <em>Diseñar.</em> Acompañar.
          </h3>
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <div>
                  <h6 className={styles.stepTitle}>{s.title}</h6>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href="#" className={styles.btn}>Reservar mi primera visita</a>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imgCircle}>
            <Image src="/approach.jpg" alt="Nuestro enfoque" fill sizes="(max-width:900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
