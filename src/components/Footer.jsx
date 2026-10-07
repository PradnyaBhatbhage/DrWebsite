import { Link } from 'react-router-dom'
import { site, services, whatsappUrl } from '../data/siteConfig'
import Logo from './Logo'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo inverted />
          <p>
            Your trusted partner in movement, recovery, and a healthier, pain-free life.
            Personalised physiotherapy in {site.city} with {site.doctorName}.
          </p>
          <div className="socials">
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href={site.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href={whatsappUrl} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/#conditions">Conditions</Link>
          <Link to="/#faqs">FAQs</Link>
          <Link to="/#contact">Contact</Link>
        </div>
        <div>
          <h4>Our Services</h4>
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h4>Contact Info</h4>
          <p>{site.address}</p>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>
            Mon–Sat: 9:00 AM – 7:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.clinicName} {site.clinicTagline}. All Rights Reserved.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </nav>
      </div>
      <div className="disclaimer">
        <div className="container">{site.disclaimer}</div>
      </div>
    </footer>
  )
}
