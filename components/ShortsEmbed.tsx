import styles from './ShortsEmbed.module.css'

// Vertical (9:16) YouTube Shorts player. Loads lazily; no autoplay.
export default function ShortsEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className={styles.frame}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
