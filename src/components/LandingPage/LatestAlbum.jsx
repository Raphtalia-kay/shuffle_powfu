import React from "react";
import latestalbum from "../../assets/Album.png";
import Disc from "../../assets/Group3.png";
import "./LatestAlbum.css";
import SongList from "./SongList";
const LatestAlbum = () => {
  return (
    <>
      <div className="bg-[#1E3604] ">
        <div className="max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] min-h-screen py-16 mx-auto   ">
          {/* Text  */}
          <div className="pb-8">
            <h3 className=" text-xl md:text-4xl font-semibold text-center text-white">
              Latest Album - "Flooding the Gates"
            </h3>
            <p className=" text-md md:text-xl  text-center text-white pt-[8px]">
              Powfu, Ouse, Snow{" "}
            </p>
          </div>
          {/*  div  */}
          <div className="  flex flex-col gap-3 md:flex-row items-center justify-between">
            {/* image */}
            <div className=" w-[60%] md:w-[36%] group relative">
              <div className="w-full select-none rounded-lg absolute z-10 -left-10 md:left-0  overflow-hidden shadow-lg ">
                <img src={latestalbum} className="w-full " alt="" />
              </div>
              <div className="w-full translate-x-[25%] md:translate-x-[35%] ">
                <div className="animate-spin-slow select-none">
                  <img src={Disc} className="w-full" alt="Disc" />
                </div>
              </div>
            </div>

            {/* song  */}
            <div className="md:w-[45%] max-w-xs md:max-w-[700px] xl:max-w-[1140px]">
              <SongList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestAlbum;
