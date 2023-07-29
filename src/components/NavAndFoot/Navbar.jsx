import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoLight from "../../assets/logo-loght-a.png";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  const loation = useLocation();
  const currentRoute = location?.pathname;
  const [activeState, setactiveState] = useState(currentRoute);

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
      ? " bg-[#142303]  fixed top-0 w-full  z-50  py-3 "
      : "   bg-white bg-opacity-10 z-50 w-full  py-5 ";
  };
  const backgroundChange = () => {
    // console.log("iyjj")
    return scrollPosition > 40 ? "" : "";
  };
  const handleActive = (link) => {
    setactiveState(link);
  };
  return (
    <>
      <nav
        className={
          ` transition-all ease-in-out duration-500 shadow-sm ` +
          positionSticky()
        }
      >
        <div className=" max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] flex items-center justify-between mx-auto ">
          {/* logo section  */}
          <Link to="/">
            <div className=" w-20 md:w-32 active:opacity-60 duration-200 ">
              <img src={logoLight} className="w-full" alt="" />
            </div>
          </Link>
          <ul className="md:flex hidden">
            <li className=" list-none cursor-pointer select-none text-white md:pl-5  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink
                to="/"
                className={`${
                  activeState === "/" ? " underline underline-offset-8" : ""
                }`}
                onClick={() => handleActive("/")}
              >
                Home
              </NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white md:pl-5  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink
                to="/about"
                className={`${
                  activeState === "/about"
                    ? " underline underline-offset-8"
                    : ""
                }`}
                onClick={() => handleActive("/about")}
              >
                About
              </NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white md:pl-5  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink
                to="/discography"
                className={`${
                  activeState === "/discography"
                    ? " underline underline-offset-8"
                    : ""
                }`}
                onClick={() => handleActive("/discography")}
              >
                Discography
              </NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white md:pl-5  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink
                to="/tours"
                className={`${
                  activeState === "/tours"
                    ? " underline underline-offset-8"
                    : ""
                }`}
                onClick={() => handleActive("/tours")}
              >
                Tours
              </NavLink>
            </li>
            <li className=" list-none cursor-pointer select-none text-white md:pl-5  duration-500 ease-in-out hover:scale-125 hover:font-semibold active:opacity-70">
              <NavLink
                to="/blog"
                className={`${
                  activeState === "/blog" ? " underline underline-offset-8" : ""
                }`}
                onClick={() => handleActive("/blog")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <Burger
            className="md:hidden"
            color="white"
            opened={opened}
            onClick={toggle}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
