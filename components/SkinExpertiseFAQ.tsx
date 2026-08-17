'use client'

import { useState } from 'react'
import styles from './SkinExpertiseFAQ.module.css'

const faqs = [
  {
    q: '¿Skin Expertise es un facial?',
    a: 'Incluye un protocolo facial personalizado, pero no se limita a eso. La experiencia también integra historia de la piel, revisión de rutina, análisis estético, prioridades, plan de acción y acompañamiento.',
  },
  {
    q: '¿Qué incluye la primera visita?',
    a: 'Incluye conversación detallada, revisión de productos y tratamientos anteriores, lectura estética del estado actual, protocolo personalizado, recomendaciones y un plan inicial. La página debe indicar la duración y el precio vigentes.',
  },
  {
    q: '¿Debo llevar mis productos?',
    a: 'Sí. Llevar los productos o fotografías claras de la rutina permite comprender qué estás utilizando, con qué frecuencia y cómo se combinan.',
  },
  {
    q: '¿Puedo asistir si tengo la piel sensible?',
    a: 'Sí. La sensibilidad es una de las razones frecuentes para reservar. El protocolo se adapta al estado de la piel y puede priorizar restauración y confort.',
  },
  {
    q: '¿Skin Expertise sirve para manchas o melasma?',
    a: 'Puede ayudar a ordenar la rutina, trabajar la calidad de piel y diseñar un protocolo de acompañamiento. El melasma es una condición crónica y, cuando se requiere diagnóstico o manejo médico, se coordina la valoración correspondiente.',
  },
  {
    q: '¿Charlotte diagnostica enfermedades de la piel?',
    a: 'No. Charlotte realiza análisis estético y trabaja dentro del alcance de Skin Expertise y estética avanzada. Las enfermedades cutáneas requieren diagnóstico médico o dermatológico.',
  },
  {
    q: '¿Necesito comprar productos?',
    a: 'No necesariamente. Primero se revisa lo que ya utilizas. La recomendación puede consistir en mantener, retirar, simplificar o añadir únicamente lo necesario.',
  },
  {
    q: '¿Puedo combinar Skin Expertise con toxina o fillers?',
    a: 'Sí, cuando existe indicación y una estrategia coordinada. Los procedimientos médicos son valorados y realizados por la doctora.',
  },
  {
    q: '¿Con qué frecuencia debo regresar?',
    a: 'Depende de la prioridad, la respuesta de la piel y el plan definido. Algunas pacientes requieren una etapa inicial más cercana y luego mantenimiento.',
  },
  {
    q: '¿Atienden en inglés o francés?',
    a: 'Sí. Charlotte atiende en español, inglés y francés.',
  },
  {
    q: '¿Dónde está La Clinique?',
    a: 'La Clinique está ubicada en Momentum Escazú, San Rafael de Escazú, San José, Costa Rica, con atención mediante cita previa.',
  },
]

export default function SkinExpertiseFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Preguntas frecuentes</p>
        <h2 className={styles.heading}>Antes de reservar tu experiencia</h2>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2 9h14M9 2v14" />
                    </svg>
                  </span>
                </button>
                <div className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ''}`}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
