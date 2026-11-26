'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './CoffretConfigurator.module.css'

const WHATSAPP_NUMBER = '50689700298'

const ITEMS = [
  {
    id: 'skin-expertise',
    price: 259,
    label: 'Tarjeta de regalo Skin Expertise',
    emotion: 'Para cuidar la piel.',
    desc: 'Una experiencia Skin Expertise de 90 minutos: análisis, protocolo y acompañamiento diseñado por Charlotte Dibon.',
  },
  {
    id: 'fauchon',
    price: 25,
    label: 'Caja de chocolates Fauchon París',
    emotion: 'Para cuidar el paladar.',
    desc: 'Selección de chocolates artesanales traídos directamente de la casa parisina Fauchon.',
  },
  {
    id: 'nota',
    price: 0,
    label: 'Nota personalizada escrita a mano',
    emotion: 'Para cuidar el corazón.',
    desc: 'Nota manuscrita con el mensaje que elijas, sellada con nuestro lacre dorado.',
  },
]

// Beneficio para quien regala: se activa al elegir la tarjeta Skin Expertise y no suma al total.
const BONUS = {
  value: 40,
  title: 'Bono de $40 para ti',
  emotion: 'Un detalle para quien regala.',
  desc: 'Por regalar la tarjeta Skin Expertise, recibes un crédito de $40 en potenciadores o medicina estética, aplicable en tu próxima visita.',
}

const priceLabel = (price: number) => (price === 0 ? 'Gratis' : `$${price}`)

export default function CoffretConfigurator() {
  const [selected, setSelected] = useState<string[]>(['skin-expertise'])

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))

  const chosen = ITEMS.filter((i) => selected.includes(i.id))
  const hasCard = selected.includes('skin-expertise')
  const total = chosen.reduce((sum, i) => sum + i.price, 0)

  const sendWhatsApp = () => {
    if (chosen.length === 0) return
    const lines = chosen.map((i) => `— ${i.label} (${priceLabel(i.price)})`).join('\n')
    const message = `Hola 👋 Me gustaría reservar un coffret de La Clinique\n\nMi selección:\n${lines}\n\nTotal: $${total}${hasCard ? `\n\nBeneficio para quien regala: bono de $${BONUS.value} en potenciadores o medicina estética (no suma al total).` : ''}\n\n¿Me ayudan a coordinar el envío?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imgCol}>
          <div className={styles.img}>
            <Image
              src="/coffret.webp"
              alt="Coffret de regalo La Clinique con chocolates y certificado Skin Expertise"
              fill
              priority
              sizes="(max-width:900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className={styles.formCol}>
          <p className={styles.eyebrow}>Édition de Noël</p>
          <h1 className={styles.heading}>
            Un cadeau <em>qui prend soin.</em>
          </h1>
          <p className={styles.translation}>Un regalo que cuida.</p>
          <p className={styles.intro}>
            Elige los elementos que quieras incluir en tu coffret. Lo armamos a mano y lo entregamos listo para regalar.
          </p>

          <div className={styles.items}>
            {ITEMS.map((item) => {
              const on = selected.includes(item.id)
              return (
                <button
                  key={item.id}
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  className={`${styles.item} ${on ? styles.selected : ''}`}
                  onClick={() => toggle(item.id)}
                >
                  <span className={styles.check} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
                  </span>
                  <span className={styles.itemBody}>
                    <span className={styles.itemHead}>
                      <span className={styles.itemTitle}>{item.label}</span>
                      <span className={styles.itemPrice}>{priceLabel(item.price)}</span>
                    </span>
                    <em className={styles.emotion}>{item.emotion}</em>
                    <span className={styles.desc}>{item.desc}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className={`${styles.bonus} ${hasCard ? styles.bonusOn : ''}`}>
            <span className={styles.bonusIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8c-2.5 0-4-1-4-2.5S9.5 3 12 5c2.5-2 4-.5 4 .5S14.5 8 12 8z" /></svg>
            </span>
            <span className={styles.itemBody}>
              <span className={styles.itemHead}>
                <span className={styles.itemTitle}>{BONUS.title}</span>
                <span className={styles.bonusTag}>{hasCard ? 'Incluido' : 'Con la tarjeta'}</span>
              </span>
              <em className={styles.emotion}>{BONUS.emotion}</em>
              <span className={styles.desc}>{BONUS.desc}</span>
            </span>
          </div>

          <div className={styles.summary} aria-live="polite">
            <p className={styles.summaryTitle}>Tu coffret</p>
            {chosen.length === 0 ? (
              <p className={styles.empty}>Aún no has seleccionado elementos.</p>
            ) : (
              <>
                {chosen.map((i) => (
                  <div key={i.id} className={styles.line}>
                    <span>— {i.label}</span>
                    <span>{priceLabel(i.price)}</span>
                  </div>
                ))}
                {hasCard && (
                  <div className={styles.perk}>
                    <span>+ Para ti: bono de ${BONUS.value}</span>
                    <span>Sin costo</span>
                  </div>
                )}
                <div className={styles.total}>
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </>
            )}
          </div>

          <button type="button" className={styles.cta} disabled={chosen.length === 0} onClick={sendWhatsApp}>
            <span>{chosen.length === 0 ? 'Selecciona al menos un elemento' : 'Reservar mi coffret por WhatsApp'}</span>
            <span className={styles.iconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" /><path d="M9 10c0 3 2.5 5 5 5l1.2-1.4-2-1-.8.8c-.9-.4-1.6-1.1-2-2l.8-.8-1-2L9 10z" /></svg>
            </span>
          </button>

          <p className={styles.footnote}>
            La tarjeta Skin Expertise incluye valoración previa.<br />
            Entrega personal en La Clinique o coordinación de envío. Vigencia de 6 meses.
          </p>
        </div>
      </div>
    </section>
  )
}
