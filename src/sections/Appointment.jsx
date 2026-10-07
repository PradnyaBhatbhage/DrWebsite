import { site, whatsappUrl } from '../data/siteConfig'
import { FaWhatsapp } from '../components/Icons'
import AppointmentForm from '../components/AppointmentForm'
import Reveal from '../components/Reveal'

export default function Appointment() {
  return (
    <section className="section section-alt" id="appointment">
      <div className="container appoint-grid">
        <Reveal className="form-card">
          <p className="section-kicker">Get started</p>
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-lead" style={{ marginBottom: 22 }}>
            Take the first step towards a more comfortable, active life.
          </p>
          <AppointmentForm />
        </Reveal>
        <Reveal delay="2" className="appoint-side">
          <div className="appoint-photo">
            <img
              src={site.images.appointment}
              alt="Physiotherapist providing one-to-one treatment"
              loading="lazy"
            />
          </div>
          <div className="wa-card">
            <h3>Need Quick Help?</h3>
            <p>Chat with us on WhatsApp for instant assistance.</p>
            <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
