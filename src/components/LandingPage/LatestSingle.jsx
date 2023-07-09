import React from 'react'
import AlbumCarousel from './AlbumCarousel'

const LatestSingle = () => {
 
  return (
    <>
       <section className="bg-[#1E3604]  ">
        <div className="max-w-[1140px] mx-auto pt-10 ">
          {/* Text  */}
          <div className="pb-12   select-none">
            <h3 className="text-4xl font-semibold text-center text-white">
              Latest Single Album
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
             Hip hop music, Lo-fi, Alternative/Indie, Hip-Hop/Rap
            </p>
          </div>
          <AlbumCarousel  />
          </div>
          </section>
    </>
  )
}

export default LatestSingle
