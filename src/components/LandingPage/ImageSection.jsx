import React from "react";
import album from "../../assets/e286dc53-c76e-476f-a277-5d9baa78bc64.sized-1000x1000.avif";
import soundCloud from "../../assets/podcast_badge-soundcloud.png";
import spotify from "../../assets/5ece500f123d6d0004ce5f8a.png";

const ImageSection = () => {
  return (
    <>
      {/* img section  */}
      <div className="max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto pt-10  md:pt-24  md:pb-20">
        <div className="relative ">
          <img src={album} alt="" />

          {/* <div className="bg-black bg-opacity-20 absolute top-0 left-0 w-full h-full "></div> */}
          <div className="absolute  bottom-16 left-3 md:bottom-40 z-30 md:left-20">
            <h1 className="text-lg md:text-6xl text-white font-semibold select-none">
              New Album <br />
              Now Available
            </h1>
          </div>
          <div className="absolute bottom-10 left-3 md:bottom-20 md:left-20 ">
            <div className="flex items-center">
              <a href="https://soundcloud.com/powfu/sets/verses-that-never-surfaced">
                <div className="md:w-44 w-16  ">
                  <img src={soundCloud} className="w-full " alt="" />
                </div>
              </a>
              <div className="md:w-44 w-16   ">
                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3Ec90s?si=354323a6194d4043">
                  <img src={spotify} className="w-full" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
