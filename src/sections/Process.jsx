import { processSteps } from '../data/siteConfig'
import Reveal from '../components/Reveal'

export default function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="section-kicker">How it works</p>
            <h2 className="section-title">Our Treatment Process</h2>
            <p className="section-lead">A simple and effective approach to your recovery.</p>
          </div>
        </div>
        <div className="process-grid">
          {processSteps.map((step, i) => (
            <Reveal className="process-card" key={step.number} delay={String(i + 1)}>
              <div className="process-num">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
