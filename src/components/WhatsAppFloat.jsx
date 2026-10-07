import { whatsappUrl } from '../data/siteConfig'
import { FaWhatsapp } from './Icons'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp to book a physiotherapy appointment"
    >
      <FaWhatsapp />
    </a>
  )
}
