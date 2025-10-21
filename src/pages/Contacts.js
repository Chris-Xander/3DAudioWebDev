import React from 'react';
import '../Pagestyles/Contacts.css';


function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-container">

        <div className="contacts-hero">
          <h1>Contact Us</h1>
          <div className="contacts-image-container">
            <div className="image-wrapper">
              <img src={require('../Assets/pexels-anna-pou-8132802.jpg')} alt="Audio mixing console" className="contacts-image" />
              <p className="image-caption">Professional audio mixing console in our state-of-the-art studio, equipped with the latest technology for crystal-clear sound production.</p>
            </div>
            <div className="image-wrapper">
              <img src={require('../Assets/workingengineer.jpg')} alt="Sound engineer at work" className="contacts-image" />
              <p className="image-caption">Our experienced sound engineer meticulously crafting audio perfection, ensuring every event sounds exceptional.</p>
            </div>
          </div>
          <p>We'd love to hear from you! Reach out to us through any of the following ways.</p>
        </div>

        <div className="contacts-info">
          <div className="contact-item">
            <div className="contact-icon" role="img" aria-label="Location">📍</div>
            <div className="contact-text">
              <h2>Location</h2>
              <p>McCarthy Hill, Accra</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" role="img" aria-label="Phone">📞</div>
            <div className="contact-text">
              <h2>Telephone</h2>
              <p>0244364884 / 0262364884</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon" role="img" aria-label="Email">✉️</div>
            <div className="contact-text">
              <h2>Email</h2>
              <p>3Daudiomix@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
