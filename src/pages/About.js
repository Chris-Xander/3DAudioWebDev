import '../Pagestyles/About.css'
import { Link } from 'react-router-dom'
import Image2 from '../Assets/soundEngineering.jpeg'
import Image3 from '../Assets/IMG-20240805-WA0027.jpg'
import Image4 from '../Assets/pexels-oandremoura-2897776.jpg'
import Image5 from '../Assets/workingengineer.jpg'
import Image6 from '../Assets/man-working-with-radio-equipment.jpg'


function About() 
{
    return (
      <div className='About'>  
        <div className='about-container'>
            <div className='about-hero'>
                <div className='hero-content'>
                   <div className='page-header'> 
                    <h1>About Us</h1>
                   </div> 
                    <p>Your Premier Audio Production Partner</p>
                    <p>Ready to level up your sound? Create your account and explore our expert audiomixing services.</p>
                    <div className='hero-buttons'>
                        <Link to="/" className='home-button'>Home</Link>
                        <Link to="/login" className='get-started'>Get Started</Link>
                    </div>
                </div>
            </div>

            <div className='about-content'>
                <div className='about-section story-section'>
                    <div className='section-image'>
                        <img src={Image2} alt="3daudio" />
                    </div>
                    <div className='section-text'>
                        <h2>Our Story</h2>
                        <p>
                        3D Audiomix blends technology and creativity to craft immersive, high-quality audio experiences. With over a decade of industry expertise, we specialize in sound production, live audio engineering, and consultancy—earning a reputation for excellence across the board.
                        </p>
                    </div>
                </div>

                <div className='subsection'>
                    <div className='subsection-text'>
                        <p>
                       Founded to redefine how sound is produced and experienced in the digital age, we have become a trusted partner to institutions like The Apostolic Church, The Church of Pentecost, and TAC TV. Our work is driven by a commitment to quality, innovation, and customer satisfaction.
                        </p>
                    </div>
                        <div className='subsection-image'>
                            <img src={Image3} alt='workingman'/>
                        </div>
                </div>

                {/* Image Gallery Section */}
                <div className='image-gallery-section'>
                    <h2>Our Work</h2>
                    <div className='gallery-grid'>
                        <div className='gallery-item'>
                            <img src={Image4} alt='Professional Sound Equipment' className='gallery-image' />
                            <div className='gallery-content'>
                                <h3>State-of-the-Art Equipment</h3>
                                <p>Our professional mixing consoles and sound equipment deliver pristine audio quality for every project, ensuring crystal-clear sound reproduction.</p>
                            </div>
                        </div>
                        <div className='gallery-item'>
                            <img src={Image5} alt='Engineer working' className='gallery-image' />
                            <div className='gallery-content'>
                                <h3>Precision Control</h3>
                                <p>Advanced digital mixing technology allows for precise audio control and seamless integration with modern production workflows.</p>
                            </div>
                        </div>
                        <div className='gallery-item'>
                            <img src={Image6} alt='Audio Engineer at Work' className='gallery-image' />
                            <div className='gallery-content'>
                                <h3>Expert Engineering</h3>
                                <p>Our skilled audio engineers bring years of experience to every session, delivering professional results that exceed expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='services-section'>
                    <h2>Our Services</h2>
                    <div className='services-grid'>
                        <div className='service-item'>
                            <div className='service-icon'>🎚️</div>
                            <h3>Audio Production</h3>
                            <p>Professional recording and mixing services for all your audio needs.</p>
                            <Link to="/services" className='service-btn'>Learn More</Link>
                        </div>
                        <div className='service-item'>
                            <div className='service-icon'>🎛️</div>
                            <h3>Equipment Rental</h3>
                            <p>State-of-the-art audio equipment available for rental, perfect for any project.</p>
                            <Link to="/equipment" className='service-btn'>View Equipment</Link>
                        </div>
                        <div className='service-item'>
                            <div className='service-icon'>🎧</div>
                            <h3>Sound Design</h3>
                            <p>Custom sound design solutions available for all events and multimedia projects.</p>
                            <Link to="/portfolio" className='service-btn'>See Our Work</Link>
                        </div>
                    </div>
                </div>

                <div className='features-section'>
                    <h2>Why Choose Us</h2>
                    <div className='features-grid'>
                <div className='feature-item'>
                    <div className='feature-icon'>👨‍🔧</div>
                    <h3>Expertise</h3>
                    <p>Our team consists of industry professionals with years of experience.</p>
                </div>
                <div className='feature-item'>
                    <div className='feature-icon'>💻</div>
                    <h3>Technology</h3>
                    <p>We use the latest equipment and software to ensure the highest quality.</p>
                </div>
                <div className='feature-item'>
                    <div className='feature-icon'>🚀</div>
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
        </div>
    </div>
    );
}

export default About;