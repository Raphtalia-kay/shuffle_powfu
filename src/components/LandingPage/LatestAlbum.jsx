import React from "react";
import latestalbum from "../../assets/Album.png";
import Disc from "../../assets/Group3.png";
import "./LatestAlbum.css"
const LatestAlbum = () => {
 
  return (
    <>
      <section className="bg-[#1E3604]  ">
        <div className="max-w-[1140px] mx-auto pt-10 ">
          {/* Text  */}
          <div className="pb-10">
            <h3 className="text-4xl font-semibold text-center text-white">
              Latest Album - "Flooding the Gates"
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
              Powfu, Ouse, Snow{" "}
            </p>
          </div>
          {/*  section  */}
          <div className="  flex items-center justify-between">
            {/* image */}
            <div className=" w-[52%]  relative ">
              <div className=" absolute z-10 -top-5  w-[75%] ">
                <img src={latestalbum} className="w-full " alt="" />
              </div>
              <div className="translate-x-[45%]  -z-20  w-[77%]">
                <img src={Disc} alt="" />
              </div>
            </div>
            {/* song  */}
<div className="w-[45%] border-2">
 
</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestAlbum;
