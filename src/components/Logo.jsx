import { Link } from 'react-router-dom'
import { site } from '../data/siteConfig'

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className="logo" aria-label={`${site.clinicName} home`}>
      <span className="logo-mark" aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 5c-2.4 4.2-6.8 7-11 7 1.8 6.8 6.4 11.6 11 15 4.6-3.4 9.2-8.2 11-15-4.2 0-8.6-2.8-11-7Z"
            fill="currentColor"
          />
          <circle cx="16" cy="13" r="2.2" fill={inverted ? '#0b2744' : '#0e6e74'} />
        </svg>
      </span>
      <span className="logo-text">
        <strong>{site.clinicName}</strong>
        <span>{site.clinicTagline}</span>
      </span>
    </Link>
  )
}
