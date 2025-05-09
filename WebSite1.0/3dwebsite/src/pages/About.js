import React from 'react'
import '../Pagestyles/About.css'
import { Link } from 'react-router-dom'
import Image from '../Assets/close-up-shot-professional-radio-equipment.jpg'
import Image2 from '../Assets/IMG-20240805-WA0024(1).jpg'


function About() {
    return (
      <div className='About'>  
        <div className='about-container'>
            <div className='about-hero'>
                <div className='hero-content'>
                    <h1>About Us</h1>
                    <p>Your Premier Audio Production Partner</p>
                    <p1>Delivering High Quality Audio Services to our customers! </p1>
                    <div className='hero-buttons'>
                        <Link to="/" className='hero-btn home-btn'>Back to Home</Link>
                        <Link to="/login" className='hero-btn login-btn'>Get Started</Link>
                    </div>
                </div>
                <img src={Image} alt="mixerimage" className='mixerpicture'/>
            </div>

            <div className='about-content'>
                <div className='about-section story-section'>
                    <div className='section-image'>
                        <img src={Image2} alt="2men" />
                    </div>
                    <div className='section-text'>
                        <h2>Our Story</h2>
                        <p>
                            At 3D Audiomix, we blend cutting-edge technology with artistic excellence to create 
                            immersive audio experiences. Our journey began with a simple mission: to revolutionize 
                            the way sound is produced and experienced in the digital age.
                        </p>
                        <Link to="/services" className='section-btn'>Connect With Us</Link>
                    </div>
                </div>

                <div className='services-section'>
                    <h2>Our Services</h2>
                    <div className='services-grid'>
                        <div className='service-item'>
                            <div className='service-icon'>🎚️</div>
                            <h3>Audio Production</h3>
                            <p>Professional recording, mixing, and mastering services for all your audio needs.</p>
                            <Link to="/services" className='service-btn'>Learn More</Link>
                        </div>
                        <div className='service-item'>
                            <div className='service-icon'>🎛️</div>
                            <h3>Equipment Rental</h3>
                            <p>State-of-the-art audio equipment available for rent, perfect for any project.</p>
                            <Link to="/equipment" className='service-btn'>View Equipment</Link>
                        </div>
                        <div className='service-item'>
                            <div className='service-icon'>🎧</div>
                            <h3>Sound Design</h3>
                            <p>Custom sound design solutions for films, games, and multimedia projects.</p>
                            <Link to="/portfolio" className='service-btn'>See Our Work</Link>
                        </div>
                    </div>
                </div>

                <div className='features-section'>
                    <h2>Why Choose Us</h2>
                    <div className='features-grid'>
                        <div className='feature-item'>
                            <div className='feature-icon'>🎚️</div>
                            <h3>Expertise</h3>
                            <p>Our team consists of industry professionals with years of experience.</p>
                        </div>
                        <div className='feature-item'>
                            <div className='feature-icon'>🎛️</div>
                            <h3>Technology</h3>
                            <p>We use the latest equipment and software to ensure the highest quality.</p>
                        </div>
                        <div className='feature-item'>
                            <div className='feature-icon'>🎧</div>
                            <h3>Innovation</h3>
                            <p>Constantly pushing boundaries in audio production and sound design.</p>
                        </div>
                    </div>
                </div>

                <div className='cta-section'>
                    <h2>Ready to Create Something Amazing?</h2>
                    <p>Join us in crafting the perfect sound for your project.</p>
                    <div className='cta-buttons'>
                        <Link to="/services" className='cta-btn primary'>Get in Touch</Link>
                        <Link to="/login" className='cta-btn secondary'>Start a Project</Link>
                    </div>
                </div>
            </div>

            <div className='floating-nav'>
                <Link to="/" className='float-btn'>
                    <span className='float-icon'>🏠</span>
                    Home
                </Link>
                <Link to="/login" className='float-btn'>
                    <span className='float-icon'>👤</span>
                    Login
                </Link>
            </div>
        </div>
    </div>
    );
}

export default About;