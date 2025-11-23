import React from "react";

const MiddleSection = () => {
  // Online Images
  const bannerImg =
    "https://images.unsplash.com/photo-1549921296-3c656b53f863?auto=format&fit=crop&w=1200&q=80";

  const authorAvatar = "https://randomuser.me/api/portraits/men/32.jpg";

  const s = {
    wrap: {
      maxWidth: 1180,
      margin: "36px auto",
      padding: "20px",
    },
    card: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      background: "linear-gradient(145deg, #0c0c0c, #131313)",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
    },
    media: {
      width: "100%",
      height: "420px",
      objectFit: "cover",
      display: "block",
    },
    content: {
      padding: 36,
      color: "rgba(230,230,230,0.95)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    smallBadge: {
      display: "inline-block",
      background: "rgba(20,180,125,0.12)",
      color: "#14b27b",
      padding: "6px 10px",
      borderRadius: 12,
      fontSize: 13,
      marginBottom: 12,
      border: "1px solid rgba(20,178,123,0.2)",
      width: "fit-content",
    },
    featuredBadge: {
      display: "inline-block",
      background: "#ff9d29",
      color: "#fff",
      padding: "6px 12px",
      borderRadius: 8,
      fontSize: 13,
      margin: 14,
      position: "absolute",
      top: 14,
      left: 16,
      zIndex: 3,
      boxShadow: "0 2px 12px rgba(255,157,41,0.4)",
      fontWeight: 600,
    },
    title: {
      fontSize: 32,
      lineHeight: 1.15,
      margin: "6px 0 16px",
      color: "#fff",
      fontWeight: 600,
    },
    desc: {
      color: "rgba(230,230,230,0.7)",
      marginBottom: 18,
      fontSize: 16,
      lineHeight: 1.6,
    },
    metaRow: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "rgba(230,230,230,0.8)",
      marginBottom: 18,
      fontSize: 14,
    },
    avatar: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: 8,
      border: "2px solid rgba(255,255,255,0.1)",
    },
    stats: {
      display: "flex",
      gap: 18,
      color: "rgba(230,230,230,0.6)",
      marginBottom: 12,
      alignItems: "center",
      fontSize: 14,
      fontWeight: 500,
    },
    readBtn: {
      marginLeft: "auto",
      background: "#0098ee",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 600,
      boxShadow: "0 4px 16px rgba(0,152,238,0.28)",
      transition: "0.25s",
    },
    mediaWrap: {
      position: "relative",
      background: "#000",
    },
  };

  return (
    <div style={s.wrap}>
      <div style={s.card}>
        {/* LEFT IMAGE */}
        <div style={s.mediaWrap}>
          <span style={s.featuredBadge}>Featured</span>
          <img src={bannerImg} alt="Featured" style={s.media} />
        </div>

        {/* RIGHT CONTENT */}
        <div style={s.content}>
          <span style={s.smallBadge}>Car Audio</span>

          <h2 style={s.title}>
            The Future of Car Audio: AI-Powered Sound Systems in 2024
          </h2>

          <p style={s.desc}>
            Explore how artificial intelligence is revolutionizing car audio
            systems, from personalized sound profiles to voice-controlled
            interfaces that understand your preferences.
          </p>

          {/* AUTHOR */}
          <div style={s.metaRow}>
            <img src={authorAvatar} alt="Author" style={s.avatar} />
            <div>
              <div style={{ fontWeight: 600, color: "#eee" }}>James Mutua</div>
              <div style={{ fontSize: 13, color: "rgba(230,230,230,0.5)" }}>
                10 March 2024 • 8 min read
              </div>
            </div>
          </div>

          {/* STATS + BUTTON */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={s.stats}>
              <div>1247 views</div>
              <div>23 comments</div>
            </div>

            <button
              style={s.readBtn}
              onClick={() => alert("Read more")}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#00b1ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#0098ee")
              }
            >
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
