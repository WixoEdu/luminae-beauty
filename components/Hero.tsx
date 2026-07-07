'use client'

import Image from 'next/image'
import { useRef, useEffect, useCallback } from 'react'
import { useBooking } from '@/context/BookingContext'
import styles from './Hero.module.css'

const RADIUS       = 230
const TOUCH_RADIUS = 140
const SHRINK_FACTOR = 0.85

export default function Hero() {
  const { open: openBooking } = useBooking()
  const sectionRef    = useRef<HTMLElement>(null)
  const revealWrapRef = useRef<HTMLDivElement>(null)
  const revealRef     = useRef<HTMLDivElement>(null)
  const cursorRef     = useRef<HTMLDivElement>(null)
  const mouseRef      = useRef({ x: 0, y: 0 })
  const cursorPosRef  = useRef({ x: 0, y: 0 })
  const rafRef        = useRef(0)
  const shrinkRafRef  = useRef(0)
  const lastPosRef    = useRef({ x: 0, y: 0 })
  const radiusRef     = useRef(0)

  const applyMask = (x: number, y: number, r: number) => {
    const el = revealRef.current
    if (!el) return
    const mask = `radial-gradient(circle ${r}px at ${x}px ${y}px, black 90%, transparent 100%)`
    el.style.setProperty('mask-image', mask)
    el.style.setProperty('-webkit-mask-image', mask)
  }

  const startShrink = () => {
    cancelAnimationFrame(shrinkRafRef.current)
    const { x, y } = lastPosRef.current

    const shrink = () => {
      radiusRef.current *= SHRINK_FACTOR
      if (radiusRef.current < 2) {
        if (revealRef.current) revealRef.current.style.opacity = '0'
        radiusRef.current = 0
        return
      }
      applyMask(x, y, radiusRef.current)
      shrinkRafRef.current = requestAnimationFrame(shrink)
    }

    shrinkRafRef.current = requestAnimationFrame(shrink)
  }

  // Smooth cursor follow via lerp
  const animateCursor = useCallback(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    cursorPosRef.current.x = lerp(cursorPosRef.current.x, mouseRef.current.x, 0.18)
    cursorPosRef.current.y = lerp(cursorPosRef.current.y, mouseRef.current.y, 0.18)
    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorPosRef.current.x}px`
      cursorRef.current.style.top  = `${cursorPosRef.current.y}px`
    }
    rafRef.current = requestAnimationFrame(animateCursor)
  }, [])

  useEffect(() => {
    // Show custom cursor only when directly over the image stack
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      if (!cursorRef.current || !revealWrapRef.current) return
      const under = document.elementFromPoint(e.clientX, e.clientY)
      const overImage = !!under && revealWrapRef.current.contains(under)
      cursorRef.current.classList.toggle(styles.cursorActive, overImage)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [animateCursor])

  // ── Mouse handlers ──
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !revealRef.current) return
    cancelAnimationFrame(shrinkRafRef.current)

    const el = revealRef.current
    if (el.style.opacity !== '1') el.style.opacity = '1'

    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    lastPosRef.current = { x, y }
    radiusRef.current = RADIUS
    applyMask(x, y, RADIUS)
  }

  // ── Touch handlers ──
  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (!sectionRef.current || !revealRef.current) return
    cancelAnimationFrame(shrinkRafRef.current)

    const touch = e.touches[0]
    const el = revealRef.current
    if (el.style.opacity !== '1') el.style.opacity = '1'

    const rect = sectionRef.current.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    lastPosRef.current = { x, y }
    radiusRef.current = TOUCH_RADIUS
    applyMask(x, y, TOUCH_RADIUS)
  }

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={startShrink}
      onTouchMove={handleTouchMove}
      onTouchEnd={startShrink}
    >
      <div ref={cursorRef} className={styles.cursor} />

      <div ref={revealWrapRef} className={styles.revealWrap}>
        {/* Base: before (natural skin) — always visible */}
        <div className={styles.imgBase}>
          <Image
            src="/before.png"
            alt="Antes del tratamiento"
            fill
            priority
            sizes="100vw"
            draggable={false}
            style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
          />
        </div>

        {/* Reveal: after (treated skin) — feathered spotlight on hover/touch */}
        <div ref={revealRef} className={styles.imgReveal}>
          <Image
            src="/after.png"
            alt="Después del tratamiento"
            fill
            priority
            sizes="100vw"
            draggable={false}
            style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
          />
        </div>
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>La Clinique · Escazú, Costa Rica</p>
        <h1 className={styles.title}>
          Cuidarte no<br />
          es <em>cambiarte.</em><br />
          Es volver a<br />
          confiar en tu piel.
        </h1>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={openBooking}>Reservar mi experiencia</button>
          <button
            className={styles.btnGhost}
            onClick={() => document.querySelector('#metodo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={styles.playIcon} aria-hidden="true">
              <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                <path d="M0 0l9 5-9 5V0z" />
              </svg>
            </span>
            Conocer el método
          </button>
        </div>
        {/* Touch-only hint inline with content */}
        <p className={styles.touchHint}>✦ Desliza el dedo para revelar</p>
      </div>

      {/* Desktop-only hint */}
      <div className={styles.hint}>
        <span className={styles.sparkle}>✦</span>
        <p>Mueve el cursor para</p>
        <p>revelar tu transformación</p>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Bajar</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
