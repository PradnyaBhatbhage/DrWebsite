import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay, as: Tag = 'div', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const show = () => el.classList.add('is-visible')
    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight - 24 && rect.bottom > 24

    if (inView) {
      const frame = requestAnimationFrame(show)
      return () => cancelAnimationFrame(frame)
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return undefined
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px 0px 0px' },
    )
    io.observe(el)
    const fallback = window.setTimeout(show, 1800)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <Tag ref={ref} data-reveal data-delay={delay} className={className} {...props}>
      {children}
    </Tag>
  )
}
