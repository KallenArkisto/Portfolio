import { useState } from 'react'

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column justify-content-between${isOpen ? ' header-show' : ''}`}
    >
      <button
        className="header-toggle d-xl-none bi bi-list"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      />

      <div className="header-top">
        <div className="profile-img">
          <img src="/img/profile/squarecut1.jpg" alt="Kalle Kleemola" className="img-fluid" />
        </div>

        <a href="#hero" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Kalle Kleemola</h1>
        </a>
      </div>

      <nav id="navmenu" className="navmenu" aria-label="Main navigation">
        <ul>
          <li><a href="#hero" className="active" onClick={() => setIsOpen(false)}><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume" onClick={() => setIsOpen(false)}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}><i className="bi bi-images navicon"></i> Portfolio</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>

      <div className="social-links text-center">
        <a href="#" className="twitter" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="google-plus" aria-label="Skype"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
      </div>
    </header>
  )
}
