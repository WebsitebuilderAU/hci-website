import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Safety net: guarantee every fade-in element reveals eventually, even if
  // its IntersectionObserver hasn't fired (e.g. fast programmatic scrolls,
  // hot reloads, or layout thrash). Users still see the nice scroll effect
  // for content they scroll to normally.
  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelectorAll('.fade-in:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        // Only auto-reveal if the element has already been scrolled past or is
        // currently in the viewport. Elements still below the fold will reveal
        // naturally when the user scrolls.
        if (rect.top < (window.innerHeight || 0) + 200) {
          el.classList.add('is-visible')
        }
      })
    }, 1500)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
