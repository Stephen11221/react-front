import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import FeaturedProducts from "../components/Featuredproduct";
import Services from "../components/Featureservice";
import Servicessection from "../components/Servicessection";
import Footer from "../components/footer";
import TestimonialsSection from "../components/Testimonialsection";
import FreeGuide from "../components/FreeGuide";

const Home = () => {
  return (
    <div className="home">

      <HeroSection />
      <FeaturedProducts />
      <Services />
      <Servicessection/>
      <TestimonialsSection />
      <FreeGuide />
      <Footer />
    </div>
  );
};

export default Home;
