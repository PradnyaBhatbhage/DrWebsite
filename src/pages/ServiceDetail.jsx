import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { services, site } from '../data/siteConfig'
import { Icon } from '../components/Icons'
import Appointment from '../sections/Appointment'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <NotFound />

  return (
    <>
      <SEO
        title={`${service.name} | ${site.clinicName}`}
        description={service.description}
        path={`/services/${service.slug}`}
      />
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / {service.name}
          </p>
          <h1>{service.name}</h1>
          <p className="section-lead">{service.short}</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container detail-layout">
          <article className="prose">
            <span className="icon-circle" style={{ marginBottom: 16 }}>
              <Icon name={service.icon} />
            </span>
            <p>{service.description}</p>
            <p>{service.details}</p>
            <p>
              To discuss whether this service is suitable for you, book a consultation with{' '}
              {site.doctorName}. Treatment plans are individual and outcomes vary.
            </p>
            <Link className="btn btn-primary" to="/#appointment">
              Book an Appointment
            </Link>
          </article>
          <aside className="card" style={{ padding: 22, height: 'fit-content' }}>
            <h3 style={{ marginBottom: 12 }}>Other services</h3>
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} style={{ display: 'block', padding: '8px 0', color: 'var(--teal-dark)', fontWeight: 600 }}>
                  {s.name}
                </Link>
              ))}
          </aside>
        </div>
      </section>
      <Appointment />
    </>
  )
}
