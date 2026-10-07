import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { site } from '../data/siteConfig'

export default function Privacy() {
  return (
    <>
      <SEO title={`Privacy Policy | ${site.clinicName}`} description="How MoveWell Physiotherapy Clinic handles your information." path="/privacy" />
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Privacy Policy
          </p>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="container prose">
          <p>
            This policy explains how {site.clinicName} collects and uses information submitted through
            this website, including appointment enquiry forms.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit an appointment request, we may collect your name, phone number, email,
            preferred date and time, and a description of your concern. Contact details you share via
            phone, WhatsApp, or email are used to respond to your enquiry.
          </p>
          <h2>How we use information</h2>
          <p>
            We use this information to schedule visits, follow up on enquiries, and provide clinical
            care. We do not sell personal information. Health details you share online should be
            limited until you are seen in clinic.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
            {site.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  )
}
