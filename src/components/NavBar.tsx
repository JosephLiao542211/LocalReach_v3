// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-4 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex flex-shrink-0 scale-125 items-center pl-10 md:scale-150">
          <img src="logo.png" alt="Logo" className="h-8 md:h-10" />
        </div>

        {/* Centered Navigation Links */}
        <div className="absolute inset-x-1/2 left-1/2 top-0 flex -translate-x-1/2 transform items-center justify-center">
          <div className="space-x-8 bg-white bg-opacity-15 p-2 px-8 backdrop-blur-md md:space-x-16 md:p-4 md:px-16">
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

        {/* Button */}
        <button className="h-10 bg-orange-600 px-6 text-sm hover:bg-[#864646] md:h-14 md:px-16 md:text-base">
          <div className="subheading">Getting Started</div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
