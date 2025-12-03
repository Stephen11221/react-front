import React from 'react';
import { 
  FaShieldAlt, 
  FaMapMarkerAlt, 
  FaVideo, 
  FaLock, 
  FaMobileAlt, 
  FaCheck,
  FaSatellite
} from 'react-icons/fa';
import { FaTools } from "react-icons/fa";
import Footer from '../components/footer';

const SecuritySystemSetup = () => {

  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Car Alarm Systems",
      desc: "Advanced alarms with shock sensors, immobilizers, and keyless entry.",
      price: "From KSh 4,500",
      features: ["Shock & Tilt Sensors", "Central Locking Integration", "Remote Start Option"]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "GPS Tracking",
      desc: "Real-time location tracking with engine cut-off via mobile phone.",
      price: "From KSh 5,500",
      features: ["Live Map Tracking", "Engine Cut-Off via SMS", "Geo-Fencing Alerts"]
    },
    {
      icon: <FaVideo />,
      title: "Dash Cameras",
      desc: "Front and rear 1080p/4K recording for evidence and accident protection.",
      price: "From KSh 6,000",
      features: ["Dual Channel (Front/Rear)", "Parking Mode Monitor", "Wi-Fi App Connectivity"]
    },
    {
      icon: <FaLock />,
      title: "Immobilizers",
      desc: "Prevent hot-wiring and unauthorized engine start with transponder keys.",
      price: "From KSh 3,500",
      features: ["Anti-Hijack Mode", "Hidden Cut-out Switch", "Auto-Arming"]
    }
  ];

  return (
    <div className="security-page">
      
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">Vehicle Security & Tracking</div>
            <h1>Secure Your Vehicle with <span className="text-green">Advanced Tech</span></h1>
            <p>
              Protect your investment with our range of alarms, trackers, and dash cams. 
              24/7 monitoring and control at your fingertips.
            </p>
            <div className="hero-btns">
                <button className="btn-primary">Get Security Quote</button>
                <button className="btn-outline">View Products</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" 
              alt="Car Key Fob" 
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Security Solutions</h2>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card">
                <div className="icon-box">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="price">{svc.price}</div>
                <ul>
                    {svc.features.map((f, j) => (
                        <li key={j}><FaCheck size={12} className="check"/> {f}</li>
                    ))}
                </ul>
                <button className="service-btn">Select</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="features-strip">
        <div className="container strip-grid">
            <div className="strip-item">
                <FaSatellite className="strip-icon" />
                <h4>99.9% Uptime</h4>
                <p>Reliable servers for GPS tracking.</p>
            </div>
            <div className="strip-item">
                <FaMobileAlt className="strip-icon" />
                <h4>Mobile App</h4>
                <p>Control your car from your phone.</p>
            </div>
            <div className="strip-item">
                <FaTools className="strip-icon" />
                <h4>Hidden Install</h4>
                <p>Professional concealment of devices.</p>
            </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="cta-section">
        <div className="container cta-flex">
            <div className="cta-text">
                <h2>Don't Wait Until It's Too Late</h2>
                <p>Vehicle theft is on the rise. Secure your car today with our professional installation services.</p>
            </div>
            <div className="cta-form">
                <input type="text" placeholder="Enter your phone number" />
                <button>Request Callback</button>
            </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .security-page { background: #0c0c0c; color: #e5e5e5; font-family: 'Segoe UI', sans-serif; min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .text-green { color: #10b981; }
        .section-title { font-size: 2.2rem; text-align: center; color: white; margin-bottom: 40px; }

        /* Hero */
        .hero-section { padding: 80px 0; background: #0c0c0c; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
        .badge { display: inline-block; background: #064e3b; color: #34d399; border: 1px solid #059669; padding: 6px 14px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 20px; }
        .hero-content h1 { font-size: 3.2rem; color: white; line-height: 1.2; margin-bottom: 20px; }
        .hero-content p { color: #d1d5db; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; }
        .hero-image img { width: 100%; border-radius: 12px; box-shadow: 0 0 30px rgba(16, 185, 129, 0.1); }
        .hero-btns { display: flex; gap: 15px; }
        .btn-primary { background: #10b981; color: white; border: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .btn-outline { background: transparent; color: white; border: 1px solid #333; padding: 12px 30px; border-radius: 6px; font-weight: 600; cursor: pointer; }

        /* Services */
        .services-section { padding: 60px 0; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; }
        .service-card { background: #121212; border: 1px solid #1f1f1f; padding: 30px; border-radius: 12px; text-align: center; transition: 0.3s; }
        .service-card:hover { transform: translateY(-5px); border-color: #10b981; }
        .icon-box { background: rgba(16, 185, 129, 0.1); width: 60px; height: 60px; border-radius: 50%; display: flex; alignItems: center; justify-content: center; margin: 0 auto 20px; color: #10b981; font-size: 1.5rem; }
        .service-card h3 { color: white; margin-bottom: 10px; }
        .service-card p { color: #9ca3af; font-size: 0.9rem; margin-bottom: 15px; }
        .price { color: #10b981; font-weight: 700; font-size: 1.1rem; margin-bottom: 20px; }
        .service-card ul { list-style: none; padding: 0; text-align: left; margin-bottom: 20px; }
        .service-card li { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; color: #d1d5db; font-size: 0.9rem; }
        .check { color: #10b981; }
        .service-btn { width: 100%; background: #1f1f1f; border: 1px solid #333; color: white; padding: 10px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
        .service-btn:hover { background: #10b981; border-color: #10b981; }

        /* Strip */
        .features-strip { padding: 60px 0; background: #121212; border-top: 1px solid #1f1f1f; border-bottom: 1px solid #1f1f1f; }
        .strip-grid { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 30px; text-align: center; }
        .strip-icon { font-size: 2.5rem; color: #10b981; margin-bottom: 15px; }
        .strip-item h4 { color: white; margin-bottom: 5px; }
        .strip-item p { color: #9ca3af; }

        /* CTA */
        .cta-section { padding: 80px 0; background: linear-gradient(to right, #064e3b, #022c22); }
        .cta-flex { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 30px; }
        .cta-text h2 { color: white; font-size: 2rem; margin-bottom: 10px; }
        .cta-text p { color: #a7f3d0; max-width: 500px; }
        .cta-form { display: flex; gap: 10px; }
        .cta-form input { padding: 12px; border-radius: 6px; border: none; width: 250px; outline: none; }
        .cta-form button { background: #10b981; color: white; border: none; padding: 12px 25px; border-radius: 6px; font-weight: 700; cursor: pointer; }

        @media (max-width: 900px) {
            .hero-grid, .cta-flex { grid-template-columns: 1fr; text-align: center; justify-content: center; }
            .hero-image { order: -1; margin-bottom: 30px; }
            .cta-form { justify-content: center; flex-wrap: wrap; }
        }
      `}</style>
    </div>
  );
};

export default SecuritySystemSetup;