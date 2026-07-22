import type { Metadata } from 'next'
import { Jost, Libre_Caslon_Text } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { BookingProvider } from '@/context/BookingContext'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
  display: 'swap',
})

const BASE_URL = 'https://www.lacliniquecr.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'La Clinique · Medicina Estética & Skin Expertise | Escazú',
  description: 'Clínica boutique en Escazú, Costa Rica. Skin Expertise by Charlotte Dibon, medicina estética regenerativa y acompañamiento personalizado.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'La Clinique',
  image: `${BASE_URL}/logo/la-clinique-logo.png`,
  logo: `${BASE_URL}/logo/la-clinique-logo.png`,
  description: 'Clínica boutique en Escazú, Costa Rica. Skin Expertise by Charlotte Dibon, medicina estética regenerativa y acompañamiento personalizado.',
  url: BASE_URL,
  telephone: '+506-8970-0298',
  email: 'admin@lacliniquecr.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Momentum Escazú, Autopista Próspero Fernández, San Rafael',
    addressLocality: 'Escazú',
    addressRegion: 'San José',
    addressCountry: 'CR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '16:00',
    },
  ],
  sameAs: ['https://www.instagram.com/lacliniquecr/'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jost.variable} ${libreCaslon.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BookingProvider>{children}</BookingProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  )
}
