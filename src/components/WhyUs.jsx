import { IconPhone, IconClock, IconShield, IconLeaf } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    icon: IconPhone,
    title: 'Direct line to the owner',
    body: 'No call centres, no runaround. Ring Ryan, speak to Ryan.',
  },
  {
    icon: IconClock,
    title: 'Flexible scheduling',
    body: 'Weekly, fortnightly, one-off, or fitted around your lease dates.',
  },
  {
    icon: IconShield,
    title: 'Fully insured and police checked',
    body: 'Complete peace of mind for your home or business.',
  },
  {
    icon: IconLeaf,
    title: 'Eco-friendly products available',
    body: 'Safe for kids, pets and sensitive spaces — just ask.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">
            Why Harris Cleaning Industry's
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-navy-900 mb-4">
            The difference is in the detail.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Four reasons Canberra locals keep calling Ryan back.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {ITEMS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="bg-white p-7 md:p-8 rounded-card border border-slate-200 h-full flex items-start gap-5">
                <div className="w-12 h-12 rounded-card bg-navy-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5 text-navy-900">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
