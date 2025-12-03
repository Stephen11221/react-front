import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Kamau",
      location: "Westlands, Nairobi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      review:
        "Excellent service! My Toyota Voxy sounds amazing now. The team was professional and completed the installation in just 2 hours.",
      tag: "Car Audio Installation",
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      location: "Karen, Nairobi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      review:
        "Their cybersecurity assessment saved our business from a potential breach. Highly recommend their services!",
      tag: "Cybersecurity Solutions",
    },
    {
      id: 3,
      name: "David Ochieng",
      location: "Kilimani, Nairobi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      review:
        "The website they built for our restaurant increased our online orders by 300%. Great work!",
      tag: "Web Development",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from satisfied customers across Nairobi</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              {/* Profile Header */}
              <div className="profile">
                <img src={r.image} alt={r.name} className="avatar" />
                <div className="profile-info">
                  <div className="name-row">
                    <span className="name">{r.name}</span>
                    <FaCheckCircle className="verified-icon" />
                  </div>
                  <span className="location">{r.location}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="stars">
                {[...Array(r.rating)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>

              {/* Review Text */}
              <p className="review-text">"{r.review}"</p>

              {/* Tag */}
              <div className="tag-container">
                <span className="tag">{r.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: #0d0d0d; /* Deep black background */
          color: white;
          padding: 100px 5%;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .section-header p {
          color: #9ca3af; /* Gray text */
          font-size: 1.1rem;
        }

        /* Grid Layout */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        /* Card Styles */
        .review-card {
          background-color: #111; /* Slightly lighter than bg */
          border: 1px solid #27272a; /* Subtle border */
          border-radius: 12px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          border-color: #3f3f46;
        }

        /* Profile Area */
        .profile {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 15px;
          border: 1px solid #333;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
        }

        .name-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .name {
          font-weight: 600;
          font-size: 1.1rem;
          color: white;
        }

        .verified-icon {
          color: #10b981; /* Brand Green */
          font-size: 0.9rem;
        }

        .location {
          color: #9ca3af;
          font-size: 0.85rem;
          margin-top: 2px;
        }

        /* Stars */
        .stars {
          color: #fbbf24; /* Amber/Gold color */
          margin-bottom: 15px;
          font-size: 1rem;
          display: flex;
          gap: 2px;
        }

        /* Review Content */
        .review-text {
          color: #d4d4d8; /* Light gray */
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 0.95rem;
          flex-grow: 1;
        }

        /* Tag Styling */
        .tag-container {
          margin-top: auto;
        }

        .tag {
          display: inline-block;
          background-color: rgba(16, 185, 129, 0.15); /* Transparent Green */
          color: #10b981; /* Bright Green Text */
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 20px;
          }
          .section-header h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
