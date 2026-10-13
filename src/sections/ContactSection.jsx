export default function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>to be activated</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-item">
              <div className="info-icon"><i className="bi bi-chat-dots"></i></div>
              <div className="info-content">
                <h4>Let&apos;s Connect</h4>
                <p>messages can be left here</p>
              </div>
            </div>
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon"><i className="bi bi-envelope-open"></i></div>
                <div className="detail-content">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">Yet to be created</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-wrapper">
              <div className="form-header">
                <h3>Leave a message</h3>
              </div>
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="contactName">Full Name</label>
                      <input id="contactName" type="text" name="name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="contactEmail">Email Address</label>
                      <input id="contactEmail" type="email" name="email" required />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contactSubject">Subject</label>
                  <input id="contactSubject" type="text" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="projectMessage">Message</label>
                  <textarea name="message" id="projectMessage" rows="5" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <button type="submit" className="submit-btn" disabled>
                  <span>Send Message</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
