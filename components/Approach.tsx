import Link from 'next/link'
import ShortsEmbed from './ShortsEmbed'
import styles from './Approach.module.css'

const steps = [
  { n: '01', title: 'Escuchar',     body: 'Conocemos tu piel, tu rutina, tus hábitos, tus tratamientos previos, tus objetivos y tus expectativas.' },
  { n: '02', title: 'Analizar',     body: 'Evaluamos qué necesita realmente tu piel y qué no es prioridad todavía.' },
  { n: '03', title: 'Diseñar',      body: 'Creamos una estrategia personalizada que puede integrar Skin Expertise, medicina estética regenerativa, skincare y mantenimiento.' },
  { n: '04', title: 'Acompañar',    body: 'Tu piel cambia. Tu plan también debe evolucionar. Por eso damos seguimiento, ajustamos recomendaciones y construimos resultados progresivos.' },
]

export default function Approach() {
  return (
    <section id="metodo" className={styles.approach}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>El método La Clinique</p>
          <h3 className={styles.heading}>
            Escuchar. Analizar.<br />
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
          <p className={styles.closing}>Tu primera visita empieza por entender tu piel.</p>
          <Link href="/skin-expertise#primera-valoracion" className={styles.btn}>Conocer la primera valoración</Link>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.video}>
            <ShortsEmbed id="H3lfZ944ZOo" title="El método La Clinique" />
          </div>
        </div>
      </div>
    </section>
  )
}
