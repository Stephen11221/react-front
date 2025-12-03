import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUserFriends, FaStar, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../components/footer";

const Community = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');

  const filters = ['All Events', 'Workshops', 'Special Offers', 'Product Launches', 'Training Sessions'];

  // Event Data with Unsplash Images
  const events = [
    {
      id: 1,
      title: "Car Audio Installation Workshop",
      image: "https://images.unsplash.com/photo-1764122623556-90a7d480df53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FyJTIwQXVkaW8lMjBJbnN0YWxsYXRpb24lMjBXb3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
      date: "15 March 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Audiopine HQ, Westlands",
      spots: "8 of 15 spots left",
      price: "KSh 2,500",
      tag: "Limited Spots",
      tagColor: "#ef4444" // Red
    },
    {
      id: 2,
      title: "Cybersecurity for SMEs Seminar",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      date: "22 March 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Kempinski Hotel, Nairobi",
      spots: "23 of 50 spots left",
      price: "Free",
      tag: "Free Event",
      tagColor: "#10b981" // Green
    },
    {
      id: 3,
      title: "Pioneer 2024 Series Launch",
      image: "https://plus.unsplash.com/premium_photo-1682124695333-87554f316a01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGlvbmVlcnxlbnwwfHwwfHx8MA%3D%3D",
      date: "28 March 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Villa Rosa Kempinski",
      spots: "45 of 100 spots left",
      price: "Invitation Only",
      tag: "Exclusive",
      tagColor: "#8b5cf6" // Purple
    },
    {
      id: 4,
      title: "March Mega Sale - Up to 40% Off",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
      date: "1 March 2024",
      time: "All Month",
      location: "All Audiopine Locations",
      spots: "Unlimited",
      price: "Special Pricing",
      tag: "Best Deal",
      tagColor: "#f59e0b" // Orange
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      date: "5 April 2024",
      time: "9:00 AM - 5:00 PM",
      location: "iHub, Nairobi",
      spots: "12 of 25 spots left",
      price: "KSh 8,000",
      tag: "Intensive",
      tagColor: "#3b82f6" // Blue
    },
    {
      id: 6,
      title: "Digital Marketing Masterclass",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
      date: "12 April 2024",
      time: "1:00 PM - 6:00 PM",
      location: "Strathmore Business School",
      spots: "18 of 40 spots left",
      price: "KSh 5,000",
      tag: "Popular",
      tagColor: "#64748b" // Grey
    }
  ];

  // Highlights Data
  const highlights = [
    { id: 1, title: "JBL Sound Experience", date: "15/02/2024", attendees: 85, rating: 4.8, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop" },
    { id: 2, title: "Cybersecurity Awareness", date: "20/01/2024", attendees: 120, rating: 4.9, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop" },
    { id: 3, title: "New Year Tech Trends", date: "10/01/2024", attendees: 95, rating: 4.7, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <div className="community-page">
      
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">Community Events & Offers</div>
          <h1>Join Our <span className="text-orange">Community</span> Events</h1>
          <p className="hero-desc">
            Connect with fellow tech enthusiasts, learn new skills, and discover exclusive offers 
            on the latest car audio and technology solutions. Be part of Kenya's growing tech community.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">View Upcoming Events</button>
            <button className="btn-outline">Subscribe to Updates</button>
          </div>

          <div className="filter-bar">
            {filters.map((filter) => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* === UPCOMING EVENTS GRID === */}
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events & Offers</h2>
          
          <div className="events-grid">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="card-image-wrapper">
                  <img src={event.image} alt={event.title} />
                  <span className="card-tag" style={{ backgroundColor: event.tagColor }}>{event.tag}</span>
                </div>
                <div className="card-body">
                  <h3>{event.title}</h3>
                  <ul className="event-meta">
                    <li><FaCalendarAlt className="icon" /> {event.date}</li>
                    <li><FaClock className="icon" /> {event.time}</li>
                    <li><FaMapMarkerAlt className="icon" /> {event.location}</li>
                    <li><FaUserFriends className="icon" /> {event.spots}</li>
                  </ul>
                  
                  <ul className="benefits-list">
                    <li>• Hands-on practice & networking</li>
                    <li>• Certificate of completion</li>
                  </ul>

                  <div className="card-footer">
                    <span className="price">{event.price}</span>
                    <button className="register-btn">Register Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === HIGHLIGHTS SECTION === */}
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title center">Recent Event Highlights</h2>
          <p className="section-sub center">See what our community has been up to and the impact we're making together</p>
          
          <div className="highlights-grid">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="highlight-info">
                  <div className="highlight-row">
                    <h4>{item.title}</h4>
                    <span>{item.attendees} attendees</span>
                  </div>
                  <div className="highlight-date">{item.date}</div>
                  <div className="highlight-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => <FaStar key={i} color="#fbbf24" size={12}/>)}
                    </div>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === REGISTRATION FORM === */}
      <section className="form-section">
        <div className="container form-container">
          <h2 className="center text-white">Register for Events</h2>
          <p className="center text-gray">Ready to join us? Fill out the form below to register for upcoming events or get notified about special offers.</p>
          
          <form className="event-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="+254 700 123 456" />
            </div>

            <div className="form-group">
              <label>Interested Event</label>
              <select>
                <option>Select an event</option>
                <option>Car Audio Installation Workshop</option>
                <option>Cybersecurity Seminar</option>
              </select>
            </div>

            <div className="form-group">
              <label>Additional Information</label>
              <textarea rows="4" placeholder="Any special requirements or questions..."></textarea>
            </div>

            <button className="submit-btn">Register Now</button>
          </form>

          <div className="form-footer-contact">
            <p>Need help or have questions?</p>
            <div className="contact-links">
              <span><FaPhoneAlt className="icon-orange" /> +254 700 123 456</span>
              <span><FaEnvelope className="icon-orange" /> events@audiopine.co.ke</span>
            </div>
          </div>
        </div>
      </section>

      {/* === NEWSLETTER BANNER (Green Background) === */}
      <section className="newsletter-banner">
        <div className="container">
          <h2>Never Miss an Event</h2>
          <p>Subscribe to our community newsletter and be the first to know about upcoming events, exclusive offers, and tech insights.</p>
          <div className="newsletter-input-group">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />

      {/* === STYLES === */}
      <style>{`
        /* Global & Reset */
        .community-page {
          background-color: #0c0c0c;
          color: #e5e5e5;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .text-orange { color: #f59e0b; }
        .text-white { color: white; }
        .text-gray { color: #9ca3af; }
        .center { text-align: center; }
        .icon { margin-right: 8px; color: #6b7280; }
        .icon-orange { margin-right: 8px; color: #f59e0b; }

        /* Hero Section */
        .hero-section {
          padding: 80px 0 60px;
          background-color: #121212;
          text-align: center;
          border-bottom: 1px solid #1f1f1f;
        }
        .hero-badge {
          display: inline-block;
          background: #27272a;
          color: #f59e0b;
          border: 1px solid #f59e0b;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .hero-section h1 { font-size: 3rem; color: white; margin-bottom: 20px; }
        .hero-desc { max-width: 700px; margin: 0 auto 30px; color: #9ca3af; line-height: 1.6; }
        
        .hero-buttons { display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; }
        .btn-primary {
          background-color: #f59e0b;
          color: black;
          border: none;
          padding: 12px 25px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-primary:hover { background-color: #d97706; }
        .btn-outline {
          background: white;
          color: black;
          border: none;
          padding: 12px 25px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-outline:hover { background-color: #e5e5e5; }

        /* Filter Bar */
        .filter-bar { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .filter-btn {
          background: #1f1f1f;
          color: #9ca3af;
          border: 1px solid #333;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.2s;
        }
        .filter-btn:hover { color: white; border-color: #555; }
        .filter-btn.active { background: #f59e0b; color: black; border-color: #f59e0b; font-weight: 600; }

        /* Events Section */
        .events-section { padding: 60px 0; }
        .section-title { font-size: 2rem; color: white; margin-bottom: 10px; }
        .section-sub { color: #9ca3af; margin-bottom: 40px; }
        
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        /* Event Card */
        .event-card {
          background-color: #121212;
          border: 1px solid #27272a;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;
        }
        .event-card:hover { transform: translateY(-5px); border-color: #f59e0b; }
        
        .card-image-wrapper { position: relative; height: 200px; }
        .card-image-wrapper img { width: 100%; height: 100%; object-fit: cover; }
        .card-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          color: white;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .card-body { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .card-body h3 { color: white; font-size: 1.25rem; margin-bottom: 15px; }
        
        .event-meta { list-style: none; padding: 0; margin-bottom: 15px; }
        .event-meta li { color: #9ca3af; font-size: 0.9rem; margin-bottom: 8px; display: flex; align-items: center; }
        
        .benefits-list { list-style: none; padding: 0; margin-bottom: 20px; font-size: 0.85rem; color: #6b7280; }
        
        .card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #27272a;
          padding-top: 15px;
        }
        .price { color: #f59e0b; font-weight: 700; font-size: 1.1rem; }
        .register-btn {
          background: #f59e0b;
          color: black;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
        }
        .register-btn:hover { background: #d97706; }

        /* Highlights Section */
        .highlights-section { padding: 40px 0 80px; }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .highlight-card {
          background-color: #121212;
          border: 1px solid #27272a;
          border-radius: 8px;
          overflow: hidden;
        }
        .highlight-card img { width: 100%; height: 150px; object-fit: cover; }
        .highlight-info { padding: 15px; }
        .highlight-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; }
        .highlight-row h4 { color: white; font-size: 1rem; margin: 0; }
        .highlight-row span { color: #9ca3af; font-size: 0.8rem; }
        .highlight-date { color: #6b7280; font-size: 0.8rem; margin-bottom: 10px; }
        .highlight-rating { display: flex; align-items: center; gap: 5px; color: #d1d5db; font-size: 0.8rem; }

        /* Form Section */
        .form-section { padding: 60px 0; background-color: #0c0c0c; }
        .form-container {
          background-color: #121212; /* Dark card bg */
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #27272a;
          max-width: 700px;
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; color: #d1d5db; margin-bottom: 8px; font-size: 0.9rem; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          background: #1a1a1a;
          border: 1px solid #333;
          padding: 12px;
          border-radius: 6px;
          color: white;
          outline: none;
        }
        .form-group input:focus { border-color: #f59e0b; }
        
        .submit-btn {
          width: 100%;
          background: #f59e0b;
          color: black;
          border: none;
          padding: 14px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
        }
        
        .form-footer-contact { text-align: center; margin-top: 30px; border-top: 1px solid #27272a; padding-top: 20px; }
        .form-footer-contact p { color: #6b7280; margin-bottom: 10px; }
        .contact-links { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; color: #d1d5db; font-size: 0.9rem; }

        /* Newsletter Banner */
        .newsletter-banner {
          background: linear-gradient(to right, #1a2e05, #0f1c03); /* Dark green gradient */
          padding: 80px 20px;
          text-align: center;
          color: white;
        }
        .newsletter-banner h2 { font-size: 2.2rem; margin-bottom: 15px; }
        .newsletter-banner p { max-width: 600px; margin: 0 auto 30px; color: #d1d5db; line-height: 1.6; }
        .newsletter-input-group {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .newsletter-input-group input {
          width: 350px;
          padding: 14px 20px;
          border-radius: 6px;
          border: none;
          outline: none;
        }
        .newsletter-input-group button {
          background: #f59e0b;
          color: black;
          border: none;
          padding: 14px 30px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-section h1 { font-size: 2.2rem; }
          .form-row { grid-template-columns: 1fr; }
          .newsletter-input-group input { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Community;