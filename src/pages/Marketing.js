import React from 'react';
import { 
  FaSearch, 
  FaShareAlt, 
  FaBullseye, 
  FaEnvelope, 
  FaPenNib, 
  FaChartLine, 
  FaCheckCircle, 
  FaUsers, 
  FaGlobe, 
  FaBuilding, 
  FaGraduationCap, 
  FaHotel, 
  FaBriefcase, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import Footer from '../components/footer';

const DigitalMarketing = () => {

  // Services Data
  const services = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your website's visibility and organic traffic with proven SEO strategies.",
      price: "From KSh 30,000/month",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Local SEO for Kenya",
        "Monthly performance reports",
        "Competitor analysis"
      ],
      stat: "Average 150% increase in organic traffic"
    },
    {
      id: 2,
      icon: <FaShareAlt />,
      title: "Social Media Marketing",
      desc: "Build brand awareness and engage with your audience across all social platforms.",
      price: "From KSh 25,000/month",
      features: [
        "Content creation & design",
        "Community management",
        "Paid social advertising",
        "Analytics & reporting",
        "Influencer partnerships"
      ],
      stat: "300% growth in social engagement"
    },
    {
      id: 3,
      icon: <FaBullseye />,
      title: "Pay-Per-Click (PPC) Advertising",
      desc: "Targeted advertising campaigns for immediate results and qualified leads.",
      price: "From KSh 20,000/month + ad spend",
      features: [
        "Google Ads management",
        "Facebook/Instagram ads",
        "Campaign optimization",
        "A/B testing",
        "ROI tracking & reporting"
      ],
      stat: "Average 4:1 return on ad spend"
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      title: "Email Marketing",
      desc: "Direct communication with customers through strategic email campaigns.",
      price: "From KSh 15,000/month",
      features: [
        "Email automation setup",
        "Newsletter design",
        "List segmentation",
        "Performance analytics",
        "Lead nurturing sequences"
      ],
      stat: "25% average open rate improvement"
    },
    {
      id: 5,
      icon: <FaPenNib />,
      title: "Content Marketing",
      desc: "Strategic content creation to attract and retain customers.",
      price: "From KSh 35,000/month",
      features: [
        "Blog writing & SEO",
        "Video content creation",
        "Infographic design",
        "Content calendar planning",
        "Distribution strategy"
      ],
      stat: "200% increase in website engagement"
    },
    {
      id: 6,
      icon: <FaChartLine />,
      title: "Digital Strategy Consulting",
      desc: "Comprehensive digital marketing strategy and planning for business growth.",
      price: "From KSh 50,000/project",
      features: [
        "Market analysis",
        "Competitor research",
        "Strategy roadmap",
        "KPI definition",
        "Implementation guidance"
      ],
      stat: "Complete digital transformation roadmap"
    }
  ];

  // Industries
  const industries = [
    { icon: <FaShoppingCart />, title: "Retail & E-commerce", desc: "Drive online sales and foot traffic with targeted campaigns", stat: "Average 150% increase in online sales" },
    { icon: <FaPlusSquare />, title: "Healthcare", desc: "Patient acquisition and reputation management", stat: "300% increase in appointment bookings" },
    { icon: <FaBuilding />, title: "Real Estate", desc: "Property listings and qualified lead generation", stat: "250% increase in qualified leads" },
    { icon: <FaGraduationCap />, title: "Education", desc: "Student enrollment and brand building campaigns", stat: "200% increase in course enrollments" },
    { icon: <FaHotel />, title: "Hospitality", desc: "Bookings and customer engagement strategies", stat: "180% increase in direct bookings" },
    { icon: <FaBriefcase />, title: "Professional Services", desc: "Client acquisition and thought leadership positioning", stat: "220% increase in consultation requests" }
  ];

  // Success Stories
  const caseStudies = [
    {
      title: "Local Restaurant Chain",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
      challenge: "Increase online orders during COVID-19 pandemic",
      solution: "Social media campaigns + Google Ads + delivery optimization",
      result: "300% increase in online orders within 3 months"
    },
    {
      title: "Fashion Boutique",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
      challenge: "Compete with international brands online",
      solution: "Instagram marketing + influencer partnerships + SEO",
      result: "500% growth in social media followers and 200% sales increase"
    },
    {
      title: "Tech Startup",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
      challenge: "Build brand awareness from scratch in competitive market",
      solution: "Content marketing + SEO strategy + LinkedIn advertising",
      result: "1000% increase in website traffic and 50 qualified leads/month"
    }
  ];

  // Icons for Why Choose Us
  const whyChoose = [
    { icon: <FaUsers />, title: "Local Market Expertise", desc: "Deep understanding of Kenyan consumer behavior and market dynamics" },
    { icon: <FaChartLine />, title: "Measurable Results", desc: "Data-driven strategies with clear ROI tracking and performance metrics" },
    { icon: <FaBullseye />, title: "Targeted Campaigns", desc: "Precise audience targeting for maximum impact and cost efficiency" },
    { icon: <FaShareAlt />, title: "Multi-Channel Approach", desc: "Integrated campaigns across all digital platforms for consistent messaging" }
  ];

  // Helper for React Icons not imported in the big block
  function FaShoppingCart() { return <i className="fas fa-shopping-cart"></i> }
  function FaPlusSquare() { return <i className="fas fa-plus-square"></i> }

  return (
    <div className="marketing-page">
      
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">Digital Marketing Solutions</div>
            <h1>Grow Your Business with <span className="text-orange">Digital Marketing</span></h1>
            <p>
              Reach more customers and drive growth with our comprehensive digital marketing services. 
              From SEO to social media, we help Kenyan businesses thrive in the digital landscape.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Free Marketing Audit</button>
              <button className="btn-outline">View Case Studies</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
              alt="Digital Marketing Strategy" 
            />
          </div>
        </div>
      </section>

      {/* === SERVICES GRID === */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Marketing Services</h2>
          <p className="section-sub">Comprehensive digital marketing solutions to boost your online presence and drive business growth</p>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="card-header">
                  <div className="icon-box">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="desc">{service.desc}</p>
                <div className="price">{service.price}</div>
                
                <ul className="features-list">
                  {service.features.map((feature, i) => (
                    <li key={i}><FaCheckCircle className="check-icon"/> {feature}</li>
                  ))}
                </ul>

                <div className="stat-badge">{service.stat}</div>

                <button className="service-btn">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Audiopine for Digital Marketing?</h2>
          <p className="section-sub">Local expertise with international best practices and proven results</p>

          <div className="features-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === INDUSTRIES SERVED === */}
      <section className="industries-section">
        <div className="container">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-sub">Tailored marketing strategies for different business sectors across Kenya</p>
            
            <div className="industries-grid">
                {industries.map((ind, i) => (
                    <div key={i} className="industry-card">
                        <div className="industry-icon">{ind.icon}</div>
                        <h4>{ind.title}</h4>
                        <p>{ind.desc}</p>
                        <span className="industry-stat">{ind.stat}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* === SUCCESS STORIES === */}
      <section className="case-studies-section">
        <div className="container">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-sub">Real results from our digital marketing campaigns across different industries</p>

            <div className="case-grid">
                {caseStudies.map((caseStudy, i) => (
                    <div key={i} className="case-card">
                        <img src={caseStudy.img} alt={caseStudy.title} />
                        <div className="case-body">
                            <h4>{caseStudy.title}</h4>
                            <div className="case-detail">
                                <span className="label">Challenge:</span> {caseStudy.challenge}
                            </div>
                            <div className="case-detail">
                                <span className="label">Solution:</span> {caseStudy.solution}
                            </div>
                            <div className="case-detail result">
                                <span className="label">Result:</span> {caseStudy.result}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* === BOTTOM FORM SECTION === */}
      <section className="audit-section">
        <div className="container audit-grid">
          
          {/* Left Content */}
          <div className="audit-content">
            <h2>Boost Your Online Presence</h2>
            <p>
              Ready to accelerate your business growth with digital marketing? Let's create a custom 
              strategy that delivers measurable results for your business.
            </p>
            
            <div className="contact-info">
              <p><FaPhoneAlt className="icon"/> +254 748025186</p>
              <p><FaEnvelope className="icon"/> audiopinesolutions@gmail.com</p>
              <p><FaMapMarkerAlt className="icon"/> Ngong Road, Nairobi</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="audit-form-wrapper">
            <h3>Request Marketing Audit</h3>
            <form className="audit-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" placeholder="Enter your company name" />
              </div>
              <div className="form-group">
                <label>Website URL</label>
                <input type="text" placeholder="https://yourwebsite.com" />
              </div>
              <div className="form-group">
                <label>Primary Marketing Goal</label>
                <select>
                    <option>Select your primary goal</option>
                    <option>Increase Traffic</option>
                    <option>Generate Leads</option>
                    <option>Brand Awareness</option>
                    <option>Online Sales</option>
                </select>
              </div>
              <div className="form-group">
                <label>Additional Details</label>
                <textarea rows="3" placeholder="Tell us about your current marketing challenges, target audience..."></textarea>
              </div>
              <button className="submit-btn">Get Free Marketing Audit</button>
            </form>
          </div>

        </div>
      </section>

      {/* === BOTTOM BANNER === */}
      <section className="banner-section">
        <div className="container banner-flex">
            <div>
                <h2>Ready to Dominate Your Market?</h2>
                <p>Stop losing customers to competitors. Let's build a digital marketing strategy that drives real business growth.</p>
            </div>
            <div className="banner-actions">
                <button className="btn-primary">Start Growing Today</button>
                <div className="banner-input">
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>
        </div>
      </section>

      <Footer />

      {/* === STYLES === */}
      <style>{`
        /* Global */
        .marketing-page {
          background-color: #0c0c0c;
          color: #e5e5e5;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .text-orange { color: #f59e0b; }
        .section-title { font-size: 2.2rem; text-align: center; color: white; margin-bottom: 10px; }
        .section-sub { color: #9ca3af; text-align: center; margin-bottom: 50px; }

        /* Hero Section */
        .hero-section {
          padding: 80px 0;
          background-color: #0c0c0c;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .badge {
          display: inline-block;
          background: #451a03; /* Dark orange bg */
          color: #f59e0b; /* Orange text */
          border: 1px solid #78350f;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .hero-content h1 { font-size: 3.2rem; color: white; line-height: 1.2; margin-bottom: 20px; }
        .hero-content p { color: #d1d5db; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; max-width: 500px; }
        
        .hero-buttons { display: flex; gap: 15px; }
        .btn-primary {
            background-color: #f59e0b;
            color: black;
            border: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: 0.3s;
        }
        .btn-primary:hover { background-color: #d97706; }
        
        .btn-outline {
            background: white;
            color: black;
            border: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: 0.3s;
        }
        .btn-outline:hover { background-color: #e5e5e5; }

        .hero-image img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.1);
        }

        /* Services Section */
        .services-section { padding: 80px 0; }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }
        .service-card {
            background-color: #121212;
            border: 1px solid #1f1f1f;
            border-radius: 12px;
            padding: 35px;
            transition: transform 0.3s;
            display: flex;
            flex-direction: column;
        }
        .service-card:hover { transform: translateY(-5px); border-color: #333; }
        
        .card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .icon-box {
            background: rgba(245, 158, 11, 0.15); /* Orange tint */
            color: #f59e0b;
            width: 50px;
            height: 50px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
        }
        .service-card h3 { color: white; font-size: 1.3rem; margin: 0; }
        .service-card .desc { color: #9ca3af; margin-bottom: 25px; line-height: 1.5; }
        
        .service-card .price { 
            color: #f59e0b; 
            font-size: 1.1rem; 
            font-weight: 600; 
            margin-bottom: 25px; 
        }

        .features-list { list-style: none; padding: 0; margin-bottom: 25px; }
        .features-list li { 
            display: flex; 
            align-items: center; 
            gap: 10px; 
            margin-bottom: 12px; 
            color: #d1d5db;
            font-size: 0.95rem; 
        }
        .check-icon { color: #f59e0b; }

        .stat-badge {
            background: #064e3b; /* Dark Green */
            color: #34d399; /* Light Green */
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            width: fit-content;
            margin-bottom: 25px;
            border: 1px solid #059669;
        }

        .service-btn {
            width: 100%;
            background: #f59e0b;
            color: black;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
            margin-top: auto;
        }
        .service-btn:hover { background: #d97706; }

        /* Why Choose Us */
        .why-section { padding: 60px 0; background-color: #0c0c0c; }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        .feature-card {
            background: #121212;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #1f1f1f;
        }
        .feature-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            background: #111827;
            color: #f59e0b;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        .feature-card h4 { color: white; margin-bottom: 10px; font-size: 1.1rem; }
        .feature-card p { color: #9ca3af; font-size: 0.9rem; line-height: 1.5; }

        /* Industries Section */
        .industries-section { padding: 60px 0; }
        .industries-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .industry-card {
            background: #121212;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #1f1f1f;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .industry-icon { font-size: 2rem; color: #f59e0b; margin-bottom: 15px; }
        .industry-card h4 { color: white; margin-bottom: 15px; }
        .industry-card p { color: #9ca3af; font-size: 0.9rem; margin-bottom: 20px; }
        .industry-stat {
            background: #451a03;
            color: #f59e0b;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.75rem;
            border: 1px solid #78350f;
        }

        /* Success Stories */
        .case-studies-section { padding: 60px 0; background-color: #0c0c0c; }
        .case-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .case-card {
            background: #121212;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #1f1f1f;
        }
        .case-card img { width: 100%; height: 200px; object-fit: cover; }
        .case-body { padding: 25px; }
        .case-body h4 { color: white; margin-bottom: 15px; font-size: 1.2rem; }
        .case-detail { margin-bottom: 10px; font-size: 0.9rem; color: #9ca3af; line-height: 1.5; }
        .case-detail .label { color: #f59e0b; font-weight: 600; display: block; margin-bottom: 2px; }
        .result .label { color: white; }
        .result { color: white; font-weight: 500; }

        /* Audit Form Section */
        .audit-section {
            background: #121212;
            padding: 80px 0;
            border-top: 1px solid #1f1f1f;
        }
        .audit-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
        }
        .audit-content h2 { font-size: 2.5rem; color: white; margin-bottom: 20px; }
        .audit-content p { color: #d1d5db; margin-bottom: 30px; line-height: 1.6; }
        .contact-info p { color: #f59e0b; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
        
        .audit-form-wrapper {
            background: #1a1a1a;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #333;
        }
        .audit-form-wrapper h3 { color: white; margin-bottom: 20px; font-weight: 500; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; color: #d1d5db; margin-bottom: 8px; font-size: 0.9rem; }
        .form-group input, .form-group textarea, .form-group select {
            width: 100%;
            background: #121212;
            border: 1px solid #333;
            padding: 12px;
            border-radius: 6px;
            color: white;
            outline: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #f59e0b; }
        
        .submit-btn {
            width: 100%;
            background: #f59e0b;
            color: black;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
        }

        /* Banner Section */
        .banner-section {
            background: linear-gradient(to right, #1a2e05, #0f1c03); /* Dark Green gradient */
            padding: 60px 0;
            color: white;
        }
        .banner-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
        }
        .banner-flex h2 { font-size: 2rem; margin-bottom: 10px; }
        .banner-flex p { color: #d1d5db; max-width: 600px; }
        .banner-actions { display: flex; gap: 15px; flex-wrap: wrap; }
        .banner-input input {
            padding: 12px;
            border-radius: 6px;
            border: none;
            width: 250px;
        }

        /* Mobile */
        @media (max-width: 900px) {
            .hero-grid, .audit-grid, .banner-flex { grid-template-columns: 1fr; text-align: center; justify-content: center; }
            .hero-buttons, .banner-actions { justify-content: center; }
            .hero-image { order: -1; margin-bottom: 30px; }
            .services-grid { grid-template-columns: 1fr; }
            .contact-info { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default DigitalMarketing;