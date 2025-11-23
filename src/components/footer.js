import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      {/* Top Subscribe Section */}
      <div style={styles.subscribeSection}>
        <h2 style={styles.subscribeTitle}>Stay Connected</h2>
        <p style={styles.subscribeText}>
          Get exclusive deals on car audio equipment, tech tips, and updates on our latest services.
        </p>
        <div style={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.emailInput}
          />
          <button style={styles.subscribeBtn}>Subscribe</button>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* Footer Content */}
      <div style={styles.footerContent}>
        {/* Column 1 */}
        <div style={styles.column}>
          <h3 style={styles.brand}>
            <span style={styles.icon}>🚗</span> Audiopine
          </h3>

          <p>Your trusted partner for car audio installations, cybersecurity solutions, and digital services in Nairobi and across Kenya.</p>

          <p>📞 +254 700 123 456</p>
          <p>📧 info@audiopine.co.ke</p>
          <p>📍 Westlands, Nairobi, Kenya</p>
        </div>

        {/* Column 2 */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li>Home</li>
            <li>Car Audio Shop</li>
            <li>Installation Services</li>
            <li>Cybersecurity</li>
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Our Services</h4>
          <ul style={styles.list}>
            <li>Car Audio Installation</li>
            <li>Sound System Tuning</li>
            <li>Network Security</li>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>SEO Services</li>
            <li>Social Media Marketing</li>
            <li>IT Training</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Support & Policies</h4>
          <ul style={styles.list}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Return Policy</li>
            <li>Warranty Information</li>
            <li>Installation Terms</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* Bottom Payment + Social */}
      <div style={styles.bottomRow}>
        <p style={{ color: "#fff" }}>
          We Accept: <strong>M-PESA</strong> | Visa | PayPal | Mastercard
        </p>
        <p style={{ color: "#fff" }}>Follow Us: Facebook | Twitter | Instagram</p>
      </div>

      <div style={styles.copy}>
        © 2025 Audiopine. Powered by cutting-edge technology.
      </div>
    </div>
  );
};

export default Footer;

/* =====================================
   INLINE CSS STYLES (Same page)
===================================== */

const styles = {
  footer: {
    background: "#0d0d0d",
    color: "#bfbfbf",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },

  subscribeSection: {
    textAlign: "center",
    marginBottom: "40px",
  },

  subscribeTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 28,
  },

  subscribeText: {
    fontSize: 15,
    maxWidth: 700,
    margin: "0 auto 20px",
    lineHeight: 1.5,
  },

  subscribeForm: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },

  emailInput: {
    padding: "10px 14px",
    width: "300px",
    borderRadius: 6,
    border: "1px solid #333",
  },

  subscribeBtn: {
    background: "#00ff47",
    color: "#000",
    padding: "10px 20px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },

  divider: {
    border: "1px solid #222",
    margin: "30px 0",
  },

  footerContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: 30,
    justifyContent: "space-between",
  },

  column: {
    flex: "1 1 250px",
  },

  brand: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 20,
  },

  heading: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: 1.8,
    fontSize: 14,
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },

  copy: {
    textAlign: "center",
    color: "#828282",
    marginTop: 20,
    fontSize: 13,
  },
};
