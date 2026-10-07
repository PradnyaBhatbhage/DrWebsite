import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { site } from '../data/siteConfig'

export default function NotFound() {
  return (
    <div className="not-found">
      <SEO title={`Page not found | ${site.clinicName}`} description="The page you requested does not exist." path="/404" />
      <div>
        <h1>404</h1>
        <h2>We couldn’t find that page</h2>
        <p className="text-muted">
          The link may be broken or the page may have moved. Let’s get you back to care.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
          <Link className="btn btn-outline" to="/#appointment">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
