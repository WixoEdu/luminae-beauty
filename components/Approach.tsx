import Image from 'next/image'
import styles from './Approach.module.css'

const steps = [
  { n: '01', title: 'Consulta', body: 'Comenzamos con una consulta integral para entender tus rasgos únicos, preocupaciones y objetivos estéticos.' },
  { n: '02', title: 'Plan de Tratamiento', body: 'Diseñamos una estrategia de tratamiento utilizando nuestra gama de servicios para lograr resultados armoniosos y equilibrados.' },
  { n: '03', title: 'Sesión de Tratamiento', body: 'Nuestros profesionales realizan los tratamientos seleccionados con precisión y cuidado para garantizar tu seguridad y comodidad.' },
  { n: '04', title: 'Seguimiento', body: 'Proporcionamos instrucciones detalladas de cuidado post-tratamiento y programamos citas de seguimiento para supervisar tu progreso.' },
]

export default function Approach() {
  return (
    <section className={styles.approach}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Por qué elegir Luminae</p>
          <h3 className={styles.heading}>
            Nuestro enfoque hacia<br />
            la <em>belleza personalizada</em>
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
          <a href="#" className={styles.btn}>Reservar cita</a>
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
