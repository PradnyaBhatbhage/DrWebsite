import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { faqs } from '../data/siteConfig'
import Reveal from '../components/Reveal'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section-alt" id="faqs">
      <div className="container">
        <div className="section-head section-head--center">
          <div>
            <p className="section-kicker">Questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-lead">Practical answers before you book your first visit.</p>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal className={`faq-item${isOpen ? ' open' : ''}`} key={item.q} delay="1">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                <div className="faq-body">{item.a}</div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
