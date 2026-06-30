import type { Metadata } from 'next'
import { Jost, Libre_Caslon_Text } from 'next/font/google'
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
  title: 'Luminae — Revela Tu Belleza',
  description: 'Tratamientos avanzados de cuidado de la piel que revelan tu belleza atemporal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jost.variable} ${libreCaslon.variable}`}>{children}</body>
    </html>
  )
}
