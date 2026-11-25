import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CoffretConfigurator from '@/components/CoffretConfigurator'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Coffret de regalo | La Clinique · Escazú',
  description: 'Arma un coffret de regalo La Clinique: tarjeta Skin Expertise, bono en medicina estética, chocolates Fauchon París y nota manuscrita.',
  alternates: {
    canonical: '/coffret',
  },
}

export default function CoffretPage() {
  return (
    <>
      <Nav />
      <CoffretConfigurator />
      <Footer />
    </>
  )
}
