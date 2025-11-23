import React, { useState, useEffect } from 'react';

const BottomSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  // Sample data
  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Car Audio', count: 8, active: false },
    { name: 'Obarsecurity', count: 6, active: false },
    { name: 'Web Development', count: 5, active: false },
    { name: 'Digital Marketing', count: 3, active: false },
    { name: 'Tech Trends', count: 4, active: false }
  ];

  const blogPosts = [
    {
      category: 'Car Audio',
      title: 'Top 5 Car Audio Upgrades for Toyota Voxy Owners in Kenya',
      description: 'Discover the best audio upgrade options specifically tailored for the popular Toyota Voxy, including speaker systems, head units, and installation tips.',
      author: 'Sarah Wanjiku',
      date: '8 March 2024',
      readTime: '6 min read',
      views: 856,
      comments: 15,
      image: ''
    },
    {
      category: 'Opersecurity',
      title: 'How Kenyan SMEs Can Protect Against Ransomware Attacks',
      description: 'Essential cybersecurity strategies for small and medium enterprises in Kenya to defend against the growing threat of ransomware.',
      author: 'Dr. Peter Minani',
      date: '5 March 2024',
      readTime: '10 min read',
      views: 1023,
      comments: 31,
      image: ''
    },
    {
      category: 'Web Development',
      title: 'Building Modern E-commerce Sites with React and Node.js',
      description: 'Learn how to create scalable e-commerce platforms using modern web technologies and best practices for Kenyan businesses.',
      author: 'Mike Otieno',
      date: '1 March 2024',
      readTime: '8 min read',
      views: 723,
      comments: 22,
      image: ''
    },
    {
      category: 'Digital Marketing',
      title: 'Social Media Strategies for Kenyan Brands in 2024',
      description: 'Effective social media marketing techniques tailored for the Kenyan market to boost engagement and conversions.',
      author: 'Grace Wambui',
      date: '28 February 2024',
      readTime: '7 min read',
      views: 589,
      comments: 18,
      image: ''
    },
    {
      category: 'Tech Trends',
      title: 'AI and Machine Learning Adoption in East Africa',
      description: 'Exploring how artificial intelligence is transforming businesses and industries across East Africa with real-world case studies.',
      author: 'David Kimani',
      date: '25 February 2024',
      readTime: '12 min read',
      views: 934,
      comments: 27,
      image: ''
    }
  ];

  const trendingTopics = [
    'All in Car Audio',
    'M-Pesa Integration',
    'Ransomware Protection',
    'Local SEO Kenya',
    'Mobile App Security'
  ];

  const recentComments = [
    {
      author: 'John Kamau',
      post: 'Toyota Voxy Audio Upgrade!',
      comment: 'Great article just installed the Pioneer system mentioned...'
    },
    {
      author: 'Lisa Njoki',
      post: 'Cybersecurity for SMEs',
      comment: 'This saved our business from a potential attack...'
    },
    {
      author: 'Robert Maina',
      post: 'E-commerce Development',
      comment: 'Looking for a developer for similar projects...'
    }
  ];

  return (
    <div className={`blog-categories ${darkMode ? 'dark-mode' : ''}`}>
      {/* Dark Mode Toggle */}
      <div className="theme-toggle">
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-list">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-item ${category.active ? 'active' : ''}`}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="content-wrapper">
        {/* Main Blog Posts - 2 Column Grid */}
        <div className="blog-posts-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="card-image">
                <span className="emoji">{post.image}</span>
              </div>
              <div className="card-content">
                <div className="post-category">{post.category}</div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.description}</p>
                
                <div className="post-meta">
                  <div className="author-date">
                    <span className="author">by {post.author}</span>
                    <span className="date">{post.date}</span>
                  </div>
                  <div className="post-stats">
                    <span className="read-time">{post.readTime}</span>
                    <span className="views">👁️ {post.views}</span>
                    <span className="comments">💬 {post.comments}</span>
                  </div>
                </div>
                
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Trending Topics */}
          <div className="sidebar-section">
            <h3>Trending Topics</h3>
            <div className="topics-list">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Comments */}
          <div className="sidebar-section">
            <h3>Recent Comments</h3>
            <div className="comments-list">
              {recentComments.map((comment, index) => (
                <div key={index} className="comment-item">
                  <div className="comment-author">{comment.author}</div>
                  <div className="comment-post">on "{comment.post}"</div>
                  <div className="comment-text">{comment.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-categories {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #ffffff;
          color: #000000;
          min-height: 100vh;
          transition: all 0.3s ease;
        }

        /* Dark Mode Styles */
        .blog-categories.dark-mode {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        /* Theme Toggle */
        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }

        .toggle-btn {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .dark-mode .toggle-btn {
          background: rgba(255, 255, 255, 0.9);
          color: #000000;
        }

        .toggle-btn:hover {
          transform: scale(1.05);
        }

        .categories-section {
          margin-bottom: 40px;
        }

        .categories-section h2 {
          color: #000000;
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: 700;
        }

        .dark-mode .categories-section h2 {
          color: #ffffff;
        }

        .categories-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .category-item {
          display: flex;
          align-items: center;
          padding: 8px 16px;
          background-color: #f5f5f5;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #e0e0e0;
          font-size: 14px;
          color: #333333;
        }

        .dark-mode .category-item {
          background-color: #2d2d2d;
          border-color: #404040;
          color: #e0e0e0;
        }

        .category-item:hover {
          background-color: #eeeeee;
          border-color: #cccccc;
        }

        .dark-mode .category-item:hover {
          background-color: #3d3d3d;
          border-color: #555555;
        }

        .category-item.active {
          background-color: #000000;
          color: #ffffff;
          border-color: #000000;
        }

        .dark-mode .category-item.active {
          background-color: #ffffff;
          color: #000000;
          border-color: #ffffff;
        }

        .category-name {
          font-weight: 500;
          margin-right: 4px;
        }

        .category-count {
          font-size: 0.85em;
          opacity: 0.8;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 40px;
        }

        /* 2 Column Grid Layout */
        .blog-posts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .blog-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .dark-mode .blog-card {
          background: #2d2d2d;
          border-color: #404040;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .dark-mode .blog-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }

        .card-image {
          height: 120px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
        }

        .dark-mode .card-image {
          background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
        }

        .emoji {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .card-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .post-category {
          color: #666666;
          font-weight: 600;
          font-size: 12px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dark-mode .post-category {
          color: #a0a0a0;
        }

        .post-title {
          color: #000000;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .dark-mode .post-title {
          color: #ffffff;
        }

        .post-description {
          color: #666666;
          line-height: 1.5;
          margin-bottom: 16px;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .dark-mode .post-description {
          color: #b0b0b0;
        }

        .post-meta {
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        .author-date {
          display: flex;
          gap: 12px;
          color: #888888;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .dark-mode .author-date {
          color: #909090;
        }

        .author {
          font-weight: 500;
          color: #333333;
        }

        .dark-mode .author {
          color: #d0d0d0;
        }

        .date {
          color: #888888;
        }

        .dark-mode .date {
          color: #909090;
        }

        .post-stats {
          display: flex;
          gap: 12px;
          color: #888888;
          font-size: 13px;
        }

        .dark-mode .post-stats {
          color: #909090;
        }

        .read-time {
          color: #666666;
        }

        .dark-mode .read-time {
          color: #a0a0a0;
        }

        .views, .comments {
          color: #666666;
        }

        .dark-mode .views, .dark-mode .comments {
          color: #a0a0a0;
        }

        .read-more-btn {
          background-color: #000000;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s ease;
          width: 100%;
          margin-top: auto;
        }

        .dark-mode .read-more-btn {
          background-color: #ffffff;
          color: #000000;
        }

        .read-more-btn:hover {
          background-color: #333333;
          transform: translateY(-1px);
        }

        .dark-mode .read-more-btn:hover {
          background-color: #e0e0e0;
        }

        /* Sidebar Styles */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .sidebar-section h3 {
          color: #000000;
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 700;
          border-bottom: 2px solid #000000;
          padding-bottom: 5px;
        }

        .dark-mode .sidebar-section h3 {
          color: #ffffff;
          border-bottom-color: #ffffff;
        }

        .topics-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .topic-item {
          padding: 10px 12px;
          background-color: #f8f8f8;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #333333;
          font-size: 14px;
          border-left: 3px solid #000000;
        }

        .dark-mode .topic-item {
          background-color: #2d2d2d;
          color: #e0e0e0;
          border-left-color: #ffffff;
        }

        .topic-item:hover {
          background-color: #f0f0f0;
          transform: translateX(2px);
        }

        .dark-mode .topic-item:hover {
          background-color: #3d3d3d;
        }

        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .comment-item {
          padding: 12px;
          background-color: #f8f8f8;
          border-radius: 4px;
          border-left: 3px solid #000000;
        }

        .dark-mode .comment-item {
          background-color: #2d2d2d;
          border-left-color: #ffffff;
        }

        .comment-author {
          font-weight: 600;
          color: #000000;
          margin-bottom: 4px;
          font-size: 14px;
        }

        .dark-mode .comment-author {
          color: #ffffff;
        }

        .comment-post {
          color: #666666;
          font-size: 13px;
          margin-bottom: 6px;
          font-style: italic;
        }

        .dark-mode .comment-post {
          color: #a0a0a0;
        }

        .comment-text {
          color: #666666;
          line-height: 1.4;
          font-size: 14px;
        }

        .dark-mode .comment-text {
          color: #b0b0b0;
        }

        /* Divider line */
        .blog-categories::before {
          content: '';
          display: block;
          height: 1px;
          background-color: #e0e0e0;
          margin: 20px 0 30px 0;
        }

        .dark-mode .blog-categories::before {
          background-color: #404040;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .blog-posts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .blog-posts-grid {
            grid-template-columns: 1fr;
          }
          
          .categories-list {
            flex-direction: column;
            gap: 8px;
          }
          
          .category-item {
            justify-content: center;
            text-align: center;
          }
          
          .post-meta {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .author-date {
            flex-direction: column;
            gap: 5px;
          }
          
          .post-stats {
            justify-content: flex-start;
          }

          .theme-toggle {
            position: relative;
            top: 0;
            right: 0;
            margin-bottom: 20px;
            text-align: right;
          }
        }

        @media (max-width: 480px) {
          .blog-categories {
            padding: 15px;
          }
          
          .categories-section h2 {
            font-size: 20px;
          }
          
          .post-title {
            font-size: 16px;
          }
          
          .post-stats {
            flex-wrap: wrap;
            gap: 10px;
          }
          
          .sidebar-section h3 {
            font-size: 16px;
          }
          
          .card-image {
            height: 100px;
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default BottomSection;