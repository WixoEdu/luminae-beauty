import Image from 'next/image'
import styles from './Owner.module.css'

export default function Owner() {
  return (
    <section id="skin-expertise" className={styles.owner}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <Image src="/owner.png" alt="Charlotte Dibon" fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Le savoir-faire français</p>
          <h3 className={styles.heading}>
            Charlotte<br /><em>Dibon</em>
          </h3>
          <h5 className={styles.quote}>
            "Antes de tratar una piel,<br />
            hay que <em>entenderla.</em>"
          </h5>
          <p className={styles.bio}>
            Bonjour, soy Charlotte. Me formé en estética en Francia, obtuve la certificación CIDESCO Internacional y dediqué parte de mi carrera a formar equipos para casas francesas como Institut Esthederm y Sothys Paris. De ese recorrido nació Skin Expertise: mi manera de unir análisis, cuidado manual y acompañamiento para que cada persona tenga una dirección clara para su piel.
          </p>
          <div className={styles.signature}>
            <p className={styles.sigName}>CHARLOTTE DIBON</p>
            <p className={styles.sigTitle}>Expert Facialist francesa · CIDESCO International</p>
          </div>
          {/* Oculto temporalmente a pedido del cliente — volver a mostrar cuando se indique */}
          {/* <a href="#" className={styles.btn}>Conocer Skin Expertise</a> */}
        </div>
      </div>
    </section>
  )
}
