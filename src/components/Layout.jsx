import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// Shared page wrapper: sticky header, main content, footer.
// Also runs the same fade-in safety net the original App had so any
// Reveal element below the fold shows up even if its IntersectionObserver
// hasn't fired yet.
export default function Layout({ children }) {
  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelectorAll('.fade-in:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
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
      <main>{children}</main>
      <Footer />
    </>
  )
}
