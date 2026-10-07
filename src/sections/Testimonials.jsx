import { useMemo, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../data/siteConfig'
import { BsStarFill } from '../components/Icons'
import Reveal from '../components/Reveal'

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <BsStarFill key={i} />
      ))}
    </div>
  )
}

function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const pages = Math.ceil(testimonials.length / perPage)
  const visible = useMemo(
    () => testimonials.slice(page * perPage, page * perPage + perPage),
    [page],
  )

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-kicker">Patient voices</p>
            <h2 className="section-title">Patient Testimonials</h2>
            <p className="section-lead">What our patients say about their experience.</p>
          </div>
        </div>
        <div className="testimonial-wrap">
          <div className="testimonial-track">
            {visible.map((t, i) => (
              <Reveal className="quote-card" key={t.name} delay={String(i + 1)}>
                <Stars count={t.rating} />
                <p>“{t.quote}”</p>
                <div className="quote-user">
                  <div className="avatar" aria-hidden="true">
                    {initials(t.name)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.condition}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="carousel-nav">
            <button type="button" aria-label="Previous testimonials" onClick={() => setPage((p) => (p === 0 ? pages - 1 : p - 1))}>
              <FiChevronLeft />
            </button>
            <div className="dots">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot${i === page ? ' active' : ''}`}
                  aria-label={`Show testimonials page ${i + 1}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next testimonials" onClick={() => setPage((p) => (p + 1) % pages)}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
