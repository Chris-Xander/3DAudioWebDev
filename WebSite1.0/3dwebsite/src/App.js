import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from './pages/Register';

// Home component
function Home() {
  return (
    //HeroSection
    <div className="home-container">
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to 3D Audiomix</h1>
          <p className="hero-text">
            Your premier destination for professional audio solutions, equipment rental, and sound engineering excellence
          </p>
        </div>
      </main>
      
      
      <section className="Mini-About"> 
        <div className='miniaboutimage' url="./Assets/Gumbal 2.jpg"/>
         <p className="convenientinfo">Since 2009, 3D Audiomix has been a trusted provider of high-quality sound services, consistently exceeding customer expectations. With a commitment to excellence, we ensure exceptional audio experiences that leave a lasting impression. Your satisfaction is our priority, and we take pride in delivering results that meet and surpass industry standards.</p>
      </section>

      
      <section className="services-overview">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {/* Equipment Rental Card */}
          <div className="service-card">
            <div className="service-icon">🎵</div>
            <h3>Equipment Rental</h3>
            <ul className="service-list">
              <li>Professional PA Systems</li>
              <li>Studio Microphones</li>
              <li>Stage Monitors</li>
              <li>Lighting Systems</li>
              <li>Instruments</li>
            </ul>
            <Link to="/Services" className="service-link">View Rental Options</Link>
          </div>

          {/* Sound Engineering Card */}
          <div className="service-card">
            <div className="service-icon">🎚️</div>
            <h3>Sound Engineering</h3>
            <ul className="service-list">
              <li>Live Event Sound</li>
              <li>Studio Recording</li>
              <li>Audio Mixing</li>
              <li>Sound Design</li>
              <li>Acoustic Consultation</li>
            </ul>
            <Link to="/Services" className="service-link">Book Engineer</Link>
          </div>

          {/* Instrument Sales Card */}
          <div className="service-card">
            <div className="service-icon">🎸</div>
            <h3>Instrument Sales</h3>
            <ul className="service-list">
              <li>Professional Guitars</li>
              <li>Digital Pianos</li>
              <li>Drum Kits</li>
              <li>Studio Equipment</li>
              <li>Accessories</li>
            </ul>
            <Link to="/Services" className="service-link">Browse Store</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose 3D Audiomix?</h2>
        <div className="features-grid">
          <div className="feature">
            <h4>Expert Team</h4>
            <p>Professional sound engineers with 10+ years of industry experience</p>
          </div>
          <div className="feature">
            <h4>Quality Equipment</h4>
            <p>Top-tier audio gear from industry-leading manufacturers</p>
          </div>
          <div className="feature">
            <h4>24/7 Support</h4>
            <p>Round-the-clock technical support for events and rentals</p>
          </div>
          <div className="feature">
            <h4>Competitive Pricing</h4>
            <p>Flexible packages to suit every budget and requirement</p>
          </div>
        </div>
      </section>
      <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">Book Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
    </div>
  );
}

//HeaderComponent Section
function Layout({ children }) {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>3DAudiomix</h1>
          </div>

          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
          </ul>

          <div className="login-section">
            <Link to="/login" className="login-btn">Login</Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

// Main App component and Routes
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
