import { useEffect } from 'react'
import { site } from '../data/siteConfig'

export default function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title || site.seo.title
    const desc = description || site.seo.description
    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (selector.includes('property=')) el.setAttribute('property', attr)
        else el.setAttribute('name', attr)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('meta[name="description"]', 'description', desc)
    setMeta('meta[property="og:title"]', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'og:description', desc)
    setMeta('meta[name="twitter:title"]', 'twitter:title', fullTitle)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = window.location.origin + path
  }, [title, description, path])

  return null
}
