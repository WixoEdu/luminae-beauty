import type { Metadata } from 'next'
import { Jost, Libre_Caslon_Text } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'La Clinique · Medicina Estética & Skin Expertise | Escazú',
  description: 'Clínica boutique en Escazú, Costa Rica. Skin Expertise by Charlotte Dibon, medicina estética regenerativa y acompañamiento personalizado.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jost.variable} ${libreCaslon.variable}`}>
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  )
}
