import { whyChoose } from '../data/siteConfig'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function WhyChoose() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="section-kicker">Our promise</p>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-lead">Providing high-quality, patient-focused physiotherapy care.</p>
          </div>
        </div>
        <div className="why-grid">
          {whyChoose.map((item, i) => (
            <Reveal className="why-card" key={item.title} delay={String((i % 4) + 1)}>
              <span className="icon-circle">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
