import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import FeaturedProducts from "../components/Featuredproduct";
import Services from "../components/Services";
import Footer from "../components/footer";
import TestimonialsSection from "../components/Testimonialsection";
import FreeGuide from "../components/FreeGuide";

const Home = () => {
  return (
    <div className="home">

      <HeroSection />
      <FeaturedProducts />    
      <Services/>
      <TestimonialsSection />
      <FreeGuide />
      <Footer />
    </div>
  );
};

export default Home;
