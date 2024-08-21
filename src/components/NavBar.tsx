// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-10 z-50  w-full">
      <div className="container relative  flex items-center justify-between">
        <div className="ml-[10%] flex flex-shrink scale-150 pl-12 ">
          <img src="logo.png" alt="Logo" className="h-8" />
        </div>

        <div className="absolute inset-x-1/2 left-1/2 top-0 flex w-52 -translate-x-1/2 transform items-center justify-center">
          <div className="space-x-16 bg-white bg-opacity-15 p-4 px-16 backdrop-blur-md">
            <a href="#" className="subheading hover:text-orange-500">
              Home
            </a>
            <a href="#" className="subheading hover:text-orange-500">
              About
            </a>
            <a href="#" className="subheading hover:text-orange-500">
              Services
            </a>
            <a href="#" className="subheading hover:text-orange-500">
              Contact
            </a>
          </div>
        </div>

        <button className="mr-[10%] h-14 flex-shrink-0 bg-orange-600  px-16 hover:bg-[#864646]">
          <div className="subheading"> Getting Started </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
