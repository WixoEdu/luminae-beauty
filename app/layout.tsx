import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luminae — Revela Tu Belleza',
  description: 'Tratamientos avanzados de cuidado de la piel que revelan tu belleza atemporal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
