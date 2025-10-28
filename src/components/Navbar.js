  import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="navbar-header">
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <span><FaPhoneAlt /> +254 700 123 456</span>
          <span><FaMapMarkerAlt /> Westlands, Nairobi</span>
        </div>
        <div className="topbar-right">
          <span>Mon–Fri: 8AM–6PM | Sat: 9AM–4PM</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="brand">
            <h2>Audiopine</h2>
            <p>Car Audio & Tech Solutions</p>
          </div>
        </div>

        {/* Center Nav Links */}
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>

          {/* Shop Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <span>Shop ▾</span>
            {shopOpen && (
              <div className="dropdown-menu">
                <div className="menu-column">
                  <h4>Car Audio Systems</h4>
                  <ul>
                    <li><Link to="#">Head Units & Stereos</Link></li>
                    <li><Link to="#">Speakers & Tweeters</Link></li>
                    <li><Link to="#">Subwoofers & Amps</Link></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Security & Accessories</h4>
                  <ul>
                    <li><Link to="#">Car Alarms</Link></li>
                    <li><Link to="#">GPS Trackers</Link></li>
                    <li><Link to="#">Dash Cameras</Link></li>
                  </ul>
                  <button className="consult-btn">Get Free Consultation</button>
                </div>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span>Services ▾</span>
            {servicesOpen && (
              <div className="dropdown-menu">
                <div className="menu-column">
                  <h4>Installation Services</h4>
                  <ul>
                    <li><Link to="/caraudio">Car Audio Installation</Link></li>
                    <li><Link to="#">Security System Setup</Link></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Technology Solutions</h4>
                  <ul>
                    <li><Link to="/cybersecurity">Cybersecurity & IT</Link></li>
                    <li><Link to="/services">Software Development</Link></li>
                    <li><Link to="#">Digital Marketing</Link></li>
                  </ul>
                  <button className="consult-btn">Get Free Consultation</button>
                </div>
              </div>
            )}
          </li>

          <li><Link to="/community">Community</Link></li>
          <li><Link to="/news">News & Media</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Right Section */}
        <div className="right-section">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search products..." />
          </div>
          <div className="cart">
            <FaShoppingCart />
            <span className="badge">3</span>
          </div>
          <button className="chat-btn">
            <IoChatbubbleEllipsesSharp /> Chat
          </button>
        </div>
      </nav>

      <style>{`
        .navbar-header {
          font-family: 'Poppins', sans-serif;
          background-color: #0b0b0b;
          color: white;
          border-bottom: 1px solid #1a1a1a;
        }

        /* Top Info Bar */
        .topbar {
          background: #101010;
          color: #bbb;
          font-size: 0.82rem;
          padding: 4px 55px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .topbar-left span {
          margin-right: 18px;
        }

        /* Main Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 55px;
          background: #0d0d0d;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: white;
        }
        .brand h2 {
          font-size: 1.2rem;
          color: white;
          margin: 0;
        }
        .brand p {
          margin: 0;
          font-size: 0.8rem;
          color: #aaa;
        }

        /* Links */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 35px;
          margin: 0;
        }
        .nav-links a {
          text-decoration: none;
          color: #ddd;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: #00c26f;
        }

        /* Dropdown Menu */
        .dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          display: flex;
          background: #111;
          padding: 20px 30px;
          gap: 50px;
          min-width: 500px;
          border-radius: 8px;
          z-index: 20;
          animation: fadeIn 0.25s ease;
        }
        .menu-column h4 {
          color: #00c26f;
          margin-bottom: 8px;
        }
        .menu-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .menu-column li {
          margin-bottom: 6px;
        }
        .menu-column a {
          color: #ccc;
          font-size: 0.88rem;
        }
        .menu-column a:hover {
          color: #00c26f;
        }
        .consult-btn {
          margin-top: 10px;
          background: #00c26f;
          border: none;
          padding: 7px 12px;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }

        /* Right Section */
        .right-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .search-box {
          position: relative;
          background: #1a1a1a;
          border-radius: 6px;
          padding: 5px 10px;
          display: flex;
          align-items: center;
        }
        .search-box input {
          background: transparent;
          border: none;
          color: #ccc;
          outline: none;
          width: 160px;
          font-size: 0.85rem;
          padding-left: 5px;
        }
        .search-icon {
          color: #888;
        }

        .cart {
          position: relative;
          font-size: 1.1rem;
          cursor: pointer;
        }
        .cart .badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: #00c26f;
          color: white;
          font-size: 0.65rem;
          border-radius: 50%;
          padding: 2px 5px;
        }

        .chat-btn {
          background: #00c26f;
          border: none;
          border-radius: 6px;
          padding: 7px 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: white;
          font-weight: 500;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
