import ShortsEmbed from './ShortsEmbed'
import styles from './Testimonials.module.css'

// videoId: YouTube Shorts id. null = testimonial still to be recorded/linked.
const testimonials: { name: string; videoId: string | null }[] = [
  { name: 'MARGARETH',  videoId: 'J2Lg0AqmOw0' },
  { name: 'PACIENTE 2', videoId: null },
  { name: 'PACIENTE 3', videoId: null },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h3 className={styles.heading}>
          Lo que dicen<br /><em>nuestras clientas</em>
        </h3>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              {t.videoId ? (
                <ShortsEmbed id={t.videoId} title={`Testimonio de ${t.name}`} />
              ) : (
                <div className={styles.pending} role="img" aria-label="Video de testimonio pendiente">
                  <span className={styles.play} aria-hidden="true">
                    <svg width="14" height="16" viewBox="0 0 9 10" fill="currentColor"><path d="M0 0l9 5-9 5V0z" /></svg>
                  </span>
                  <span className={styles.pendingTitle}>Testimonio en video</span>
                  <span className={styles.pendingText}>Link pendiente</span>
                </div>
              )}
              <figcaption className={styles.name}>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
