import Image from 'next/image'
import styles from './Promotions.module.css'

const promos = [
  { pct: '30%', label: 'descuento', desc: 'Ofertas estéticas de temporada – eleva tu rutina.', img: '/promo_01.jpg' },
  { pct: '30%', label: 'descuento', desc: 'Descuento para nuevas clientas.',                    img: '/promo_02.jpg' },
  { pct: '30%', label: 'descuento', desc: 'Tarifas especiales en inyectables y rejuvenecimiento cutáneo.', img: '/promo_03.jpg' },
]

export default function Promotions() {
  return (
    <section className={styles.promotions}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.titleCol}>
          <p className={styles.eyebrow}>Por qué elegir Luminae</p>
          <h3 className={styles.heading}>
            Resumen de<br /><em>Promociones</em><br />Mensuales
          </h3>
        </div>

        <div className={styles.cards}>
          {promos.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardBg}>
                <Image src={p.img} alt={p.desc} fill sizes="420px" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.pct}>{p.pct} <em>{p.label}</em></h3>
                <p className={styles.desc}>{p.desc}</p>
                <a href="#" className={styles.cardBtn}>Reservar hoy</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
