import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'
import { getCategories } from '@/lib/posts'
import styles from './PostSidebar.module.css'

export default function PostSidebar({ recentPosts }: { recentPosts: Post[] }) {
  const categories = getCategories()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Entradas recientes</h3>
        <ul className={styles.recentList}>
          {recentPosts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className={styles.recentItem}>
                <div className={styles.recentImg}>
                  <Image src={post.img} alt={post.title} fill sizes="80px" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <span className={styles.recentDate}>{post.date}</span>
                  <p className={styles.recentTitle}>{post.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Categorías</h3>
        <ul className={styles.categoryList}>
          {categories.map(({ name, count }) => (
            <li key={name} className={styles.categoryItem}>
              <span>{name}</span>
              <span className={styles.categoryCount}>{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
