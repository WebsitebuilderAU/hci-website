import Reveal from './Reveal.jsx'
import { IconCheckBadge } from './Icons.jsx'

// "What's included" checklist — pass an array of strings.
export default function ServiceFeatures({ eyebrow = "What's included", heading, intro, items }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900 mb-4">
            {heading}
          </h2>
          {intro && (
            <p className="text-lg text-slate-600 leading-relaxed">{intro}</p>
          )}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 40}>
              <div className="flex items-start gap-3 bg-slate-50 p-5 rounded-card border border-slate-100 h-full">
                <div className="w-8 h-8 rounded-card bg-teal-500/10 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <IconCheckBadge className="w-5 h-5" />
                </div>
                <p className="text-slate-700 leading-relaxed text-[15px]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
