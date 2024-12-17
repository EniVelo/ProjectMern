import React from "react";
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="http://localhost:5000/images/logo.jpeg" alt="🏠" />
        </div>

        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="#services">Services</a>
          <a href="/contact">Contact</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

     
      </div>
      
      <div className="footer-bottom">
        <p className="footer-text">&copy; 2024 Bubullime House - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;





