import React from "react";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Pioneer Car Stereo",
      description: "High-performance stereo with Bluetooth and crisp sound.",
      price: "KSh 18,500",
      image: "https://via.placeholder.com/300x200?text=Pioneer+Stereo",
    },
    {
      id: 2,
      name: "JBL Subwoofer",
      description: "Powerful bass for a complete car audio experience.",
      price: "KSh 25,000",
      image: "https://via.placeholder.com/300x200?text=JBL+Subwoofer",
    },
    {
      id: 3,
      name: "Sony Amplifier",
      description: "Boost your sound clarity and volume effortlessly.",
      price: "KSh 14,999",
      image: "https://via.placeholder.com/300x200?text=Sony+Amplifier",
    },
    {
      id: 4,
      name: "Kenwood Speakers",
      description: "Premium 4-way speakers for crystal clear sound.",
      price: "KSh 12,300",
      image: "https://via.placeholder.com/300x200?text=Kenwood+Speakers",
    },
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
              <button className="buy-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Inbuilt CSS */}
      <style>{`
        .featured-products {
          background-color: #0a0a0a;
          color: white;
          text-align: center;
          padding: 80px 40px;
        }

        .featured-products h2 {
          font-size: 2rem;
          color: #00c26f;
          margin-bottom: 50px;
          font-weight: 600;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          justify-items: center;
        }

        .product-card {
          background-color: #111;
          border-radius: 12px;
          overflow: hidden;
          width: 280px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .product-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .product-info {
          padding: 20px;
        }

        .product-info h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: #fff;
        }

        .product-info p {
          font-size: 0.9rem;
          color: #ccc;
          margin-bottom: 10px;
        }

        .price {
          display: block;
          font-weight: bold;
          color: #00c26f;
          margin-bottom: 12px;
        }

        .buy-btn {
          background-color: #00c26f;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s;
        }

        .buy-btn:hover {
          background-color: #00a65c;
        }

        @media (max-width: 768px) {
          .featured-products {
            padding: 50px 20px;
          }

          .product-card {
            width: 100%;
            max-width: 340px;
          }
        }
      `}</style>
    </section>
  );
}

export default FeaturedProducts;
