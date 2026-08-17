import Image from 'next/image'
import styles from './SkinExpertiseWhatIs.module.css'

export default function SkinExpertiseWhatIs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <Image
              src="/skin_expertise_intro.jpg"
              alt="Análisis y cuidado personalizado de la piel"
              fill
              sizes="(max-width:900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.title}>¿Qué es Skin Expertise?</h2>
            <hr className={styles.divider} />
            <p className={styles.text}>
              Skin Expertise es una experiencia de análisis estético y cuidado personalizado creada por Charlotte Dibon en La Clinique. Integra la historia de la piel, la rutina, los hábitos, los tratamientos previos, las expectativas y la condición visible actual para diseñar un plan de calidad de piel con protocolos profesionales, skincare y acompañamiento.
            </p>
            <p className={styles.text}>
              Cuando una preocupación requiere diagnóstico, prescripción o un procedimiento médico, se orienta o coordina con el profesional correspondiente.
            </p>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.textCol}>
            <h3 className={styles.quote}>
              Quizá tu piel no necesita algo más. Necesita que alguien conecte todas las piezas.
            </h3>
            <p className={styles.text}>
              Muchas pacientes llegan utilizando buenos productos y realizándose buenos tratamientos, pero sin una estrategia común.
            </p>
            <ul className={styles.list}>
              <li>La piel está sensibilizada por demasiados activos.</li>
              <li>Se siente deshidratada aunque utiliza varias cremas.</li>
              <li>Trabaja manchas sin controlar primero la inflamación y la barrera.</li>
              <li>Recibe procedimientos en distintos lugares sin coordinación.</li>
              <li>Está cambiando por clima, estrés, edad o transición hormonal.</li>
              <li>Acumula tratamientos sin saber cuál debería ser la prioridad.</li>
            </ul>
            <p className={styles.text}>
              La paciente no debe sentirse culpable. La industria la acostumbró a elegir productos y procedimientos antes de entender qué necesita su piel.
            </p>
          </div>

          <div className={`${styles.imageCol} ${styles.imageColOffset}`}>
            <Image
              src="/approach.jpg"
              alt="Cuidado de piel personalizado en La Clinique"
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
