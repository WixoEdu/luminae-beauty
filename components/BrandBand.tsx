import Image from 'next/image'
import styles from './BrandBand.module.css'

// Full-width dark statement band with the white La Clinique logo underneath.
export default function BrandBand({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.band}>
      <div className="container">
        <p className={styles.quote}>{children}</p>
        <Image
          src="/logo/la-clinique-logo-white.png"
          alt="La Clinique"
          width={847}
          height={144}
          className={styles.logo}
        />
      </div>
    </section>
  )
}
