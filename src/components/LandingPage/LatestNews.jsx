import React from 'react'
import { ArticlesCardsGrid } from './NewsCard'

const LatestNews = () => {
  return (
    <>
      <section className="bg-[#1E3604]  ">
        <div className="max-w-[1140px] mx-auto pt-12 ">
          {/* Text  */}
          <div className="pb-12">
            <h3 className="text-4xl font-semibold text-center text-white">
              Latest News
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
            Canadian lo-fi rapper Isaiah Faber
            </p>
          </div>
         <div className="pt-12">
         <ArticlesCardsGrid/>
         </div>
          </div>
          </section>
    </>
  )
}

export default LatestNews
