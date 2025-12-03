import React from "react";
import { FaSearch } from "react-icons/fa";

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="badge">News & Media</div>
      
      <h1>
        Technology <span className="highlight">Insights</span> & News
      </h1>
      
      <p className="subtitle">
        Stay informed with the latest trends in car audio, cybersecurity, web development, 
        and digital marketing. Expert insights and practical guides for the Kenyan market.
      </p>

      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search articles..." />
      </div>

      <style>{`
        .top-section {
            text-align: center;
            padding: 80px 20px 60px;
            background: #0c0c0c;
        }
        .badge {
            display: inline-block;
            background: #1e293b;
            color: #38bdf8;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 20px;
            border: 1px solid #0f3649;
        }
        h1 {
            font-size: 3.5rem;
            color: white;
            margin-bottom: 20px;
            font-weight: 500;
        }
        .highlight {
            color: #38bdf8; /* Cyan Blue */
        }
        .subtitle {
            color: #9ca3af;
            max-width: 700px;
            margin: 0 auto 40px;
            line-height: 1.6;
            font-size: 1.1rem;
        }
        .search-wrapper {
            position: relative;
            max-width: 500px;
            margin: 0 auto;
        }
        .search-wrapper input {
            width: 100%;
            background: #18181b;
            border: 1px solid #27272a;
            padding: 14px 20px 14px 45px;
            border-radius: 8px;
            color: white;
            font-size: 1rem;
            outline: none;
        }
        .search-wrapper input:focus { border-color: #38bdf8; }
        .search-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #6b7280;
        }

        @media(max-width: 768px) {
            h1 { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default TopSection;