import React from "react";
import { FaMusic, FaShieldAlt, FaCode, FaChartLine } from "react-icons/fa";

const servicessection = () => {
  const services = [
    {
      icon: <FaMusic style={{ color: "#1ed760", fontSize: "2rem" }} />,
      title: "Car Audio Installation",
      description:
        "Professional audio system installation with lifetime warranty",
      features: ["Custom fitting", "Sound tuning", "Warranty included"],
      price: "From KSh 5,000",
    },
    {
      icon: <FaShieldAlt style={{ color: "#1ed760", fontSize: "2rem" }} />,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business from digital threats and data breaches",
      features: ["24/7 monitoring", "Threat response", "Compliance support"],
      price: "From KSh 25,000/mo",
    },
    {
      icon: <FaCode style={{ color: "#1ed760", fontSize: "2rem" }} />,
      title: "Software Development",
      description:
        "Custom web applications and mobile apps for your business",
      features: ["Custom development", "Mobile responsive", "API integration"],
      price: "From KSh 150,000",
    },
    {
      icon: <FaChartLine style={{ color: "#f59e0b", fontSize: "2rem" }} />,
      title: "Digital Marketing",
      description:
        "Grow your online presence with data-driven marketing strategies",
      features: ["SEO optimization", "Social media", "Ad campaigns"],
      price: "From KSh 30,000/mo",
    },
  ];

  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "var(--bg-color)",
      color: "var(--text-color)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    },
    title: {
      fontSize: "2.4rem",
      fontWeight: "700",
      marginBottom: "10px",
    },
    subtitle: {
      color: "var(--subtext-color)",
      marginBottom: "50px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "25px",
    },
    card: {
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--border-color)",
      borderRadius: "15px",
      padding: "30px 20px",
      transition: "transform 0.3s ease, border-color 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      borderColor: "#1f6feb",
    },
    description: {
      fontSize: "0.95rem",
      color: "var(--subtext-color)",
      margin: "10px 0 20px 0",
    },
    features: {
      listStyle: "none",
      padding: 0,
      textAlign: "left",
      fontSize: "0.9rem",
      color: "var(--feature-text)",
      marginBottom: "20px",
    },
    price: {
      fontWeight: "600",
      color: "#1ed760",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#238636",
      border: "none",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
      width: "100%",
    },
  };

  // Auto dark/light mode using CSS variables
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.style.setProperty(
    "--bg-color",
    isDark ? "#0d1117" : "#f8f9fa"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    isDark ? "#e6edf3" : "#111"
  );
  document.documentElement.style.setProperty(
    "--subtext-color",
    isDark ? "#9ba1a6" : "#555"
  );
  document.documentElement.style.setProperty(
    "--card-bg",
    isDark ? "#161b22" : "#fff"
  );
  document.documentElement.style.setProperty(
    "--border-color",
    isDark ? "#30363d" : "#ddd"
  );
  document.documentElement.style.setProperty(
    "--feature-text",
    isDark ? "#b1bac4" : "#333"
  );

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Complete Technology Solutions</h2>
        <p style={styles.subtitle}>
          From car audio installations to enterprise cybersecurity, we've got
          you covered
        </p>

        <div style={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ marginBottom: "15px" }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>

              <ul style={styles.features}>
                {service.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <p style={styles.price}>{service.price}</p>
              <button
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#2ea043")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#238636")
                }
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default servicessection;
