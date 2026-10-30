'use client'

import { useState } from 'react'
import styles from './SurMesureAccordion.module.css'

const steps = [
  { title: 'Primero observo y escucho.', body: 'Tu historia, tu rutina y la forma en que tu piel se encuentra hoy importan.' },
  { title: 'Después selecciono.', body: 'La limpieza, los activos, las técnicas y su orden responden a prioridades identificadas en la valoración.' },
  { title: 'Durante la sesión ajusto.', body: 'El cuidado manual y los tiempos se adaptan a la respuesta y tolerancia de tu piel.' },
  { title: 'Al terminar, te oriento.', body: 'Sales con recomendaciones para casa y los siguientes pasos de una estrategia que puede evolucionar contigo.' },
]

export default function SurMesureAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <ul className={styles.list}>
      {steps.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.title} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={`surmesure-panel-${i}`}
              id={`surmesure-trigger-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className={styles.num}>0{i + 1}</span>
              <span className={styles.title}>{s.title}</span>
              <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true" />
            </button>
            <div
              id={`surmesure-panel-${i}`}
              role="region"
              aria-labelledby={`surmesure-trigger-${i}`}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
            >
              <div className={styles.panelInner}>
                <p className={styles.body}>{s.body}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
