import React from "react";
// Make sure you have react-icons installed: npm install react-icons
import { FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";

// IMPORT YOUR IMAGES HERE
import imgAndroid from "../images/android-radio.jpg";
import imgJBL from "../images/jbl-subwoofer.jpg";
import imgCamera from "../images/reverse-camera.jpg";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Diamond 2K Android Head Unit (Universal)",
      description: "Universal fit with physical knobs & Bluetooth",
      price: "KSh 14,999", 
      oldPrice: "KSh 17,000",
      discount: "Save 12%",
      rating: 5,
      reviews: 124,
      image: imgAndroid, 
      badge: "Best Seller",
      badgeColor: "#f59e0b", // Orange
      inStock: true,
    },
    {
      id: 2,
      name: "JBL BassPro Underseat Subwoofer",
      description: "Compact deep bass solution",
      price: "KSh 12,000", 
      oldPrice: "KSh 13,000",
      discount: "Save 8%",
      rating: 4.5,
      reviews: 89,
      image: imgJBL,
      badge: "New Arrival",
      badgeColor: "#10b981", // Green
      inStock: true,
    },
    {
      id: 3,
      name: "AHD 1080p Reverse Camera",
      description: "Night vision & waterproof (Universal)",
      price: "KSh 3,500", 
      oldPrice: "KSh 5,000",
      discount: "Save 30%",
      rating: 4.5,
      reviews: 156,
      image: imgCamera,
      badge: "On Offer",
      badgeColor: "#ef4444", // Red
      inStock: true, 
    },
    {
      // --- KEPT AS REQUESTED ---
      id: 4,
      name: "Security System Pro",
      description: "Compatible: All Vehicle Types",
      price: "KSh 35,000",
      oldPrice: "KSh 42,000",
      discount: "Save 17%",
      rating: 4,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      badge: "Complete Package",
      badgeColor: "#0ea5e9", // Blue
      inStock: true,
    },
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < Math.floor(rating) ? "#fbbf24" : "#4b5563"} size={14} />
    ));
  };

  return (
    <section className="featured-products">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p>Top-rated car audio and security systems with verified compatibility</p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            
            {/* Image Section */}
            <div className="image-container">
              <img src={item.image} alt={item.name} className="product-img" />
              {item.badge && (
                <span className="badge" style={{ backgroundColor: item.badgeColor }}>
                  {item.badge}
                </span>
              )}
              {!item.inStock && <div className="out-of-stock-overlay">Out of Stock</div>}
            </div>

            {/* Content Section */}
            <div className="product-info">
              <h3>{item.name}</h3>
              
              <div className="rating-row">
                <div className="stars">{renderStars(item.rating)}</div>
                <span className="reviews">({item.reviews})</span>
              </div>

              <div className="compatibility">
                <FaCheckCircle className="check-icon" />
                <span>{item.description}</span>
              </div>

              <div className="price-row">
                <div className="prices">
                  <span className="current-price">{item.price}</span>
                  <span className="old-price">{item.oldPrice}</span>
                </div>
                {item.discount && <span className="discount-badge">{item.discount}</span>}
              </div>

              <div className="action-buttons">
                <button 
                  className={`btn primary-btn ${!item.inStock ? "disabled" : ""}`}
                  disabled={!item.inStock}
                >
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                <button className="btn secondary-btn">Quick View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <button className="view-all-btn">
          View All Products <FaArrowRight style={{ marginLeft: "8px" }} />
        </button>
      </div>

      <style>{`
        /* Section Layout */
        .featured-products {
          background-color: #0a0a0a;
          color: white;
          padding: 80px 5%;
          font-family: 'Inter', sans-serif;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .featured-products h2 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .featured-products p {
          color: #9ca3af;
          font-size: 1.1rem;
        }

        /* Grid Layout */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        /* Card Styles */
        .product-card {
          background-color: #121212;
          border: 1px solid #27272a;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .product-card:hover {
          border-color: #3f3f46;
          transform: translateY(-5px);
        }

        /* Image Area */
        .image-container {
          position: relative;
          height: 220px; /* Adjusted height slightly for new images */
          width: 100%;
          background: #fff; /* White background better for product shots */
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Changed to contain so the whole box/radio fits */
          padding: 10px; /* Add padding so product isn't touching edges */
        }

        .badge {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Out of Stock Overlay */
        .out-of-stock-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid #ef4444;
          color: #ef4444;
          background: rgba(0,0,0,0.7);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        /* Info Body */
        .product-info {
          padding: 20px;
        }

        .product-info h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: #e5e7eb;
          font-weight: 500;
        }

        /* Ratings */
        .rating-row {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }

        .stars {
          display: flex;
          gap: 2px;
          margin-right: 8px;
        }

        .reviews {
          color: #9ca3af;
          font-size: 0.85rem;
        }

        /* Compatibility */
        .compatibility {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .check-icon {
          color: #00c26f;
        }

        /* Pricing */
        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .current-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #00c26f;
          margin-right: 10px;
        }

        .old-price {
          font-size: 0.9rem;
          color: #6b7280;
          text-decoration: line-through;
        }

        .discount-badge {
          background-color: #ef4444;
          color: white;
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        /* Buttons */
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.95rem;
        }

        .primary-btn {
          background-color: #00c26f;
          border: none;
          color: white;
        }

        .primary-btn:hover {
          background-color: #00a65c;
        }

        .primary-btn.disabled {
          background-color: #3f3f46;
          color: #9ca3af;
          cursor: not-allowed;
        }

        .secondary-btn {
          background-color: white;
          border: none;
          color: #121212;
        }

        .secondary-btn:hover {
          background-color: #f3f4f6;
        }

        /* View All Button (Bottom) */
        .view-all-container {
          display: flex;
          justify-content: center;
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          background-color: white;
          color: #00c26f;
          border: 1px solid white;
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-all-btn:hover {
          background-color: #f0fdf4;
        }

        @media (max-width: 768px) {
          .featured-products {
            padding: 50px 20px;
          }
          
          .featured-products h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

export default FeaturedProducts;