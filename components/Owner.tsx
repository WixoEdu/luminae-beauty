import Image from 'next/image'
import styles from './Owner.module.css'

export default function Owner() {
  return (
    <section className={styles.owner}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <Image src="/owner.jpg" alt="Dra. Alma Mayers" fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Conoce a la fundadora</p>
          <h3 className={styles.heading}>
            Dra. Alma<br /><em>Mayers</em>
          </h3>
          <h5 className={styles.quote}>
            "Luminae existe para refinar, no alterar,<br />
            <em>la belleza</em> que ya está ahí."
          </h5>
          <p className={styles.bio}>
            Soy la Dra. Alma Mayers y fundé LUMINAE porque creo que la medicina estética puede ser a la vez refinada y accesible. Los pacientes vienen por mi experiencia, pero se quedan por la confianza, la claridad y el cuidado. Mi objetivo es crear resultados que se sientan como la mejor versión de ti.
          </p>
          <div className={styles.signature}>
            <p className={styles.sigName}>DRA. ALMA MAYERS</p>
            <p className={styles.sigTitle}>Médica &amp; Fundadora de Luminae</p>
          </div>
          <a href="#" className={styles.btn}>Más sobre nosotros</a>
        </div>
      </div>
    </section>
  )
}
