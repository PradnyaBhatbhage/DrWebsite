import { site, whatsappUrl } from '../data/siteConfig'
import { FiClock, FiMail, FiMapPin, FiPhone, FaWhatsapp } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-kicker">Visit or reach out</p>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-lead">Visit our clinic or get in touch today.</p>
          </div>
        </div>
        <div className="contact-grid">
          <Reveal className="contact-list">
            <div className="contact-item">
              <span className="icon-circle">
                <FiMapPin />
              </span>
              <div>
                <h4>Clinic Address</h4>
                <p>{site.address}</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon-circle">
                <FiPhone />
              </span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon-circle">
                <FaWhatsapp />
              </span>
              <div>
                <h4>WhatsApp</h4>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  {site.whatsappDisplay}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon-circle">
                <FiMail />
              </span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon-circle">
                <FiClock />
              </span>
              <div>
                <h4>Working Hours</h4>
                {site.workingHours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay="2">
            <iframe
              className="map-frame"
              title={`${site.clinicName} location map`}
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
