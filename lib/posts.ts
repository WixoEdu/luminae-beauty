const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://cms.lacliniquecr.com'

export type Post = {
  id: number
  slug: string
  date: string
  categories: string[]
  title: string
  excerpt: string
  img: string
  content: string
}

type WPRendered = { rendered: string }

type WPTerm = { id: number; name: string; slug: string; taxonomy: string }

type WPMedia = { source_url: string }

type WPPost = {
  id: number
  slug: string
  date: string
  title: WPRendered
  excerpt: WPRendered
  content: WPRendered
  categories: number[]
  _embedded?: {
    'wp:featuredmedia'?: WPMedia[]
    'wp:term'?: WPTerm[][]
  }
}

type WPCategory = { id: number; name: string; count: number }

const FALLBACK_IMAGE = '/service_01.jpg'

const MONTHS = [
  'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
  'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE',
]

function formatDate(iso: string) {
  const d = new Date(iso)
  const day = String(d.getDate()).padStart(2, '0')
  return `${day} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

function decodeEntities(text: string) {
  return text
    .replace(/&hellip;/g, '…')
    .replace(/&laquo;/g, '«')
    .replace(/&raquo;/g, '»')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

function stripHtml(html: string) {
  return decodeEntities(html.replace(/<[^>]*>/g, '')).trim()
}

function mapPost(wp: WPPost): Post {
  const categories = wp._embedded?.['wp:term']?.[0]?.map(term => term.name) ?? []
  const img = wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || FALLBACK_IMAGE

  return {
    id: wp.id,
    slug: wp.slug,
    date: formatDate(wp.date),
    categories,
    title: decodeEntities(wp.title.rendered),
    excerpt: stripHtml(wp.excerpt.rendered),
    img,
    content: wp.content.rendered,
  }
}

async function wpFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/${path}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch (err) {
    console.error(`Failed to fetch from WordPress (${path}):`, err)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const wpPosts = await wpFetch<WPPost[]>('posts?per_page=100&_embed=true')
  return (wpPosts ?? []).map(mapPost)
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts()
  return posts.find(post => post.slug === slug)
}

export async function getRecentPosts(excludeSlug: string, limit = 4): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter(post => post.slug !== excludeSlug).slice(0, limit)
}

export async function getCategories(): Promise<{ name: string; count: number }[]> {
  const categories = await wpFetch<WPCategory[]>('categories?per_page=100')
  return (categories ?? [])
    .filter(c => c.count > 0)
    .map(c => ({ name: c.name, count: c.count }))
}
