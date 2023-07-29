import React from "react";
import amazon from "../../assets/amazon 1.png";
import playstore from "../../assets/GooglePlay 1.png";

const DiscographySlide = () => {
  const albumData = [
    {
      id: 1,
      img_url:
        "https://i.iheart.com/v3/url/aHR0cCUzQSUyRiUyRmltYWdlLmloZWFydC5jb20lMkZpaHItaW5nZXN0aW9uLXBpcGVsaW5lLXByb2R1Y3Rpb24tc2JtZyUyRkExMDMwMUEwMDA1MDA4NDQ4MF8yMDIzMDIyODAwMTgxMjcwOSUyRjQ0ZWFlNjA1ZDEwMmQzMmUyMzk1MDYwN2NjMzZkMjBmLjIwMTI2LmpwZw==?ops=fit(480%2C480)",
      singer: "Powfu",
      name: "Tell me your feelings and i won't tell you mine",
      year: 2023,
    },
    {
      id: 2,
      img_url:
        "https://cdn.albumoftheyear.org/album/577222-surrounded-by-hounds-and-serpents.jpg",
      singer: "Powfu",
      name: "Surrounded by hounds and serpents",
      year: 2022,
    },
    {
      id: 3,
      img_url:
        "https://static.qobuz.com/images/covers/ea/4s/gm4vspqht4sea_600.jpg",
      singer: "Powfu",
      name: "Tinted green",
      year: 2021,
    },
    {
      id: 4,
      img_url:
        "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1f/67/7a/1f677aed-86a2-86e0-d89f-9a92bf26b5c9/886449289080.jpg/1200x1200bb.jpg",
      singer: "Powfu",
      name: "Drinking under the streetlight",
      year: 2021,
    },
    {
      id: 5,
      img_url:
        "https://e.snmc.io/i/600/s/95046af6011857f98a6856a607fe1b94/8587217/powfu-some-boring-love-stories-pt-5-Cover-Art.jpg",
      singer: "Powfu",
      name: "some boring love stories, pt-5",
      year: 2020,
    },
    {
      id: 6,
      img_url:
        "https://i.discogs.com/1JSzcFyiAv2ADIN2w8B9_I7isk5P60gsPYrgC318OX8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODE3/NjM2LTE2MjE1OTEx/NTctMzg4MC5qcGVn.jpeg",
      singer: "Powfu",
      name: "Poems of the past",
      year: 2020,
    },
    {
      id: 7,
      img_url:
        "https://i.scdn.co/image/ab67616d0000b27352520f019e1a3ff99e2ff90a",
      singer: "Powfu",
      name: "Some Boring, Love Stories , pt-3",
      year: 2019,
    },
    {
      id: 8,
      img_url:
        "https://cdns-images.dzcdn.net/images/cover/e2eb91a669946f6af0b046a57cd7d285/500x500.jpg",
      singer: "Powfu",
      name: "Some boring Love Stories",
      year: 2018,
    },
  ];
  return (
    <>
      <div className="  ">
        <div className="max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto    ">
            {/* Text  */}
            <div className="py-8">
            <h3 className="text-4xl font-medium text-center text-white">
              All Albums
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
             
            </p>
          </div>

          <div className="flex justify-center  py-4  flex-wrap  items-center gap-4">
            {albumData?.map((data, index) => {
              return (
                <div className="">
              
                    {/* image */}
                    <div
                     key={index}
                      className=" group  cursor-pointer  shadow-2xl select-none w-60 md:w-96 relative "
                    >
                      <img
                        src={data?.img_url}
                        className="w-full h-full"
                        alt=""
                      />
                     
                      <div className="md:w-96 w-60 h-60 md:h-96  bg-black bg-opacity-70 translate-y-0 absolute top-[50%]   group-hover:-translate-y-[50%] hidden group-hover:block  ">
                    <div className="flex flex-col h-full justify-center items-center mx-auto">
                      <h1 className="text-white text-xl  text-center">
                        {data?.singer}
                      </h1>
                      <h1 className="text-white text-xl  text-center">
                        {data?.name}
                      </h1>
                    </div>
                  </div>
                    </div>
                    {/* amazon and googleplay  */}
                    <div className=" select-none pt-5  md:pl-2 ">
                      <div className="flex justify-center items-center">
                        <a href="https://soundcloud.com/powfu/sets/verses-that-never-surfaced">
                          <div className=" w-28 md:w-44  ">
                            <img src={amazon} className="w-full " alt="" />
                          </div>
                        </a>
                        <div className=" w-32 md:w-48  ">
                          <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3Ec90s?si=354323a6194d4043">
                            <img src={playstore} className="w-full" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscographySlide;
