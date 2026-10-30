import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Keep preview/staging deployments out of search engines and AI crawlers.
  async headers() {
    if (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production') return []
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.lacliniquecr.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
