import { Link } from 'react-router-dom'
import { recoveryStories, site } from '../data/siteConfig'
import Reveal from '../components/Reveal'

export default function Recovery() {
  return (
    <section className="section section-alt" id="recovery">
      <div className="container recovery-grid">
        <Reveal className="recovery-visual">
          <img src={site.images.recovery} alt="Patient supported through physiotherapy recovery" loading="lazy" />
          <div className="overlay">
            <h3>Real People. Real Recovery.</h3>
            <p>
              Helping patients return to an active, more comfortable life through personalised
              physiotherapy care. Results vary; we never promise a guaranteed outcome.
            </p>
            <Link className="btn btn-outline" to="/#testimonials" style={{ marginTop: 14, width: 'fit-content' }}>
              View Patient Stories
            </Link>
          </div>
        </Reveal>
        <div>
          {recoveryStories.map((story, i) => (
            <Reveal className="story-card" key={story.condition} delay={String(i + 1)}>
              <h4>{story.condition}</h4>
              <div className="story-meta">
                <p>
                  <strong>Approach:</strong> {story.approach}
                </p>
                <p>
                  <strong>Goal:</strong> {story.goal}
                </p>
                <p>
                  <strong>Outcome:</strong> {story.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
