'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import styles from './Stats.module.css'

const counters = [
  { value: 10,   suffix: '+',  label: 'Años de',    sub: 'experiencia' },
  { value: 98,   suffix: '%',  label: 'Clientes',   sub: 'satisfechos' },
  { value: 4.9,  suffix: '',   label: 'Puntuación', sub: 'media', decimal: true },
  { value: 5000, suffix: '+',  label: 'Transfor-',  sub: 'maciones', format: 'k' },
]

function Counter({ value, suffix, label, sub, decimal, format }: typeof counters[0] & { decimal?: boolean; format?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const steps = 60
        const increment = value / steps
        let current = 0
        const id = setInterval(() => {
          current = Math.min(current + increment, value)
          setDisplay(current)
          if (current >= value) clearInterval(id)
        }, duration / steps)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  const formatted = () => {
    if (format === 'k') return `${Math.round(display / 1000)}K`
    if (decimal) return display.toFixed(1)
    return Math.round(display).toString()
  }

  return (
    <div ref={ref} className={styles.counter}>
      <p className={styles.cLabel}>{label}</p>
      <p className={styles.cValue}>{formatted()}<span className={styles.cSuffix}>{suffix}</span></p>
      <p className={styles.cSub}><em>{sub}</em></p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.instaCol}>
          <h3 className={styles.heading}>
            Conéctate con nosotros<br /><em>en instagram</em>
          </h3>
          <p className={styles.handle}>@laclinique.cr</p>
          <a href="#" className={styles.btn}>Síguenos</a>
          <div className={styles.instaImages}>
            <div className={styles.instaImg}>
              <Image src="/stats_01.jpg" alt="Instagram La Clinique" fill sizes="260px" style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.instaImg}>
              <Image src="/stats_02.jpg" alt="Instagram La Clinique" fill sizes="260px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div className={styles.countersCol}>
          {counters.map((c) => <Counter key={c.sub} {...c} />)}
        </div>
      </div>
    </section>
  )
}
