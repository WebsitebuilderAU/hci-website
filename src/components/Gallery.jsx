import Reveal from './Reveal.jsx'
import KITCHEN from '../assets/photos/kitchen.jpg'
import LAUNDRY from '../assets/photos/laundry.jpg'
import FLOOR from '../assets/photos/kitchen-floor.jpg'

const SHOTS = [
  { src: KITCHEN, alt: 'Clean, tidy kitchen — cooktop and oven sparkling', label: 'Kitchen' },
  { src: LAUNDRY, alt: 'Fresh laundry room with polished floor tiles', label: 'Laundry' },
  { src: FLOOR, alt: 'Pristine tiled floor finish after a thorough clean', label: 'Tiled Floors' },
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
            Recent Work
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900 mb-4">
            A standard you can see.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A small snapshot of recent jobs across Canberra and the ACT.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SHOTS.map(({ src, alt, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <figure className="relative overflow-hidden rounded-card shadow-md ring-1 ring-slate-200 group">
                <img
                  src={src}
                  alt={alt}
                  className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent p-4">
                  <span className="text-white font-semibold text-sm">{label}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
