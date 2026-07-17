import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
