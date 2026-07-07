import Image from 'next/image'
import type { Post } from '@/lib/posts'
import styles from './PostHero.module.css'

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
  )
}

function FolderIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6a1 1 0 011-1h4l2 2h10a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6z" /></svg>
  )
}

export default function PostHero({ post }: { post: Post }) {
  return (
    <section className={styles.header}>
      <div className={styles.image}>
        <Image
          src={post.img}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>La Clinique · Blog</p>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.metaItem}><ClockIcon />{post.date}</span>
          <span className={styles.metaItem}><FolderIcon />{post.categories.join(', ').toUpperCase()}</span>
        </div>
      </div>
    </section>
  )
}
