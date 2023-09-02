import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden flex-1 justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-base text-white cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {/* We could use gap in <ul> or this  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } */}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
