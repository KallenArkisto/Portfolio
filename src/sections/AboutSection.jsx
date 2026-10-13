import Skills from "../components/skillsComponent";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="intro-header text-center" data-aos="fade-up" data-aos-delay="150">
              <h1>Hi, I&apos;m Kalle Kleemola</h1>
              <p className="subtitle">Student &amp; Tech enthusiast</p>
            </div>

            <div className="main-content-wrapper">
              <div className="row align-items-start">
                <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                  <div className="profile-section">
                    <div className="profile-image-container">
                      <img src={`${import.meta.env.BASE_URL}img/profile/pfp 2 squarecut.jpg`} className="img-fluid" alt="Kalle Kleemola" /> 
                    </div>
                    <div className="profile-meta">
                      <div className="location">
                        <i className="bi bi-geo-alt"></i>
                        <span>Oulu, Finland</span>
                      </div>
                      <div className="status">
                        <div className="status-indicator"></div>
                        <span>Available for projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-left" data-aos-delay="250">
                  <div className="content-area">
                    <div className="story-block">
                      <p className="lead-text">Skills</p>
                      <p>I have experience in the following areas:</p>
                    </div>
                    <div className="expertise-grid">

                    <Skills />

                      
                    </div>
                    <div className="philosophy-quote" data-aos="fade-up" data-aos-delay="450">
                      <div className="quote-mark">&quot;</div>
                      <p>Looking forward to expanding my skills through challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
