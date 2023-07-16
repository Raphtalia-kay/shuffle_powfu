import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import LatestAlbum from "../components/LandingPage/LatestAlbum";
import LatestSingle from "../components/LandingPage/LatestSingle";
import LatestNews from "../components/LandingPage/LatestNews";
import Footer from "../components/NavAndFoot/Footer";
import UpperFooter from "../components/NavAndFoot/UpperFooter";
import GallerySlide from "../components/LandingPage/GallerySlide";
import TourSection from "../components/LandingPage/TourSection";

import "./Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-black ">
        <div id="load">
          <div className="text-4xl">U</div>
          <div className="text-4xl">F</div>
          <div className="text-4xl">W</div>
          <div className="text-4xl">O</div>
          <div className="text-4xl">P</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Hero />

      <LatestAlbum />
      <LatestSingle />
      <LatestNews />
      <GallerySlide />
      <TourSection />
      <UpperFooter />
      <Footer />
    </>
  );
};

export default Home;
