import Image from 'next/image'
import styles from './SkinExpertiseDoctor.module.css'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 4h-2a4 4 0 00-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3z" /></svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
  )
}

export default function SkinExpertiseDoctor() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <Image
            src="/owner.png"
            alt="Charlotte Dibon"
            fill
            sizes="(max-width:900px) 100vw, 45vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.name}>Charlotte Dibon</h2>
          <p className={styles.role}>Skin Expert · Fundadora de La Clinique</p>
          <hr className={styles.divider} />
          <p className={styles.bio}>
            Charlotte Dibon es francesa, vive en Costa Rica desde hace ocho años y es Skin Expert en La Clinique, Especialista en estética avanzada · CIDESCO Internacional y creadora de la experiencia Skin Expertise.
          </p>
          <p className={styles.bio}>
            Antes de desarrollar Skin Expertise en La Clinique, trabajó durante varios años como international trainer para una marca francesa profesional de skincare y spa en Estados Unidos, formando y acompañando a profesionales en protocolos, conocimiento de producto y experiencia del cliente.
          </p>
          <p className={styles.bio}>
            Su enfoque reúne una visión europea del cuidado de la piel, estándares internacionales de formación, experiencia profesional en Estados Unidos, conocimiento del clima y del sector estético costarricense, y atención en inglés, francés y español.
          </p>
          <p className={styles.bio}>
            Más que recomendar tratamientos, Charlotte busca comprender la historia completa de cada piel y convertirla en una estrategia clara, progresiva y realista.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}><InstagramIcon /></a>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}><FacebookIcon /></a>
            <a href="#" aria-label="Correo" className={styles.socialIcon}><MailIcon /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
