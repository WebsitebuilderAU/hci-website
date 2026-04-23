import { useState } from 'react'
import { IconPhone, IconMail } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const EMAIL = 'harrisryan2004@gmail.com'
const PHONE_DISPLAY = '0438 640 447'
const PHONE_TEL = '0438640447'

const SERVICES = ['End of Lease', 'Domestic', 'Commercial', 'Window Cleaning', 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    suburb: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // Placeholder handler: build a mailto: link so the form is functional
    // without wiring up a backend. Replace with a real endpoint later.
    const subject = `Quote request — ${form.service || 'Cleaning'}`
    const bodyLines = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Suburb: ${form.suburb}`,
      '',
      'Message:',
      form.message,
    ]
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n'),
    )}`
    window.location.href = href
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14">
        {/* Left panel */}
        <Reveal>
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
            Request a Quote
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-navy-900">
            Get your free quote.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Fill in the form and Ryan will be in touch within 24 hours. Prefer to chat? Give him a call directly — he answers the phone himself.
          </p>

          <div className="space-y-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-4 p-5 rounded-card bg-white border border-slate-200 hover:border-navy-900 transition"
            >
              <div className="w-12 h-12 rounded-card bg-navy-50 flex items-center justify-center flex-shrink-0">
                <IconPhone className="w-6 h-6 text-navy-900" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                  Call Ryan directly
                </p>
                <p className="font-bold text-lg text-navy-900">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 p-5 rounded-card bg-white border border-slate-200 hover:border-navy-900 transition"
            >
              <div className="w-12 h-12 rounded-card bg-navy-50 flex items-center justify-center flex-shrink-0">
                <IconMail className="w-6 h-6 text-navy-900" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                  Email
                </p>
                <p className="font-bold text-lg text-navy-900 break-all">{EMAIL}</p>
              </div>
            </a>
          </div>

          <div className="mt-8 p-5 rounded-card bg-navy-900 text-white">
            <p className="text-xs uppercase tracking-widest font-semibold text-teal-400 mb-1">
              Service area
            </p>
            <p className="font-semibold">Canberra &amp; ACT — all suburbs</p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={80}>
          <form
            onSubmit={onSubmit}
            className="bg-white p-7 md:p-8 rounded-card border border-slate-200 shadow-sm space-y-4"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-2">Get Your Free Quote</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="field-label">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="field"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="field-label">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={onChange}
                  className="field"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="field-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="field"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="service" className="field-label">Type of clean</label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={onChange}
                className="field"
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="suburb" className="field-label">Suburb</label>
              <input
                id="suburb"
                name="suburb"
                type="text"
                value={form.suburb}
                onChange={onChange}
                className="field"
                placeholder="e.g. Belconnen"
              />
            </div>

            <div>
              <label htmlFor="message" className="field-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                className="field"
                placeholder="Tell Ryan a bit about the job — size, timing, anything else."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 rounded-card transition"
            >
              Send My Quote Request
            </button>

            {submitted && (
              <p className="text-sm text-teal-600 font-semibold text-center">
                Opening your email app… if nothing happens, call Ryan on {PHONE_DISPLAY}.
              </p>
            )}

            <p className="text-xs text-slate-500 text-center">
              By sending this you agree to be contacted about your quote. Your details stay private.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
