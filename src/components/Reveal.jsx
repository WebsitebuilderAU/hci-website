import { useEffect, useRef, useState } from 'react'

// Wraps children with a fade-in-on-scroll animation.
// Pass `delay` (ms) to stagger a row of cards.
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // If IntersectionObserver isn't supported, show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    // If the element is already within (or above) the viewport on mount,
    // skip the observer and reveal immediately. This handles the case where
    // StrictMode double-invokes the effect and any "already seen" content.
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh * 0.95) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.01 },
    )
    obs.observe(el)

    // Safety net: if after a short delay the element is in view but the
    // observer hasn't fired (can happen with hot reloads / StrictMode timing),
    // force-reveal.
    const t = setTimeout(() => {
      const r = el.getBoundingClientRect()
      const h = window.innerHeight || document.documentElement.clientHeight
      if (r.top < h && r.bottom > 0) {
        setVisible(true)
      }
    }, 400)

    return () => {
      obs.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`fade-in ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
