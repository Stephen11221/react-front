import React, { useState } from "react";
import TopSection from "../newcomponent/topsection";
import MiddleSection from "../newcomponent/middlesection";
import BottomSection from "../newcomponent/bottomsection";
import Footer from "../components/footer";

export default function News() {
  return (
    <div className="news-page">
      <TopSection />
      <div className="container">
        <MiddleSection />
        <BottomSection />
      </div>
      
      {/* Contribution Banner */}
      <div className="contribution-banner">
        <div className="container">
            <h2>Want to Contribute?</h2>
            <p>Share your expertise with our community. We're always looking for quality content from industry professionals and enthusiasts.</p>
            <div className="contrib-actions">
                <button className="btn-primary">Submit Article</button>
                <button className="btn-outline">Contact Editor</button>
            </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .news-page {
          background-color: #0c0c0c;
          color: #e5e5e5;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Contribution Banner */
        .contribution-banner {
            background: linear-gradient(to right, #032b23, #021a16);
            padding: 80px 20px;
            text-align: center;
            margin-top: 80px;
            border-top: 1px solid #1f2937;
        }
        .contribution-banner h2 { font-size: 2.2rem; color: white; margin-bottom: 15px; }
        .contribution-banner p { color: #9ca3af; max-width: 600px; margin: 0 auto 30px; line-height: 1.6; }
        
        .contrib-actions { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;}
        .btn-primary {
            background-color: #0ea5e9; /* Light Blue from screenshot */
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
        }
        .btn-primary:hover { background-color: #0284c7; }

        .btn-outline {
            background: white;
            color: black;
            border: none;
            padding: 12px 30px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
        }
        .btn-outline:hover { background: #f3f4f6; }

      `}</style>
    </div>
  );
}
