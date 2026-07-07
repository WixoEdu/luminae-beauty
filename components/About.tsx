import Image from 'next/image'
import styles from './About.module.css'

const quickLinks = [
  { label: 'Skin Expertise by Charlotte',      href: '#skin-expertise' },
  { label: 'Medicina Estética Regenerativa',   href: '#skin-expertise' },
  { label: 'El Método La Clinique',            href: '#metodo' },
]

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imgMain}>
            <Image src="/about_main.jpg" alt="La Clinique Escazú" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.imgSquare}>
            <Image src="/about_square.jpg" alt="Detalle tratamiento" fill sizes="200px" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Una forma diferente de vivir la estética</p>
          <h3 className={styles.heading}>
            Un espacio<br />
            <em>boutique</em><br />
            donde cada piel<br />
            se escucha
          </h3>
          <p className={styles.body}>
            La Clinique nace para devolverle a la estética algo esencial: confianza, criterio y humanidad. Creamos un espacio boutique en Escazú donde cada piel se escucha, se analiza y se acompaña con criterio. No vendemos tratamientos aislados: diseñamos estrategias personalizadas para ayudarte a verte y sentirte mejor, respetando tu naturalidad.
          </p>
          <nav className={styles.quickLinks}>
            {quickLinks.map(({ label, href }) => (
              <a key={label} href={href} className={styles.quickLink}>
                <span>{label}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7h10M8 3l4 4-4 4" /></svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
