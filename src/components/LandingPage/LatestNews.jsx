import React from 'react'
import { ArticlesCardsGrid } from './NewsCard'

const LatestNews = () => {
  return (
    <>
      <div className="bg-[#1E3604] pb-32 ">
        <div className="max-w-[1140px]  mx-auto  ">
          {/* Text  */}
          <div className="pb-8">
            <h3 className="text-4xl font-semibold text-center text-white">
              Latest News
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
            Canadian lo-fi rapper Isaiah Faber
            </p>
          </div>
         <div className="pt-8">
         <ArticlesCardsGrid/>
         </div>
          </div>
          </div>
    </>
  )
}

export default LatestNews
