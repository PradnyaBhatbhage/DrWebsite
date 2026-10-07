import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { site, stats } from '../data/siteConfig'
import Appointment from '../sections/Appointment'

export default function About() {
  return (
    <>
      <SEO
        title={`About ${site.doctorName} | ${site.clinicName}`}
        description={site.shortBio}
        path="/about"
      />
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / About Doctor
          </p>
          <h1>About {site.doctorName}</h1>
          <p className="section-lead">{site.designation} · {site.city}, {site.state}</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container about-page-grid">
          <div>
            <img src={site.images.doctor} alt={`${site.doctorName}, ${site.designation}`} />
            <div className="about-stats" style={{ marginTop: 16 }}>
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="prose">
            <p>
              <strong>Qualifications:</strong> {site.qualifications.join(' · ')}
            </p>
            <p>
              <strong>Experience:</strong> {site.experienceYears}+ years in clinical physiotherapy
            </p>
            <p>
              <strong>Approach:</strong> {site.approach}
            </p>
            <h2>Specializations</h2>
            <ul className="spec-list">
              {site.specializations.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {site.longBio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <Link className="btn btn-primary" to="/#appointment">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
      <Appointment />
    </>
  )
}
