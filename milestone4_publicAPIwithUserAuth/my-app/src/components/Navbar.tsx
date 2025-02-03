"use client"; // Ensures this component is run on the client-side

import { FaSearch, FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Header Section for Desktop */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#252B42]">
          <Link href="/">Bandage</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center w-full space-x-6 font-montserrat">
          {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-800 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-[#23A6F0] hover:text-blue-600">
            <FaSearch />
          </span>
          <span className="text-[#23A6F0] hover:text-blue-600">
            <FaShoppingCart />
          </span>
          <span className="text-[#23A6F0] hover:text-blue-600">
            <FaHeart />
          </span>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#252B42] focus:outline-none"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-lg z-50`}
      >
        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center space-y-4 py-4 font-montserrat">
          {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-gray-800 hover:text-blue-600 text-xl"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Login/Register Link */}
        <div className="text-center py-2">
          <Link
            href="/login"
            className="block text-[#23A6F0] hover:text-blue-600 text-xl"
          >
            Login / Register
          </Link>
        </div>

        {/* Icons (Mobile) */}
        <div className="flex justify-center space-x-4 py-4">
          <span className="text-[#23A6F0] hover:text-blue-600">
            <FaSearch />
          </span>
          <span className="text-[#23A6F0] hover:text-blue-600">
            <FaShoppingCart />
          </span>
          <span className="text-[#23A6F0] hover:text-blue-600">
            <FaHeart />
          </span>
        </div>
      </div>
    </nav>
  );
}
