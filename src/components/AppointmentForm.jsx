import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { timeSlots, treatmentOptions } from '../data/siteConfig'

const empty = {
  fullName: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  treatment: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }
  const phone = values.phone.replace(/\s/g, '')
  if (!/^[+]?\d{10,13}$/.test(phone)) {
    errors.phone = 'Enter a valid 10–13 digit phone number.'
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.date) {
    errors.date = 'Please choose a preferred date.'
  } else {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (new Date(values.date) < today) {
      errors.date = 'Please choose today or a future date.'
    }
  }
  if (!values.time) errors.time = 'Please select a preferred time.'
  if (!values.treatment) errors.treatment = 'Please select a treatment or problem.'
  return errors
}

export default function AppointmentForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) return

    setSending(true)
    // Placeholder for API integration:
    // await fetch('/api/appointments', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // })
    await new Promise((r) => setTimeout(r, 600))
    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-box" role="status">
        <div className="icon-circle">
          <FiCheckCircle />
        </div>
        <h3>Appointment request received</h3>
        <p className="text-muted" style={{ margin: '8px 0 18px' }}>
          Thank you, {values.fullName.split(' ')[0]}. We will confirm your preferred slot
          shortly by phone or WhatsApp.
        </p>
        <button
          className="btn btn-outline"
          type="button"
          onClick={() => {
            setValues(empty)
            setSubmitted(false)
          }}
        >
          Book another appointment
        </button>
      </div>
    )
  }

  const field = (name) => `form-field${errors[name] ? ' is-invalid' : ''}`

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className={field('fullName')}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Your full name"
            value={values.fullName}
            onChange={onChange}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className={field('phone')}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            value={values.phone}
            onChange={onChange}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className={field('email')}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            value={values.email}
            onChange={onChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className={field('date')}>
          <label htmlFor="date">Preferred Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            value={values.date}
            onChange={onChange}
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className={field('time')}>
          <label htmlFor="time">Preferred Time</label>
          <select id="time" name="time" value={values.time} onChange={onChange} required>
            <option value="">Choose time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className={field('treatment')}>
          <label htmlFor="treatment">Treatment / Problem</label>
          <select
            id="treatment"
            name="treatment"
            value={values.treatment}
            onChange={onChange}
            required
          >
            <option value="">Select</option>
            {treatmentOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.treatment && <span className="error">{errors.treatment}</span>}
        </div>
        <div className="form-field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message (optional)"
            value={values.message}
            onChange={onChange}
          />
        </div>
      </div>
      <button className="btn btn-primary" type="submit" disabled={sending} style={{ marginTop: 16, width: '100%' }}>
        {sending ? 'Sending…' : 'Book Appointment'}
      </button>
    </form>
  )
}
