import Reveal from './Reveal.jsx'
import BEFORE_IMG from '../assets/photos/before.jpg'
import AFTER_IMG from '../assets/photos/after.jpg'

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
            The Results
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900 mb-4">
            Before and after — the real difference.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A recent end-of-lease job. Even the toughest rooms come up spotless.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <Reveal>
            <figure className="relative overflow-hidden rounded-card shadow-lg ring-1 ring-slate-200 bg-white">
              <img
                src={BEFORE_IMG}
                alt="Room before cleaning — rubbish and dirty floor"
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
              />
              <figcaption className="absolute top-4 left-4 bg-navy-900/90 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-card">
                Before
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative overflow-hidden rounded-card shadow-lg ring-1 ring-slate-200 bg-white">
              <img
                src={AFTER_IMG}
                alt="Same room after cleaning by Harris Cleaning Industry's"
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
              />
              <figcaption className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-card">
                After
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
