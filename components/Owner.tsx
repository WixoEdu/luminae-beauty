import Image from 'next/image'
import styles from './Owner.module.css'

export default function Owner() {
  return (
    <section id="skin-expertise" className={styles.owner}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <Image src="/owner.jpg" alt="Charlotte Dibon" fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Conoce a tu Skin Expert</p>
          <h3 className={styles.heading}>
            Charlotte<br /><em>Dibon</em>
          </h3>
          <h5 className={styles.quote}>
            "Antes de tratar una piel,<br />
            hay que <em>entenderla.</em>"
          </h5>
          <p className={styles.bio}>
            Soy Charlotte Dibon, Skin Expert en La Clinique y Especialista en estética avanzada · CIDESCO Internacional. Skin Expertise nació de una convicción: antes de tratar una piel, hay que entenderla. Con una visión francesa de la piel, combino diagnóstico personalizado, técnicas profesionales y activos avanzados para acompañar tu piel con criterio y naturalidad. Las clientas vienen por los resultados, pero se quedan por el acompañamiento real.
          </p>
          <div className={styles.signature}>
            <p className={styles.sigName}>CHARLOTTE DIBON</p>
            <p className={styles.sigTitle}>Skin Expert · CIDESCO Internacional</p>
          </div>
          <a href="#" className={styles.btn}>Conocer Skin Expertise</a>
        </div>
      </div>
    </section>
  )
}
