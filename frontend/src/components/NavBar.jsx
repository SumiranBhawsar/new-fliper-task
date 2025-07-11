import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-800 flex items-center gap-2">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/home.png"
            alt="logo"
            className="w-6 h-6"
          />
          <span>
            Real <span className="text-gray-700">Trust</span>
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
