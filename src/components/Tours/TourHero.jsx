import React from 'react'
// import tourimg from "../../assets/Powfu-single-rezzed-up-scaled.webp"
import "./TourHero.css"
import Navbar from '../NavAndFoot/Navbar'
const TourHero = () => {
  return (
    <>
      <div className="tourimg">
      <div className="bg-black bg-opacity-50">
       <Navbar/>
     <div className=" max-w-[1140px] mx-auto    flex flex-col pt-32 pb-10  items-center h-[90%]">
      <h1 className="text-7xl font-bold text-white text-center select-none">
     Tour Dates 
      </h1>
    
     </div>
     </div>

     
     </div>

    </>
  )
}

export default TourHero
