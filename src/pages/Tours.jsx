import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout';
import { VscPlay } from 'react-icons/vsc';
import TourList from '../components/Tours/TourList';
import SocialMediacard from '../components/Discography/SocialMediacard';
import TourHero from '../components/Tours/TourHero';
import UpperFooter from '../components/NavAndFoot/UpperFooter';
import Footer from '../components/NavAndFoot/Footer';
import "./Home.css";

const Tours = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
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
       
          <TourHero/>
      <TourList/>
      <SocialMediacard/>
   <UpperFooter/>
   <Footer/>
   
      </>
    );
  };

export default Tours
