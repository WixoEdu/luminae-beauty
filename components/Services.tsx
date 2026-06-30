'use client'

import Image from 'next/image'
import { useRef } from 'react'
import styles from './Services.module.css'

const services = [
  { title: 'Tratamientos Inyectables',  treatments: ['Rellenos dérmicos', 'Sculptra', 'Botox', 'Daxxify'],        img: '/service_01.jpg' },
  { title: 'Skincare Avanzado',         treatments: ['Microagujas', 'Morpheus8', 'Peeling químico', 'PRP'],        img: '/service_02.jpg' },
  { title: 'Tratamientos Exclusivos',   treatments: ['Hydrafacial', 'Lip Perfection', 'Skin Booster', 'Longevity'], img: '/service_03.jpg' },
  { title: 'Tratamientos Láser',        treatments: ['Láser Carbon Peel', 'Depilación láser', 'Láser Tattoo', 'Body Sculpting'], img: '/service_04.jpg' },
  { title: 'Rellenos Faciales',         treatments: ['Inyecciones de labios', 'Med Spa', 'Jeringa', 'Juvederm'],  img: '/service_05.jpg' },
  { title: 'Inyectables Cosméticos',    treatments: ['Toxina botulínica', 'Ácido hialurónico', 'Skin Care', 'Fort Worth'], img: '/service_06.jpg' },
]

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'prev' | 'next') => {
    if (!trackRef.current) return
    const cardW = trackRef.current.querySelector('li')?.offsetWidth ?? 320
    trackRef.current.scrollBy({ left: dir === 'next' ? cardW + 24 : -(cardW + 24), behavior: 'smooth' })
  }

  return (
    <section className={styles.services}>
      <div className={`container ${styles.header}`}>
        <h3 className={styles.heading}>
          Una Belleza<br />
          <em>Que Vale Más</em><br />
          Que una Simple Mirada
        </h3>
        <div className={styles.arrows}>
          <button onClick={() => scroll('prev')} aria-label="Anterior" className={styles.arrow}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 3L5 9l6 6" /></svg>
          </button>
          <button onClick={() => scroll('next')} aria-label="Siguiente" className={styles.arrow}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 3l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div className={styles.sliderWrap}>
        <ul ref={trackRef} className={styles.track}>
          {services.map((s) => (
            <li key={s.title} className={styles.card}>
              <div className={styles.cardImg}>
                <Image src={s.img} alt={s.title} fill sizes="320px" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{s.title}</h5>
                <ul className={styles.treatments}>
                  {s.treatments.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <a href="#" className={styles.cardBtn}>Ver más</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
