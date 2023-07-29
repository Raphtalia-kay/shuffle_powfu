import React, { useRef, useState } from 'react';
import { Carousel } from '@mantine/carousel';

import Navbar from '../NavAndFoot/Navbar';
import "./HeroSlider.css"

const HeroSlider = () => {
  return (
    <>
      <div className="Heroblog">
      <div className="bg-[#1e3604] bg-opacity-70">
       <Navbar/>
     <div className=" max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto flex justify-center items-center  min-h-screen ">
     {/* <Carousel maw={1440} mx="auto" withIndicators height={1000}>
      <Carousel.Slide>
        <div className="w-screen h-screen">
          <img src="https://i.pinimg.com/564x/00/26/b2/0026b2712d25efa769e1fe6ac811a99b.jpg" className='w-full h-full' alt="" />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide> */}
      {/* ...other slides
    </Carousel> */}
    <h1 className='text-white text-6xl md:text-[110px] font-bold'> New Album out now</h1>
     </div>
     </div>   
     </div>
    </>
  )
}

export default HeroSlider
