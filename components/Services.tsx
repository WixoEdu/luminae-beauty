'use client'

import Image from 'next/image'
import { useRef } from 'react'
import styles from './Services.module.css'

const services = [
  { title: 'Skin Expertise by Charlotte', treatments: ['Análisis personalizado de piel', 'Protocolo facial avanzado', 'Sesión de 1h30', 'Seguimiento posterior'],              img: '/service_01.jpg' },
  { title: 'Membresía Première',          treatments: ['Rito mensual Skin Expertise', 'Acceso prioritario a agenda', 'WhatsApp directo con Charlotte', 'Beneficios exclusivos'], img: '/service_02.jpg' },
  { title: 'Toxina Botulínica',           treatments: ['Suavizar líneas de expresión', 'Prevención progresiva', 'Resultado fresco y natural', 'Criterio médico'],              img: '/service_03.jpg' },
  { title: 'Radiesse · Bioestimulación',  treatments: ['Mejora de firmeza facial', 'Calidad y soporte de piel', 'Regeneración de tejidos', 'Resultados progresivos'],          img: '/service_04.jpg' },
  { title: 'Fillers · Ácido Hialurónico', treatments: ['Armonización facial', 'Restaurar y equilibrar', 'Indicado por valoración médica', 'Resultados naturales'],            img: '/service_05.jpg' },
  { title: 'Armonización Facial',         treatments: ['Estrategia personalizada', 'Combinación de técnicas médicas', 'Respeto a la expresión', 'Acompañamiento integral'],    img: '/service_06.jpg' },
]

export default function Services() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (dir: 'prev' | 'next') => {
    if (!trackRef.current) return
    const cardW = trackRef.current.querySelector('li')?.offsetWidth ?? 320
    trackRef.current.scrollBy({ left: dir === 'next' ? cardW + 24 : -(cardW + 24), behavior: 'smooth' })
  }

  return (
    <section id="servicios" className={styles.services}>
      <div className={`container ${styles.header}`}>
        <h3 className={styles.heading}>
          Skin Expertise<br />
          <em>&amp; Medicina</em><br />
          Estética Regenerativa
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
