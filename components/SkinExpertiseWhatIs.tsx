import Image from 'next/image'
import PhotoSlot from './PhotoSlot'
import SurMesureAccordion from './SurMesureAccordion'
import styles from './SkinExpertiseWhatIs.module.css'

export default function SkinExpertiseWhatIs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <PhotoSlot label="Primer plano de las manos de Charlotte trabajando" />
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
            <SurMesureAccordion />
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
