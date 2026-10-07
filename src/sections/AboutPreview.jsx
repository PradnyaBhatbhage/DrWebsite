import { Link } from 'react-router-dom'
import { BsArrowRight, Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import { site, stats } from '../data/siteConfig'

export default function AboutPreview() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="section-kicker">Meet your physiotherapist</p>
          <h2>About {site.doctorName}</h2>
          <p className="about-role">{site.designation}</p>
          <p>{site.shortBio}</p>
          <Link className="btn btn-primary" to="/about">
            Learn More About Dr. Priya <BsArrowRight />
          </Link>
        </Reveal>
        <Reveal delay="2" className="about-visual">
          <div className="about-photo">
            <img
              src={site.images.doctor}
              alt={`${site.doctorName}, ${site.designation}`}
              width="480"
              height="420"
              loading="lazy"
            />
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="icon-circle">
                <Icon name="award" size={18} />
              </span>
              <div>
                <strong>{site.qualifications[0]}</strong>
                <span>{site.qualifications[1]}</span>
              </div>
            </div>
            {stats
              .filter((s) => s.label !== 'Treatments')
              .map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="icon-circle">
                    <Icon name="target" size={18} />
                  </span>
                  <div>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
