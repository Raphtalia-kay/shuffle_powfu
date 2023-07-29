import React from 'react'
import img from "../../assets/a0a1f48ade12a780eb1d7a926e9df3e0.jpg"
import Navbar from '../NavAndFoot/Navbar'
import "./Biography.css"
import Content from './Content'

const Biography = () => {
  
  return (
    <>
       <div className="biography">
      <div className="bg-[#1e3604] bg-opacity-50">
       <Navbar/>
     <div className=" max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto -translate-x-20 translate-y-60 md:-translate-x-96 md:translate-y-10 min-h-screen">
      <h1 className=" text-4xl md:text-[150px] font-bold   uppercase mb-0 text-white text-center select-none md:mt-32  md:mb-20 ">Powfu
      </h1>
      <h3 className=" text-2xl md:text-[70px]   font-semibold uppercase text-[#1E3604] text-center select-none ">
        Biography
      </h3>
    
    
     </div> 
    
     </div>

     
     </div>
    </>
  )
}

export default Biography
