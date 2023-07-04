import React from "react";
import HeroPowfu from "../assets/powfu-interview-ep-tell-me-your-feelings-and-i-wont-tell-you-mine-scaled.jpg";
import album from "../assets/e286dc53-c76e-476f-a277-5d9baa78bc64.sized-1000x1000.avif";
import "../App.css"

import Navbar from "./NavAndFoot/Navbar";
import ImageSection from "./LandingPage/ImageSection";

const Hero = () => {
  return (
    <>
      <div className="homeBg  ">
        {/* <img className="absolute left-0 top-0 -z-10" src={HeroPowfu} alt="" /> */}
        {/* Navbar  */}
       <div className="bg-black bg-opacity-50">
       <Navbar/>
     <div className="HeroText max-w-[1140px] mx-auto   flex flex-col pt-32 pb-10  items-center h-[90%]">
      <h1 className="text-7xl font-bold text-white text-center">
      Powfu Concert  : 2023 <br /> Live Tour
      </h1>
     <div className="px-72 ">
     <p className="text-white text-base ">After several years of studying and contributing to the lo-fi hip-hop scene on YouTube, emotive songwriter and artist Powfu has emerged from a small town outside of Vancouver and has established himself as an important player in bringing the unique lo-fi genre into the mainstream around the world</p>
     <div className="flex justify-center pt-10">
     <button className="  border-2 bg-white text-black px-10 py-3 
      rounded-2xl ">Listen</button>
     </div>
     </div>

     
     </div>
{/* img section  */}
<ImageSection/>
       </div>
      </div>
    </>
  );
};

export default Hero;
