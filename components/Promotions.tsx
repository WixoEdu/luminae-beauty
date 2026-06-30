'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import styles from './Promotions.module.css'

const promos = [
  { pct: '30%', label: 'descuento', desc: 'Ofertas estéticas de temporada – eleva tu rutina.', img: '/promo_01.jpg' },
  { pct: '30%', label: 'descuento', desc: 'Descuento para nuevas clientas.',                    img: '/promo_02.jpg' },
  { pct: '30%', label: 'descuento', desc: 'Tarifas especiales en inyectables y rejuvenecimiento cutáneo.', img: '/promo_03.jpg' },
]

const N = promos.length
const STACK_OFFSET = 32   // px visible from each previous card
const INITIAL_SLIDE = 700 // px below viewport that cards start

export default function Promotions() {
  const outerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    const update = () => {
      // Mobile: let CSS handle layout, reset JS transforms
      if (window.matchMedia('(max-width: 900px)').matches) {
        cardRefs.current.forEach(c => { if (c) c.style.transform = '' })
        return
      }

      const rect = outer.getBoundingClientRect()
      const scrolled = -rect.top
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) return

      const progress = Math.max(0, Math.min(1, scrolled / scrollable))

      cardRefs.current.forEach((card, i) => {
        if (!card) return
        // Each card animates within its own 1/N slice of scroll progress
        const p = Math.max(0, Math.min(1, progress * N - i))
        const targetY = i * STACK_OFFSET
        const y = targetY + INITIAL_SLIDE * (1 - p)
        card.style.transform = `translateY(${y}px)`
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    // Tall outer provides the scroll distance for the pinned animation
    <section className={styles.outer} ref={outerRef}>
      {/* Sticky inner fills viewport and stays pinned while outer scrolls */}
      <div className={styles.sticky}>
        <div className={`container ${styles.inner}`}>

          <div className={styles.titleCol}>
            <p className={styles.eyebrow}>Por qué elegir Luminae</p>
            <h3 className={styles.heading}>
              Resumen de<br /><em>Promociones</em><br />Mensuales
            </h3>
          </div>

          <div className={styles.cardsCol}>
            {promos.map((p, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el }}
                className={styles.card}
                style={{
                  zIndex: i + 1,
                  transform: `translateY(${INITIAL_SLIDE}px)`, // SSR initial: off-screen
                }}
              >
                <div className={styles.cardBg}>
                  <Image src={p.img} alt={p.desc} fill sizes="800px" style={{ objectFit: 'cover' }} />
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
      </div>
    </section>
  )
}
