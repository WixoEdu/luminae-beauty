import Image from 'next/image'
import PhotoNote from './PhotoNote'
import styles from './SkinExpertiseWhatIs.module.css'

const steps = [
  { title: 'Primero observo y escucho.', body: 'Tu historia, tu rutina y la forma en que tu piel se encuentra hoy importan.' },
  { title: 'Después selecciono.', body: 'La limpieza, los activos, las técnicas y su orden responden a prioridades identificadas en la valoración.' },
  { title: 'Durante la sesión ajusto.', body: 'El cuidado manual y los tiempos se adaptan a la respuesta y tolerancia de tu piel.' },
  { title: 'Al terminar, te oriento.', body: 'Sales con recomendaciones para casa y los siguientes pasos de una estrategia que puede evolucionar contigo.' },
]

export default function SkinExpertiseWhatIs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <Image
              src="/skin_expertise_intro.jpg"
              alt="Piel luminosa y gota de sérum"
              fill
              sizes="(max-width:900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
            <PhotoNote>primer plano de las manos de Charlotte trabajando</PhotoNote>
          </div>

          <div className={styles.textCol}>
            <p className={styles.eyebrow}>L&apos;artisanat du soin</p>
            <h2 className={styles.title}>Una artesanía hecha a medida para tu piel.</h2>
            <hr className={styles.divider} />
            <p className={styles.text}>
              En Francia, el cuidado profesional de la piel es un oficio. Se aprende estudiando, observando y trabajando con las manos durante años. Ese savoir-faire está en cada decisión: qué necesita tu piel hoy, qué conviene posponer y cómo combinar técnicas y activos con intención.
            </p>
            <p className={styles.text}>
              No sigo una fórmula fija: construyo cada sesión a partir de ti.
            </p>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>Sur mesure, en la práctica</p>
            <h3 className={styles.quote}>
              Qué significa &ldquo;sur mesure&rdquo; en una sesión.
            </h3>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.stepNum}>0{i + 1}</span>
                  <p className={styles.stepText}><strong>{s.title}</strong> {s.body}</p>
                </li>
              ))}
            </ol>
            <p className={styles.note}>
              No todos los pasos ni todos los activos aplican a todas las personas: la indicación depende de la evaluación y del alcance profesional.
            </p>
          </div>

          <div className={`${styles.imageCol} ${styles.imageColOffset}`}>
            <Image
              src="/approach.jpg"
              alt="Rostro iluminado por luz natural"
              fill
              sizes="(max-width:900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
