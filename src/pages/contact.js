import React, { useState } from 'react';
import Footer from '../components/footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p className="header-description">
            Ready to transform your business? We're here to help. Contact us today for a free consultation and personalized quote.
          </p>
          <div className="divider"></div>
        </div>

        <div className="contact-content">
          {/* Info Section */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+254 712 345 678</p>
                <p>+254 733 456 789</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@audioptine.co.ke</p>
                <p>support@audioptine.co.ke</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Nairobi CBD</p>
                <p>Tom Mboya Street</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h3>Working Hours</h3>
                <p>Mon - Fri: 5:00 AM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="privacy-notice">
              <p>Do not share personal information.</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+254 XXX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell us your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

        <Footer/>
      {/* 🔥 DARK MODE DEFAULT */}
      <style jsx>{`
        /* =========================================================
           DARK MODE (DEFAULT)
        ========================================================= */
        .contact-section {
          background: #0e0e0e;
          color: #e0e0e0;
          padding: 60px 20px;
          font-family: system-ui, sans-serif;
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
        }

        .contact-header h1 {
          font-size: 42px;
          font-weight: 700;
          text-align: center;
        }

        .header-description {
          max-width: 600px;
          text-align: center;
          margin: auto;
          color: #bdbdbd;
          font-size: 16px;
        }

        .divider {
          height: 2px;
          max-width: 180px;
          margin: 15px auto;
          background: #fff;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 50px;
          margin-top: 40px;
        }

        .contact-item {
          display: flex;
          gap: 16px;
        }

        .contact-icon {
          background: #1b1b1b;
          padding: 12px;
          border-radius: 8px;
          color: #ececec;
        }

        .contact-form-section {
          background: #1a1a1a;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #333;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group input,
        .form-group textarea {
          background: #111;
          color: #fff;
          border: 2px solid #444;
          padding: 12px;
          border-radius: 8px;
          transition: border 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #007bff; /* Highlight border on focus */
          outline: none; /* Remove default outline */
        }

        .submit-btn {
          background: #007bff; /* Bootstrap primary color */
          color: #fff;
          padding: 14px 28px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s; /* Smooth transitions */
        }

        .submit-btn:hover {
          background: #0056b3; /* Darker shade on hover */
          transform: scale(1.05); /* Slightly enlarge on hover */
        }

        .privacy-notice {
          margin-top: 20px; /* Space above privacy notice */
          font-size: 14px; /* Smaller font size */
          color: #bdbdbd; /* Lighter color */
          text-align: center; /* Centered text */
        }

        /* =========================================================
           LIGHT MODE (ONLY WHEN body.light is present)
        ========================================================= */
        body.light .contact-section {
          background: #ffffff;
          color: #111;
        }

        body.light .header-description {
          color: #555;
        }

        body.light .divider {
          background: #000;
        }

        body.light .contact-icon {
          background: #f0f0f0;
          color: #111;
        }

        body.light .contact-form-section {
          background: #f8f9fa;
          border: none;
        }

        body.light .form-group input,
        body.light .form-group textarea {
          background: #fff;
          color: #000;
          border: 2px solid #ddd;
        }

        body.light .submit-btn {
          background: #000;
          color: #fff;
        }

        body.light .submit-btn:hover {
          background: #333;
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */
        @media (max-width: 900px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;