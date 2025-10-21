import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Advocate Gayendra Kumar</h1>
            <p>Best Civil Lawyer in Delhi</p>
          </div>
          <div className="contact-info">
            <div className="phone">
              <i className="fas fa-phone"></i>
              <span>+91 9871453192</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
