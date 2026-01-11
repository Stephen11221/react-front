import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Community from "./pages/community";
import News from  "./pages/news";
import Contact from "./pages/contact";
import Cybersecurity from "./pages/cybersecurity";
import DigitalMarketing from "./pages/Marketing";
import CarAudioInstallation from "./pages/CarAudioInstallation";
import SecuritySystemSetup from "./pages/SecuritySystemSetup";

zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/software" element={<SoftwareDevelopment />} />
        <Route path="/services/marketing" element={<DigitalMarketing />} />
        <Route path="/services/caraudio" element={<CarAudioInstallation />} />
        <Route path="/services/security" element={<SecuritySystemSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
