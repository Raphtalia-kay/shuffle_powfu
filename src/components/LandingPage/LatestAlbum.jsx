import React from "react";
import latestalbum from "../../assets/Album.png";
import Disc from "../../assets/Group3.png";
import "./LatestAlbum.css"
const LatestAlbum = () => {
  return (
    <>
      <section className="bg-[#1E3604]  ">
        <div className="max-w-[1140px] mx-auto py-10 ">
          {/* Text  */}
          <div className="">
            <h3 className="text-4xl font-semibold text-center text-white">
              Latest Album - "Flooding the Gates"
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
              Powfu, Ouse, Snow{" "}
            </p>
          </div>
          {/*  section  */}
          <div className="py-10 ">
            {/* image */}
            <div className=" w-[40%] relative ">
              <div className=" absolute z-10   w-[80%] ">
                <img src={latestalbum} className="w-full" alt="" />
              </div>
              <div className="translate-x-[45%]  -z-20  w-[77%]">
                <img src={Disc} alt="" />
              </div>
            </div>
            {/* song  */}

          </div>
        </div>
      </section>
    </>
  );
};

export default LatestAlbum;
