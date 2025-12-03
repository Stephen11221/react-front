import React from 'react';
import { 
  FaMusic, 
  FaTools, 
  FaVolumeUp, 
  FaCar, 
  FaSlidersH, 
  FaCheckCircle, 
  FaWrench,
  FaMicrophone
} from 'react-icons/fa';
import Footer from '../components/footer';
import install1 from "../images/install1.jpg";
import install2 from "../images/install2.jpg";
import install3 from "../images/install3.jpg";

const CarAudioInstallation = () => {

  const packages = [
    {
      title: "Basic Upgrade",
      desc: "Perfect for replacing factory radios or blown speakers.",
      price: "From KSh 15,000",
      features: [
        "Head Unit Installation",
        "Door Speaker Replacement",
        "Basic Wiring Check",
        "1-Hour Service"
      ]
    },
    {
      title: "Stage 1 System",
      desc: "Add bass and clarity to your daily drive.",
      price: "From KSh 25,000",
      features: [
        "Underseat Subwoofer Install",
        "Amplifier Wiring Kit",
        "Speaker Phase Tuning",
        "Factory Integration"
      ]
    },
    {
      title: "Stage 2 Performance",
      desc: "Complete sound overhaul for audiophiles.",
      price: "From KSh 40,000",
      features: [
        "4-Channel Amp Installation",
        "Component Speaker Setup",
        "Sound Deadening (Doors)",
        "DSP Tuning & Calibration"
      ]
    },
    {
      title: "Custom Fabrication",
      desc: "Show-quality custom boot builds and A-pillars.",
      price: "Custom Quote",
      features: [
        "Custom Subwoofer Box",
        "A-Pillar Pods",
        "LED Lighting Integration",
        "Full Car Soundproofing"
      ]
    }
  ];

  const process = [
    { icon: <FaMusic />, title: "1. Consultation", text: "We analyze your music taste and current vehicle setup." },
    { icon: <FaWrench />, title: "2. Installation", text: "Professional fitting with soldered connections and neat wiring." },
    { icon: <FaSlidersH />, title: "3. Tuning", text: "RTA calibration to ensure the perfect soundstage." },
    { icon: <FaCheckCircle />, title: "4. Handover", text: "Demo session and warranty activation." }
  ];

  return (
    <div className="audio-page">
      
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">Professional Installation</div>
            <h1>Experience Concert Quality <span className="text-green">Sound</span></h1>
            <p>
              From basic radio swaps to competition-grade custom builds. We combine 
              expert craftsmanship with audio engineering to transform your ride.
            </p>
            <button className="btn-primary">Book Installation Slot</button>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop" 
              alt="Car Audio Setup" 
            />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Installation Packages</h2>
          <p className="section-sub">Transparent labor pricing for standard services (Equipment cost separate)</p>
          
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <div key={i} className="package-card">
                <h3>{pkg.title}</h3>
                <p className="desc">{pkg.desc}</p>
                <div className="price">{pkg.price}</div>
                <ul>
                  {pkg.features.map((feat, j) => (
                    <li key={j}><FaCheckCircle className="icon"/> {feat}</li>
                  ))}
                </ul>
                <button className="pkg-btn">Select Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / PROCESS */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            {process.map((step, i) => (
              <div key={i} className="process-card">
                <div className="process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="gallery-section">
        <div className="container">
            <h2 className="section-title">Recent Installs</h2>
            <div className="gallery-grid">
                <img src={install1} alt="Install 1" />
                <img src={install2} alt="Install 2" />
                <img src={install3} alt="Install 3" />
            </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="booking-section">
        <div className="container booking-container">
            <div className="form-wrapper">
                <h3>Book Your Installation</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Car Model</label>
                        <input type="text" placeholder="e.g. Subaru Forester 2015" />
                    </div>
                    <div className="form-group">
                        <label>Service Needed</label>
                        <select>
                            <option>Head Unit Install</option>
                            <option>Speaker Upgrade</option>
                            <option>Subwoofer Install</option>
                            <option>Full System Build</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Preferred Date</label>
                        <input type="date" />
                    </div>
                    <button className="submit-btn">Confirm Booking</button>
                </form>
            </div>
            <div className="booking-info">
                <h3>Why Professional Install?</h3>
                <ul>
                    <li>✅ <strong>Safety:</strong> We use proper fusing to prevent electrical fires.</li>
                    <li>✅ <strong>Warranty:</strong> Lifetime warranty on all workmanship.</li>
                    <li>✅ <strong>Tuning:</strong> Equipment is only as good as the tune.</li>
                    <li>✅ <strong>Stealth:</strong> Hidden wiring and factory-look finish.</li>
                </ul>
            </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .audio-page { background: #0c0c0c; color: #e5e5e5; font-family: 'Segoe UI', sans-serif; min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .text-green { color: #10b981; }
        .section-title { font-size: 2.2rem; text-align: center; color: white; margin-bottom: 10px; }
        .section-sub { color: #9ca3af; text-align: center; margin-bottom: 50px; }

        /* Hero */
        .hero-section { padding: 80px 0; background: #0c0c0c; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
        .badge { display: inline-block; background: #064e3b; color: #34d399; border: 1px solid #059669; padding: 6px 14px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 20px; }
        .hero-content h1 { font-size: 3.2rem; color: white; line-height: 1.2; margin-bottom: 20px; }
        .hero-content p { color: #d1d5db; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; }
        .hero-image img { width: 100%; border-radius: 12px; box-shadow: 0 0 30px rgba(16, 185, 129, 0.1); }
        .btn-primary { background: #10b981; color: white; border: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 1rem; }
        .btn-primary:hover { background: #059669; }

        /* Packages */
        .packages-section { padding: 60px 0; }
        .packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
        .package-card { background: #121212; border: 1px solid #1f1f1f; padding: 30px; border-radius: 12px; transition: 0.3s; display: flex; flex-direction: column; }
        .package-card:hover { transform: translateY(-5px); border-color: #10b981; }
        .package-card h3 { color: white; margin-bottom: 10px; }
        .package-card .desc { color: #9ca3af; font-size: 0.9rem; margin-bottom: 20px; height: 40px; }
        .package-card .price { color: #10b981; font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
        .package-card ul { list-style: none; padding: 0; margin-bottom: 25px; flex-grow: 1; }
        .package-card li { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-size: 0.9rem; }
        .package-card .icon { color: #10b981; }
        .pkg-btn { width: 100%; background: #1f1f1f; border: 1px solid #333; color: white; padding: 10px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
        .pkg-btn:hover { background: #10b981; border-color: #10b981; }

        /* Process */
        .process-section { padding: 60px 0; background: #121212; }
        .process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
        .process-card { text-align: center; }
        .process-icon { width: 60px; height: 60px; background: #1a1a1a; color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 20px; }
        .process-card h4 { color: white; margin-bottom: 10px; }
        .process-card p { color: #9ca3af; font-size: 0.9rem; }

        /* Gallery */
        .gallery-section { padding: 60px 0; }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gallery-grid img { width: 100%; height: 250px; object-fit: cover; border-radius: 8px; border: 1px solid #1f1f1f; transition: 0.3s; }
        .gallery-grid img:hover { transform: scale(1.02); }

        /* Booking Form */
        .booking-section { padding: 80px 0; background: #0c0c0c; border-top: 1px solid #1f1f1f; }
        .booking-container { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .form-wrapper { background: #121212; padding: 40px; border-radius: 12px; border: 1px solid #1f1f1f; }
        .form-wrapper h3 { color: white; margin-bottom: 20px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; color: #d1d5db; margin-bottom: 8px; font-size: 0.9rem; }
        .form-group input, .form-group select { width: 100%; background: #1a1a1a; border: 1px solid #333; padding: 12px; border-radius: 6px; color: white; outline: none; }
        .submit-btn { width: 100%; background: #10b981; color: white; border: none; padding: 12px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        
        .booking-info ul { list-style: none; padding: 0; }
        .booking-info li { margin-bottom: 15px; color: #d1d5db; line-height: 1.6; }
        .booking-info h3 { color: white; margin-bottom: 20px; }

        @media (max-width: 900px) {
            .hero-grid, .booking-container, .gallery-grid { grid-template-columns: 1fr; }
            .hero-image { order: -1; margin-bottom: 30px; }
        }
      `}</style>
    </div>
  );
};

export default CarAudioInstallation;