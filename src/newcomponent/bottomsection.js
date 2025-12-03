import React, { useState } from 'react';
import { FaArrowRight, FaEye, FaComment } from 'react-icons/fa';

const BottomSection = () => {
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All Posts', 'Car Audio', 'Cybersecurity', 'Web Development', 'Digital Marketing', 'Tech Trends'];

  const posts = [
    {
      id: 1,
      tag: 'Car Audio',
      title: 'Top 5 Car Audio Upgrades for Toyota Voxy Owners in Kenya',
      excerpt: 'Discover the best audio upgrade options specifically tailored for the popular Toyota Voxy...',
      author: 'Sarah Wanjiku',
      date: '8 March 2024',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      tag: 'Cybersecurity',
      title: 'How Kenyan SMEs Can Protect Against Ransomware Attacks',
      excerpt: 'Essential cybersecurity strategies for small and medium enterprises in Kenya to defend...',
      author: 'Dr. Peter Kimani',
      date: '5 March 2024',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      tag: 'Web Development',
      title: 'Building E-commerce Websites That Convert: A Kenyan Perspective',
      excerpt: 'Learn the key elements of successful e-commerce websites tailored for the Kenyan market...',
      author: 'Mary Njeri',
      date: '3 March 2024',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      tag: 'Digital Marketing',
      title: 'Digital Marketing Trends Dominating Kenya in 2024',
      excerpt: 'Stay ahead of the curve with the latest digital marketing trends specifically impacting...',
      author: 'David Ochieng',
      date: '1 March 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 5,
        tag: 'Web Development',
        title: 'M-Pesa Integration: Complete Developer Guide for 2024',
        excerpt: 'Step-by-step guide to integrating M-Pesa payments into your web and mobile applications...',
        author: 'Samuel Kiprop',
        date: '28 Feb 2024',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 6,
        tag: 'Cybersecurity',
        title: 'Why Every Kenyan Business Needs a Cybersecurity Plan',
        excerpt: 'The increasing digital transformation in Kenya brings new security challenges. Learn why...',
        author: 'Grace Mutindi',
        date: '25 Feb 2024',
        image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=600&auto=format&fit=crop'
      }
  ];

  return (
    <div className="bottom-section">
      
      {/* Category Filter */}
      <div className="category-bar">
        <h3>Browse by Category</h3>
        <div className="cat-pills">
            {categories.map((cat, i) => (
                <button 
                    key={i} 
                    className={activeCat === cat ? 'active' : ''}
                    onClick={() => setActiveCat(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="content-grid">
        
        {/* Main Feed (Left) */}
        <div className="posts-feed">
            {posts.map(post => (
                <div key={post.id} className="post-card">
                    <div className="card-img-wrap">
                        <img src={post.image} alt={post.title} />
                        <span className="card-tag">{post.tag}</span>
                    </div>
                    <div className="card-body">
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="card-meta">
                            <div className="author-info">
                                <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt="user" />
                                <span>{post.author}</span>
                                <span className="dot">•</span>
                                <span>{post.date}</span>
                            </div>
                            <button className="read-more">Read More <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            ))}
            <button className="load-more-btn">Load More Articles</button>
        </div>

        {/* Sidebar (Right) */}
        <aside className="sidebar">
            
            {/* Newsletter Box */}
            <div className="sidebar-widget newsletter-widget">
                <h4>Stay Updated</h4>
                <p>Get the latest tech insights delivered to your inbox weekly.</p>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>

            {/* Trending Topics */}
            <div className="sidebar-widget">
                <h4><i className="fas fa-chart-line"></i> Trending Topics</h4>
                <ul className="trending-list">
                    <li><span>AI in Car Audio</span> <span className="count">12</span></li>
                    <li><span>M-Pesa Integration</span> <span className="count">8</span></li>
                    <li><span>Ransomware Protection</span> <span className="count">15</span></li>
                    <li><span>Local SEO Kenya</span> <span className="count">10</span></li>
                    <li><span>Mobile App Security</span> <span className="count">7</span></li>
                </ul>
            </div>

            {/* Recent Comments */}
            <div className="sidebar-widget">
                <h4><i className="far fa-comments"></i> Recent Comments</h4>
                <div className="comments-list">
                    <div className="comment-item">
                        <strong>John Kamau</strong>
                        <small>on "Toyota Voxy Audio Upgrades"</small>
                        <p>Great article! Just installed the Pioneer system mentioned...</p>
                    </div>
                    <div className="comment-item">
                        <strong>Lisa Njoki</strong>
                        <small>on "Cybersecurity for SMEs"</small>
                        <p>This saved our business from a potential attack...</p>
                    </div>
                </div>
            </div>

        </aside>
      </div>

      <style>{`
        /* Category Bar */
        .category-bar { margin-bottom: 40px; }
        .category-bar h3 { font-size: 1.2rem; color: #fff; margin-bottom: 15px; }
        .cat-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .cat-pills button {
            background: #18181b;
            color: #9ca3af;
            border: 1px solid #27272a;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s;
        }
        .cat-pills button:hover { background: #27272a; color: white; }
        .cat-pills button.active { background: #00c26f; color: white; border-color: #00c26f; }

        /* Grid Layout */
        .content-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
        }

        /* Post Card */
        .posts-feed {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        .post-card {
            background: #121212;
            border: 1px solid #27272a;
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s;
        }
        .post-card:hover { transform: translateY(-5px); border-color: #333; }
        
        .card-img-wrap { position: relative; height: 180px; }
        .card-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .card-tag {
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(0,0,0,0.7);
            color: #00c26f;
            border: 1px solid #00c26f;
            padding: 3px 10px;
            font-size: 0.7rem;
            border-radius: 4px;
        }

        .card-body { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; }
        .card-body h3 { color: white; font-size: 1.1rem; margin-bottom: 10px; line-height: 1.4; }
        .card-body p { color: #9ca3af; font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px; }
        
        .card-meta { margin-top: auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #27272a; padding-top: 15px; }
        .author-info { display: flex; align-items: center; gap: 8px; color: #6b7280; font-size: 0.75rem; }
        .author-info img { width: 24px; height: 24px; border-radius: 50%; }
        .read-more { background: none; border: none; color: #38bdf8; cursor: pointer; display: flex; align-items: center; gap: 5px; font-size: 0.85rem; }
        .read-more:hover { color: #0ea5e9; }

        .load-more-btn {
            grid-column: span 2;
            background: #1f1f1f;
            color: white;
            border: 1px solid #333;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 20px;
            transition: 0.2s;
        }
        .load-more-btn:hover { background: #27272a; }

        /* Sidebar */
        .sidebar { display: flex; flex-direction: column; gap: 30px; }
        .sidebar-widget {
            background: #121212;
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #27272a;
        }
        .sidebar-widget h4 { color: white; margin-bottom: 15px; font-size: 1.1rem; }

        /* Newsletter Widget */
        .newsletter-widget {
            background: #0f172a; /* Dark Blue tint */
            border-color: #1e293b;
        }
        .newsletter-widget p { color: #94a3b8; font-size: 0.9rem; margin-bottom: 15px; }
        .newsletter-widget input {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #334155;
            background: #1e293b;
            color: white;
            margin-bottom: 10px;
        }
        .newsletter-widget button {
            width: 100%;
            background: #0ea5e9;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
        }
        .newsletter-widget button:hover { background: #0284c7; }

        /* Trending List */
        .trending-list { list-style: none; padding: 0; }
        .trending-list li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #1f1f1f;
            color: #d1d5db;
            font-size: 0.9rem;
        }
        .trending-list li:last-child { border-bottom: none; }
        .trending-list .count {
            background: #1f1f1f;
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.75rem;
            color: #6b7280;
        }

        /* Recent Comments */
        .comment-item { margin-bottom: 20px; }
        .comment-item strong { color: white; display: block; font-size: 0.9rem; }
        .comment-item small { color: #6b7280; font-size: 0.8rem; margin-bottom: 5px; display: block; }
        .comment-item p { color: #9ca3af; font-size: 0.85rem; line-height: 1.4; margin: 0; }

        /* Mobile Responsive */
        @media(max-width: 900px) {
            .content-grid { grid-template-columns: 1fr; }
            .posts-feed { grid-template-columns: 1fr; }
            .load-more-btn { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
};

export default BottomSection;