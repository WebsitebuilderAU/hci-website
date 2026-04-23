import { IconStar } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const REVIEWS = [
  {
    quote:
      'Ryan did our end-of-lease and we got our full bond back. Couldn\u2019t fault him.',
    name: 'Sarah M.',
    suburb: 'Belconnen',
    initials: 'SM',
  },
  {
    quote:
      'Finally a cleaner who turns up on time and does what he says. Highly recommend.',
    name: 'James T.',
    suburb: 'Office manager, Civic',
    initials: 'JT',
  },
  {
    quote:
      'Has been cleaning our home fortnightly for six months. Always friendly, always thorough.',
    name: 'Linda P.',
    suburb: 'Gungahlin',
    initials: 'LP',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="w-4 h-4" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
              Client Reviews
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900">
              What Canberra locals say.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-card border border-slate-200">
              <Stars />
              <div>
                <p className="font-black text-2xl leading-none text-navy-900">5.0</p>
                <p className="text-xs text-slate-500 font-semibold">Average rating</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <figure className="h-full bg-slate-50 p-7 rounded-card border border-slate-200 flex flex-col">
                <Stars />
                <blockquote className="text-slate-700 leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-navy-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.suburb}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
