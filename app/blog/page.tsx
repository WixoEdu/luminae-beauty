import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import BlogHeader from '@/components/BlogHeader'
import BlogGrid from '@/components/BlogGrid'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog | La Clinique · Escazú',
  description: 'Últimas noticias, artículos y experiencias de La Clinique: Skin Expertise, medicina estética regenerativa y el Método La Clinique.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Nav />
      <BlogHeader />
      <BlogGrid posts={posts} />
      <Footer />
    </>
  )
}
