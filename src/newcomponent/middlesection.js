import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const MiddleSection = () => {
  return (
    <div className="featured-wrapper">
      <div className="featured-card">
        {/* Left Image */}
        <div className="featured-image">
            <span className="featured-tag">Featured</span>
            <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop" 
                alt="AI in Car Audio" 
            />
        </div>

        {/* Right Content */}
        <div className="featured-content">
            <span className="category-badge">Car Audio</span>
            <h2>The Future of Car Audio: AI-Powered Sound Systems in 2024</h2>
            <p>
                Explore how artificial intelligence is revolutionizing car audio systems, 
                from personalized sound profiles to voice-controlled interfaces that 
                understand your preferences.
            </p>
            
            <div className="author-meta">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Author" className="author-img" />
                <div className="meta-text">
                    <span className="author-name">James Mutua</span>
                    <div className="date-time">
                        <span><FaCalendarAlt size={12}/> 10 March 2024</span>
                        <span><FaClock size={12}/> 8 min read</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        .featured-wrapper {
            margin-bottom: 60px;
        }
        .featured-card {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            background: #121212;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #27272a;
        }
        .featured-image {
            position: relative;
            height: 100%;
            min-height: 350px;
        }
        .featured-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .featured-tag {
            position: absolute;
            top: 20px;
            left: 20px;
            background: #f59e0b; /* Orange */
            color: black;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
        }
        .featured-content {
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .category-badge {
            color: #10b981;
            background: rgba(16, 185, 129, 0.1);
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.8rem;
            width: fit-content;
            margin-bottom: 15px;
        }
        .featured-content h2 {
            font-size: 2rem;
            margin-bottom: 15px;
            line-height: 1.2;
            color: white;
        }
        .featured-content p {
            color: #9ca3af;
            margin-bottom: 30px;
            line-height: 1.6;
        }
        .author-meta {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .author-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
        .meta-text {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .author-name {
            color: white;
            font-weight: 600;
            font-size: 0.95rem;
        }
        .date-time {
            color: #6b7280;
            font-size: 0.8rem;
            display: flex;
            gap: 15px;
        }
        .date-time span { display: flex; align-items: center; gap: 5px; }

        @media(max-width: 900px) {
            .featured-card { grid-template-columns: 1fr; }
            .featured-image { height: 250px; min-height: auto; }
            .featured-content { padding: 25px; }
            .featured-content h2 { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default MiddleSection;
