'use client'

import { useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Skin Expertise', href: '#', active: true },
  { label: 'Medicina Estética', href: '#' },
  { label: 'El Método', href: '#' },
  { label: 'Membresía', href: '#' },
  { label: 'Contacto', href: '#' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>La Clinique</div>

        {/* Desktop pill nav */}
        <div className={styles.links}>
          {links.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`${styles.link} ${active ? styles.linkActive : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        <button className={styles.cta}>Reservar</button>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <nav className={styles.mobileLinks}>
          {links.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button className={styles.mobileCta} onClick={() => setIsOpen(false)}>
          Reservar
        </button>
      </div>
    </>
  )
}
