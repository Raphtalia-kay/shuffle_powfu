import React from 'react'
import { NavLink } from "react-router-dom";
import logoLight from "../../assets/logo-loght-a.png";

const Navbar = () => {
  return (
    <>
       <div className="max-w-[1140px] flex items-center justify-between  mx-auto  py-5 z-50 ">
          {/* logo section  */}
          <div className="w-32 ">
            <img src={logoLight} className="w-full" alt="" />
           
          </div>
          <ul className="flex">
              <li className=" list-none cursor-pointer select-none text-white pl-5">
                <NavLink to="">Home</NavLink>
              </li>
              <li className=" list-none cursor-pointer select-none text-white pl-5">
                <NavLink to="">Discography</NavLink>
              </li>
              <li className=" list-none cursor-pointer select-none text-white pl-5">
                <NavLink to="">Tours</NavLink>
              </li>
              <li className=" list-none cursor-pointer select-none text-white pl-5">
                <NavLink to="">Blog</NavLink>
              </li>
              <li className=" list-none cursor-pointer select-none text-white pl-5">
                <NavLink to="">Gallery</NavLink>
              </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
