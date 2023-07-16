import React from "react";
import latestalbum from "../../assets/Album.png";
import Disc from "../../assets/Group3.png";
import "./LatestAlbum.css";
import SongList from "./SongList";
const LatestAlbum = () => {
  return (
    <>
      <section className="bg-[#1E3604]  ">
        <div className="max-w-[1140px] mx-auto pt-16 ">
          {/* Text  */}
          <div className="pb-8">
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
            <div className="w-[36%] group relative">
              <div className="w-full select-none rounded-lg absolute z-10 left-0  overflow-hidden shadow-lg ">
                <img src={latestalbum} className="w-full " alt="" />
              </div>
              <div className="w-full translate-x-[35%] ">
                <div className="animate-spin-slow select-none">
                  <img src={Disc} className="w-full" alt="Disc" />
                </div>
              </div>
            </div>

            {/* song  */}
            <div className="w-[45%] ">
              <SongList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestAlbum;
