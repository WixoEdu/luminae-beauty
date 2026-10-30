import { gestos } from '@/lib/content'
import styles from './Savoirfaire.module.css'

export default function Savoirfaire() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Le savoir-faire</p>
        <h3 className={styles.heading}>
          Cuatro gestos que cuentan<br />
          <em>una experiencia</em>
        </h3>

        <div className={styles.grid}>
          {gestos.map((g, i) => (
            <div key={g.code} className={styles.item}>
              <span className={styles.num}>0{i + 1}</span>
              <p className={styles.code}>{g.code}</p>
              <h5 className={styles.title}>{g.title}</h5>
              <p className={styles.body}>{g.body}</p>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          Cada sesión Skin Expertise es una creación <em>sur mesure.</em><br />
          Hecha con conocimiento, intención y manos expertas.
        </p>
      </div>
    </section>
  )
}
