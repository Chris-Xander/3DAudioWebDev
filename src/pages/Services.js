import React, { useState } from 'react';
import '../Pagestyles/Services.css';
import emailjs from '@emailjs/browser';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';  // Corrected: from 'firebase/firestore'
import { db } from '../firebase';  // Corrected: from '../firebase' (your custom file)
import { useAuth } from '../context/AuthContext';  // Assuming this exists

function Services() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    service: '',
    additionalinfo: '',
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //EmailJs intergration IDs
    const serviceId = 'service_x2ebsqo';
    const templateId = 'template_cgr8qoe';
    const publicKey = 'TmrOC-PVf424vJzvG';

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email Sent', response);
        alert('thank you for contacting 3Daudiomix, we will contact you shortly!');
        setFormData({ name: '', contact: '', email: '', service: '', additionalinfo: ''});
        })
        .catch((error) => {
          console.error('Failed to send email', error);
          alert('failed to send email, please try again in a few minutes');
        });
      };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          Explore our wide range of professional audio services, including equipment rentals, sound engineering, and instrument sales.
        </p>
      </header>

      <section className="services-list">
        <div className="services-card">
          <h3>Equipment Rental</h3>
          <p>We provide rentals for high-quality audio equipments (Linaries, Digital Mixers, Monitors, etc), for events, studios, and more.</p>
        </div>
        <div className="services-card">
          <h3>Sound Engineering</h3>
          <p>Professional sound engineering for live events and recordings.</p>
        </div>
        <div className="services-card">
          <h3>Instrument Sales</h3>
          <p>Top-tier instruments and related accessories for programs and events of all levels to ensure the best audio experience!</p>
        </div>
      </section>

      <section className="booking-form-section">
        <h2>Book a Service</h2>
        <div className="form-instructions">
          <p>Complete this form with your details to quickly and easily request a service. Our team will review your submission and get back to you promptly.</p>
        </div>
        <p>Fill out the form below to request a service or rental.</p>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name/Organization"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              autoComplete='contact'
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact details"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type='text'
              id='email'
              name='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Required:</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Equipment Rental">Equipment Rental</option>
              <option value="Sound Engineering">Sound Engineering</option>
              <option value="Instrument Purchase">Instrument/Equipment Purchase</option>
              <option value="Service Enquiry">Service Enquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="additionalinfo">Service Info:</label>
            <input
              type="text"
              id='additionalinfo'
              name="additionalinfo"
              value={formData.additionalinfo}
              onChange={handleChange}
              placeholder='Any additional info? (Optional)'
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
      <div className='Review-Container'>
        <ReviewSection />
      </div>
    </div>
  );
}

// ReviewSection component for user reviews (updated for Firestore)
//NOTE: This section is currently hidden via CSS due to Firestore Database not being set up yet. This is not an error, rather a payment plan hasnt been drawn yet for the firestore database.
function ReviewSection() {
  const { currentUser, loading: authLoading } = useAuth();  // Include auth loading
  const [reviews, setReviews] = React.useState([]);
  const [reviewInput, setReviewInput] = React.useState({
    name: '',
    rating: '',
    comment: '',
  });
  const [loading, setLoading] = React.useState(true);

  // Real-time listener: Fetch and update reviews from Firestore
  React.useEffect(() => {
    console.log('Setting up Firestore listener...');  // Debug log
    const q = query(collection(db, 'reviews'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log('Snapshot received:', snapshot.docs.length, 'reviews');  // Debug log
        const reviewsData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            // Safely handle timestamp
            timestamp: data.timestamp?.toDate ? data.timestamp.toDate() : new Date(data.timestamp || Date.now()),
          };
        });
        setReviews(reviewsData);
        setLoading(false);
      },
      (error) => {
        console.error('Firestore listener error:', error);  // Error log
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewInput({ ...reviewInput, [name]: value });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert('You must be logged in to submit a review. Please log in via the Login page.');
      return;
    }
    if (!reviewInput.name || !reviewInput.rating || !reviewInput.comment) return;

    try {
      await addDoc(collection(db, 'reviews'), {
        name: reviewInput.name,
        rating: reviewInput.rating,
        comment: reviewInput.comment,
        userId: currentUser.uid,
        timestamp: new Date(),
      });
      setReviewInput({ name: '', rating: '', comment: '' });
    } catch (error) {
      console.error('Error adding review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  if (authLoading || loading) return <p>Loading reviews...</p>;  // Wait for auth and Firestore

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      {!currentUser ? (
        <p>You must be logged in to submit a review. <a href="/login">Log in here</a>.</p>
      ) : (
        <form className="review-form" onSubmit={handleReviewSubmit}>
          <input
            type="text"
            name="name"
            value={reviewInput.name}
            onChange={handleInputChange}
            placeholder="Name/Organization"
            required
          />
          <select
            name="rating"
            value={reviewInput.rating}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Rating</option>
            <option value="5">★★★★★</option>
            <option value="4">★★★★☆</option>
            <option value="3">★★★☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="1">★☆☆☆☆</option>
          </select>
          <textarea
            name="comment"
            value={reviewInput.comment}
            onChange={handleInputChange}
            placeholder="Write your review here..."
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      )}
      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to leave one!</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="review-item">
              <div className="review-header">
                <strong>{rev.name}</strong>
                <span className="review-date">({rev.timestamp.toLocaleString()})</span>  // Now safe
                <span className="review-rating">{'★'.repeat(Number(rev.rating))}{'☆'.repeat(5 - Number(rev.rating))}</span>
              </div>
              <div className="review-comment">{rev.comment}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


export default Services;

