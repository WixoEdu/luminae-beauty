import Image from 'next/image'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.instaCol}>
          <h3 className={styles.heading}>
            Conéctate con nosotros<br /><em>en instagram</em>
          </h3>
          <p className={styles.handle}>@lacliniquecr</p>
          <a href="https://www.instagram.com/lacliniquecr/" target="_blank" rel="noopener noreferrer" className={styles.btn}>Síguenos</a>
          <div className={styles.instaImages}>
            <div className={styles.instaImg}>
              <Image src="/stats_01.jpg" alt="Instagram La Clinique" fill sizes="260px" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.instaImg}>
              <Image src="/stats_02.jpg" alt="Instagram La Clinique" fill sizes="260px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
