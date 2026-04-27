import { useState } from 'react'
import Reveal from './Reveal.jsx'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-semibold text-navy-900 text-lg">{q}</span>
        <span
          className={`w-7 h-7 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 transition-transform ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function ServiceFAQ({ heading = 'Frequently asked questions', items }) {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900">
            {heading}
          </h2>
        </Reveal>
        <Reveal>
          <div className="bg-white rounded-card border border-slate-200 px-6 md:px-8">
            {items.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
