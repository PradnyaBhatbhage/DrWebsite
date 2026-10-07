import { Link } from 'react-router-dom'
import { FiCalendar } from 'react-icons/fi'
import { site, whatsappUrl, trustIndicators } from '../data/siteConfig'
import { FaWhatsapp, Icon } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <Reveal>
            <h1>
              <span className="line">Move Better.</span>
              <span className="line">Feel Better.</span>
              <span className="line text-teal">Live Better.</span>
            </h1>
            <p>
              Personalized physiotherapy care focused on reducing pain, restoring movement,
              improving strength, and helping you return to an active lifestyle.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/#appointment">
                <FiCalendar /> Book an Appointment
              </Link>
              <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
                <FaWhatsapp color="#25d366" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay="2" className="hero-visual">
            <img
              src={site.images.hero}
              alt={`${site.doctorName} providing physiotherapy treatment at ${site.clinicName}`}
              width="700"
              height="460"
              fetchPriority="high"
            />
            <div className="hero-badge">
              <span className="icon-circle">
                <Icon name="award" size={18} />
              </span>
              <div>
                {site.experienceYears}+ years of care
                <span>Evidence-based physiotherapy</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="trust-bar">
          {trustIndicators.map((item, i) => (
            <Reveal key={item.title} className="trust-item" delay={String(i + 1)}>
              <span className="icon-circle">
                <Icon name={item.icon} size={16} />
              </span>
              {item.title}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
