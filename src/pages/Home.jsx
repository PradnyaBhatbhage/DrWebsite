import SEO from '../components/SEO'
import { site } from '../data/siteConfig'
import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import Process from '../sections/Process'
import WhyChoose from '../sections/WhyChoose'
import Testimonials from '../sections/Testimonials'
import ServicesGrid from '../sections/ServicesGrid'
import Conditions from '../sections/Conditions'
import Recovery from '../sections/Recovery'
import Appointment from '../sections/Appointment'
import Contact from '../sections/Contact'
import FAQ from '../sections/FAQ'

export default function Home() {
  return (
    <>
      <SEO title={site.seo.title} description={site.seo.description} path="/" />
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <Conditions />
      <Process />
      <WhyChoose />
      <Recovery />
      <Testimonials />
      <Appointment />
      <Contact />
      <FAQ />
    </>
  )
}
