"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-800">
      <div className="container py-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Swapnil</div>

        {/* Regular menu for medium and larger screens */}
        <div className="space-x-8 hidden md:flex items-center">
          <a href="#home" className="hover:text-green-400 transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-green-400 transition-colors duration-300">
            About Me
          </a>
          <a href="#experience" className="hover:text-green-400 transition-colors duration-300">
            Experience
          </a>
          <a href="#project" className="hover:text-green-400 transition-colors duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400 transition-colors duration-300">
            Contact
          </a>

        </div>

        {/* Hamburger menu button for small screens */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none text-white hover:text-green-400 transition-colors">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown - Opens from the right - Enhanced UI */}
        <div className={`fixed top-0 right-0 h-screen w-2/3 bg-black/95 backdrop-blur-xl border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center space-y-8 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a href="#home" onClick={toggleMenu} className="text-xl hover:text-green-400 transition-colors">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="text-xl hover:text-green-400 transition-colors">
            About Me
          </a>
          <a href="#experience" onClick={toggleMenu} className="text-xl hover:text-green-400 transition-colors">
            Experience
          </a>
          <a href="#project" onClick={toggleMenu} className="text-xl hover:text-green-400 transition-colors">
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu} className="text-xl hover:text-green-400 transition-colors">
            Contact
          </a>

          <a
            href="https://wa.me/9561742305"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full shadow-lg">
              Connect Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
