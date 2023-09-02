import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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
      {/* Mobile Menu */}
      <div className="sm:hidden block items-center justify-end">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className=" flex flex-col flex-1 justify-end items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-base text-white cursor-pointer ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                {/* We could use gap in <ul> or this  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } */}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
