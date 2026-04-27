import Reveal from './Reveal.jsx'

const SUBURBS = [
  'Belconnen',
  'Tuggeranong',
  'Woden',
  'Gungahlin',
  'Queanbeyan',
  'Weston',
  'Molonglo',
  'Inner North',
  'Inner South',
]

// Service-area block. Reinforces local relevance for SEO and reassures
// visitors that we cover their part of Canberra.
export default function SuburbList({ serviceLabel = 'cleaning' }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
            Service Area
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900 mb-4">
            Canberra suburbs we cover.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We provide {serviceLabel} right across Canberra and the ACT — from the inner suburbs to the outer districts, and into Queanbeyan.
          </p>
        </Reveal>
        <Reveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SUBURBS.map((s) => (
              <li
                key={s}
                className="bg-slate-50 border border-slate-200 rounded-card px-4 py-3 text-center font-semibold text-navy-900 text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="mt-6 text-sm text-slate-500 text-center">
          Don't see your suburb? Give Ryan a call on{' '}
          <a href="tel:0438640447" className="text-navy-900 font-semibold underline">
            0438 640 447
          </a>{' '}
          — chances are we cover it.
        </p>
      </div>
    </section>
  )
}
