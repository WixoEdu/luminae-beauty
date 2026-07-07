import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import SkinExpertiseIntro from '@/components/SkinExpertiseIntro'
import SkinExpertisePhilosophy from '@/components/SkinExpertisePhilosophy'
import SkinExpertiseDoctor from '@/components/SkinExpertiseDoctor'
import SkinExpertiseGallery from '@/components/SkinExpertiseGallery'
import SkinExpertiseConnect from '@/components/SkinExpertiseConnect'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Skin Expertise | La Clinique · Escazú',
  description: 'Un espacio privado en Escazú dedicado al cuidado experto de la piel: tecnología de vanguardia, tratamientos signature y un equipo de expertos liderado por Charlotte Dibon.',
}

export default function SkinExpertisePage() {
  return (
    <>
      <Nav />
      <SkinExpertiseIntro />
      <SkinExpertisePhilosophy />
      <SkinExpertiseDoctor />
      <SkinExpertiseGallery />
      <SkinExpertiseConnect />
      <Footer />
    </>
  )
}
