'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import styles from './Promotions.module.css'

const promos = [
  { pct: '$249', label: 'sesión individual', desc: 'Experiencia Skin Expertise de 1h30 con Charlotte: análisis, protocolo personalizado y recomendaciones adaptadas a tu piel.', img: '/promo_01.jpg' },
  { pct: '$209', label: '/ mes',             desc: 'Membresía Première: acompañamiento mensual con estrategia que evoluciona, acceso prioritario y privilegios exclusivos.',        img: '/promo_02.jpg' },
  { pct: '10%',  label: 'beneficio',         desc: 'Como miembro Première accedes a 10% en tratamientos inyectables, productos boutique y test epigenético.',                      img: '/promo_03.jpg' },
]

const GiftIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
    <path d="M20 12v10H4V12" /><path d="M22 7H2v5h20V7z" />
    <path d="M12 22V7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
)

export default function Promotions() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animate the glass box in when each card enters the viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.setAttribute('data-visible', e.isIntersecting ? 'true' : 'false')
        })
      },
      { threshold: 0.1 }
    )
    cardRefs.current.forEach((c) => { if (c) obs.observe(c) })
    return () => obs.disconnect()
  }, [])

  return (
    <section id="membresia" className={styles.section}>
      {/* Title sits above the cards in normal flow */}
      <div className={`container ${styles.titleBlock}`}>
        <p className={styles.eyebrow}>Planes La Clinique</p>
        <h3 className={styles.heading}>
          Elige cómo vivir<br /><em>Skin Expertise</em>
        </h3>
      </div>

      {/*
        cardsWrapper height = (N cards × card height) + extra hold for last card
        Cards are position:sticky — each slides up from below and covers the previous.
        Higher index → higher z-index → slides ON TOP of earlier cards.
      */}
      <div className={styles.cardsWrapper}>
        {promos.map((p, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el }}
            className={styles.card}
            style={{ zIndex: i + 1 }}
          >
            <Image
              src={p.img}
              alt={p.desc}
              fill
              sizes="(max-width:768px) 100vw, 90vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={i === 0}
            />

            {/* Left-side gradient overlay for legibility */}
            <div className={styles.overlay} />

            {/* Glassmorphism content box */}
            <div className={styles.glassBox}>
              <div className={styles.giftIcon}><GiftIcon /></div>
              <p className={styles.pct}>{p.pct} <em>{p.label}</em></p>
              <p className={styles.desc}>{p.desc}</p>
              <a href="#" className={styles.btn}>Reservar hoy &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
