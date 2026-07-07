import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import PostHero from '@/components/PostHero'
import PostBody from '@/components/PostBody'
import PostSidebar from '@/components/PostSidebar'
import Footer from '@/components/Footer'
import { posts, getPostBySlug, getRecentPosts } from '@/lib/posts'
import styles from './page.module.css'

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | La Clinique · Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const recentPosts = getRecentPosts(post.slug)

  return (
    <>
      <Nav />
      <PostHero post={post} />
      <section className={styles.section}>
        <div className={`container ${styles.layout}`}>
          <PostBody post={post} />
          <PostSidebar recentPosts={recentPosts} />
        </div>
      </section>
      <Footer />
    </>
  )
}
