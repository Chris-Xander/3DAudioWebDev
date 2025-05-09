import React from 'react';
import 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Layout(){
    return (
        <div className="App">
          <header>
            <nav className="navbar">
              <div className="logo">
                <h1>3D Audiomix</h1>
              </div>
  
              <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/services" className="nav-link">Services</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
              </ul>
  
              <div className="login-section">
                <Link to="/login" className="login-btn">Login</Link>
              </div>
            </nav>
          </header>
          </div>);
          }
          export default Layout;