'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './SkinExpertiseGallery.module.css'

const images = [
  { src: '/about_square.jpg', alt: 'Recepción La Clinique' },
  { src: '/service_02.jpg',   alt: 'Tratamiento facial' },
  { src: '/service_03.jpg',   alt: 'Sala de tratamiento' },
  { src: '/service_04.jpg',   alt: 'Cuidado facial personalizado' },
  { src: '/service_05.jpg',   alt: 'Espacio La Clinique' },
]

export default function SkinExpertiseGallery() {
  const sectionRef   = useRef<HTMLElement>(null)
  const filmstripRef = useRef<HTMLDivElement>(null)
  const trackRef     = useRef<HTMLDivElement>(null)

  const offsetRef    = useRef(0)
  const maxOffsetRef = useRef(0)
  const draggingRef  = useRef(false)
  const dragStartXRef      = useRef(0)
  const dragStartOffsetRef = useRef(0)
  const tickingRef   = useRef(false)

  useEffect(() => {
    const clamp = (v: number) => Math.min(0, Math.max(-maxOffsetRef.current, v))

    const applyTransform = () => {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
      }
    }

    const measure = () => {
      if (trackRef.current && filmstripRef.current) {
        const trackWidth = trackRef.current.scrollWidth
        const containerWidth = filmstripRef.current.clientWidth
        maxOffsetRef.current = Math.max(0, trackWidth - containerWidth)
        offsetRef.current = clamp(offsetRef.current)
        applyTransform()
      }
    }

    const onScroll = () => {
      if (tickingRef.current || draggingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        tickingRef.current = false
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const vh = window.innerHeight
        const total = rect.height + vh
        const progressed = vh - rect.top
        const progress = Math.min(1, Math.max(0, progressed / total))
        offsetRef.current = clamp(-progress * maxOffsetRef.current)
        applyTransform()
      })
    }

    measure()
    onScroll()
    window.addEventListener('resize', measure)
    // capture: true — this site's body (not window) is the actual scrolling
    // element, and scroll events on it don't bubble up to window.
    document.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => {
      window.removeEventListener('resize', measure)
      document.removeEventListener('scroll', onScroll, { capture: true })
    }
  }, [])

  const clampOffset = (v: number) => Math.min(0, Math.max(-maxOffsetRef.current, v))

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    dragStartXRef.current = e.clientX
    dragStartOffsetRef.current = offsetRef.current
    filmstripRef.current?.setPointerCapture(e.pointerId)
    filmstripRef.current?.classList.add(styles.dragging)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    const dx = e.clientX - dragStartXRef.current
    offsetRef.current = clampOffset(dragStartOffsetRef.current + dx)
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
    }
  }

  const endDrag = () => {
    draggingRef.current = false
    filmstripRef.current?.classList.remove(styles.dragging)
  }

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.headerText}>
        <p className={styles.eyebrow}>La Clinique · Escazú</p>
        <h3 className={styles.heading}>
          Un espacio seguro para <em>disfrutar y relajarte</em>
        </h3>
      </div>

      <div
        ref={filmstripRef}
        className={styles.filmstrip}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={trackRef} className={styles.track}>
          {images.map((img, i) => (
            <div key={img.src} className={styles.frame} data-index={i}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                draggable={false}
                sizes="(max-width:900px) 60vw, 22vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
