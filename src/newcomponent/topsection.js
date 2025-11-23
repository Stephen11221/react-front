// ...existing code...
import React from "react";

const TopSection = () => {
  const styles = {
    section: {
      background: "linear-gradient(180deg,#111213 0%, #151515 60%)",
      color: "#e6e6e6",
      padding: "60px 20px 40px",
      textAlign: "center",
      borderRadius: 4,
    },
    inner: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "10px 20px",
    },
    badge: {
      display: "inline-block",
      background: "rgba(3,115,173,0.12)",
      color: "#07a6ff",
      border: "1px solid rgba(7,166,255,0.15)",
      padding: "8px 14px",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 18,
    },
    heading: {
      fontSize: 64,
      lineHeight: 1.02,
      margin: "6px 0 18px",
      fontWeight: 400,
      color: "#fff",
      letterSpacing: "-0.02em",
    },
    highlight: {
      color: "#07a6ff",
      fontWeight: 600,
    },
    subtitle: {
      maxWidth: 760,
      margin: "0 auto 28px",
      color: "rgba(230,230,230,0.8)",
      fontSize: 18,
      lineHeight: 1.6,
    },
    searchWrap: {
      display: "flex",
      justifyContent: "center",
    },
    searchForm: {
      width: "100%",
      maxWidth: 560,
      display: "flex",
      alignItems: "center",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.04)",
      borderRadius: 8,
      padding: "10px 14px",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
    },
    icon: {
      width: 18,
      height: 18,
      marginRight: 12,
      opacity: 0.7,
    },
    input: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "rgba(230,230,230,0.9)",
      fontSize: 15,
      padding: "6px 0",
    },
    placeholder: {
      color: "rgba(230,230,230,0.45)",
    },
  };

  return (
    <section style={styles.section} aria-labelledby="news-hero-title">
      <div style={styles.inner}>
        <div style={styles.badge}>News &amp; Media</div>

        <h1 id="news-hero-title" style={styles.heading}>
          Technology{" "}
          <span style={styles.highlight}>Insights</span> &amp; News
        </h1>

        <p style={styles.subtitle}>
          Stay informed with the latest trends in car audio, cybersecurity,
          web development, and digital marketing. Expert insights and practical
          guides for the Kenyan market.
        </p>

        <div style={styles.searchWrap}>
          <form
            role="search"
            aria-label="Search articles"
            style={styles.searchForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <svg
              style={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                stroke="rgba(230,230,230,0.55)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="search"
              name="q"
              placeholder="Search articles..."
              aria-label="Search articles"
              style={styles.input}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
// ...existing code...