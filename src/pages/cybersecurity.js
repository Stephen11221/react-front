import React from 'react';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserSecret, 
  FaNetworkWired, 
  FaLaptopCode, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaUserTie,
  FaChartLine,
  FaFileContract
} from 'react-icons/fa';
import Footer from '../components/footer';  

const Cybersecurity = () => {
  
  // Threat Data
  const threats = [
    { text: "Ransomware attacks targeting Kenyan businesses" },
    { text: "Mobile money fraud and financial scams" },
    { text: "Email phishing targeting government contracts" },
    { text: "Data breaches in healthcare and education sectors" },
    { text: "Insider threats and employee negligence" }
  ];

  // Services Data
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Network Security Assessment",
      desc: "Comprehensive evaluation of your network infrastructure to identify vulnerabilities and security gaps.",
      price: "From KSh 25,000",
      features: [
        "Vulnerability scanning",
        "Penetration testing",
        "Security audit report",
        "Remediation recommendations"
      ],
      cta: "Get Quote"
    },
    {
      icon: <FaLock />,
      title: "Endpoint Protection",
      desc: "Advanced protection for all devices connected to your network with real-time threat detection.",
      price: "From KSh 15,000/month",
      features: [
        "Anti-malware protection",
        "Device encryption",
        "Remote monitoring",
        "24/7 support"
      ],
      cta: "Get Quote"
    },
    {
      icon: <FaUserSecret />,
      title: "Security Training",
      desc: "Employee training programs to build a human firewall against cyber threats.",
      price: "From KSh 5,000/person",
      features: [
        "Phishing simulation",
        "Security awareness videos",
        "Training certificates",
        "Progress tracking"
      ],
      cta: "Get Quote"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Incident Response",
      desc: "Rapid response and recovery services for cybersecurity incidents and data breaches.",
      price: "From KSh 50,000",
      features: [
        "24/7 emergency response",
        "Forensic analysis",
        "Recovery assistance",
        "Legal compliance support"
      ],
      cta: "Get Quote"
    }
  ];

  // Why Choose Us Data
  const features = [
    { icon: <FaShieldAlt />, title: "Comprehensive Protection", desc: "Multi-layered security approach protecting against advanced threats" },
    { icon: <FaFileContract />, title: "Data Privacy", desc: "Ensure compliance with data protection regulations and standards" },
    { icon: <FaUserTie />, title: "Expert Team", desc: "Certified cybersecurity professionals with local market expertise" },
    { icon: <FaChartLine />, title: "Business Continuity", desc: "Minimize downtime and protect your business operations" }
  ];

  return (
    <div className="cyber-page">
      
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">Cybersecurity & IT Solutions</div>
            <h1>Protect Your Business from <span className="text-green">Cyber Threats</span></h1>
            <p>
              Comprehensive cybersecurity solutions tailored for Kenyan businesses. From SMEs to enterprises, 
              we provide the protection you need in today's digital landscape.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Security Assessment</button>
              <button className="btn-outline">View Case Studies</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
              alt="Cybersecurity Lock" 
            />
          </div>
        </div>
      </section>

      {/* === THREATS SECTION === */}
      <section className="threats-section">
        <div className="container">
          <h2 className="section-title">Current Cyber Threats in Kenya</h2>
          <p className="section-sub">Stay informed about the evolving threat landscape affecting Kenyan businesses</p>
          
          <div className="threats-grid">
            {threats.map((threat, index) => (
              <div key={index} className="threat-card">
                <FaExclamationTriangle className="threat-icon" />
                <span>{threat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES GRID === */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Cybersecurity Services</h2>
          <p className="section-sub">Comprehensive security solutions designed to protect your business at every level</p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
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

                <button className="service-btn">{service.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Audiopine Cybersecurity?</h2>
          <p className="section-sub">Local expertise with international standards</p>

          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BOTTOM CTA (Get Secure Now) === */}
      <section className="cta-section">
        <div className="container cta-grid">
          
          {/* Left Content */}
          <div className="cta-content">
            <h2>Get Secure Now</h2>
            <p>Ready to protect your business? Contact our cybersecurity experts for a free consultation and security assessment.</p>
            
            <div className="contact-details">
              <p>📞 +254 748025186</p>
              <p>✉️ audiopinesolutions@gmail.com</p>
              <p>📍 Ngong Road, Nairobi</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="cta-form-wrapper">
            <h3>Request Security Assessment</h3>
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
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
                <label>Security Concerns</label>
                <textarea rows="3" placeholder="Describe your current security challenges..."></textarea>
              </div>
              <button className="submit-btn">Get Free Assessment</button>
            </form>
          </div>

        </div>
      </section>

      <Footer />

      {/* === STYLES === */}
      <style>{`
        /* Global */
        .cyber-page {
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
        .text-green { color: #10b981; }
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
          background: #064e3b;
          color: #34d399;
          border: 1px solid #059669;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .hero-content h1 { font-size: 3.2rem; color: white; line-height: 1.2; margin-bottom: 20px; }
        .hero-content p { color: #d1d5db; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; max-width: 500px; }
        
        .hero-buttons { display: flex; gap: 15px; }
        .btn-primary {
            background-color: #10b981;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: 0.3s;
        }
        .btn-primary:hover { background-color: #059669; }
        
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
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.1);
        }

        /* Threats Section */
        .threats-section { padding: 60px 0; background-color: #121212; }
        .threats-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .threat-card {
            background: #1a1a1a;
            border: 1px solid #333;
            padding: 15px 25px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            color: #d1d5db;
            font-size: 0.95rem;
        }
        .threat-icon { color: #f59e0b; font-size: 1.1rem; } /* Amber warning icon */

        /* Services Section */
        .services-section { padding: 80px 0; }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
        }
        .service-card {
            background-color: #121212;
            border: 1px solid #10b981; /* Green Border */
            border-radius: 12px;
            padding: 35px;
            transition: transform 0.3s;
        }
        .service-card:hover { transform: translateY(-5px); }
        
        .card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .icon-box {
            background: rgba(16, 185, 129, 0.15);
            color: #10b981;
            width: 50px;
            height: 50px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
        }
        .service-card h3 { color: #10b981; font-size: 1.3rem; margin: 0; }
        .service-card .desc { color: #9ca3af; margin-bottom: 25px; line-height: 1.5; }
        
        .service-card .price { 
            color: #10b981; 
            font-size: 1.1rem; 
            font-weight: 600; 
            margin-bottom: 25px; 
        }

        .features-list { list-style: none; padding: 0; margin-bottom: 30px; }
        .features-list li { 
            display: flex; 
            align-items: center; 
            gap: 10px; 
            margin-bottom: 12px; 
            color: #d1d5db;
            font-size: 0.95rem; 
        }
        .check-icon { color: #10b981; }

        .service-btn {
            width: 100%;
            background: #10b981;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
        }
        .service-btn:hover { background: #059669; }

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
            color: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        .feature-card h4 { color: white; margin-bottom: 10px; font-size: 1.1rem; }
        .feature-card p { color: #9ca3af; font-size: 0.9rem; line-height: 1.5; }

        /* Bottom CTA Section */
        .cta-section {
            background: #121212;
            padding: 80px 0;
            border-top: 1px solid #1f1f1f;
        }
        .cta-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
        }
        .cta-content h2 { font-size: 2.5rem; color: white; margin-bottom: 20px; }
        .cta-content p { color: #d1d5db; margin-bottom: 30px; line-height: 1.6; }
        .contact-details p { color: #10b981; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }

        /* CTA Form */
        .cta-form-wrapper {
            background: #1a1a1a;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #333;
        }
        .cta-form-wrapper h3 { color: white; margin-bottom: 20px; font-weight: 500; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; color: #d1d5db; margin-bottom: 8px; font-size: 0.9rem; }
        .form-group input, .form-group textarea {
            width: 100%;
            background: #121212;
            border: 1px solid #333;
            padding: 12px;
            border-radius: 6px;
            color: white;
            outline: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #10b981; }
        
        .submit-btn {
            width: 100%;
            background: #10b981;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
        }

        /* Mobile */
        @media (max-width: 900px) {
            .hero-grid, .cta-grid { grid-template-columns: 1fr; text-align: center; }
            .hero-buttons { justify-content: center; }
            .hero-image { order: -1; margin-bottom: 30px; }
            .services-grid { grid-template-columns: 1fr; }
            .contact-details { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default Cybersecurity;