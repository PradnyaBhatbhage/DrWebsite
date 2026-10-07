# MoveWell Physiotherapy Clinic

A premium, responsive physiotherapy clinic website built with React, Vite, and modern CSS.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Customise clinic details

Edit **`src/data/siteConfig.js`** to change:

- Doctor name, designation, qualifications, experience
- Clinic name, address, city, phone, WhatsApp, email
- Working hours and Google Maps embed
- Services, conditions, FAQs, testimonials
- Images and SEO title/description

WhatsApp uses `site.whatsappNumber` (digits only, with country code) and a pre-filled message.

## Appointment form / API

The booking form currently validates on the client and shows a success message.  
To connect a backend, replace the placeholder in `src/components/AppointmentForm.jsx` with your API call:

```js
await fetch('/api/appointments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(values),
})
```

## Pages

- `/` — homepage with all conversion sections
- `/about` — doctor profile
- `/services` — all services
- `/services/:slug` — service detail
- `/privacy` and `/terms`
- unknown routes render a 404 page

## Medical disclaimer

The site avoids guaranteed-cure language. A disclaimer is shown in the footer and can be edited in `siteConfig.js`.
