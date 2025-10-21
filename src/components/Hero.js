import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Civil Lawyer in Delhi</h1>
            <p>
              <strong>Advocate Gayendra Kumar</strong>, a renowned <strong>Civil Lawyer in Delhi</strong>, 
              and his legal team provide comprehensive legal services across a wide spectrum of civil matters. 
              They represent clients in various forums, ranging from trial courts to the Supreme Court of India.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('contact')}
              >
                Book Appointment
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/images/advocate-gayendra-kumar.jpg" 
              alt="Advocate Gayendra Kumar - Civil Lawyer in Delhi"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
