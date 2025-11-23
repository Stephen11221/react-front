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
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
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

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <h2>Audiopine</h2>
          <small className="brand-sub">Car Audio & Tech Solutions</small>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="mobile-toggle"
          onClick={() => setOffCanvasOpen(true)}
        >
          <FaBars />
        </button>

        {/* Desktop Navigation */}
        <ul className="desktop-links">
          <li><Link to="/">Home</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <span>Shop ▾</span>
            {shopOpen && (
              <div className="dropdown-menu">
                <div className="menu-column">
                  <h4>Car Audio</h4>
                  <ul>
                    <li><Link to="#">Head Units & Stereos</Link></li>
                    <li><Link to="#">Speakers & Tweeters</Link></li>
                    <li><Link to="#">Subwoofers & Amps</Link></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Security</h4>
                  <ul>
                    <li><Link to="#">Car Alarms</Link></li>
                    <li><Link to="#">GPS Trackers</Link></li>
                    <li><Link to="#">Dash Cameras</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span>Services ▾</span>
            {servicesOpen && (
              <div className="dropdown-menu">
                <div className="menu-column">
                  <h4>Installation</h4>
                  <ul>
                    <li><Link to="#">Audio Installation</Link></li>
                    <li><Link to="#">Security Setup</Link></li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Technology</h4>
                  <ul>
                    <li><Link to="#">Cybersecurity & IT</Link></li>
                    <li><Link to="/services">Software Development</Link></li>
                    <li><Link to="#">Digital Marketing</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/news">News & Media</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* RIGHT SECTION */}
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

      {/* OFF-CANVAS MENU (Mobile) */}
      <div className={`offcanvas ${offCanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h3>Audiopine Menu</h3>
          <button onClick={() => setOffCanvasOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="offcanvas-links">
          <li><Link to="/" onClick={() => setOffCanvasOpen(false)}>Home</Link></li>
          <li onClick={() => setShopOpen(!shopOpen)}>
            <span>Shop ▾</span>
            {shopOpen && (
              <ul className="mobile-submenu">
                <li><Link to="#">Head Units & Stereos</Link></li>
                <li><Link to="#">Speakers & Tweeters</Link></li>
                <li><Link to="#">Subwoofers & Amps</Link></li>
              </ul>
            )}
          </li>
          <li onClick={() => setServicesOpen(!servicesOpen)}>
            <span>Services ▾</span>
            {servicesOpen && (
              <ul className="mobile-submenu">
                <li><Link to="#">Audio Installation</Link></li>
                <li><Link to="#">Security Setup</Link></li>
                <li><Link to="/services">Software Development</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/news">News & Media</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* BACKDROP */}
      {offCanvasOpen && <div className="backdrop" onClick={() => setOffCanvasOpen(false)} />}

      <style>{`
        .navbar-header { background: #0c0c0c; font-family: Poppins, sans-serif; color: #fff; }
        .topbar { display: flex; justify-content: space-between; padding: 6px 20px; font-size: 0.85rem; background: #151515; }
        .topbar-left span { display: flex; align-items: center; gap: 8px; }
        .topbar-right { font-size: 0.85rem; color: #ccc; }
        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; flex-wrap: wrap; }
        .logo-section { display: flex; flex-direction: column; }
        .logo-section h2 { color: #00d588; margin: 0; font-size: 1.65rem; }
        .brand-sub { font-size: 0.75rem; color: #777; margin-top: 2px; }
        .desktop-links { display: flex; gap: 25px; list-style: none; margin: 0; padding: 0; align-items: center; }
        .desktop-links a, .dropdown > span { color: #eaeaea; text-decoration: none; font-size: 0.95rem; transition: 0.2s; cursor: pointer; }
        .desktop-links a:hover, .dropdown > span:hover { color: #00d588; }
        .dropdown { position: relative; }
        .dropdown-menu { position: absolute; top: 110%; left: 0; background: #121212; padding: 18px 25px; display: flex; gap: 45px; border-radius: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.5); min-width: 220px; z-index: 200; }
        .menu-column h4 { color: #00e69e; margin-bottom: 8px; font-size: 0.95rem; font-weight: 600; }
        .menu-column ul { list-style: none; margin: 0; padding: 0; }
        .menu-column a { color: #ddd; text-decoration: none; font-size: 0.9rem; }
        .menu-column a:hover { color: #00d27a; }
        .right-section { display: flex; gap: 15px; align-items: center; margin-top: 8px; }
        .search-box { display: flex; gap: 6px; align-items: center; background: #1a1a1a; padding: 6px 10px; border-radius: 8px; }
        .search-box input { background: none; outline: none; border: none; color: #fff; width: 130px; }
        .cart { position: relative; cursor: pointer; }
        .cart .badge { position: absolute; top: -5px; right: -8px; background: #00d588; color: #000; font-size: 0.7rem; padding: 2px 5px; border-radius: 50%; }
        .chat-btn { background: #00d588; color: #000; font-weight: 600; padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer; transition: 0.2s; }
        .chat-btn:hover { background: #13f7a1; }
        .mobile-toggle { display: none; font-size: 1.8rem; background: none; border: none; color: #fff; cursor: pointer; }
        .offcanvas { position: fixed; top: 0; left: -310px; width: 270px; height: 100%; background: #161616; padding: 20px; transition: 0.3s ease; z-index: 300; display: flex; flex-direction: column; }
        .offcanvas.open { left: 0; }
        .offcanvas-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #222; padding-bottom: 10px; margin-bottom: 20px; }
        .offcanvas-links { list-style: none; padding: 0; }
        .offcanvas-links li { padding: 12px 0; cursor: pointer; }
        .offcanvas-links a { text-decoration: none; color: #ddd; display: block; }
        .mobile-submenu { list-style: none; padding-left: 18px; margin-top: 6px; }
        .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 250; }

        @media (max-width: 900px) {
          .desktop-links { display: none; }
          .mobile-toggle { display: block; }
          .right-section { margin-top: 12px; }
          .search-box input { width: 100px; }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
