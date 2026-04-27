import { IconShield, IconCheckBadge, IconStar, IconUser } from './Icons.jsx'

const BADGES = [
  { icon: IconUser, label: 'Police Checked' },
  { icon: IconShield, label: 'Fully Insured' },
  { icon: IconCheckBadge, label: 'Owner-Operated' },
  { icon: IconStar, label: 'Highly Rated' },
]

// Hero block for each service landing page. The heading is rendered as the
// page's single H1 — pass the primary keyword in for SEO.
export default function ServiceHero({ eyebrow, h1, intro, image, imageAlt }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(11,42,74,0.94) 0%, rgba(11,42,74,0.82) 45%, rgba(11,42,74,0.55) 100%), url('${image}')`,
        }}
        role="img"
        aria-label={imageAlt}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(60% 60% at 85% 20%, rgba(43,196,176,0.25) 0%, rgba(11,42,74,0) 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="text-teal-400">●</span>
            <span>{eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            {h1}
          </h1>
          <p className="text-lg md:text-xl text-navy-100/90 mb-10 max-w-2xl leading-relaxed">
            {intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-bold px-7 py-3.5 rounded-card transition shadow-lg shadow-teal-900/20"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:0438640447"
              className="inline-flex items-center justify-center border-2 border-white/60 hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-card transition"
            >
              Call Ryan — 0438 640 447
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-card bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-teal-400" />
              </div>
              <p className="text-sm font-semibold text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
