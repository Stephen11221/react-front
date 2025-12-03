import React, { useState, useEffect } from 'react';
import { FaStar, FaSearch, FaList, FaTh, FaCheckCircle, FaBolt, FaCar } from 'react-icons/fa';
import Footer from "../components/footer";

const CarAudioShop = () => {
  // === STATE MANAGEMENT ===
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(100000); // Visual slider state

  // === MOCK DATA (Replace this with Axios call later) ===
  useEffect(() => {
    // TODO: When backend is ready:
    // axios.get('http://localhost:8000/api/products').then(res => setProducts(res.data));
    
    // For now, use static data  
    const mockData = [
      {
        id: 1,
        name: 'Kenwood KFC-1696PS Component Speakers',
        category: 'speakers',
        rating: 5,
        reviews: 156,
        price: 12500,
        oldPrice: 15000,
        discount: 17,
        compatibility: 'Most Toyota, Nissan Models +more',
        badges: ['Special Offer', 'High Quality'],
        badgeColors: ['#ef4444', '#0ea5e9'], // Red, Blue
        inStock: false,
        image: null // Placeholder
      },
      {
        id: 2,
        name: 'JBL GTO609C Component System',
        category: 'speakers',
        rating: 4.5,
        reviews: 143,
        price: 15800,
        oldPrice: null,
        discount: null,
        compatibility: 'Most Toyota, Most Nissan +more',
        badges: ['Audiophile Choice', 'Premium'],
        badgeColors: ['#0ea5e9', '#0ea5e9'],
        inStock: true,
        image: null 
      },
      {
        id: 3,
        name: 'Pioneer DMH-2670NEX CarPlay Head Unit',
        category: 'head-units',
        rating: 5,
        reviews: 124,
        price: 45000,
        oldPrice: 55000,
        discount: 18,
        compatibility: 'Toyota Voxy, Toyota Noah +more',
        badges: ['Best Seller', 'Apple CarPlay'],
        badgeColors: ['#f59e0b', '#00c26f'], // Orange, Green
        inStock: true,
        image: null
      },
      {
        id: 4,
        name: 'Sony XS-N1212 Subwoofer',
        category: 'subwoofers',
        rating: 4,
        reviews: 89,
        price: 8900,
        oldPrice: 11000,
        discount: 19,
        compatibility: 'Universal Fit',
        badges: ['High Power'],
        badgeColors: ['#8b5cf6'], // Purple
        inStock: true,
        image: null
      }
    ];

    setProducts(mockData);
    setLoading(false);
  }, []);

  // === STATIC CATEGORIES FOR SIDEBAR ===
  const categories = [
    { id: 'all', name: 'All Products', count: 147 },
    { id: 'head-units', name: 'Head Units', count: 28 },
    { id: 'speakers', name: 'Speakers', count: 45 },
    { id: 'subwoofers', name: 'Subwoofers', count: 23 },
    { id: 'amplifiers', name: 'Amplifiers', count: 18 },
    { id: 'accessories', name: 'Accessories', count: 33 },
    { id: 'security', name: 'Security Systems', count: 15 }
  ];

  const brands = [
    { name: 'All Brands', count: 147, active: true },
    { name: 'Pioneer', count: 42 },
    { name: 'JBL', count: 35 },
    { name: 'Kenwood', count: 28 },
    { name: 'Sony', count: 22 },
  ];

  // === FILTER LOGIC ===
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper function to format currency
  const formatPrice = (price) => `KSh ${price.toLocaleString()}`;

  // Helper to render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < Math.floor(rating) ? "#f59e0b" : "#4b5563"} size={12} />
    ));
  };

  return (
    <div className="shop-page">
      {/* Header Section */}
      <div className="shop-header-section">
        <div className="container header-content">
          <div>
            <div className="breadcrumbs">
               <span><i className="fas fa-home"></i></span> 
               <span>&gt;</span> 
               <span>Shop</span>
            </div>
            <h1>Car Audio & Accessories</h1>
            <p>Professional car audio systems and accessories for Kenyan vehicles</p>
          </div>
          <button className="find-compatible-btn">
            <FaCar /> Find Compatible Products
          </button>
        </div>
      </div>

      <div className="container main-layout">
        
        {/* === SIDEBAR === */}
        <aside className="sidebar">
          
          <div className="sidebar-group">
            <div className="sidebar-header">
                <h3>Filters</h3>
                <button className="clear-btn" onClick={() => {setActiveCategory('all'); setSearchQuery('')}}>Clear All</button>
            </div>
            <div className="search-input-box">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by name or feature..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
          </div>

          <div className="sidebar-group">
            <h4>CATEGORIES</h4>
            <ul className="category-list">
              {categories.map(cat => (
                <li 
                  key={cat.id} 
                  className={activeCategory === cat.id ? 'active' : ''}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.name}</span>
                  <span className="count">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-group">
             <h4>PRICE RANGE</h4>
             <input 
               type="range" 
               min="0" 
               max="100000" 
               value={priceRange} 
               onChange={(e) => setPriceRange(e.target.value)}
               className="price-slider"
             />
             <div className="price-labels">
               <span>KSh 0</span>
               <span>KSh 100,000</span>
             </div>
          </div>

          <div className="sidebar-group">
            <h4>BRANDS</h4>
            <ul className="brand-list">
                {brands.map((brand, idx) => (
                    <li key={idx} className={brand.active ? 'active' : ''}>
                        <span>{brand.name}</span>
                        <span className="count">({brand.count})</span>
                    </li>
                ))}
            </ul>
          </div>
        </aside>

        {/* === MAIN CONTENT === */}
        <main className="product-listing">
          
          {/* Controls Bar */}
          <div className="listing-controls">
             <span>Showing {filteredProducts.length} of {products.length} products</span>
             <div className="controls-right">
                <div className="view-toggles">
                    <button className="active"><FaTh /></button>
                    <button><FaList /></button>
                </div>
                <select className="sort-dropdown">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
             </div>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="shop-card">
                
                {/* Image Area (Placeholder) */}
                <div className="card-image-area">
                    {/* Badges */}
                    <div className="badges-container">
                        {product.badges.map((badge, index) => (
                            <span 
                                key={index} 
                                className="badge"
                                style={{ backgroundColor: product.badgeColors[index] || '#00c26f' }}
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                    
                    {/* Placeholder for Image */}
                    <div className="img-placeholder">
                        <span>{product.name}</span>
                        <small>(Image Placeholder)</small>
                    </div>

                    {!product.inStock && (
                        <div className="out-of-stock-overlay">
                            <span>Out of Stock</span>
                        </div>
                    )}
                </div>

                {/* Card Body */}
                <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    
                    <div className="card-rating">
                        <div className="stars">{renderStars(product.rating)}</div>
                        <span className="reviews">({product.reviews})</span>
                    </div>

                    <div className="card-price-row">
                        <span className="price">{formatPrice(product.price)}</span>
                        {product.oldPrice && (
                            <span className="old-price">{formatPrice(product.oldPrice)}</span>
                        )}
                        {product.discount && (
                            <span className="discount-tag">Save {product.discount}%</span>
                        )}
                    </div>

                    <div className="card-meta">
                        <p className="compatibility">
                            <FaCheckCircle className="icon" /> Compatible: {product.compatibility}
                        </p>
                        <p className="free-install">
                            <FaBolt className="icon" /> Free installation included
                        </p>
                    </div>

                    <div className="card-actions">
                        {product.inStock ? (
                            <button className="add-cart-btn">
                                <i className="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        ) : (
                            <button className="out-stock-btn" disabled>Out of Stock</button>
                        )}
                        <div className="secondary-actions">
                            <button>Quick View</button>
                            <button>Compare</button>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    <Footer />

    {/* === CSS STYLES === */}
    <style>{`
        /* --- RESET & VARIABLES --- */
        .shop-page {
            background-color: #0c0c0c;
            color: #d1d5db;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* --- HEADER SECTION --- */
        .shop-header-section {
            background-color: #121212;
            padding: 40px 0;
            border-bottom: 1px solid #1f1f1f;
            margin-bottom: 40px;
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .breadcrumbs {
            color: #6b7280;
            font-size: 0.85rem;
            margin-bottom: 10px;
            display: flex;
            gap: 8px;
        }
        .shop-header-section h1 {
            color: white;
            font-size: 2rem;
            margin-bottom: 5px;
        }
        .shop-header-section p {
            color: #9ca3af;
        }
        .find-compatible-btn {
            background: #1f1f1f;
            color: white;
            border: 1px solid #333;
            padding: 10px 20px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            transition: 0.2s;
        }
        .find-compatible-btn:hover {
            background: #27272a;
            border-color: #444;
        }

        /* --- MAIN LAYOUT --- */
        .main-layout {
            display: flex;
            gap: 30px;
            padding-bottom: 60px;
        }

        /* --- SIDEBAR --- */
        .sidebar {
            width: 280px;
            flex-shrink: 0;
        }
        .sidebar-group {
            background: #121212;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #1f1f1f;
            margin-bottom: 20px;
        }
        .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        .sidebar-header h3 { color: white; margin: 0; }
        .clear-btn { background: none; border: none; color: #9ca3af; font-size: 0.8rem; cursor: pointer; }
        
        .search-input-box {
            display: flex;
            align-items: center;
            background: #1a1a1a;
            border: 1px solid #333;
            padding: 8px 12px;
            border-radius: 6px;
            gap: 10px;
        }
        .search-input-box input {
            background: none;
            border: none;
            color: white;
            width: 100%;
            outline: none;
        }

        .sidebar h4 {
            color: #6b7280;
            font-size: 0.75rem;
            margin-bottom: 15px;
            letter-spacing: 0.5px;
        }

        /* Categories List */
        .category-list, .brand-list { list-style: none; padding: 0; margin: 0; }
        .category-list li, .brand-list li {
            display: flex;
            justify-content: space-between;
            padding: 8px 10px;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 2px;
            font-size: 0.9rem;
        }
        .category-list li:hover, .brand-list li:hover { background: #1a1a1a; color: white; }
        
        /* Active Category Style */
        .category-list li.active, .brand-list li.active {
            background-color: #064e3b; /* Dark Green bg */
            color: #34d399; /* Light Green text */
            font-weight: 500;
        }
        .category-list .count, .brand-list .count { color: #6b7280; font-size: 0.8rem; }

        /* Price Slider */
        .price-slider { width: 100%; accent-color: #00c26f; }
        .price-labels { display: flex; justify-content: space-between; font-size: 0.8rem; color: #6b7280; margin-top: 5px; }


        /* --- PRODUCTS AREA --- */
        .product-listing {
            flex-grow: 1;
        }

        .listing-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            font-size: 0.9rem;
            color: #9ca3af;
        }
        .controls-right { display: flex; gap: 15px; align-items: center; }
        .view-toggles { display: flex; gap: 5px; }
        .view-toggles button {
            background: #1f1f1f;
            border: 1px solid #333;
            color: #888;
            width: 32px;
            height: 32px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .view-toggles button.active { background: #00c26f; color: white; border-color: #00c26f; }
        .sort-dropdown {
            background: #1f1f1f;
            color: white;
            border: 1px solid #333;
            padding: 6px 10px;
            border-radius: 4px;
            outline: none;
        }

        /* --- PRODUCT GRID --- */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
        }

        /* --- SHOP CARD --- */
        .shop-card {
            background-color: #121212;
            border: 1px solid #1f1f1f;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.2s, border-color 0.2s;
            display: flex;
            flex-direction: column;
        }
        .shop-card:hover {
            transform: translateY(-5px);
            border-color: #333;
        }

        /* Image Area */
        .card-image-area {
            height: 200px;
            background-color: #000;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .img-placeholder {
            text-align: center;
            color: #333;
            font-size: 0.9rem;
        }
        
        .badges-container {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .badge {
            font-size: 0.7rem;
            font-weight: 600;
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
        }

        .out-of-stock-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .out-of-stock-overlay span {
            border: 1px solid #ef4444;
            color: #ef4444;
            padding: 5px 15px;
            border-radius: 20px;
            background: rgba(0,0,0,0.8);
            font-size: 0.85rem;
        }

        /* Card Body */
        .card-body {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .card-title {
            color: #fff;
            font-size: 1rem;
            margin-bottom: 8px;
            line-height: 1.4;
            font-weight: 500;
        }

        .card-rating {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 12px;
            font-size: 0.8rem;
        }
        .reviews { color: #6b7280; }

        .card-price-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }
        .price { font-size: 1.1rem; font-weight: 700; color: #00c26f; }
        .old-price { font-size: 0.9rem; color: #6b7280; text-decoration: line-through; }
        .discount-tag { font-size: 0.7rem; background: #ef4444; color: white; padding: 2px 6px; border-radius: 3px; font-weight: 600; }

        .card-meta {
            font-size: 0.8rem;
            color: #9ca3af;
            margin-bottom: 20px;
            border-top: 1px solid #1f1f1f;
            padding-top: 10px;
        }
        .card-meta p { margin-bottom: 5px; display: flex; align-items: center; gap: 6px; }
        .card-meta .icon { color: #00c26f; }
        .free-install { color: #eab308; } /* Yellow/Gold for free install */

        /* Buttons */
        .card-actions { margin-top: auto; }
        .add-cart-btn {
            width: 100%;
            background-color: #00c26f;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 10px;
            transition: background 0.2s;
        }
        .add-cart-btn:hover { background-color: #00a65c; }
        
        .out-stock-btn {
            width: 100%;
            background-color: #1f1f1f;
            color: #666;
            border: 1px solid #333;
            padding: 10px;
            border-radius: 6px;
            cursor: not-allowed;
            margin-bottom: 10px;
        }

        .secondary-actions { display: flex; gap: 10px; }
        .secondary-actions button {
            flex: 1;
            background: white;
            color: black;
            border: none;
            padding: 8px;
            border-radius: 6px;
            font-size: 0.85rem;
            cursor: pointer;
            font-weight: 500;
        }
        .secondary-actions button:hover { background: #f3f4f6; }

        /* Responsive */
        @media (max-width: 900px) {
            .main-layout { flex-direction: column; }
            .sidebar { width: 100%; }
            .header-content { flex-direction: column; text-align: center; gap: 15px; }
            .find-compatible-btn { width: 100%; justify-content: center; }
        }
    `}</style>
    </div>
  );
};

export default CarAudioShop;
