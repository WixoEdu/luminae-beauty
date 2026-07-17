import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import PostHero from '@/components/PostHero'
import PostBody from '@/components/PostBody'
import PostSidebar from '@/components/PostSidebar'
import Footer from '@/components/Footer'
import { getAllPosts, getCategories, getPostBySlug, getRecentPosts } from '@/lib/posts'
import styles from './page.module.css'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | La Clinique · Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const [recentPosts, categories] = await Promise.all([
    getRecentPosts(post.slug),
    getCategories(),
  ])

  return (
    <>
      <Nav />
      <PostHero post={post} />
      <section className={styles.section}>
        <div className={`container ${styles.layout}`}>
          <PostBody post={post} />
          <PostSidebar recentPosts={recentPosts} categories={categories} />
        </div>
      </section>
      <Footer />
    </>
  )
}
