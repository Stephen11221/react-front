import React from "react";
import slide1 from "../images/slide1.jpeg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpeg";
import slide4 from "../images/slide4.jpeg";
import Footer from "../components/footer";

const placeholderImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="%23111"/><text x="50%" y="50%" fill="%23f59e0b" font-family="Arial, Helvetica, sans-serif" font-size="24" dominant-baseline="middle" text-anchor="middle">Image Placeholder</text></svg>';

const styles = {
  section: {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "4rem 2rem",
    position: "relative",
    textAlign: "center",
    transition: "padding 300ms ease, transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease",
  },
  sectionScrolled: {
    padding: "2rem 2rem",
    transform: "translateY(-6px)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
    backgroundColor: "#111827",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#f97316",
    color: "white",
    padding: "0.25rem 1rem",
    borderRadius: "0.375rem",
    marginBottom: "1rem",
  },
  badgeScrolled: {
    transform: "scale(0.95)",
    transition: "transform 300ms ease",
  },
  heading: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  headingScrolled: {
    transform: "translateY(-4px) scale(0.97)",
    transition: "transform 300ms ease, opacity 300ms ease",
    opacity: 0.95,
  },
  highlight: {
    color: "#f97316",
  },
  description: {
    color: "#d1d5db",
    marginBottom: "2rem",
    maxWidth: "40rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  cta: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  btnPrimary: {
    backgroundColor: "#f97316",
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.375rem",
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
  },
  btnPrimaryHover: {
    backgroundColor: "#ea580c",
  },
  btnSecondary: {
    backgroundColor: "white",
    color: "#f97316",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.375rem",
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    gap: "0.75rem",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "0.25rem 1rem",
    borderRadius: "0.375rem",
    backgroundColor: "#374151",
    color: "#d1d5db",
    border: "none",
    cursor: "pointer",
  },
  filterBtnHover: {
    backgroundColor: "#4b5563",
  },
  filterBtnActive: {
    backgroundColor: "#f97316",
    color: "white",
  },
  /* Events section styles */
  eventsSection: {
    marginTop: "3rem",
    textAlign: "left",
  },
  /* Recent highlights */
  highlightsSection: {
    marginTop: "3.5rem",
    textAlign: "center",
  },
  highlightsHeading: {
    fontSize: "2rem",
    color: "white",
    marginBottom: "0.5rem",
  },
  highlightsSub: {
    color: "#9ca3af",
    marginBottom: "1.5rem",
    maxWidth: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  highlightsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.25rem",
    alignItems: "start",
    marginTop: "1rem",
  },
  highlightCard: {
    backgroundColor: "#111827",
    borderRadius: "0.5rem",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.03)",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  highlightImage: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
  },
  highlightBody: {
    padding: "1rem",
    color: "#d1d5db",
  },
  highlightFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.75rem",
    color: "#9ca3af",
    fontSize: "0.9rem",
  },
  /* Registration form styles */
  formSection: {
    marginTop: "3.5rem",
    backgroundColor: "#0f1720",
    borderRadius: "0.5rem",
    padding: "2rem",
    border: "1px solid rgba(255,255,255,0.03)",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    alignItems: "stretch",
  },
  formFull: {
    gridColumn: "1 / -1",
  },
  label: {
    display: "block",
    color: "#9ca3af",
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.75rem",
    borderRadius: "0.375rem",
    border: "1px solid #374151",
    backgroundColor: "#0b0f12",
    color: "#d1d5db",
    outline: "none",
  },
  select: {
    width: "100%",
    padding: "0.6rem 0.75rem",
    borderRadius: "0.375rem",
    border: "1px solid #374151",
    backgroundColor: "#0b0f12",
    color: "#d1d5db",
  },
  submitRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "1rem",
    marginTop: "1rem",
  },
  submitBtn: {
    backgroundColor: "#f59e0b",
    color: "#111827",
    padding: "0.75rem 1.25rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    width: "220px",
    alignSelf: "flex-end",
  },
  note: {
    color: "#9ca3af",
    fontSize: "0.9rem",
  },
  eventsHeading: {
    fontSize: "1.75rem",
    color: "white",
    marginBottom: "1rem",
  },
  eventsGrid: {
    display: "grid",
    /* force three columns on larger screens while allowing columns to shrink to a reasonable min width */
    gridTemplateColumns: "repeat(3, minmax(320px, 1fr))",
    gap: "1.5rem",
    alignItems: "start",
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: "0.5rem",
    overflow: "hidden",
    border: "1px solid rgba(249,115,22,0.08)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "1.25rem",
    color: "#d1d5db",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#f97316",
    fontSize: "1.25rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
  },
  metaList: {
    fontSize: "0.9rem",
    color: "#9ca3af",
    marginBottom: "0.75rem",
    lineHeight: 1.6,
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    gap: "0.75rem",
  },
  price: {
    color: "#f97316",
    fontWeight: 800,
    fontSize: "1rem",
  },
  registerBtn: {
    backgroundColor: "#f59e0b",
    color: "#111827",
    padding: "0.75rem 1.25rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "0.95rem",
  },

  "@media (max-width: 768px)": {
    eventsGrid: {
      display: "grid",
      /* adjust to a single column on small screens */
      gridTemplateColumns: "1fr",
      gap: "1rem",
      alignItems: "start",
    }, 

  
    }
};
// compact card / grid adjustments so cards are smaller and fit naturally
Object.assign(styles, {
  eventsGrid: {
    ...styles.eventsGrid,
    // allow many cards to fit and shrink as needed
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    ...styles.card,
    borderRadius: "0.375rem",
    // reduce overall vertical sizing
    overflow: "hidden",
  },
  cardImage: {
    ...styles.cardImage,
    height: "140px",
    objectFit: "cover",
  },
  cardBody: {
    ...styles.cardBody,
    padding: "0.75rem",
  },
  cardTitle: {
    ...styles.cardTitle,
    fontSize: "1rem",
  },
  metaList: {
    ...styles.metaList,
    fontSize: "0.85rem",
  },
  priceRow: {
    ...styles.priceRow,
    gap: "0.5rem",
  },
  price: {
    ...styles.price,
    fontSize: "0.95rem",
  },
  registerBtn: {
    ...styles.registerBtn,
    padding: "0.45rem 0.8rem",
    fontSize: "0.85rem",
    borderRadius: "0.375rem",
  },

  highlightsGrid: {
    ...styles.highlightsGrid,
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "0.75rem",
  },
  highlightImage: {
    ...styles.highlightImage,
    height: "100px",
  }
});

// tighten mobile behavior (merge with existing media settings)
styles["@media (max-width: 768px)"] = {
  ...styles["@media (max-width: 768px)"],
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "0.75rem",
    alignItems: "start",
  },
  highlightsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.75rem",
  },
  cardImage: {
    ...styles.cardImage,
    height: "120px",
  }
};
const Community = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      // trigger when user scrolls down a bit
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
    <section style={{ ...styles.section, ...(scrolled ? styles.sectionScrolled : {}) }}>
      <div style={styles.container}>
        {/* Badge */}
        <span style={{ ...styles.badge, ...(scrolled ? styles.badgeScrolled : {}) }}>Community Events & Offers</span>

        {/* Heading */}
        <h2 style={{ ...styles.heading, ...(scrolled ? styles.headingScrolled : {}) }}>
          Join Our <span style={styles.highlight}>Community</span> Events
        </h2>

        {/* Description */}
        <p style={styles.description}>
          Connect with fellow tech enthusiasts, learn new skills, and discover
          exclusive offers on the latest car audio and technology solutions. Be
          part of Kenya's growing tech community.
        </p>

        {/* CTA Buttons */}
        <div style={styles.cta}>
          <button style={styles.btnPrimary}>View Upcoming Events</button>
          <button style={styles.btnSecondary}>Subscribe to Updates</button>
        </div>

        {/* Event Filters */}
        <div style={styles.filters}>
          <button style={{ ...styles.filterBtn, ...styles.filterBtnActive }}>
            All Events
          </button>
          <button style={styles.filterBtn}>Workshops</button>
          <button style={styles.filterBtn}>Special Offers</button>
          <button style={styles.filterBtn}>Product Launches</button>
          <button style={styles.filterBtn}>Training Sessions</button>
        </div>
        {/* Upcoming Events & Offers Section */}
        <div style={styles.eventsSection}>
          <h3 style={styles.eventsHeading}>Upcoming Events & Offers</h3>
          <div style={styles.eventsGrid}>
            {/* Card 1 */}
            <div style={styles.card}>
              <img src={slide1} alt="Car Audio Workshop" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Car Audio Installation Workshop</div>
                  <div style={styles.metaList}>
                    <div>15 March 2024 • 10:00 AM - 4:00 PM</div>
                    <div>Audiopine HQ, Westlands, Nairobi</div>
                    <div>8 of 15 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>KSh 2,500</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={styles.card}>
              <img src={slide2} alt="Cybersecurity Seminar" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Cybersecurity for SMEs Seminar</div>
                  <div style={styles.metaList}>
                    <div>22 March 2024 • 2:00 PM - 5:00 PM</div>
                    <div>Kempinski Hotel, Nairobi</div>
                    <div>23 of 50 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>Free</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={styles.card}>
              <img src={slide3} alt="Pioneer Launch" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Pioneer 2024 Series Launch</div>
                  <div style={styles.metaList}>
                    <div>28 March 2024 • 6:00 PM - 9:00 PM</div>
                    <div>Villa Rosa Kempinski, Nairobi</div>
                    <div>45 of 100 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>Invitation Only</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div style={styles.card}>
              <img src={slide4} alt="March Mega Sale" style={styles.cardImage} />

              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>March Mega Sale - Up to 40% Off</div>
                  <div style={styles.metaList}>
                    <div>1 March 2024 • All Month</div>
                    <div>All Audiopine Locations</div>
                    <div>Special Pricing</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>Special Pricing</div>
                  <button style={styles.registerBtn}>Get Offer</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div style={styles.card}>
              <img src={slide1} alt="Web Dev Bootcamp" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Web Development Bootcamp</div>
                  <div style={styles.metaList}>
                    <div>5 April 2024 • 9:00 AM - 5:00 PM</div>
                    <div>iHub, Nairobi</div>
                    <div>12 of 25 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>KSh 8,000</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div style={styles.card}>
              <img src={slide2} alt="Digital Marketing Masterclass" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Digital Marketing Masterclass</div>

                  <div style={styles.metaList}>
                    <div>12 April 2024 • 1:00 PM - 6:00 PM</div>
                    <div>Strathmore Business School</div>
                    <div>18 of 40 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>KSh 5,000</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>

            {/* Use placeholders for the additional entries */}
            <div style={styles.card}>
              <img src={placeholderImg} alt="March Mega Sale" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>March Mega Sale - Up to 40% Off</div>
                  <div style={styles.metaList}>
                    <div>1 March 2024 • All Month</div>
                    <div>All Audiopine Locations</div>
                    <div>Special Pricing</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>Special Pricing</div>
                  <button style={styles.registerBtn}>Get Offer</button>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <img src={placeholderImg} alt="Web Development Bootcamp" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Web Development Bootcamp</div>
                  <div style={styles.metaList}>
                    <div>5 April 2024 • 9:00 AM - 5:00 PM</div>
                    <div>iHub, Nairobi</div>
                    <div>12 of 25 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>KSh 8,000</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>

            <div style={styles.card}>
              <img src={placeholderImg} alt="Digital Marketing Masterclass" style={styles.cardImage} />
              <div style={styles.cardBody}>
                <div>
                  <div style={styles.cardTitle}>Digital Marketing Masterclass</div>
                  <div style={styles.metaList}>
                    <div>12 April 2024 • 1:00 PM - 6:00 PM</div>
                    <div>Strathmore Business School</div>
                    <div>18 of 40 spots left</div>
                  </div>
                </div>
                <div style={styles.priceRow}>
                  <div style={styles.price}>KSh 5,000</div>
                  <button style={styles.registerBtn}>Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Recent Event Highlights */}
        <div style={styles.highlightsSection}>
          <h3 style={styles.highlightsHeading}>Recent Event Highlights</h3>
          <p style={styles.highlightsSub}>
            See what our community has been up to and the impact we're making together
          </p>

          <div style={styles.highlightsGrid}>
            {/* Highlight 1 */}
            <div style={styles.highlightCard}>
              <img src={placeholderImg} alt="JBL Sound Experience" style={styles.highlightImage} />
              <div style={styles.highlightBody}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{fontSize: '1rem', color: '#fff'}}>JBL Sound Experience</div>
                  <div style={{color: '#9ca3af'}}>85 attendees</div>
                </div>
                <div style={{color: '#9ca3af', marginTop: '0.5rem'}}>15/02/2024</div>
                <div style={{marginTop: '0.75rem'}}>
                  <span style={{color: '#fbbf24'}}>★ ★ ★ ★ ☆</span>
                  <span style={{marginLeft: '0.5rem', color: '#d1d5db'}}>4.8</span>
                </div>
              </div>
            </div>

            {/* Highlight 2 */}
            <div style={styles.highlightCard}>
              <img src={placeholderImg} alt="Cybersecurity Awareness Week" style={styles.highlightImage} />
              <div style={styles.highlightBody}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{fontSize: '1rem', color: '#fff'}}>Cybersecurity Awareness Week</div>
                  <div style={{color: '#9ca3af'}}>120 attendees</div>
                </div>
                <div style={{color: '#9ca3af', marginTop: '0.5rem'}}>20/01/2024</div>
                <div style={{marginTop: '0.75rem'}}>
                  <span style={{color: '#fbbf24'}}>★ ★ ★ ★ ☆</span>
                  <span style={{marginLeft: '0.5rem', color: '#d1d5db'}}>4.9</span>
                </div>
              </div>
            </div>

            {/* Highlight 3 */}
            <div style={styles.highlightCard}>
              <img src={placeholderImg} alt="New Year Tech Trends" style={styles.highlightImage} />
              <div style={styles.highlightBody}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{fontSize: '1rem', color: '#fff'}}>New Year Tech Trends</div>
                  <div style={{color: '#9ca3af'}}>95 attendees</div>
                </div>
                <div style={{color: '#9ca3af', marginTop: '0.5rem'}}>10/01/2024</div>
                <div style={{marginTop: '0.75rem'}}>
                  <span style={{color: '#fbbf24'}}>★ ★ ★ ★ ☆</span>
                  <span style={{marginLeft: '0.5rem', color: '#d1d5db'}}>4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Registration Form */}
        <div style={{ ...styles.eventsSection, ...styles.formSection }}>
          <h3 style={{ ...styles.eventsHeading, marginBottom: '0.5rem' }}>Ready to join us?</h3>
          <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Fill out the form below to register for upcoming events or get notified about special offers.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.formGrid}>
              <div>
                <label style={styles.label} htmlFor="fullname">Full Name *</label>
                <input id="fullname" name="fullname" style={styles.input} placeholder="Enter your full name" />
              </div>

              <div>
                <label style={styles.label} htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" style={styles.input} placeholder="Enter your email" />
              </div>

              <div style={styles.formFull}>
                <label style={styles.label} htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" style={styles.input} placeholder="+254 700 123 456" />
              </div>

              <div style={styles.formFull}>
                <label style={styles.label} htmlFor="event">Interested Event</label>
                <select id="event" name="event" style={styles.select} defaultValue="">
                  <option value="">Select an event</option>
                  <option>Car Audio Installation Workshop - 15/03/2024</option>
                  <option>Cybersecurity for SMEs Seminar - 22/03/2024</option>
                  <option>Pioneer 2024 Series Launch - 28/03/2024</option>
                  <option>March Mega Sale - Up to 40% Off - 01/03/2024</option>
                  <option>Web Development Bootcamp - 05/04/2024</option>
                  <option>Digital Marketing Masterclass - 12/04/2024</option>
                </select>
              </div>
            </div>

            <div style={styles.submitRow}>
              <div style={styles.note}>Need help or have questions? <br/> <strong style={{color: '#f97316'}}>+254 700 123 456</strong> &nbsp; <span style={{color: '#9ca3af'}}>events@audiopine.co.ke</span></div>
              <button type="submit" style={styles.submitBtn}>Register Now</button>
            </div>
          </form>
        </div>
      </div>
    
    </section>
    
    <Footer/>

    </div>
  );
};

export default Community;
