import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logOut } from '../firebase';
import './ResponsiveNavbar.css';

const ResponsiveNavbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="responsive-header">
      <nav className="responsive-navbar">
        <div className="logo">
          <h1>3Daudiomix</h1>
        </div>

        {/* Desktop Navigation */}
       <div className='desktop-nav-container'> 
        <ul className="nav-links desktop-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contacts" className="nav-link">Contacts</Link></li>   
        </ul>
       </div> 

        <div className="login-section desktop-login">
          {currentUser ? (
            <div className="user-section">
              <span className="user-email">{currentUser.email}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button
          className="mobile-menu-close"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <span className="close-line"></span>
          <span className="close-line"></span>
        </button>

        {/* Mobile Menu Logo */}
        <div className="mobile-menu-logo">
          <h1>3Daudiomix</h1>
        </div>

        <ul className="mobile-nav-links">
          <li className="mobile-nav-item">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon">ℹ️</span>
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon">🎵</span>
              <span className="nav-text">Services</span>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/contacts" className="mobile-nav-link" onClick={closeMobileMenu}>
              <span className="nav-icon">📞</span>
              <span className="nav-text">Contacts</span>
            </Link>
          </li>
          <li className="mobile-login-section">
            {currentUser ? (
              <div className="mobile-user-section">
                <span className="mobile-user-email">{currentUser.email}</span>
                <button onClick={handleLogout} className="mobile-logout-btn">
                  <span className="nav-icon">🚪</span>
                  <span className="nav-text">Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="mobile-login-btn" onClick={closeMobileMenu}>
                <span className="nav-icon">🔐</span>
                <span className="nav-text">Login</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
