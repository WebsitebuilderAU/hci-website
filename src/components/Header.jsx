import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { IconMenu, IconClose } from './Icons.jsx'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Harris Cleaning Industry's — home">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-navy-900 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-card transition text-sm"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-card border border-slate-200 text-navy-900"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-slate-700 hover:text-navy-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-3 rounded-card transition text-sm"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
