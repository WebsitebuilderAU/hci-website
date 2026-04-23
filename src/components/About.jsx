import Reveal from './Reveal.jsx'

// Ryan Harris, owner of Harris Cleaning Industry's
import RYAN_IMG from '../assets/photos/ryan-headshot.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto max-w-xs md:max-w-none">
            {/* Decorative square behind photo */}
            <div className="absolute -inset-4 rounded-full bg-navy-50 -z-10" aria-hidden="true" />
            <img
              src={RYAN_IMG}
              alt="Ryan Harris, owner of Harris Cleaning Industry's"
              className="w-full aspect-square object-cover rounded-full shadow-xl ring-8 ring-white"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="md:col-span-3" delay={80}>
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-navy-900">
            Hi, I'm Ryan — the person behind Harris Cleaning Industry's.
          </h2>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              I started Harris Cleaning Industry's because cleaning is about trust. When I step into your home or business, I treat it like my own.
            </p>
            <p>
              You won't get a faceless company or a different cleaner every week — you get me, directly, every time.
            </p>
            <p>
              If you've got a question, a special request, or just want to chat about your clean, give me a call. That's the difference.
            </p>
          </div>
          <p className="mt-8 font-bold text-navy-900 text-lg">— Ryan</p>
        </Reveal>
      </div>
    </section>
  )
}
