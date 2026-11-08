import './App.css'
import sparrowstepLogo from './assets/Sparrowstep Logo 2026-01-23.svg'
import viviLogo from './assets/ViviLogo20251230.svg'
import subscriptixLogo from './assets/subscriptix-logo.webp'
import crossleagueLogo from './assets/crossleague-logo.svg'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <img src={sparrowstepLogo} alt="Sparrowstep" className="header-logo" />
        <h1 className="tagline">Technology for Humanity</h1>
      </header>

      <main>
      {/* Hero Section */}
      <section className="hero">
        <p className="hero-text">
          We create software that <strong>streamlines the <span className="highlight">digital</span> and enhances the <span className="highlight">human</span></strong>,
          <br />with a diverse portfolio of apps that tackle real-world challenges
          <br />in business and personal spheres.
        </p>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="products-grid">
          {/* Subscriptix */}
          <div className="product-card subscriptix">
            <img src={subscriptixLogo} alt="Subscriptix" className="product-logo subscriptix-logo" />
            <p className="product-tagline">Financial Modeling for Subscription Businesses</p>
            <p className="product-description">
              Powerful cohort-based forecasting and analytics built for recurring
              revenue models. Bridge the gap between spreadsheets and enterprise
              software with customizable scenarios, seasonality adjustments, and
              seamless Excel integration.
            </p>
            <a href="https://www.subscriptix.com" className="product-link">Visit subscriptix.com</a>
          </div>

          {/* Vivi */}
          <div className="product-card vivi">
            <img src={viviLogo} alt="Vivi" className="product-logo vivi-logo" />
            <p className="product-tagline">Truly Social Media</p>
            <p className="product-description">
              The cure for the epidemic of loneliness. Vivi helps friends organize
              real, in-person gatherings—turning digital connections into meaningful
              face-to-face moments. Because the best memories happen together.
            </p>
            <a href="https://letsvivi.com" className="product-link">Visit letsvivi.com</a>
          </div>

          {/* Crossleague */}
          <div className="product-card crossleague">
            <img src={crossleagueLogo} alt="Crossleague" className="product-logo crossleague-logo" />
            <p className="product-tagline">Advanced Crossword Time Tracking and Community</p>
            <p className="product-description">
              The companion app for avid crossworders. Capture your solve times
              straight from the puzzle, analyze your performance over any stretch,
              and make solving social with leagues, tournaments, and daily races
              against friends.
            </p>
            <a href="https://crossleague.app" className="product-link">Visit crossleague.app</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <p>
          Interested in learning more about our products or exploring partnership opportunities?
        </p>
        <a href="mailto:info@sparrowstep.com" className="contact-email">
          info@sparrowstep.com
        </a>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">© 2026 Sparrowstep LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
