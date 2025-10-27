import React from "react";

const FreeGuide = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! The guide will be sent to your email.");
  };

  return (
    <>
      <style>
        {`
        .free-guide-section {
          background: linear-gradient(to right, #043a2a, #002e33);
          color: #ffffff;
          text-align: center;
          padding: 80px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .free-guide-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .free-guide-subtitle {
          font-size: 1.1rem;
          color: #d9d9d9;
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .free-guide-form {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .free-guide-input {
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          outline: none;
          font-size: 1rem;
          width: 280px;
          max-width: 90%;
        }

        .free-guide-button {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          background-color: #00c36f;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .free-guide-button:hover {
          background-color: #00a95f;
        }

        .free-guide-note {
          color: #aaa;
          font-size: 0.9rem;
        }
        `}
      </style>

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
