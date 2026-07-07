import Image from 'next/image'
import styles from './SkinExpertisePhilosophy.module.css'

export default function SkinExpertisePhilosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <Image
          src="/approach.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.tint} />

        <div className={styles.glass}>
          <p className={styles.eyebrow}>Nuestra filosofía</p>
          <blockquote className={styles.quote}>
            "La Clinique existe para realzar, no alterar, la belleza que ya está en ti."
          </blockquote>
          <p className={styles.name}>Charlotte Dibon</p>
          <p className={styles.role}>Skin Expert · Fundadora</p>
        </div>
      </div>
    </section>
  )
}
