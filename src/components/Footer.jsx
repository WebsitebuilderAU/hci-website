import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="text-sm max-w-md leading-relaxed mt-5 text-navy-200">
            Canberra's trusted local cleaning service — end-of-lease, domestic, commercial and
            window cleaning, personally run by Ryan Harris.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-navy-200">
            <li><a href="#services" className="hover:text-white transition">End-of-Lease</a></li>
            <li><a href="#services" className="hover:text-white transition">Domestic</a></li>
            <li><a href="#services" className="hover:text-white transition">Commercial</a></li>
            <li><a href="#services" className="hover:text-white transition">Window Cleaning</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-navy-200">
            <li>
              <a href="tel:0438640447" className="hover:text-white transition">0438 640 447</a>
            </li>
            <li>
              <a href="mailto:harrisryan2004@gmail.com" className="hover:text-white transition break-all">
                harrisryan2004@gmail.com
              </a>
            </li>
            <li className="pt-1 text-navy-300">Serving Canberra &amp; ACT</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs flex flex-col md:flex-row justify-between gap-2 text-navy-300">
          <p>© {year} Harris Cleaning Industry's. All rights reserved.</p>
          <p>Website by Website Builder Australia</p>
        </div>
      </div>
    </footer>
  )
}
