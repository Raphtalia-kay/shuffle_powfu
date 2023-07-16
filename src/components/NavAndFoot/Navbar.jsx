import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoLight from "../../assets/logo-loght-a.png";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const positionSticky = () => {
    // console.log(scrollPosition);
    return scrollPosition > 40
      ? " bg-[#142303]   fixed top-0 w-full  z-50  py-3 "
      : "  z-50 bg-white bg-opacity-20  py-5 ";
  };
  const backgroundChange = () => {
    // console.log("iyjj")
    return scrollPosition > 40 ? "" : "";
  };
  return (
    <>
      <nav
        className={
          ` transition-all ease-in-out duration-500 shadow-sm ` +
          positionSticky()
        }
      >
        <div className="max-w-[1140px] flex items-center justify-between mx-auto ">
          {/* logo section  */}
          <Link to="/">
            <div className="w-32 active:opacity-60 duration-200 ">
              <img src={logoLight} className="w-full" alt="" />
            </div>
          </Link>
          <ul className="flex">
            <li className=" list-none cursor-pointer select-none text-white pl-7  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white pl-7  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink to="/discography">Discography</NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white pl-7  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink to="/tours">Tours</NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white pl-7  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white pl-7  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
