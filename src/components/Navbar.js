import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
  FaCarSide,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Navbar() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  
  // Mobile States
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Desktop Hover States
  const [shopHover, setShopHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  return (
    <header className="navbar-header">
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="container topbar-content">
            <div className="topbar-left">
              <span><FaPhoneAlt className="icon-small"/>+254 748025186</span>
              <span><FaMapMarkerAlt className="icon-small"/> Ngong Road, Nairobi</span>
            </div>
            <div className="topbar-right">
              <span>Mon–Fri: 8AM–6PM | Sat: 9AM–4PM</span>
            </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-content">
            
            {/* LOGO */}
            <div className="logo-wrapper">
                <div className="logo-icon-box">
                    <FaCarSide />
                </div>
                <div className="logo-text">
                    <h2>Audiopine</h2>
                    <small>Car Audio & Tech Solutions</small>
                </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <ul className="desktop-links">
                <li><Link to="/">Home</Link></li>
                
                {/* === SHOP DROPDOWN === */}
                <li 
                    className="dropdown-trigger"
                    onMouseEnter={() => setShopHover(true)}
                    onMouseLeave={() => setShopHover(false)}
                >
                    <span className={`nav-item ${shopHover ? 'active' : ''}`}>
                        Shop <FaChevronDown size={10}/>
                    </span>
                    
                    {shopHover && (
                        <div className="mega-menu-container">
                             <div className="mega-menu-content">
                                <div className="mega-grid">
                                    <div className="mega-col">
                                        <h4>CAR AUDIO SYSTEMS</h4>
                                        <ul>
                                            <li><Link to="/shop" className="mega-link"><strong>Head Units & Stereos</strong><span>Pioneer, Kenwood, JBL systems</span></Link></li>
                                            <li><Link to="/shop" className="mega-link"><strong>Speakers & Tweeters</strong><span>Component & coaxial speakers</span></Link></li>
                                            <li><Link to="/shop" className="mega-link"><strong>Subwoofers & Amps</strong><span>Active & passive subwoofers</span></Link></li>
                                            <li><Link to="/shop" className="mega-link"><strong>Audio Accessories</strong><span>Cables, mounts, and tools</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-col">
                                        <h4>SECURITY & ACCESSORIES</h4>
                                        <ul>
                                            <li><Link to="/shop" className="mega-link"><strong>Car Alarms</strong><span>Advanced security systems</span></Link></li>
                                            <li><Link to="/shop" className="mega-link"><strong>GPS Trackers</strong><span>Real-time vehicle tracking</span></Link></li>
                                            <li><Link to="/shop" className="mega-link"><strong>Dash Cameras</strong><span>Front & rear dash cams</span></Link></li>
                                            <li><Link to="/shop" className="mega-link"><strong>Immobilizers</strong><span>Engine protection systems</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mega-footer">
                                    <span>Need help finding the right product?</span>
                                    <button className="mega-btn">Get Free Consultation</button>
                                </div>
                             </div>
                        </div>
                    )}
                </li>

                {/* === SERVICES DROPDOWN === */}
                <li 
                    className="dropdown-trigger"
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                >
                    <span className={`nav-item ${servicesHover ? 'active' : ''}`}>
                        Services <FaChevronDown size={10}/>
                    </span>

                    {servicesHover && (
                        <div className="mega-menu-container">
                             <div className="mega-menu-content">
                                <div className="mega-grid">
                                    <div className="mega-col">
                                        <h4>INSTALLATION SERVICES</h4>
                                        <ul>
                                            <li><Link to="/services/caraudio" className="mega-link active-example"><strong>Car Audio Installation</strong><span>Professional fitting service</span></Link></li>
                                            <li><Link to="/services/security" className="mega-link"><strong>Security System Setup</strong><span>Complete security installation</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="mega-col">
                                        <h4>TECHNOLOGY SOLUTIONS</h4>
                                        <ul>
                                            <li><Link to="/services/cybersecurity" className="mega-link"><strong>Cybersecurity & IT</strong><span>Business protection services</span></Link></li>
                                            <li><Link to="/services/software" className="mega-link"><strong>Software Development</strong><span>Custom web & mobile apps</span></Link></li>
                                            <li><Link to="/services/marketing" className="mega-link"><strong>Digital Marketing</strong><span>SEO, social media, ads</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mega-footer">
                                    <span>Not sure which service fits your needs?</span>
                                    <button className="mega-btn">Get Free Consultation</button>
                                </div>
                             </div>
                        </div>
                    )}
                </li>

                <li><Link to="/community">Community</Link></li>
                <li><Link to="/news">News & Media</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            {/* RIGHT SECTION */}
            <div className="right-section desktop-only">
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search products..." />
                </div>
                <div className="cart">
                    <FaShoppingCart size={18}/>
                    <span className="badge">3</span>
                </div>
                <button className="chat-btn">
                    <IoChatbubbleEllipsesSharp size={16}/> Chat
                </button>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="mobile-actions">
                <div className="cart mobile-cart">
                    <FaShoppingCart size={20}/>
                    <span className="badge">3</span>
                </div>
                <button className="mobile-toggle" onClick={() => setOffCanvasOpen(true)}>
                    <FaBars />
                </button>
            </div>

        </div>
      </nav>

      {/* OFF-CANVAS MENU (Mobile) */}
      <div className={`offcanvas ${offCanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <h3>Menu</h3>
          <button onClick={() => setOffCanvasOpen(false)}>
            <FaTimes />
          </button>
        </div>
        
        <div className="mobile-search">
            <input type="text" placeholder="Search products..." />
            <FaSearch className="mobile-search-icon"/>
        </div>

        <ul className="offcanvas-links">
          <li><Link to="/" onClick={() => setOffCanvasOpen(false)}>Home</Link></li>
          <li onClick={() => setMobileShopOpen(!mobileShopOpen)} className="mobile-accordion-item">
            <div className="accordion-header">
                <span>Shop</span>
                {mobileShopOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
            </div>
            {mobileShopOpen && (
              <ul className="mobile-submenu">
                <li><Link to="/shop">Head Units & Stereos</Link></li>
                <li><Link to="/shop">Speakers & Tweeters</Link></li>
                <li><Link to="/shop">Subwoofers & Amps</Link></li>
                <li><Link to="/shop">Car Alarms & Security</Link></li>
              </ul>
            )}
          </li>
          <li onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="mobile-accordion-item">
            <div className="accordion-header">
                <span>Services</span>
                {mobileServicesOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
            </div>
            {mobileServicesOpen && (
              <ul className="mobile-submenu">
                <li><Link to="/services/audio">Audio Installation</Link></li>
                <li><Link to="/services/software">Software Development</Link></li>
                <li><Link to="/services/cybersecurity">Cybersecurity</Link></li>
                <li><Link to="/services/marketing">Digital Marketing</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/community" onClick={() => setOffCanvasOpen(false)}>Community</Link></li>
          <li><Link to="/news" onClick={() => setOffCanvasOpen(false)}>News & Media</Link></li>
          <li><Link to="/contact" onClick={() => setOffCanvasOpen(false)}>Contact</Link></li>
        </ul>
        <div className="offcanvas-footer">
            <button className="chat-btn full-width">
                <IoChatbubbleEllipsesSharp size={16}/> Start Chat
            </button>
        </div>
      </div>
      
      {offCanvasOpen && <div className="backdrop" onClick={() => setOffCanvasOpen(false)} />}

      <style>{`
        /* --- GLOBAL --- */
        .navbar-header { background: #0c0c0c; font-family: 'Segoe UI', sans-serif; color: #fff; position: relative; z-index: 1000; }
        .container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }

        /* --- TOP BAR --- */
        .topbar { background: #0f0f0f; border-bottom: 1px solid #1f1f1f; font-size: 0.8rem; color: #888; padding: 8px 0; }
        .topbar-content { display: flex; justify-content: space-between; }
        .topbar-left { display: flex; gap: 20px; }
        .topbar-left span { display: flex; align-items: center; gap: 6px; }
        .icon-small { font-size: 0.75rem; }

        /* --- NAVBAR LAYOUT --- */
        .navbar { 
            background: #121212; 
            height: 70px; 
            border-bottom: 1px solid #1f1f1f; 
            display: flex; 
            align-items: center; 
        }
        .navbar-content { display: flex; justify-content: space-between; align-items: center; width: 100%; }

        /* --- LOGO --- */
        .logo-wrapper { display: flex; align-items: center; gap: 10px; }
        .logo-icon-box { width: 32px; height: 32px; background-color: #10b981; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.1rem; }
        .logo-text h2 { color: #fff; margin: 0; font-size: 1.2rem; line-height: 1; font-weight: 700; }
        .logo-text small { font-size: 0.65rem; color: #888; display: block; margin-top: 3px; }

        /* --- LINKS & DROPDOWN TRIGGER --- */
        .desktop-links { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; align-items: center; height: 70px; }
        .desktop-links > li { height: 100%; display: flex; align-items: center; } 
        
        /* FIX FOR PURPLE LINKS: FORCE COLOR FOR VISITED STATE */
        .desktop-links a, 
        .desktop-links a:visited,
        .nav-item { 
            color: #e5e5e5; 
            text-decoration: none; 
            font-size: 0.9rem; 
            font-weight: 500; 
            transition: 0.2s; 
            cursor: pointer; 
            display: flex; 
            align-items: center; 
            gap: 5px; 
            padding: 10px 0;
        }
        
        /* Hover State */
        .desktop-links a:hover, 
        .nav-item:hover, 
        .nav-item.active { 
            color: #10b981; 
        }

        /* --- MEGA MENU CONTAINER --- */
        .dropdown-trigger { position: relative; }

        .mega-menu-container {
            position: absolute;
            top: 100%; 
            left: -50px;
            padding-top: 10px; 
            z-index: 2000;
        }

        .mega-menu-content {
            background: #18181b; 
            border-radius: 8px; 
            box-shadow: 0 15px 40px rgba(0,0,0,0.8); 
            min-width: 650px; 
            border: 1px solid #27272a;
            overflow: hidden;
        }

        .mega-grid { display: flex; padding: 30px; gap: 40px; }
        .mega-col { flex: 1; }

        .mega-col h4 {
            color: #d4d4d8;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .mega-col ul { list-style: none; padding: 0; margin: 0; }
        .mega-col li { margin-bottom: 8px; }

        /* --- DROPDOWN LINKS --- */
        .mega-link {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 12px 15px;
            border-radius: 6px;
            text-decoration: none;
            border-left: 3px solid transparent; 
            transition: background 0.2s ease, border-color 0.2s ease;
        }

        .mega-link:hover, .mega-link.active-example {
            background-color: #27272a; 
            border-left-color: #10b981;
        }

        .mega-link strong { 
            color: #fff; 
            font-size: 0.9rem; 
            font-weight: 500; 
        }
        .mega-link span { 
            color: #71717a; 
            font-size: 0.8rem; 
        }

        /* --- MEGA FOOTER --- */
        .mega-footer {
            background: #202024;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #27272a;
        }
        .mega-footer span { font-size: 0.85rem; color: #888; }
        .mega-btn {
            background-color: #10b981;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            color: #fff;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
        }
        .mega-btn:hover { background-color: #0e9f6e; }

        /* --- RIGHT SECTION --- */
        .right-section { display: flex; gap: 15px; align-items: center; }
        .search-box { display: flex; gap: 8px; align-items: center; background: #1f1f1f; padding: 8px 12px; border-radius: 6px; border: 1px solid #333; }
        .search-box input { background: none; outline: none; border: none; color: #fff; width: 140px; font-size: 0.9rem;}
        .search-icon { color: #888; }
        .cart { position: relative; cursor: pointer; color: #fff; display: flex; align-items: center; justify-content: center;}
        .cart .badge { position: absolute; top: -8px; right: -8px; background: #10b981; color: #fff; font-size: 0.65rem; padding: 2px 5px; border-radius: 50%; font-weight: bold; }
        .chat-btn { display: flex; align-items: center; gap: 8px; background: #10b981; color: #fff; font-weight: 600; padding: 8px 16px; border-radius: 6px; border: none; cursor: pointer; transition: 0.2s; }
        .chat-btn:hover { background: #0e9f6e; }

        /* --- MOBILE --- */
        .mobile-actions { display: none; align-items: center; gap: 15px; }
        .mobile-toggle { font-size: 1.5rem; background: none; border: none; color: #fff; cursor: pointer; }
        .offcanvas { position: fixed; top: 0; left: -100%; width: 80%; max-width: 300px; height: 100%; background: #121212; transition: 0.3s ease; z-index: 2000; display: flex; flex-direction: column; border-right: 1px solid #222; }
        .offcanvas.open { left: 0; }
        .offcanvas-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #222; }
        .mobile-search { padding: 15px 20px; position: relative; }
        .mobile-search input { width: 100%; background: #1f1f1f; border: 1px solid #333; padding: 10px 15px; padding-right: 35px; color: white; border-radius: 4px; }
        .mobile-search-icon { position: absolute; right: 30px; top: 50%; transform: translateY(-50%); color: #888; }
        .offcanvas-links { list-style: none; padding: 0 20px; flex-grow: 1; overflow-y: auto; }
        .offcanvas-links li { padding: 15px 0; border-bottom: 1px solid #1a1a1a; cursor: pointer; }
        .offcanvas-links a, .accordion-header { text-decoration: none; color: #eee; display: flex; justify-content: space-between; align-items: center; font-size: 1rem; }
        .mobile-submenu { list-style: none; padding-left: 10px; margin-top: 10px; background: #1a1a1a; border-radius: 4px; }
        .mobile-submenu li { border: none; padding: 8px 10px; }
        .mobile-submenu a { font-size: 0.9rem; color: #ccc; }
        .offcanvas-footer { padding: 20px; border-top: 1px solid #222; }
        .full-width { width: 100%; justify-content: center; }
        .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1500; }

        @media (max-width: 1024px) {
          .topbar { display: none; }
          .desktop-links, .desktop-only { display: none; }
          .mobile-actions { display: flex; }
          .navbar { height: 60px; padding: 10px 0; }
        }
      `}</style>
    </header>
  );
}

export default Navbar;