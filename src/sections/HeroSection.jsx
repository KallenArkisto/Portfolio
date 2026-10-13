export default function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-content">
              <h1 data-aos="fade-up" data-aos-delay="200">
                Student &amp;
                <span className="accent-text">Tech enthusiast</span>
              </h1>
              <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
                I am in search of internship opportunities to apply and expand my skills in real-world development environments.
              </p>
              <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                <a href="#portfolio" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-secondary">Get In Touch</a>
              </div>
              <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
                <div className="stat-item">
                  <span className="stat-number">2024</span>
                  <span className="stat-label">Programming since</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Programming Languages Learned</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-image" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrapper">
                <img src={`${import.meta.env.BASE_URL}img/profile/profile-square-13.webp`} alt="Creative Designer Portfolio" className="img-fluid main-image" />
                <div className="floating-card card-1" data-aos="fade-up" data-aos-delay="600">
                  <i className="bi bi-palette"></i>
                  <span>UI Design</span>
                </div>
                <div className="floating-card card-2" data-aos="fade-up" data-aos-delay="700">
                  <i className="bi bi-code-square"></i>
                  <span>Web Development</span>
                </div>
                <div className="floating-card card-3" data-aos="fade-up" data-aos-delay="800">
                  <i className="bi bi-server"></i>
                  <span>Backend Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
