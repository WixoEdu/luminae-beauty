'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useBooking } from '@/context/BookingContext'
import styles from './Nav.module.css'

export const navLinks = [
  { label: 'Inicio',           href: '/' },
  { label: 'Skin Expertise',    href: '/skin-expertise' },
  { label: 'Medicina Estética', href: '#skin-expertise' },
  { label: 'El Método',        href: '#metodo' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Contacto',         href: '#contacto' },
]

export function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { open: openBooking } = useBooking()
  const pathname = usePathname()

  const isActive = (href: string) => (href.startsWith('/') ? pathname === href : false)

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
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <Image
            src="/logo/la-clinique-logo.png"
            alt="La Clinique"
            width={300}
            height={202}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop pill nav */}
        <div className={styles.links}>
          {navLinks.map(({ label, href }) =>
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
          {navLinks.map(({ label, href }) =>
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
