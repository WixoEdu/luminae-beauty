import Image from 'next/image'
import styles from './BlogHeader.module.css'

export default function BlogHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.images}>
        <div className={styles.imgLeft}>
          <Image
            src="/approach.jpg"
            alt=""
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.imgRight}>
          <Image
            src="/about_main.jpg"
            alt="La Clinique Escazú"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>La Clinique · Blog</p>
        <h1 className={styles.title}>
          Últimas noticias y<br />
          <em>experiencias La Clinique</em>
        </h1>
      </div>
    </section>
  )
}
