import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import SkinExpertiseIntro from '@/components/SkinExpertiseIntro'
import SkinExpertiseSession from '@/components/SkinExpertiseSession'
import SkinExpertiseContinuity from '@/components/SkinExpertiseContinuity'
import SkinExpertiseTabs from '@/components/SkinExpertiseTabs'
import SkinExpertisePhilosophy from '@/components/SkinExpertisePhilosophy'
import SkinExpertiseDoctor from '@/components/SkinExpertiseDoctor'
import SkinExpertiseGallery from '@/components/SkinExpertiseGallery'
import SkinExpertiseConnect from '@/components/SkinExpertiseConnect'
import SkinExpertiseFAQ from '@/components/SkinExpertiseFAQ'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Skin Expertise by Charlotte | Experiencia facial francesa en Escazú',
  description: 'Una experiencia facial de estética profesional creada sur mesure por Charlotte Dibon en Escazú: lectura de piel, gestos expertos, modelage y acompañamiento.',
  alternates: {
    canonical: '/skin-expertise',
  },
}

export default function SkinExpertisePage() {
  return (
    <>
      <Nav />
      <SkinExpertiseIntro />
      <SkinExpertiseSession />
      <SkinExpertiseTabs />
      <SkinExpertiseContinuity />
      <SkinExpertisePhilosophy />
      <SkinExpertiseDoctor />
      <SkinExpertiseGallery />
      <SkinExpertiseConnect />
      <SkinExpertiseFAQ />
      <Footer />
    </>
  )
}
