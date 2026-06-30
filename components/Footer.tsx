import styles from './Footer.module.css'

const explore = ['Inicio', 'El Método', 'Skin Expertise', 'Membresía Première', 'Contacto']

const hours = [
  { day: 'Lunes',     time: '09:30 – 17:00' },
  { day: 'Martes',    time: '09:30 – 19:00' },
  { day: 'Miércoles', time: '09:30 – 18:00' },
  { day: 'Jueves',    time: '10:00 – 20:00' },
  { day: 'Viernes',   time: '09:30 – 19:00' },
  { day: 'Sábado',    time: '09:00 – 16:00' },
  { day: 'Domingo',   time: 'Cerrado' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Branding */}
        <div className={styles.brand}>
          <p className={styles.logo}>La Clinique</p>
          <p className={styles.tagline}>Cuidarte no es cambiarte. Es volver a confiar en tu piel.</p>
          <div className={styles.social}>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X" className={styles.socialLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Explorar</p>
          <nav className={styles.colLinks}>
            {explore.map((l) => <a key={l} href="#" className={styles.colLink}>{l}</a>)}
          </nav>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Contacto</p>
          <address className={styles.address}>
            <p>Escazú, Costa Rica</p>
            <p><a href="https://wa.me/50600000000">WhatsApp</a></p>
            <p><a href="mailto:hola@laclinique.cr">hola@laclinique.cr</a></p>
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
