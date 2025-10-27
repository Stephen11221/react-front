import React, { useState, useEffect } from "react";
import { FaCarSide, FaSmile, FaAward } from "react-icons/fa";
import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpeg";

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

  // Animate numbers
  useEffect(() => {
    if (!animateStats) return;
    const targets = { cars: 1200, satisfaction: 98, years: 5 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentCounts = { cars: 0, satisfaction: 0, years: 0 };

    const timer = setInterval(() => {
      currentCounts.cars = Math.min(currentCounts.cars + targets.cars / steps, targets.cars);
      currentCounts.satisfaction = Math.min(currentCounts.satisfaction + targets.satisfaction / steps, targets.satisfaction);
      currentCounts.years = Math.min(currentCounts.years + targets.years / steps, targets.years);
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

      {/* === STATS SECTION === */}
      <section className="stats-section">
        <div className="stat-card">
          <FaCarSide className="stat-icon" />
          <h2>{Math.round(counts.cars)}+</h2>
          <p>Cars Upgraded</p>
        </div>

        <div className="stat-card">
          <FaSmile className="stat-icon" />
          <h2>{Math.round(counts.satisfaction)}%</h2>
          <p>Customer Satisfaction</p>
        </div>

        <div className="stat-card">
          <FaAward className="stat-icon" />
          <h2>{Math.round(counts.years)}</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* === INBUILT CSS === */}
      <style>{`
        /* HERO SECTION */
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

        /* === STATS SECTION === */
        .stats-section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 100px;
          padding: 80px 20px;
          background-color: #0a0a0a;
          color: white;
          flex-wrap: wrap;
        }

        .stat-card {
          text-align: center;
          transition: transform 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px);
        }

        .stat-icon {
          font-size: 2.5rem;
          color: #00c26f;
          margin-bottom: 10px;
        }

        .stat-card h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #00c26f;
          margin: 10px 0;
        }

        .stat-card p {
          font-size: 1.1rem;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .stats-section {
            gap: 60px;
            padding: 60px 10px;
          }

          .stat-card h2 {
            font-size: 1.6rem;
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
