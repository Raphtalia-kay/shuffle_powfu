import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const GallerySlide = () => {
  const galleryPhoto = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/3f/5a/8d/3f5a8d00ab07480cce0e35fa36657920.jpg",
      width: 600,
      height: 400,
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/4c/f6/39/4cf639ad159b8bb65932e9bba9b581f1.jpg",
      width: 600,
      height: 400,
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/a9/2e/7b/a92e7bd2e13e43043222fad3e905c56d.jpg",
      width: 600,
      height: 400,
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/c0/39/a8/c039a85c52ecb1c974815974b1cab104.jpg",
      width: 600,
      height: 400,
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/c9/5d/09/c95d091cbdd43d162dfa780f74d9a531.jpg",
      width: 600,
      height: 400,
    },
  ];
  const photoGalleryNew = galleryPhoto.slice(0, 2);
  const photoGalleryNew2 = galleryPhoto.slice(2, 4);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <>
      <div className="flex ">
        {/* large photo  */}
        <div className="w-[52%] object-fill  h-screen">
          <a
            href="https://i.pinimg.com/564x/c9/5d/09/c95d091cbdd43d162dfa780f74d9a531.jpg"
            // data-pswp-width={image?.width}
            // data-pswp-height={image?.height}
            // key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.pinimg.com/564x/c9/5d/09/c95d091cbdd43d162dfa780f74d9a531.jpg"
              className="w-full h-full"
              alt=""
            />
          </a>
        </div>
        {/* small grid photo  */}
        <div className="flex flex-wrap  h-screen ">
        
          <div className="w-[50%] h-[50%] ">
          {photoGalleryNew?.map((image, index) => (
             
            
              <a
               href={image?.url}
               // data-pswp-width={image?.width}
               // data-pswp-height={image?.height}
               key={index}
               target="_blank"
               rel="noreferrer"
             >
               <img src={image?.url} className="w-full h-full" alt="" />
             </a> 
           
         ))}
          </div>
          

          <div className="w-[50%] h-[50%] ">
          {photoGalleryNew2?.map((image, index) => (
             
            
              <a
               href={image?.url}
               // data-pswp-width={image?.width}
               // data-pswp-height={image?.height}
               key={index}
               target="_blank"
               rel="noreferrer"
             >
               <img src={image?.url} className="w-full h-full" alt="" />
             </a> 
           
         ))}
          </div>
        </div>
      
      </div>
  
    </>
  );
};

export default GallerySlide;
