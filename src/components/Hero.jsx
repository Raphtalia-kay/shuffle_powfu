import React from "react";
import HeroPowfu from "../assets/powfu-interview-ep-tell-me-your-feelings-and-i-wont-tell-you-mine-scaled.jpg";
import album from "../assets/e286dc53-c76e-476f-a277-5d9baa78bc64.sized-1000x1000.avif";
import "../components/Hero.css";

import Navbar from "./NavAndFoot/Navbar";
import ImageSection from "./LandingPage/ImageSection";

const Hero = () => {
  return (
    <>
      <div className="homeBg  ">
        <div className="bg-black  bg-opacity-50">
          <Navbar />
          {/* h-[90%] */}
          <div className="HeroText  max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto md:min-h-screen  flex flex-col pt-32 pb-10  items-center ">
            <h1 className=" text-4xl md:text-7xl font-bold text-white text-center select-none">
              Powfu Concert : 2023 <br /> Live Tour
            </h1>
            <div className="xl:px-72 ">
              <p className="text-[#d9d4d4] text-xs md:text-base text-center select-none ">
                After several years of studying and contributing to the lo-fi
                hip-hop scene on YouTube, emotive songwriter and artist Powfu
                has emerged from a small town outside of Vancouver and has
                established himself as an important player in bringing the
                unique lo-fi genre into the mainstream around the world
              </p>
              <div className="flex justify-center pt-10">
                <button
                  className=" px-5 py-2  text-sm md:text-md bg-white text-black md:px-10 md:py-3 rounded-lg
      md:rounded-xl active:opacity-50 hover:scale-105 duration-500 ease-in-out hover:bg-[#1E3604] hover:text-white select-none cursor-pointer"
                >
                  Listen
                </button>
              </div>
            </div>
          </div>
          {/* img section  */}
          <ImageSection />
        </div>
      </div>
    </>
  );
};

export default Hero;
