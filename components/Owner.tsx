import Image from 'next/image'
import FlagLine from './FlagLine'
import { charlotteBio } from '@/lib/content'
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
          <p className={styles.bio}>{charlotteBio}</p>
          <div className={styles.signature}>
            <p className={styles.sigName}>CHARLOTTE DIBON</p>
            <p className={styles.sigTitle}>Expert Facialist francesa · CIDESCO International</p>
            <FlagLine />
          </div>
          {/* Oculto temporalmente a pedido del cliente — volver a mostrar cuando se indique */}
          {/* <a href="#" className={styles.btn}>Conocer Skin Expertise</a> */}
        </div>
      </div>
    </section>
  )
}
