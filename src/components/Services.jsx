import { IconKey, IconHome, IconBuilding, IconWindow, IconSpray } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    icon: IconKey,
    title: 'End-of-Lease',
    body: 'Get your bond back. Our clean meets real estate standards.',
  },
  {
    icon: IconHome,
    title: 'Domestic',
    body: 'Regular or one-off. Weekly, fortnightly, or when you need us.',
  },
  {
    icon: IconBuilding,
    title: 'Commercial',
    body: 'Offices, shops and workspaces — reliable scheduled cleans.',
  },
  {
    icon: IconWindow,
    title: 'Window Cleaning',
    body: 'Streak-free, inside and out. Residential and commercial.',
  },
  {
    icon: IconSpray,
    title: 'Pressure Cleaning',
    body: 'Driveways, paths and exteriors brought back to life.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-navy-900">
            Professional cleaning, every time.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            One local operator. One point of contact. Consistent quality across every job, right across Canberra and the ACT.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {SERVICES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="group h-full bg-slate-50 hover:bg-navy-900 transition-colors duration-300 p-7 rounded-card border border-slate-100">
                <div className="w-12 h-12 rounded-card bg-navy-900 group-hover:bg-teal-500 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy-900 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-navy-100 leading-relaxed transition-colors">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
