import React from 'react';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaServer, 
  FaDatabase, 
  FaRocket, 
  FaUsers, 
  FaShieldAlt, 
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJava
} from 'react-icons/fa';
import { SiFlutter, SiPostgresql, SiTypescript, SiMongodb } from 'react-icons/si';
import Footer from '../components/footer';

const SoftwareDevelopment = () => {
  
  // Pricing/Services Data
  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Custom Web Applications",
      desc: "Scalable web applications built with modern technologies for your business needs",
      price: "From KSh 150,000",
      features: [
        "React/Next.js development",
        "Database design & integration",
        "API development",
        "Responsive design",
        "Cloud deployment"
      ],
      stack: ["React", "Node.js", "PostgreSQL"],
      cta: "Get Quote"
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android",
      price: "From KSh 200,000",
      features: [
        "iOS & Android apps",
        "React Native/Flutter",
        "Backend integration",
        "App store optimization",
        "Maintenance & updates"
      ],
      stack: ["Flutter", "React Native", "Firebase"],
      cta: "Get Quote"
    },
    {
      id: 3,
      icon: <FaServer />,
      title: "Enterprise Software",
      desc: "Custom business management and workflow solutions for large organizations",
      price: "From KSh 300,000",
      features: [
        "ERP systems",
        "CRM solutions",
        "Inventory management",
        "Financial systems",
        "User training"
      ],
      stack: ["Java", "Python", "Oracle"],
      cta: "Get Quote"
    },
    {
      id: 4,
      icon: <FaDatabase />,
      title: "API Development",
      desc: "Robust APIs and microservices architecture for system integration",
      price: "From KSh 100,000",
      features: [
        "RESTful APIs",
        "GraphQL endpoints",
        "Real-time features",
        "Third-party integrations",
        "Comprehensive documentation"
      ],
      stack: ["Node.js", "Express", "MongoDB"],
      cta: "Get Quote"
    }
  ];

  // Why Choose Us
  const whyChoose = [
    { icon: <FaRocket />, title: "Rapid Development", desc: "Agile methodology for faster time-to-market and iterative improvements" },
    { icon: <FaUsers />, title: "User-Centric Design", desc: "Intuitive interfaces designed specifically for Kenyan users and workflows" },
    { icon: <FaRocket />, title: "Scalable Solutions", desc: "Architecture built to grow with your business and handle increasing demand" },
    { icon: <FaShieldAlt />, title: "Data Security", desc: "Enterprise-grade security and compliance with data protection standards" },
  ];

  // Tech Stack Grid
  const techStack = [
    { name: "React", icon: <FaReact color="#61DAFB"/> },
    { name: "Node.js", icon: <FaNodeJs color="#339933"/> },
    { name: "Python", icon: <FaPython color="#3776AB"/> },
    { name: "Flutter", icon: <SiFlutter color="#02569B"/> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791"/> },
    { name: "AWS", icon: <FaAws color="#FF9900"/> },
    { name: "Docker", icon: <FaDocker color="#2496ED"/> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6"/> },
  ];

  // Projects
  const projects = [
    {
      title: "E-commerce Platform for Kenyan SMEs",
      desc: "Multi-vendor marketplace with M-Pesa integration and inventory management",
      tags: ["React", "Node.js", "PostgreSQL"],
      stats: "300% increase in online sales",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Healthcare Management System",
      desc: "Digital patient records, appointment scheduling, and telemedicine platform",
      tags: ["Flutter", "Python", "Firebase"],
      stats: "50% reduction in patient wait times",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Logistics & Fleet Management",
      desc: "Real-time tracking, route optimization, and driver management system",
      tags: ["React Native", "Node.js", "MongoDB"],
      stats: "40% improvement in delivery efficiency",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="software-page">
      
      {/* === HERO SECTION === */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">Software & Web Development</div>
            <h1>Custom Software Solutions for <span className="text-blue">Modern Businesses</span></h1>
            <p>
              Transform your business with cutting-edge software solutions. From web applications 
              to mobile apps, we build technology that drives growth and efficiency for Kenyan businesses.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-outline">View Portfolio</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
              alt="Software Team" 
            />
          </div>
        </div>
      </section>

      {/* === SERVICES GRID === */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Development Services</h2>
          <p className="section-sub">Comprehensive software solutions tailored to your business needs and objectives</p>

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

                <div className="tech-tags">
                    {service.stack.map((tech, idx) => (
                        <span key={idx} className="tag">{tech}</span>
                    ))}
                </div>

                <button className="service-btn">{service.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Audiopine for Development?</h2>
          <p className="section-sub">Local expertise with global standards and proven track record</p>

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

      {/* === TECH STACK === */}
      <section className="stack-section">
        <div className="container">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-sub">Modern tech stack for robust, scalable, and maintainable solutions</p>
            
            <div className="stack-grid">
                {techStack.map((tech, i) => (
                    <div key={i} className="stack-item">
                        <div className="stack-icon">{tech.icon}</div>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* === RECENT PROJECTS === */}
      <section className="projects-section">
        <div className="container">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-sub">Success stories from our development portfolio across various industries</p>

            <div className="projects-grid">
                {projects.map((proj, i) => (
                    <div key={i} className="project-card">
                        <img src={proj.img} alt={proj.title} />
                        <div className="project-body">
                            <h4>{proj.title}</h4>
                            <p>{proj.desc}</p>
                            <div className="project-tags">
                                {proj.tags.map((t, idx) => <span key={idx}>{t}</span>)}
                            </div>
                            <div className="project-stats">{proj.stats}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* === BOTTOM CTA FORM === */}
      <section className="cta-section">
        <div className="container cta-grid">
          <div className="cta-content">
            <h2>Ready to Build Your Next Big Thing?</h2>
            <p>Let's transform your ideas into powerful software solutions that drive business growth and efficiency.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Your Project Today</button>
              <button className="btn-outline">View Portfolio</button>
            </div>
          </div>

          <div className="cta-form-wrapper">
            <h3>Project Inquiry Form</h3>
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
                <label>Project Type</label>
                <select>
                    <option>Select project type</option>
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Enterprise Software</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Description</label>
                <textarea rows="3" placeholder="Describe your project requirements, goals..."></textarea>
              </div>
              <button className="submit-btn">Submit Project Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      {/* === STYLES === */}
      <style>{`
        /* Global */
        .software-page {
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
        .text-blue { color: #0ea5e9; } /* Light Blue */
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
          background: #0c4a6e; /* Dark Blue bg */
          color: #38bdf8; /* Light Blue text */
          border: 1px solid #0ea5e9;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .hero-content h1 { font-size: 3.2rem; color: white; line-height: 1.2; margin-bottom: 20px; }
        .hero-content p { color: #d1d5db; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; max-width: 500px; }
        
        .hero-buttons { display: flex; gap: 15px; }
        .btn-primary {
            background-color: #0ea5e9;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: 0.3s;
        }
        .btn-primary:hover { background-color: #0284c7; }
        
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
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.1);
        }

        /* Services Section */
        .services-section { padding: 80px 0; }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
        }
        .service-card {
            background-color: #121212;
            border: 1px solid #1f1f1f;
            border-radius: 12px;
            padding: 35px;
            transition: transform 0.3s;
        }
        .service-card:hover { transform: translateY(-5px); border-color: #0ea5e9; }
        
        .card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .icon-box {
            background: rgba(14, 165, 233, 0.15); /* Blue tint */
            color: #0ea5e9;
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
            color: #0ea5e9; 
            font-size: 1.2rem; 
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
        .check-icon { color: #0ea5e9; }

        .tech-tags { display: flex; gap: 8px; margin-bottom: 25px; flex-wrap: wrap; }
        .tag { background: #1e293b; color: #94a3b8; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; border: 1px solid #334155; }

        .service-btn {
            width: 100%;
            background: #0ea5e9;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.2s;
        }
        .service-btn:hover { background: #0284c7; }

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
            color: #0ea5e9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        .feature-card h4 { color: white; margin-bottom: 10px; font-size: 1.1rem; }
        .feature-card p { color: #9ca3af; font-size: 0.9rem; line-height: 1.5; }

        /* Tech Stack */
        .stack-section { padding: 60px 0; }
        .stack-grid { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .stack-item {
            background: #18181b;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #27272a;
            width: 120px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        .stack-icon { font-size: 2rem; }
        .stack-item span { font-size: 0.9rem; color: #d1d5db; }

        /* Projects Section */
        .projects-section { padding: 60px 0; background: #0c0c0c; }
        .projects-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
            gap: 30px; 
        }
        .project-card {
            background: #121212;
            border: 1px solid #1f1f1f;
            border-radius: 12px;
            overflow: hidden;
        }
        .project-card img { width: 100%; height: 200px; object-fit: cover; }
        .project-body { padding: 25px; }
        .project-body h4 { color: white; font-size: 1.1rem; margin-bottom: 10px; }
        .project-body p { color: #9ca3af; font-size: 0.9rem; margin-bottom: 15px; }
        
        .project-tags { display: flex; gap: 8px; margin-bottom: 20px; }
        .project-tags span { background: #0c4a6e; color: #38bdf8; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; }
        
        .project-stats { color: #10b981; font-weight: 500; font-size: 0.9rem; border-top: 1px solid #27272a; padding-top: 15px; }

        /* Bottom CTA Section */
        .cta-section {
            background: #0f172a; /* Dark Blue Tint */
            padding: 80px 0;
            border-top: 1px solid #1e293b;
        }
        .cta-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: flex-start;
        }
        .cta-content h2 { font-size: 2.5rem; color: white; margin-bottom: 20px; }
        .cta-content p { color: #d1d5db; margin-bottom: 30px; line-height: 1.6; }

        /* CTA Form */
        .cta-form-wrapper {
            background: #121212;
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #333;
        }
        .cta-form-wrapper h3 { color: white; margin-bottom: 20px; font-weight: 500; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; color: #d1d5db; margin-bottom: 8px; font-size: 0.9rem; }
        .form-group input, .form-group textarea, .form-group select {
            width: 100%;
            background: #1a1a1a;
            border: 1px solid #333;
            padding: 12px;
            border-radius: 6px;
            color: white;
            outline: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #0ea5e9; }
        
        .submit-btn {
            width: 100%;
            background: #0ea5e9;
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
        }
      `}</style>
    </div>
  );
};

export default SoftwareDevelopment;