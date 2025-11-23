import React, { useState } from "react";
import TopSection from "../newcomponent/topsection";
import MiddleSection from "../newcomponent/middlesection";
import BottomSection from "../newcomponent/bottomsection";
import Footer from "../components/footer";

export default function News() {
  const [dark, setDark] = useState(true);

  return (
    <div
      style={{
        background: dark ? "#0a0a0a" : "#ffffff",
        color: dark ? "#e8e8e8" : "#222",
        minHeight: "100vh",
        transition: "0.3s",
      }}
    >
      <button
        style={{
          position: "fixed",
          top: 150,
          right: 20,
          padding: "8px 14px",
          borderRadius: 8,
          background: dark ? "#ffffff41" : "#000",
          color: dark ? "#000" : "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setDark(!dark)}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <TopSection />
      <MiddleSection />
      <BottomSection />
        <Footer/>
    </div>
  );
}
