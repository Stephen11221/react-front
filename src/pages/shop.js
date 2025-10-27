// CarAudioShop.jsx
import React, { useState } from 'react';

const CarAudioShop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('special');
  const [activeCompatibility, setActiveCompatibility] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Products', count: 147 },
    { id: 'head-units', name: 'Head Units', count: 28 },
    { id: 'speakers', name: 'Speakers', count: 45 },
    { id: 'subwoofers', name: 'Subwoofers', count: 23 },
    { id: 'amplifiers', name: 'Amplifiers', count: 18 },
    { id: 'accessories', name: 'Accessories', count: 31 }
  ];

  const products = [
    {
      id: 1,
      name: 'Kenwood KFC-1696PS Component Speakers',
      rating: 5,
      reviewCount: 156,
      currentPrice: 12500,
      originalPrice: 15000,
      compatibility: 'Toyota Models, Nissan Models +more',
      features: ['Free installation included'],
      badge: 'Best Seller',
      category: 'speakers'
    },
    {
      id: 2,
      name: 'JBL GT0609C Component System',
      rating: 5,
      reviewCount: 143,
      currentPrice: 15800,
      originalPrice: null,
      compatibility: 'Most Toyota, Most Nissan +more',
      features: ['Free installation included'],
      badge: null,
      category: 'speakers'
    },
    {
      id: 3,
      name: 'Pioneer DMH-2670NEX CarPlay Head Unit',
      rating: 5,
      reviewCount: 124,
      currentPrice: 45000,
      originalPrice: 55000,
      compatibility: 'Toyota Vios, Toyota Model +more',
      features: ['Free installation included'],
      badge: 'Apple CarPlay',
      category: 'head-units'
    },
    {
      id: 4,
      name: 'Sony XS-N1212 Subwoofer',
      rating: 4,
      reviewCount: 89,
      currentPrice: 8900,
      originalPrice: 11000,
      compatibility: 'Universal Fit',
      features: ['Free installation included'],
      badge: 'High Power',
      category: 'subwoofers'
    }
  ];

  const compatibilityOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'audio', name: 'Best Audio' },
    { id: 'carplay', name: 'Apple CarPlay' }
  ];

  const sortOptions = [
    { id: 'special', name: 'Special Offer' },
    { id: 'quality', name: 'High Quality' },
    { id: 'sigas', name: 'Cost of SIGAS' }
  ];

  const formatPrice = (price) => `KSh ${price.toLocaleString()}`;

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  const handleClearAll = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortOption('special');
    setActiveCompatibility('popular');
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.compatibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="car-audio-shop dark-mode">
      <style>{`
        .dark-mode {
          background-color: #0f141a;
          color: #eaeaea;
          min-height: 100vh;
          padding: 20px;
        }

        .shop-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #1f2a33;
        }

        .shop-header h1 {
          color: #fff;
          font-size: 2.2rem;
        }

        .subtitle {
          color: #a0a8b3;
        }

        .filters-sidebar {
          background: #1a1f25;
          color: #d1d1d1;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .search-input {
          background: #12171d;
          color: #eaeaea;
          border: 1px solid #2b3640;
        }

        .category-list li {
          border-bottom: 1px solid #2b3640;
        }

        .category-list li.active {
          color: #3498db;
        }

        .products-section {
          color: #eaeaea;
        }

        .sort-select {
          background: #1a1f25;
          color: #eaeaea;
          border: 1px solid #2b3640;
        }

        .product-card {
          background: #1a1f25;
          border-radius: 8px;
          color: #dcdcdc;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
        }

        .product-image {
          background-color: #101419;
          color: #9ca3af;
        }

        .product-badge {
          background: #e74c3c;
        }

        .product-badge.carplay {
          background: #2980b9;
        }

        .product-title {
          color: #fff;
        }

        .product-rating .fas.fa-star {
          color: #f1c40f;
        }

        .current-price {
          color: #ffffff;
        }

        .original-price {
          color: #777;
        }

        .product-features i {
          color: #27ae60;
        }

        .btn-primary {
          background: #3498db;
          color: white;
        }

        .btn-primary:hover {
          background: #2178b5;
        }

        .btn-secondary {
          background: #2b3640;
          color: #eaeaea;
        }

        .btn-secondary:hover {
          background: #3c4a55;
        }

        .compatibility-section {
          background: #1a1f25;
          color: #eaeaea;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .compatibility-option {
          background: #2b3640;
          color: #eaeaea;
        }

        .compatibility-option.active {
          background: #3498db;
          color: white;
        }
      `}</style>

      <header className="shop-header">
        <h1>Car Audio & Accessories</h1>
        <p className="subtitle">Professional car audio systems and accessories for Kenyan vehicles</p>
      </header>

      <div className="shop-container" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Sidebar */}
        <div className="filters-sidebar" style={{ flex: 1, minWidth: '250px', padding: '20px' }}>
          <div className="filter-section">
            <button className="clear-all-btn" onClick={handleClearAll}>
              Clear All
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-section">
            <h3>CATEGORIES</h3>
            <ul className="category-list" style={{ listStyle: 'none', padding: 0 }}>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={activeCategory === category.id ? 'active' : ''}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ cursor: 'pointer', padding: '8px 0', display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>{category.name}</span>
                  <span className="category-count">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="products-section" style={{ flex: 3 }}>
          <div className="products-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div className="products-count">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  {product.badge && (
                    <div className={`product-badge ${product.badge.toLowerCase().includes('apple') ? 'carplay' : ''}`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="image-placeholder">
                    {product.name.split(' ')[0]} Image
                  </div>
                </div>

                <div className="product-info" style={{ padding: '20px' }}>
                  <h3 className="product-title">{product.name}</h3>

                  <div className="product-rating">
                    {renderStars(product.rating)}
                    <span className="review-count">({product.reviewCount})</span>
                  </div>

                  <div className="product-pricing">
                    <span className="current-price">{formatPrice(product.currentPrice)}</span>
                    {product.originalPrice && (
                      <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>

                  <div className="product-features">
                    <p>
                      <i className="fas fa-check-circle"></i> Compatible: {product.compatibility}
                    </p>
                    {product.features.map((feature, index) => (
                      <p key={index}>
                        <i className="fas fa-check-circle"></i> {feature}
                      </p>
                    ))}
                  </div>

                  <div className="product-actions" style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product.name)}>
                      Add to Cart
                    </button>
                    <button className="btn btn-secondary">
                      {product.id === 2 ? 'Compare' : 'Quick View'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compatibility */}
          <div className="compatibility-section" style={{ padding: '25px', marginTop: '40px' }}>
            <h2>Find Compatible Products</h2>
            <div className="compatibility-options" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {compatibilityOptions.map((option) => (
                <div
                  key={option.id}
                  className={`compatibility-option ${activeCompatibility === option.id ? 'active' : ''}`}
                  onClick={() => setActiveCompatibility(option.id)}
                  style={{ cursor: 'pointer', padding: '10px 20px', borderRadius: '4px' }}
                >
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAudioShop;
