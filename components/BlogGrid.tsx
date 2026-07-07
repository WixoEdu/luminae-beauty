import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/lib/posts'
import styles from './BlogGrid.module.css'

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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8h12M9 3l5 5-5 5" /></svg>
  )
}

const shareLinks = [
  {
    label: 'Copiar enlace',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 15l6-6M10 6l1-1a3 3 0 114 4l-1 1M14 18l-1 1a3 3 0 11-4-4l1-1" /></svg>,
  },
  {
    label: 'Facebook',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  },
  {
    label: 'X',
    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: 'LinkedIn',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a2 2 0 100 4 2 2 0 000-4zM20.5 20h-3.38v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.7V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.31 2.25 4.31 5.18V20z" /></svg>,
  },
  {
    label: 'WhatsApp',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.16-4.93-4.35-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.17.29.75 1.24 1.61 2 .68.61 1.31.94 1.9 1.15.2.07.4.05.55-.12.15-.17.63-.73.8-.98.17-.25.34-.21.57-.13.23.08 1.46.69 1.71.81.25.12.42.18.48.28.06.1.06.58-.18 1.26z" /></svg>,
  },
]

function PostImage({ post }: { post: typeof posts[number] }) {
  return (
    <div className={styles.imageCol}>
      <Image src={post.img} alt={post.title} fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
    </div>
  )
}

function PostContent({ post }: { post: typeof posts[number] }) {
  return (
    <div className={styles.textCol}>
      <div className={styles.meta}>
        <span className={styles.metaItem}><ClockIcon />{post.date}</span>
        <span className={styles.metaItem}><FolderIcon />{post.categories.join(', ').toUpperCase()}</span>
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.share}>
        <span className={styles.shareLabel}>Compartir</span>
        <div className={styles.shareIcons}>
          {shareLinks.map(({ label, icon }) => (
            <a key={label} href="#" aria-label={label} className={styles.shareBtn}>{icon}</a>
          ))}
        </div>
      </div>
      <Link href={`/blog/${post.slug}`} className={styles.continueBtn}>
        <span>Seguir leyendo</span>
        <ArrowIcon />
      </Link>
    </div>
  )
}

export default function BlogGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        {posts.map((post, i) => (
          <article key={post.title} className={styles.row}>
            {i % 2 === 0 ? (
              <>
                <PostImage post={post} />
                <PostContent post={post} />
              </>
            ) : (
              <>
                <PostContent post={post} />
                <PostImage post={post} />
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
