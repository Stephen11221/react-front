import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Kamau",
      location: "Westlands, Nairobi",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      review:
        "Excellent service! My Toyota Voxy sounds amazing now. The team was professional and completed the installation in just 2 hours.",
      tag: "Car Audio Installation",
    },
    {
      name: "Grace Wanjiku",
      location: "Karen, Nairobi",
      image: "https://i.pravatar.cc/100?img=5",
      rating: 5,
      review:
        "Their cybersecurity assessment saved our business from a potential breach. Highly recommend their services!",
      tag: "Cybersecurity Solutions",
    },
    {
      name: "David Ochieng",
      location: "Kilimani, Nairobi",
      image: "https://i.pravatar.cc/100?img=7",
      rating: 5,
      review:
        "The website they built for our restaurant increased our online orders by 300%. Great work!",
      tag: "Web Development",
    },
  ];

  const styles = {
    section: {
      backgroundColor: "#0d0d0d",
      color: "#fff",
      padding: "80px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      color: "#ccc",
      marginBottom: "50px",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#111",
      borderRadius: "15px",
      padding: "30px",
      width: "350px",
      textAlign: "left",
      boxShadow: "0 0 15px rgba(0,0,0,0.5)",
      transition: "transform 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
    },
    profile: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    avatar: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    name: {
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
    location: {
      color: "#aaa",
      fontSize: "0.9rem",
    },
    stars: {
      color: "#f5c518",
      marginBottom: "10px",
    },
    reviewText: {
      fontStyle: "italic",
      color: "#ccc",
      marginBottom: "15px",
    },
    tag: {
      display: "inline-block",
      backgroundColor: "#007b55",
      color: "#fff",
      borderRadius: "20px",
      padding: "5px 15px",
      fontSize: "0.85rem",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Customers Say</h2>
      <p style={styles.subtitle}>
        Real reviews from satisfied customers across Nairobi
      </p>

      <div style={styles.container}>
        {reviews.map((r, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.profile}>
              <img src={r.image} alt={r.name} style={styles.avatar} />
              <div>
                <div style={styles.name}>
                  {r.name} <FaCheckCircle color="#00c36f" size={14} />
                </div>
                <div style={styles.location}>{r.location}</div>
              </div>
            </div>

            <div style={styles.stars}>
              {[...Array(r.rating)].map((_, j) => (
                <FaStar key={j} />
              ))}
            </div>

            <p style={styles.reviewText}>"{r.review}"</p>

            <span style={styles.tag}>{r.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
