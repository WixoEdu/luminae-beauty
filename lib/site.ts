export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lacliniquecr.com'

// VERCEL_ENV is "production" | "preview" | "development"; unset outside Vercel (local dev/build).
export const IS_PRODUCTION = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'
