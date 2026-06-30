import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import Owner from '@/components/Owner'
import Testimonials from '@/components/Testimonials'
import Promotions from '@/components/Promotions'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Owner />
      <Testimonials />
      <Promotions />
      <Stats />
      <Footer />
    </>
  )
}
