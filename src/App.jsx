import { useEffect } from 'react'
import ScrollTop from './components/ScrollTop.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './sections/HeroSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ResumeSection from './sections/ResumeSection.jsx'
import PortfolioSection from './sections/PortfolioSection.jsx'
import ContactSection from './sections/ContactSection.jsx'

export default function App() {
  useEffect(() => {
    window.AOS?.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ScrollTop />
    </>
  )
}