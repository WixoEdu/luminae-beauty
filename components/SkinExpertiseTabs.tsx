'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './SkinExpertiseTabs.module.css'

const tabs = [
  {
    label: 'Primera experiencia',
    title: 'Tu primera experiencia Skin Expertise',
    intro:
      'La primera visita no se limita al protocolo realizado en cabina. Incluye el tiempo necesario para entender la piel, ordenar la información y definir una dirección.',
    image: '/stats_02.jpg',
    items: [
      'Conversación detallada sobre la historia de tu piel.',
      'Revisión de la rutina completa.',
      'Análisis de productos, frecuencias y combinaciones.',
      'Revisión de tratamientos anteriores y respuesta de la piel.',
      'Lectura estética del estado actual de la piel.',
      'Identificación de prioridades.',
      'Protocolo facial personalizado según la condición del día.',
      'Recomendaciones de cuidado en casa.',
      'Plan de acción inicial.',
      'Orientación sobre frecuencia y próximas etapas.',
      'Seguimiento posterior según el plan definido.',
    ],
  },
  {
    label: '¿Es para ti?',
    title: 'Skin Expertise puede ser para ti si…',
    intro: '',
    image: '/service_03.jpg',
    items: [
      'Utilizas muchos productos y no sabes cuáles conservar.',
      'Tu piel se volvió sensible o reactiva.',
      'Tienes manchas o pigmentación recurrente.',
      'Quieres mejorar textura, hidratación o luminosidad.',
      'Tu rutina dejó de funcionar.',
      'Estás atravesando cambios de edad o perimenopausia.',
      'Te preparas para una boda o evento importante.',
      'Realizas medicina estética y quieres mejorar la calidad de piel.',
      'Has probado varios tratamientos sin continuidad.',
      'Quieres comenzar a cuidarte, pero no sabes por dónde empezar.',
    ],
  },
  {
    label: 'Tu plan',
    title: 'El plan depende de la piel, no de un protocolo universal',
    intro: 'Después de la primera experiencia, la estrategia puede orientarse hacia una o varias prioridades:',
    image: '/service_04.jpg',
    items: [
      'Restauración de la barrera cutánea.',
      'Hidratación, confort y luminosidad.',
      'Textura y apariencia de poros.',
      'Pigmentación y acompañamiento del melasma.',
      'Slow aging y skin longevity.',
      'Preparación de piel para novias.',
      'Adaptación de la rutina durante la perimenopausia.',
      'Mantenimiento estacional.',
      'Integración con medicina estética.',
    ],
  },
  {
    label: 'Lo que no hacemos',
    title: 'Una metodología también se define por lo que decide no hacer',
    intro: '',
    image: '/service_02.jpg',
    items: [
      'No es una limpieza facial básica.',
      'No es un protocolo idéntico para todas.',
      'No comienza eligiendo una máquina.',
      'No significa comprar una rutina completamente nueva.',
      'No sustituye una consulta dermatológica.',
      'No prescribe medicamentos.',
      'No promete eliminar manchas definitivamente.',
      'No busca hacer más tratamientos.',
      'No termina cuando sales de la cabina.',
    ],
  },
]

export default function SkinExpertiseTabs() {
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.tabBar}>
            {tabs.map((t, i) => (
              <button
                key={t.label}
                className={`${styles.tabBtn} ${i === active ? styles.tabBtnActive : ''}`}
                onClick={() => setActive(i)}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <div className={styles.panelText}>
              <h3 className={styles.panelTitle}>{current.title}</h3>
              {current.intro && <p className={styles.panelIntro}>{current.intro}</p>}
              <ul className={styles.panelList}>
                {current.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.panelImage}>
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width:900px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
