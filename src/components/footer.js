import React from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaLock, 
  FaCarSide 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      
      {/* === 1. TOP SECTION: SUBSCRIBE (Inside Container) === */}
      <div className="container subscribe-container">
        <h2>Stay Connected</h2>
        <p>Get exclusive deals on car audio equipment, tech tips, and updates on our latest services.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* === FULL WIDTH LINE === */}
      <div className="full-width-divider"></div>

      {/* === 2. MAIN GRID (Inside Container) === */}
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="brand-logo">
              <FaCarSide className="brand-icon" />
              <h3>Audiopine</h3>
            </div>
            <p className="brand-desc">
              Your trusted partner for car audio installations, cybersecurity solutions, and digital services in Nairobi and across Kenya.
            </p>
            <div className="contact-info">
              <p><FaPhoneAlt className="contact-icon" /> +254 748025186</p>
              <p><FaPhoneAlt className="contact-icon" /> +254 754358610</p>
              <p><FaEnvelope className="contact-icon" /> audiopinesolutions@gmail.com</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Ngong Road, Nairobi, Kenya</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Car Audio Shop</a></li>
              <li><a href="#">Installation Services</a></li>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Car Audio Installation</a></li>
              <li><a href="#">Sound System Tuning</a></li>
              <li><a href="#">Network Security</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">SEO Services</a></li>
              <li><a href="#">Social Media Marketing</a></li>
              <li><a href="#">IT Training</a></li>
            </ul>
          </div>

          {/* Column 4: Support & Policies */}
          <div className="footer-col">
            <h4>Support & Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Warranty Information</a></li>
              <li><a href="#">Installation Terms</a></li>
              <li><a href="#">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* === FULL WIDTH LINE === */}
      <div className="full-width-divider"></div>

      {/* === 3. BOTTOM SECTION (Inside Container) === */}
      <div className="container">
        <div className="footer-bottom-row">
          <div className="payment-methods">
            <span className="label">We Accept:</span>
            <span className="mpesa-badge">M-PESA</span>
            <span className="payment-text">VISA</span>
            <span className="payment-text">PayPal</span>
            <span className="payment-text">Mastercard</span>
          </div>

          <div className="social-links">
            <span className="label">Follow Us:</span>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* COPYRIGHT line separated slightly */}
        <div className="footer-legal-row">
           <p>© 2025 Audiopine. All rights reserved. | Designed for Kenyan car enthusiasts and businesses.</p>
           <div className="security-badge">
             <span>Powered by cutting-edge technology</span>
             <span className="ssl"><FaLock size={12}/> SSL Secured</span>
           </div>
        </div>
      </div>

      {/* === CSS STYLES === */}
      <style>{`
        /* Reset and Base Footer Styles */
        .footer-section {
          background-color: #050505; /* Deep black matching image */
          color: #9ca3af;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 0.95rem;
          width: 100%;
          overflow-x: hidden;
        }

        /* Container handles horizontal spacing of CONTENT, not lines */
        .container {
          max-width: 1400px; /* Wide container */
          margin: 0 auto;
          padding: 0 40px;
        }

        /* === 1. SUBSCRIBE SECTION === */
        .subscribe-container {
          text-align: center;
          padding-top: 60px;
          padding-bottom: 50px;
        }

        .subscribe-container h2 {
          color: #fff;
          font-size: 2rem;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .subscribe-container p {
          margin-bottom: 30px;
          color: #9ca3af;
        }

        .subscribe-form {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .subscribe-form input {
          background-color: #121212;
          border: 1px solid #333;
          padding: 12px 20px;
          border-radius: 4px;
          color: white;
          width: 350px;
          outline: none;
        }

        .subscribe-form button {
          background-color: #00e600; /* Neon Green */
          color: black;
          border: none;
          padding: 12px 30px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s;
        }

        .subscribe-form button:hover {
          background-color: #00c200;
        }

        /* === FULL WIDTH DIVIDER === */
        /* This runs end-to-end of the screen */
        .full-width-divider {
          width: 100%;
          height: 1px;
          background-color: #222; /* Dark Grey Line */
          margin: 0;
        }

        /* === 2. MAIN GRID === */
        .footer-grid {
          display: grid;
          /* Adjusted columns: Brand is wider */
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 60px;
          padding: 60px 0;
        }

        .footer-col h4 {
          color: #fff;
          margin-bottom: 25px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 14px;
        }

        .footer-col ul li a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
          font-size: 0.95rem;
        }

        .footer-col ul li a:hover {
          color: #00e600;
        }

        /* Brand Column */
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .brand-icon {
          color: #00e600;
          font-size: 1.8rem;
        }

        .brand-logo h3 {
          color: #fff;
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
        }

        .brand-desc {
          margin-bottom: 25px;
          line-height: 1.6;
          max-width: 350px;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          color: #d1d5db;
        }

        .contact-icon {
          color: #00e600;
        }

        /* === 3. BOTTOM SECTION === */
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
        }

        .label {
          margin-right: 15px;
          color: #6b7280;
          font-size: 0.9rem;
        }

        /* Payment Badges */
        .payment-methods {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .mpesa-badge {
          background-color: #00e600;
          color: black;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 2px;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }

        .payment-text {
          font-weight: 700;
          color: #fff;
          font-size: 0.9rem;
        }

        /* Social Icons */
        .social-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .social-links a {
          color: #9ca3af;
          font-size: 1.1rem;
          transition: 0.3s;
        }

        .social-links a:hover {
          color: #00e600;
        }

        /* Legal / Copyright Row */
        .footer-legal-row {
           border-top: 1px solid #1a1a1a; /* Subtle separator inside container */
           padding: 25px 0 40px 0;
           display: flex;
           justify-content: space-between;
           font-size: 0.85rem;
           color: #52525b;
        }

        .security-badge {
           display: flex;
           align-items: center;
           gap: 20px;
        }

        .ssl {
          color: #eab308; /* Gold lock */
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
           .footer-grid {
             gap: 30px;
             grid-template-columns: 1fr 1fr;
           }
           .subscribe-form {
             flex-direction: column;
             align-items: center;
           }
           .subscribe-form input {
             width: 100%;
             max-width: 400px;
           }
        }

        @media (max-width: 768px) {
           .footer-grid {
             grid-template-columns: 1fr;
             text-align: center;
           }
           .brand-logo, .contact-info p, .subscribe-form, .footer-bottom-row, .footer-legal-row {
             justify-content: center;
             flex-direction: column;
             gap: 15px;
           }
           .brand-desc {
             margin: 0 auto 20px auto;
           }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
