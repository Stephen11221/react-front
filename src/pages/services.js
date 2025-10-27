import React from 'react';
import { FaCode, FaMobile, FaGlobe, FaCloud, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: <FaGlobe />,
      title: 'Web Development',
      description: 'Responsive, modern websites and web applications built with latest technologies.'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Apps',
      description: 'iOS and Android applications using React Native and Flutter for cross-platform excellence.'
    },
    {
      icon: <FaCode />,
      title: 'Custom Software',
      description: 'Tailored business solutions that streamline operations and boost productivity.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment for reliable performance.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Optimized database architecture and management for data-driven applications.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security & Maintenance',
      description: 'Ongoing support, security updates, and performance optimization.'
    }
  ];

  return (
    <section className="software-development">
      {/* Hero Section */}
      <div className="dev-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Software & Web Development</h1>
            <h2>Custom Software Solutions for Modern Businesses</h2>
            <p className="hero-description">
              Transform your business with cutting-edge software solutions. From web applications to mobile apps, 
              we build technology that drives growth and efficiency for Kenyan businesses.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Start Your Project</button>
              <button className="btn btn-secondary">View Portfolio</button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="dev-services">
        <div className="container">
          <div className="services-header">
            <h2>Our Development Services</h2>
            <p>Comprehensive software solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .software-development {
          font-family: 'Poppins', sans-serif;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .dev-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content h2 {
          font-size: 1.8rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          opacity: 0.95;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto 3rem;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: #00c26f;
          color: white;
        }

        .btn-primary:hover {
          background: #00a65c;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 194, 111, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px);
        }

        /* Services Section */
        .dev-services {
          padding: 80px 0;
          background: #f8fafc;
        }

        .services-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-header h2 {
          font-size: 2.5rem;
          color: #2d3748;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .services-header p {
          font-size: 1.2rem;
          color: #718096;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00c26f, #00a65c);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          color: white;
        }

        .service-card h3 {
          font-size: 1.5rem;
          color: #2d3748;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .service-card p {
          color: #718096;
          line-height: 1.6;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .dev-hero {
            padding: 60px 0;
          }

          .hero-content h1 {
            font-size: 2.2rem;
          }

          .hero-content h2 {
            font-size: 1.4rem;
          }

          .hero-description {
            font-size: 1rem;
            padding: 0 20px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 200px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 30px 20px;
          }

          .services-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 1.8rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            margin: 0 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default SoftwareDevelopment;