import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

const filters = [
  { label: 'All', value: '*' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Program', value: 'program' },
  { label: 'Design', value: 'design' },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('*')

  useEffect(() => {
    const lightbox = window.GLightbox?.({
      selector: '#portfolio .glightbox',
    })

    return () => lightbox?.destroy?.()
  }, [])

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>My projects</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="portfolio-layout">
          <div className="filters-wrapper">
            <ul className="portfolio-filters">
              {filters.map((filter) => (
                <li
                  key={filter.value}
                  className={activeFilter === filter.value ? 'filter-active' : ''}
                >
                  <button
                    type="button"
                    aria-pressed={activeFilter === filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="row gy-5 portfolio-container">
            {projects
              .filter((project) => activeFilter === '*' || project.type === activeFilter)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}