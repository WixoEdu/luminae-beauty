'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, scrollTo } from './Nav'
import styles from './Footer.module.css'

const hours = [
  { day: 'Lunes',     time: '10AM a 6PM' },
  { day: 'Martes',    time: '10AM a 6PM' },
  { day: 'Miércoles', time: '10AM a 6PM' },
  { day: 'Jueves',    time: '10AM a 6PM' },
  { day: 'Viernes',   time: '10AM a 6PM' },
  { day: 'Sábado',    time: '7AM a 4PM' },
  { day: 'Domingo',   time: 'Cerrado' },
]

export default function Footer() {
  const pathname = usePathname()

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    if (pathname === '/') {
      scrollTo(href)
    } else {
      window.location.href = `/${href}`
    }
  }

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Branding */}
        <div className={styles.brand}>
          <Image
            src="/logo/la-clinique-logo-white.png"
            alt="La Clinique"
            width={140}
            height={213}
            className={styles.logoImg}
          />
          <p className={styles.tagline}>Cuidarte no es cambiarte. Es volver a confiar en tu piel.</p>
          <div className={styles.social}>
            {/* Instagram */}
            <a href="https://www.instagram.com/lacliniquecr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/50689700298" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm5.8 14.07c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.12.1-1.8-.11-.42-.13-.95-.3-1.63-.6-2.87-1.24-4.74-4.15-4.88-4.34-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.24-.27.53-.34.7-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.58.81 2 .88 2.15.07.15.11.32.02.51-.09.19-.14.31-.27.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.2 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.32.07.11.07.65-.17 1.3z"/></svg>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Explorar</p>
          <nav className={styles.colLinks}>
            {navLinks.map(({ label, href }) =>
              href.startsWith('#') ? (
                <a
                  key={label}
                  href={href}
                  className={styles.colLink}
                  onClick={e => handleAnchorClick(e, href)}
                >
                  {label}
                </a>
              ) : (
                <Link key={label} href={href} className={styles.colLink}>
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Contacto</p>
          <address className={styles.address}>
            <p>Momentum Escazú, Autopista Próspero Fernández, San Rafael, San José, Costa Rica</p>
            <p><a href="https://wa.me/50689700298" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
            <p><a href="mailto:admin@lacliniquecr.com">admin@lacliniquecr.com</a></p>
          </address>
        </div>

        {/* Hours */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Horario</p>
          <ul className={styles.hours}>
            {hours.map(({ day, time }) => (
              <li key={day} className={styles.hourRow}>
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© 2026 La Clinique. Todos los derechos reservados.</p>
        <div className={styles.legal}>
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>
  )
}
