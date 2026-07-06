'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useBooking } from '@/context/BookingContext'
import styles from './Nav.module.css'

const links = [
  { label: 'Skin Expertise',    href: '#servicios' },
  { label: 'Medicina Estética', href: '#skin-expertise' },
  { label: 'El Método',        href: '#metodo' },
  { label: 'Membresía',        href: '#membresia' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Contacto',         href: '#contacto' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { open: openBooking } = useBooking()
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/blog' ? pathname === '/blog' : pathname === '/' && href === '#servicios'

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    if (pathname === '/') {
      scrollTo(href)
    } else {
      window.location.href = `/${href}`
    }
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/logo/la-clinique-logo.png"
            alt="La Clinique"
            width={300}
            height={202}
            className={styles.logoImg}
            priority
          />
        </div>

        {/* Desktop pill nav */}
        <div className={styles.links}>
          {links.map(({ label, href }) =>
            href.startsWith('#') ? (
              <a
                key={label}
                href={href}
                className={`${styles.link} ${isActive(href) ? styles.linkActive : ''}`}
                onClick={e => handleAnchorClick(e, href)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`${styles.link} ${isActive(href) ? styles.linkActive : ''}`}
              >
                {label}
              </Link>
            )
          )}
        </div>

        <button className={styles.cta} onClick={openBooking}>Reservar</button>

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
          {links.map(({ label, href }) =>
            href.startsWith('#') ? (
              <a
                key={label}
                href={href}
                className={`${styles.mobileLink} ${isActive(href) ? styles.mobileLinkActive : ''}`}
                onClick={e => handleAnchorClick(e, href)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`${styles.mobileLink} ${isActive(href) ? styles.mobileLinkActive : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        <button className={styles.mobileCta} onClick={() => { setIsOpen(false); openBooking() }}>
          Reservar
        </button>
      </div>
    </>
  )
}
