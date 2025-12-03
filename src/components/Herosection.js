import React, { useState, useEffect } from "react";
import { FaCarSide, FaSmile, FaAward, FaClock } from "react-icons/fa";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";

function HeroSection() {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);
  const [counts, setCounts] = useState({
    cars: 0,
    satisfaction: 0,
    years: 0,
  });

  // Auto change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Trigger animation after 30 seconds
  useEffect(() => {
    const delay = setTimeout(() => setAnimateStats(true), 30000);
    return () => clearTimeout(delay);
  }, []);

  // === YOUR UPDATED ANIMATION LOGIC ===
  useEffect(() => {
    if (!animateStats) return;
    const targets = { cars: 1200, satisfaction: 98, years: 5 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentCounts = { cars: 0, satisfaction: 0, years: 0 };

    const timer = setInterval(() => {
      currentCounts.cars = Math.min(
        currentCounts.cars + targets.cars / steps,
        targets.cars
      );
      currentCounts.satisfaction = Math.min(
        currentCounts.satisfaction + targets.satisfaction / steps,
        targets.satisfaction
      );
      currentCounts.years = Math.min(
        currentCounts.years + targets.years / steps,
        targets.years
      );
      setCounts({ ...currentCounts });

      if (
        currentCounts.cars >= targets.cars &&
        currentCounts.satisfaction >= targets.satisfaction &&
        currentCounts.years >= targets.years
      ) {
        clearInterval(timer);
      }
    }, interval);
  }, [animateStats]);


  return (
    <>
      {/* === HERO SECTION === */}
      <section className="hero-section">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          >
            <div className="hero-overlay">
              <h1>Experience Premium Sound</h1>
              <p>Upgrade your ride with Audiopine car audio systems.</p>
              <button className="hero-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </section>

      {/* === UPDATED STATS SECTION === */}
      <section className="stats-section">
        <div className="stats-container">
          
          {/* Card 1 */}
          <div className="stat-card">
            <div className="icon-circle">
              <FaCarSide className="stat-icon" />
            </div>
            <h2>{Math.round(counts.cars).toLocaleString()}+</h2>
            <p>Cars Upgraded</p>
          </div>

          {/* Card 2 */}
          <div className="stat-card">
            <div className="icon-circle">
              <FaSmile className="stat-icon" />
            </div>
            <h2>{Math.round(counts.satisfaction)}%</h2>
            <p>Customer Satisfaction</p>
          </div>

          {/* Card 3 */}
          <div className="stat-card">
            <div className="icon-circle">
              <FaAward className="stat-icon" />
            </div>
            <h2>{Math.round(counts.years)} Years</h2>
            <p>Experience</p>
          </div>

          {/* Card 4 (New) */}
          <div className="stat-card">
            <div className="icon-circle">
              <FaClock className="stat-icon" />
            </div>
            <h2>24/7</h2>
            <p>Support Available</p>
          </div>

        </div>
      </section>
      {/* === INBUILT CSS === */}
      <style>{`
          .hero-section {
          position: relative;
          width: 100%;
          height: 70vh;
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 70vh;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
        }

        .hero-overlay h1 {
          font-size: 3rem;
          color: #00c26f;
          margin-bottom: 15px;
        }

        .hero-overlay p {
          font-size: 1.2rem;
          margin-bottom: 25px;
        }

        .hero-btn {
          background-color: #00c26f;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-size: 1rem;
          color: white;
          cursor: pointer;
          transition: background 0.3s;
        }

        .hero-btn:hover {
          background-color: #00a65c;
        }

        /* === NEW STATS SECTION DESIGNS === */
          .stats-container {
          display: flex;
          justify-content: space-evenly; /* Evenly spaces the 4 items */
          align-items: flex-start;
          padding: 80px 5%;
          background-color: #121212; /* Dark background per screenshot */
          color: white;
          flex-wrap: wrap; /* Allows stacking on mobile */
          gap: 40px;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 180px;
          transition: transform 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        /* The Green Circle behind the icon */
        .icon-circle {
          width: 70px;
          height: 70px;
          background-color: rgba(0, 194, 111, 0.15); /* Transparent Brand Green */
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .stat-icon {
          font-size: 1.8rem;
          color: #00c26f; /* Bright Green Icon */
        }

        .stat-card h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff; /* White numbers per screenshot */
          margin: 0 0 10px 0;
        }

        .stat-card p {
          font-size: 1rem;
          color: #9ca3af; /* Light Gray text per screenshot */
          margin: 0;
          font-weight: 400;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .stats-section {
            flex-direction: column;
            align-items: center;
            gap: 50px;
            padding: 60px 20px;
          }

          .hero-overlay h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
