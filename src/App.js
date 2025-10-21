import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth, AuthProvider } from './context/AuthContext';
import { logOut } from './firebase';
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from './pages/Register';
import ResponsiveNavbar from './Components/ResponsiveNavbar';
import Image from './Assets/undraw_engineering-team_13ax.svg';
import Image2 from './Assets/undraw_laravel-and-vue_fios (1).svg';
import Image3 from './Assets/undraw_remote-worker_0l91 (1).svg';

function Home() {
  return (
    <div className="home-container">
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to 3DAudiomix!</h1>
          <p className="hero-text">
            Your premier destination for professional audio solutions, equipment rental, and sound engineering excellence
          </p>
        </div>
      </main>

      
      <section className="services-overview">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {/* Equipment Rental Card */}
          <div className="service-card">
            <div className="service-icon">🎵</div>
            <h3>Equipment Rental</h3>
           <div className='service-list-container'>
            <ul className="service-list">
              <li>Professional PA Systems</li>
              <li>Studio Microphones</li>
              <li>Stage Monitors</li>
              <li>Lighting Systems</li>
              <li>Instruments</li>
            </ul>
           </div> 
            <Link to="/Services" className="service-link"> Rental Options</Link>
          </div>

          {/* Sound Engineering Card */}
          <div className="service-card">
            <div className="service-icon">🎚️</div>
            <h3>Sound Engineering</h3>
           <div className='service-list-container'> 
            <ul className="service-list">
              <li>Live Event Sound</li>
              <li>Studio Recording</li>
              <li>Audio Mixing</li>
              <li>Sound Design</li>
              <li>Acoustic Consultation</li>
            </ul>
           </div> 
            <Link to="/Services" className="service-link">Book Engineer</Link>
          </div>

          {/* Instrument Sales Card */}
          <div className="service-card">
            <div className="service-icon">🎸</div>
            <h3>Instrument Sales</h3>
           <div className='service-list-container'>
            <ul className="service-list">
              <li>Professional Guitars</li>
              <li>Digital Pianos</li>
              <li>Drum Kits</li>
              <li>Studio Equipment</li>
              <li>Accessories</li>
            </ul>
           </div> 
            <Link to="/Services" className="service-link">Store Enquiry</Link>
          </div>
        </div>
      </section>

      <section className="Mini-About">  
        <div className='miniaboutimage'/>
         <p className="convenientinfo">Since 2007, 3D Audiomix has been a trusted provider of high-quality sound services. With a commitment to excellence, we ensure exceptional audio experiences that leave a lasting impression. Your satisfaction is our priority.</p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose 3D Audiomix?</h2>
        <div className="features-grid">
          <div className="feature">
            <img className='feature-image1' src={Image} alt="Illustration of an expert engineering team" />
            <h4>Expert Team</h4>
            <p>Professional sound engineers with 15+ years of industry experience</p>
          </div>
          <div className="feature">
            <img className='feature-image2' src={Image2} alt="Illustration of Laravel and Vue.js development tools" />
            <h4>Quality Equipment</h4>
            <p>Top-tier audio gear from industry-leading manufacturers</p>
          </div>
          <div className="feature">
            <img className='feature-image3' src={Image3} alt="Illustration of a remote worker" />
            <h4>24/7 Support</h4>
            <p>Round-the-clock technical support for events and rentals</p>
          </div>
        </div>
      </section>
      <div className='button-section'>
          <div className="cta-buttons">
            <Link to="/services" className="btn-primary">Book Now</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
      </div>
    </div>
  );
}

//HeaderComponent Section
function Layout({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="App">
      <ResponsiveNavbar/>
      {children}
    </div>
  );
}

// Main App component and Routes
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>    
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
