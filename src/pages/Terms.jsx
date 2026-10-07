import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { site } from '../data/siteConfig'

export default function Terms() {
  return (
    <>
      <SEO title={`Terms & Conditions | ${site.clinicName}`} description="Website terms for MoveWell Physiotherapy Clinic." path="/terms" />
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Terms & Conditions
          </p>
          <h1>Terms & Conditions</h1>
        </div>
      </section>
      <section className="page-body">
        <div className="container prose">
          <p>
            By using this website you agree to these terms. The content is for general education and
            does not create a physiotherapist–patient relationship by itself.
          </p>
          <h2>Appointments</h2>
          <p>
            Submitting the booking form is a request, not a confirmed appointment, until the clinic
            contacts you. Please arrive a few minutes early and bring relevant medical reports if you
            have them.
          </p>
          <h2>Medical disclaimer</h2>
          <p>{site.disclaimer}</p>
          <h2>Liability</h2>
          <p>
            Website information may be updated from time to time. Clinical advice is provided only
            after an in-person (or agreed telehealth) assessment.
          </p>
        </div>
      </section>
    </>
  )
}
