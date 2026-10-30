import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Savoirfaire from '@/components/Savoirfaire'
import Owner from '@/components/Owner'
import Paths from '@/components/Paths'
import Approach from '@/components/Approach'
import Testimonials from '@/components/Testimonials'
import Promotions from '@/components/Promotions'
import Services from '@/components/Services'
import Manifesto from '@/components/Manifesto'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Savoirfaire />
      <Owner />
      <Paths />
      <Approach />
      <Testimonials />
      <Promotions />
      <Services />
      <Manifesto />
      <Stats />
      <Footer />
    </>
  )
}
