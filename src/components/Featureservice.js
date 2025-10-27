import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Automatically detect dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const styles = {
    servicesSection: {
      padding: '80px 20px',
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
      color: isDarkMode ? '#e0e0e0' : '#333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: 'background-color 0.4s ease, color 0.4s ease',
    },
    servicesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    servicesTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '3rem',
      fontWeight: '700',
      color: isDarkMode ? '#f5f5f5' : '#333',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    serviceCard: {
      background: isDarkMode ? '#1e1e1e' : '#ffffff',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: isDarkMode
        ? '0 4px 10px rgba(255, 255, 255, 0.05)'
        : '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    serviceCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: isDarkMode
        ? '0 8px 25px rgba(255, 255, 255, 0.08)'
        : '0 8px 25px rgba(0, 0, 0, 0.15)',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: isDarkMode ? '#ffffff' : '#2c3e50',
      marginBottom: '0.5rem',
    },
    serviceDescription: {
      color: isDarkMode ? '#ccc' : '#666',
      lineHeight: '1.5',
      marginBottom: '1rem',
    },
    featureItem: {
      padding: '0.5rem 0',
      color: isDarkMode ? '#ddd' : '#555',
      position: 'relative',
      paddingLeft: '1.5rem',
    },
    featureBullet: {
      color: '#007bff',
      fontWeight: 'bold',
      position: 'absolute',
      left: '0',
    },
    serviceFooter: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: `1px solid ${isDarkMode ? '#333' : '#eee'}`,
    },
    servicePrice: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: isDarkMode ? '#f0f0f0' : '#2c3e50',
    },
    serviceCta: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    serviceCtaHover: {
      backgroundColor: '#0056b3',
    },
  };

  const services = [
    {
      id: 1,
      title: "Car Audio Installation",
      description: "Professional audio system installation with lifetime warranty",
      features: ["Custom Wiring", "Sound Tuning", "Equipment included"],
      price: "From KSh 5,000",
      cta: "Learn More",
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description: "Protect your business from digital threats and data breaches",
      features: ["24/7 monitoring", "Threat analysis", "Compliance support"],
      price: "From KSh 22,000/mo",
      cta: "Learn More",
    },
    {
      id: 3,
      title: "Software Development",
      description: "Custom web applications and mobile apps for your business",
      features: ["Custom development", "Mobile responsive", "API integration"],
      price: "From KSh 150,000",
      cta: "Learn More",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing strategies",
      features: ["SEO optimisation", "Social media", "Ad campaigns"],
      price: "From KSh 30,000/mo",
      cta: "Learn More",
    },
  ];

  return (
    <section style={styles.servicesSection}>
      <div style={styles.servicesContainer}>
        <h2 style={styles.servicesTitle}>Our Services</h2>
        <div style={styles.servicesGrid}>
          {services.map((service) => (
            <div
              key={service.id}
              style={styles.serviceCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.serviceCardHover.transform;
                e.currentTarget.style.boxShadow = styles.serviceCardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.serviceCard.boxShadow;
              }}
            >
              <div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', flexGrow: 1 }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={styles.featureItem}>
                    <span style={styles.featureBullet}>•</span> {feature}
                  </li>
                ))}
              </ul>

              <div style={styles.serviceFooter}>
                <div style={styles.servicePrice}>{service.price}</div>
                <button
                  style={styles.serviceCta}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = styles.serviceCtaHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = styles.serviceCta.backgroundColor)
                  }
                >
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional manual dark mode toggle */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            style={{
              background: 'none',
              border: `2px solid ${isDarkMode ? '#fff' : '#007bff'}`,
              color: isDarkMode ? '#fff' : '#007bff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
