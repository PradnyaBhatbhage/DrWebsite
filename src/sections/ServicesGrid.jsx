import { Link } from 'react-router-dom'
import { services } from '../data/siteConfig'
import { BsArrowRight, Icon } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function ServicesGrid({ limit, showAllLink = true }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-kicker">What we offer</p>
            <h2 className="section-title">Our Physiotherapy Services</h2>
            <p className="section-lead">
              Comprehensive care for your movement and rehabilitation needs.
            </p>
          </div>
          {showAllLink && (
            <Link className="btn btn-outline" to="/services">
              View All Services
            </Link>
          )}
        </div>
        <div className="services-grid">
          {list.map((service, i) => (
            <Reveal className="service-card" key={service.slug} delay={String((i % 4) + 1)}>
              <span className="icon-circle">
                <Icon name={service.icon} />
              </span>
              <h3>{service.name}</h3>
              <p>{service.short}</p>
              <Link className="btn btn-ghost" to={`/services/${service.slug}`}>
                Learn More <BsArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
