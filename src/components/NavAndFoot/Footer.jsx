import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#152602]">
        <div className=" max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto py-5 md:py-10 flex justify-between">
          <small className="text-white text-[10px] md:text-sm">
            © 2023 Powfu Shuffle , ALl Rights Reserved
          </small>
          <small className="text-white text-xs md:text-sm">
            Powered by Reactjs
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
