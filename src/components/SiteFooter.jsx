export default function SiteFooter() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <h3 className="sitename">Kalle Kleemola</h3>
        <p>END</p>
        <div className="social-links d-flex justify-content-center">
          <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" aria-label="Skype"><i className="bi bi-skype"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">Mark Andersen</strong> <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> | <a href="https://bootstrapmade.com/tools/">DevTools</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
