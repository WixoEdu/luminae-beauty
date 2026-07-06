import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import BlogHeader from '@/components/BlogHeader'
import BlogGrid from '@/components/BlogGrid'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | La Clinique · Escazú',
  description: 'Últimas noticias, artículos y experiencias de La Clinique: Skin Expertise, medicina estética regenerativa y el Método La Clinique.',
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <BlogHeader />
      <BlogGrid />
      <Footer />
    </>
  )
}
