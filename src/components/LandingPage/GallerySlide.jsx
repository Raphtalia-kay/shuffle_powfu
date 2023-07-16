import React, { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const GallerySlide = () => {
  const galleryPhoto = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/3f/5a/8d/3f5a8d00ab07480cce0e35fa36657920.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/4c/f6/39/4cf639ad159b8bb65932e9bba9b581f1.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/a9/2e/7b/a92e7bd2e13e43043222fad3e905c56d.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/c0/39/a8/c039a85c52ecb1c974815974b1cab104.jpg",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/c9/5d/09/c95d091cbdd43d162dfa780f74d9a531.jpg",
    },
  ];

  useEffect(() => {}, []);
  return (
    <>
      <div className=" flex ">
        <Gallery>
          {/* Large Photo */}
          <div className="w-[52%]  object-fill h-screen ">
            <Item
              original={galleryPhoto[0]?.url}
              thumbnail={galleryPhoto[0]?.url}
              width="768"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={galleryPhoto[0]?.url}
                  className="w-full h-full"
                />
              )}
            </Item>
          </div>
          <div className="w-[50%] h-[50%] flex flex-wrap">
            {galleryPhoto?.map((photo, index) => {
              if (index != 0) {
                return (
                  <Item
                    key={index}
                    original={photo?.url}
                    thumbnail={photo?.url}
                    width="768"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={photo?.url}
                        className="relative"
                        style={{
                          width: "50%",
                          height: 369.5,
                        }}
                      />
                    )}
                  </Item>
                );
              }
            })}
          </div>
        </Gallery>
      </div>
    </>
  );
};

export default GallerySlide;
