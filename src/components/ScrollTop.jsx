import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 100)
    window.addEventListener('scroll', updateVisibility)
    updateVisibility()

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center${isVisible ? ' active' : ''}`}
      aria-label="Scroll to top"
      onClick={(event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}
