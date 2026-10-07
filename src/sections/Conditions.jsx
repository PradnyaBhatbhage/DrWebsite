import { conditions } from '../data/siteConfig'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'

export default function Conditions() {
  return (
    <section className="section" id="conditions">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="section-kicker">Clinical focus</p>
            <h2 className="section-title">Common Conditions Treated</h2>
            <p className="section-lead">We help patients recover from a wide range of conditions.</p>
          </div>
        </div>
        <div className="conditions-grid">
          {conditions.map((c, i) => (
            <Reveal className="condition-card" key={c.name} delay={String((i % 6) + 1)}>
              <span className="icon-circle">
                <Icon name={c.icon} />
              </span>
              <span>{c.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
