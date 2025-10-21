import React from 'react';
import './Footer.css';

const Footer = () => {
  const practiceAreas = [
    'Civil Law',
    'Property Disputes',
    'Family Law',
    'Corporate Law',
    'Debt Recovery'
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-linkedin', url: '#' },
    { icon: 'fab fa-instagram', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Gayendra Kumar</h3>
            <p>
              Adv. Gayendra Kumar is a leading advocate in Delhi, India. Established in 2015, 
              the law office of Gayendra Kumar is renowned for its excellence in civil law practice.
            </p>
          </div>
          <div className="footer-section">
            <h3>Practice Areas</h3>
            <ul>
              {practiceAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <p>
                <i className="fas fa-phone"></i> 
                +91-9871453192
              </p>
              <p>
                <i className="fas fa-envelope"></i> 
                gayendrakumar@gmail.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> 
                Tower-6, Panchsheel Society, Greater Noida West Sector-1, UP-201318
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Advocate Gayendra Kumar • Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
