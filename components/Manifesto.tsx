'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Manifesto.module.css'

const LINE1 = 'Cuidarte no es cambiarte.'
const LEAD = 'Es volver a '
const FIXED_LEN = LINE1.length + LEAD.length
// Each verb carries its own tail so the grammar stays right ("creer en", "respetar tu").
const VERBS = ['confiar en tu piel.', 'creer en tu piel.', 'respetar tu piel.']
const FULL = `${LINE1} ${LEAD}${VERBS[0]}`

const TYPE_MS = 60
const ERASE_MS = 32
const HOLD_MS = 2400

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const [fixed, setFixed] = useState(0)
  const [verb, setVerb] = useState('')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFixed(FIXED_LEN)
      setVerb(VERBS[0])
      return
    }

    let cancelled = false
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

    const run = async () => {
      for (let i = 1; i <= FIXED_LEN; i++) {
        if (cancelled) return
        setFixed(i)
        await sleep(TYPE_MS)
      }
      let idx = 0
      while (!cancelled) {
        const target = VERBS[idx]
        for (let i = 1; i <= target.length; i++) {
          if (cancelled) return
          setVerb(target.slice(0, i))
          await sleep(TYPE_MS)
        }
        await sleep(HOLD_MS)
        for (let i = target.length - 1; i >= 0; i--) {
          if (cancelled) return
          setVerb(target.slice(0, i))
          await sleep(ERASE_MS)
        }
        await sleep(300)
        idx = (idx + 1) % VERBS.length
      }
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.disconnect()
        run()
      }
    }, { threshold: 0.5 })
    obs.observe(el)

    return () => {
      cancelled = true
      obs.disconnect()
    }
  }, [])

  const line1 = LINE1.slice(0, fixed)
  const lead = fixed > LINE1.length ? LEAD.slice(0, fixed - LINE1.length) : ''

  return (
    <section ref={ref} className={styles.section}>
      <div className="container">
        <p className={styles.srOnly}>{FULL}</p>

        <div className={styles.quote} aria-hidden="true">
          {/* Invisible copy of the longest phrase reserves the height so nothing jumps while typing */}
          <span className={styles.sizer}>{LINE1}{'\n'}{LEAD}{VERBS[0]}</span>
          <span className={styles.live}>
            {line1}{'\n'}{lead}
            {verb && <em>{verb}</em>}
            <span className={styles.cursor} />
          </span>
        </div>

        <p className={styles.note}>No se trata de hacer más. Se trata de elegir mejor, y de tener a alguien de confianza a tu lado.</p>
      </div>
    </section>
  )
}
