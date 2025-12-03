import React from "react";
import { FaMusic, FaShieldAlt, FaCode, FaChartLine, FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaMusic />,
      color: "#10b981", // Green
      bgTint: "rgba(16, 185, 129, 0.1)",
      title: "Car Audio Installation",
      description: "Professional audio system installation with lifetime warranty",
      features: ["Custom fitting", "Sound tuning", "Warranty included"],
      price: "From KSh 5,000",
      priceColor: "#10b981"
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      color: "#10b981", // Green
      bgTint: "rgba(16, 185, 129, 0.1)",
      title: "Cybersecurity Solutions",
      description: "Protect your business from digital threats and data breaches",
      features: ["24/7 monitoring", "Threat response", "Compliance support"],
      price: "From KSh 25,000/mo",
      priceColor: "#10b981"
    },
    {
      id: 3,
      icon: <FaCode />,
      color: "#0ea5e9", // Blue
      bgTint: "rgba(14, 165, 233, 0.1)",
      title: "Software Development",
      description: "Custom web applications and mobile apps for your business",
      features: ["Custom development", "Mobile responsive", "API integration"],
      price: "From KSh 150,000",
      priceColor: "#0ea5e9"
    },
    {
      id: 4,
      icon: <FaChartLine />,
      color: "#f59e0b", // Orange/Yellow
      bgTint: "rgba(245, 158, 11, 0.1)",
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing strategies",
      features: ["SEO optimization", "Social media", "Ad campaigns"],
      price: "From KSh 30,000/mo",
      priceColor: "#f59e0b"
    },
  ];

  return (
    <section className="services-section">
      {/* Renamed to unique class 'services-container' to avoid conflicts */}
      <div className="services-container">
        
        {/* Renamed to unique class 'services-header' */}
        <div className="services-header">
          <h2>Complete Technology Solutions</h2>
          <p>From car audio installations to enterprise cybersecurity, we've got you covered</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              
              <div 
                className="icon-box" 
                style={{ color: service.color, backgroundColor: service.bgTint }}
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>

              <ul className="features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon" style={{ color: service.color }} /> 
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="spacer"></div>

              <div className="divider"></div>

              <div className="card-footer">
                <p className="price" style={{ color: service.priceColor }}>{service.price}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: #121212;
          color: white;
          padding: 100px 5%;
          font-family: 'Inter', sans-serif;
        }

        /* Unique Class Name */
        .services-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Unique Class Name */
        .services-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .services-header h2 {
          font-size: 2.8rem;
          margin-bottom: 15px;
          font-weight: 500;
          color: #ffffff;
        }

        .services-header p {
          color: #9ca3af;
          font-size: 1.2rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 40px;
        }

        .service-card {
          background-color: #18181b;
          border: 1px solid #27272a;
          border-radius: 12px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          min-height: 520px;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: #3f3f46;
        }

        .icon-box {
          width: 55px;
          height: 55px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }

        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 20px;
          font-weight: 500;
          color: #fff;
        }

        .description {
          color: #9ca3af;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d4d4d8;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .check-icon {
          font-size: 0.9rem;
        }

        .spacer {
          flex-grow: 1;
        }

        .divider {
          height: 1px;
          background-color: #27272a;
          width: 100%;
          margin: 25px 0;
        }

        .price {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 20px;
          display: block;
        }

        .learn-more-btn {
          width: 100%;
          background-color: transparent;
          border: 1px solid #3f3f46;
          color: #e4e4e7;
          padding: 14px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.3s;
        }

        .learn-more-btn:hover {
          background-color: #27272a;
          border-color: #71717a;
        }

        @media (max-width: 1200px) {
          .services-grid {
             gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 60px 20px;
          }
          
          .services-header h2 {
            font-size: 2rem;
          }
          
          .service-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;