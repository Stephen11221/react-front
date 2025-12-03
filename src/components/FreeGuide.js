import React from "react";
// Import icons for the brands (using generic icons to represent the logos)
import { FaMusic, FaVolumeUp, FaBroadcastTower, FaMobileAlt, FaMountain, FaItunesNote } from "react-icons/fa";

const FreeGuide = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! The guide will be sent to your email.");
  };

  const brands = [
    { name: "Pioneer", icon: <FaMusic /> },
    { name: "JBL", icon: <FaVolumeUp /> },
    { name: "Kenwood", icon: <FaBroadcastTower /> },
    { name: "Sony", icon: <FaMobileAlt /> },
    { name: "Alpine", icon: <FaMountain /> },
    { name: "Clarion", icon: <FaItunesNote /> },
  ];

  return (
    <>
      {/* === CSS STYLES === */}
      <style>
        {`
        /* --- BRANDS SECTION --- */
        .brands-section {
          background-color: #121212; /* Dark background */
          padding: 40px 20px;
          text-align: center;
          border-bottom: 1px solid #1f2937;
        }

        .brands-title {
          color: #e5e7eb;
          font-size: 1.1rem;
          margin-bottom: 25px;
          font-weight: 400;
        }

        .brands-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .brand-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6b7280; /* Muted gray text */
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        .brand-item:hover {
          color: #00c36f; /* Green on hover */
        }

        .brand-icon {
          font-size: 1.2rem;
        }

        /* --- FREE GUIDE SECTION --- */
        .free-guide-section {
          /* Deep Teal Gradient */
          background: linear-gradient(to bottom, #063c33, #03221e); 
          color: #ffffff;
          text-align: center;
          padding: 100px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .free-guide-title {
          font-size: 2.5rem;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .free-guide-subtitle {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .free-guide-form {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .free-guide-input {
          padding: 14px 20px;
          border-radius: 6px;
          border: none;
          outline: none;
          font-size: 1rem;
          width: 350px;
          max-width: 90%;
        }

        .free-guide-button {
          padding: 14px 30px;
          border: none;
          border-radius: 6px;
          background-color: #00c36f;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .free-guide-button:hover {
          background-color: #00a95f;
        }

        .free-guide-note {
          color: #64748b;
          font-size: 0.9rem;
          margin-top: 15px;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
           .brands-grid {
             gap: 20px;
           }
           .free-guide-title {
             font-size: 2rem;
           }
        }
        `}
      </style>

      {/* === PART 1: TRUSTED BRANDS === */}
      <section className="brands-section">
        <h3 className="brands-title">Trusted Brands We Work With</h3>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <span className="brand-icon">{brand.icon}</span>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === PART 2: FREE GUIDE === */}
      <section className="free-guide-section">
        <h2 className="free-guide-title">Get Your Free Car Audio Guide</h2>
        <p className="free-guide-subtitle">
          Download our comprehensive guide to upgrading your car's audio system.
          Plus, get exclusive offers and installation tips.
        </p>

        <form className="free-guide-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="free-guide-input"
          />
          <button type="submit" className="free-guide-button">
            Get Free Guide
          </button>
        </form>

        <p className="free-guide-note">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </section>
    </>
  );
};

export default FreeGuide;
