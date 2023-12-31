import React from 'react'
import AlbumCarousel from './AlbumCarousel'

const LatestSingle = () => {
 
  return (
    <>
       <div className="bg-[#1E3604]  ">
        <div className="max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] min-h-screen mx-auto  md:pt-8 ">
          {/* Text  */}
          <div className="pb-12   select-none">
            <h3 className=" text-xl md:text-4xl font-semibold text-center text-white">
              Latest Single Album
            </h3>
            <p className=" text-md md:text-xl  text-center text-white pt-[8px]">
             Hip hop music, Lo-fi, Alternative/Indie, Hip-Hop/Rap
            </p>
          </div>
        <div className="flex flex-wrap justify-center items-center mx-auto gap-2 md:gap-5  xl:gap-4">
        <AlbumCarousel  />
        </div>
          </div>
          </div>
    </>
  )
}

export default LatestSingle
