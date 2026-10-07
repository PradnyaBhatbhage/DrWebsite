import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ServicesGrid from '../sections/ServicesGrid'
import Appointment from '../sections/Appointment'
import { site } from '../data/siteConfig'

export default function Services() {
  return (
    <>
      <SEO
        title={`Physiotherapy Services | ${site.clinicName}`}
        description="Explore orthopedic, sports, neurological, pediatric, and post-surgical physiotherapy services at MoveWell Clinic, Pune."
        path="/services"
      />
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Services
          </p>
          <h1>Physiotherapy Services</h1>
          <p className="section-lead">
            Personalised programmes for pain, injury, post-surgery rehab, and long-term movement health.
          </p>
        </div>
      </section>
      <ServicesGrid showAllLink={false} />
      <Appointment />
    </>
  )
}
