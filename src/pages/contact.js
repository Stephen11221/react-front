import React, { useState } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle 
} from 'react-icons/fa';
import Footer from '../components/footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Car Audio Installation',
    urgency: 'Normal',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send data to backend using Axios/FastAPI goes here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <div className="container">
        
        {/* --- HEADER SECTION --- */}
        <div className="section-header">
          <h1>Get In Touch</h1>
          <p>Ready to transform your business? We're here to help. Contact us today for a free consultation and personalized quote.</p>
        </div>

        {/* --- INFO CARDS GRID --- */}
        <div className="info-grid">
          
          {/* Phone */}
          <div className="info-card">
            <div className="icon-circle"><FaPhoneAlt /></div>
            <h3>Phone</h3>
            <p>+254 748 025 186</p>
            <p>+254 754 358 610</p>
            <small>Call us for immediate assistance</small>
          </div>

          {/* Email */}
          <div className="info-card">
            <div className="icon-circle"><FaEnvelope /></div>
            <h3>Email</h3>
            <p>audiopinesolutions@gmail.com</p>
            <small>Send us an email anytime</small>
          </div>

          {/* Location */}
          <div className="info-card">
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <h3>Location</h3>
            <p>Nairobi</p>
            <p>Ngong Road</p>
            <small>Visit our main office</small>
          </div>

          {/* Hours */}
          <div className="info-card">
            <div className="icon-circle"><FaClock /></div>
            <h3>Working Hours</h3>
            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            <p>Sat: 9:00 AM - 4:00 PM</p>
            <small>We're here when you need us</small>
          </div>
        </div>

        {/* --- MAIN CONTENT SPLIT --- */}
        <div className="content-split">
          
          {/* LEFT: FORM */}
          <div className="form-wrapper">
            <h2>Send us a Message</h2>
            <p className="form-desc">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your full name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="+254 712 345 678" 
                    required
                    value={formData.phone}
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Service Interested In *</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option>Car Audio Installation</option>
                    <option>Cybersecurity Solutions</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Urgency Level</label>
                  <select name="urgency" value={formData.urgency} onChange={handleChange}>
                    <option>Normal</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane style={{ marginRight: '8px' }} /> Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="sidebar-wrapper">
            
            {/* Map Card */}
            <div className="sidebar-card map-card">
              <div className="map-placeholder">
                <FaMapMarkerAlt size={30} color="#10b981"/>
                <h3>Find Us Here</h3>
                <p>Ngong Road, Nairobi</p>
                <p>Kenya</p>
              </div>
            </div>

            {/* Blue Guarantee Card */}
            <div className="sidebar-card guarantee-card">
              <h3>Quick Response Guarantee</h3>
              <ul>
                <li><FaCheckCircle className="check-icon"/> Response within 2 hours during business hours</li>
                <li><FaCheckCircle className="check-icon"/> Free consultation and quote</li>
                <li><FaCheckCircle className="check-icon"/> Personalized solution recommendations</li>
                <li><FaCheckCircle className="check-icon"/> No obligation, no pressure</li>
              </ul>
            </div>

            {/* Emergency Support */}
            <div className="sidebar-card emergency-card">
              <h3>Emergency Support</h3>
              <p>Need immediate assistance? Our emergency support line is available 24/7 for critical issues.</p>
              <div className="emergency-row">
                <div>
                  <span className="emergency-label">Emergency Line</span>
                  <div className="emergency-number">+254 748 025 186</div>
                </div>
                <span className="status-badge">24/7 Available</span>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <Footer />

      <style>{`
        /* --- GLOBAL --- */
        .contact-page {
          background-color: #0c0c0c;
          color: #e5e5e5;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
          padding-top: 60px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* --- HEADER --- */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-header h1 {
          font-size: 2.8rem;
          color: #10b981; /* Audiopine Green */
          margin-bottom: 15px;
          font-weight: 500;
        }
        .section-header p {
          color: #9ca3af;
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* --- INFO GRID (TOP) --- */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        .info-card {
          background-color: #121212; /* Card BG */
          border: 1px solid #1f1f1f;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s;
        }
        .info-card:hover { transform: translateY(-5px); border-color: #333; }
        
        .icon-circle {
          width: 50px;
          height: 50px;
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin: 0 auto 20px;
        }
        .info-card h3 { color: white; margin-bottom: 10px; font-size: 1.1rem; }
        .info-card p { color: #10b981; font-weight: 500; margin-bottom: 5px; font-size: 0.95rem; }
        .info-card small { color: #6b7280; font-size: 0.8rem; display: block; margin-top: 10px; }

        /* --- MAIN SPLIT --- */
        .content-split {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        /* --- FORM SECTION --- */
        .form-wrapper {
          background-color: #121212;
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #1f1f1f;
        }
        .form-wrapper h2 { color: #e5e5e5; font-size: 1.5rem; margin-bottom: 10px; }
        .form-desc { color: #6b7280; margin-bottom: 30px; font-size: 0.95rem; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group { margin-bottom: 20px; }
        
        label {
          display: block;
          color: #d4d4d8;
          font-size: 0.85rem;
          margin-bottom: 8px;
          font-weight: 500;
        }
        input, select, textarea {
          width: 100%;
          background-color: #1f1f1f;
          border: 1px solid #333;
          color: white;
          padding: 12px 15px;
          border-radius: 6px;
          outline: none;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        input:focus, select:focus, textarea:focus { border-color: #10b981; }
        
        .submit-btn {
          width: 100%;
          background-color: #10b981;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        .submit-btn:hover { background-color: #059669; }

        /* --- SIDEBAR --- */
        .sidebar-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .sidebar-card {
          border-radius: 12px;
          padding: 30px;
        }

        /* Map Card */
        .map-card {
          background-color: #18181b; /* Slightly lighter grey */
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid #27272a;
        }
        .map-placeholder h3 { color: white; margin: 15px 0 5px; }
        .map-placeholder p { color: #9ca3af; font-size: 0.9rem; }

        /* Guarantee Card (Blue) */
        .guarantee-card {
          background: linear-gradient(135deg, #0ea5e9, #0284c7); /* Sky blue gradient */
          color: white;
        }
        .guarantee-card h3 { font-size: 1.3rem; margin-bottom: 20px; }
        .guarantee-card ul { list-style: none; padding: 0; }
        .guarantee-card li { 
          display: flex; 
          align-items: flex-start; 
          gap: 10px; 
          margin-bottom: 12px; 
          font-size: 0.95rem; 
          line-height: 1.4;
        }
        .check-icon { flex-shrink: 0; margin-top: 3px; }

        /* Emergency Card */
        .emergency-card {
          background-color: #121212;
          border: 1px solid #1f1f1f;
        }
        .emergency-card h3 { color: white; margin-bottom: 10px; font-size: 1.2rem; }
        .emergency-card p { color: #9ca3af; font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5; }
        
        .emergency-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .emergency-label { color: #10b981; font-size: 0.85rem; font-weight: 600; display: block; }
        .emergency-number { color: white; font-size: 1.1rem; }
        
        .status-badge {
          background-color: #f59e0b; /* Amber/Orange */
          color: black;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) {
          .content-split { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Contact;