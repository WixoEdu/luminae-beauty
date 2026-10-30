import Image from 'next/image'
import Link from 'next/link'
import styles from './Paths.module.css'

const paths = [
  {
    eyebrow: 'Skin Expertise by Charlotte',
    title: 'Una experiencia de cuidado, hecha a mano',
    body: 'Una experiencia de cuidado estético que combina análisis, técnicas profesionales, trabajo manual y orientación para casa.',
    cta: 'Vivir Skin Expertise',
    href: '/skin-expertise',
    img: '/service_02.jpg',
    alt: 'Piel luminosa, gota de sérum y flor blanca',
  },
  {
    eyebrow: 'Medicina Estética',
    title: 'Con su propio espacio',
    body: 'Procedimientos realizados por profesionales médicos según valoración e indicación correspondiente. Una disciplina complementaria, con su propio espacio.',
    cta: 'Explorar medicina estética',
    href: '#medicina-estetica',
    img: '/service_03.jpg',
    alt: 'Retrato de mujer con piel natural',
  },
]

export default function Paths() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Dos recorridos, sin competencia</p>
        <h3 className={styles.heading}>
          Elige por dónde<br /><em>empezar</em>
        </h3>

        <div className={styles.grid}>
          {paths.map((p) => (
            <article key={p.eyebrow} className={styles.card}>
              <div className={styles.cardImg}>
                <Image src={p.img} alt={p.alt} fill sizes="(max-width:900px) 100vw, 45vw" style={{ objectFit: 'cover', objectPosition: 'center 25%' }} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardEyebrow}>{p.eyebrow}</p>
                <h5 className={styles.cardTitle}>{p.title}</h5>
                <p className={styles.cardText}>{p.body}</p>
                <Link href={p.href} className={styles.btn}>{p.cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
