import styles from './Nav.module.css'

const links = [
  { label: 'Tratamientos', href: '#', active: true },
  { label: 'Resultados', href: '#' },
  { label: 'Ciencia', href: '#' },
  { label: 'Planes', href: '#' },
  { label: 'Contacto', href: '#' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Luminae</div>

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
    </nav>
  )
}
