import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/siteConfig'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  const items = navLinks.map((link) =>
    link.to.includes('#') ? (
      <Link key={link.label} className="nav-link" to={link.to} onClick={() => setOpen(false)}>
        {link.label}
      </Link>
    ) : (
      <NavLink
        key={link.label}
        to={link.to}
        className={linkClass}
        end={link.to === '/'}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </NavLink>
    ),
  )

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {items}
          <Link className="btn btn-primary nav-cta" to="/#appointment">
            Book Appointment
          </Link>
        </nav>
        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav className="nav-mobile" aria-label="Mobile">
          {items}
          <Link className="btn btn-primary" to="/#appointment" onClick={() => setOpen(false)}>
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  )
}
