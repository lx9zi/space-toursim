import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";

import { Link } from "react-router-dom";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  function openNav() {
    setShowNav(!showNav);
  }

  return (
    <div className="flex justify-between items-center p-3 absolute top-4 w-full">
      <img src={logo} alt="logo" />
      <i
        onClick={openNav}
        className={
          showNav
            ? "ri-close-line text-2xl md:hidden text-white cursor-pointer z-behind"
            : "ri-menu-fill text-2xl md:hidden text-white cursor-pointer z-behind"
        }
      ></i>
      <div
        className={
          showNav
            ? "font-body uppercase backdrop-blur-md absolute right-0 top-0 py-0 px-14 text-white md:flex w-3/5 "
            : "font-body uppercase bg-slate-300/10 absolute right-0 top-0 py-7 px-14 text-white hidden md:flex w-1/2"
        }
      >
        <ul
          className={
            showNav
              ? "flex flex-col gap-3 h-screen items-center justify-center "
              : "flex w-full justify-between"
          }
        >
          <Link to="/">
            <li className="hover:border-b border-gray-200 cursor-pointer focus:border-b focus:border-gray-200">
              <span className="font-bold mr-1 inline-block lg:hidden">00 </span>
              home
            </li>
          </Link>
          <Link to="/distnation">
            <li className="hover:border-b border-gray-200 cursor-pointer focus:border-b focus:border-gray-200">
              <span className="font-bold mr-1 inline-block lg:hidden">01 </span>
              distnation
            </li>
          </Link>
          <Link to="/crew">
            <li className="hover:border-b border-gray-200 cursor-pointer focus:border-b focus:border-gray-200">
              <span className="font-bold mr-1 inline-block lg:hidden">02 </span>
              crew
            </li>
          </Link>
          <Link to="/technology">
            <li className="hover:border-b border-gray-200 cursor-pointer focus:border-b focus:border-gray-200">
              <span className="font-bold mr-1 inline-block lg:hidden">03 </span>
              technology
            </li>
          </Link>
        </ul>
      </div>

      <div className=" w-2/5 h-px bg-line absolute top-10 left-32 z-behind hidden lg:flex"></div>
    </div>
  );
}
