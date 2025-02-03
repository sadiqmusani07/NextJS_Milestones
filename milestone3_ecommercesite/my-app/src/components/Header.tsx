// src/components/Header.tsx
import { useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaShoppingBasket, FaHeart } from "react-icons/fa";

export default function Header() {
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Bandage</div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <div
          className="relative"
          onMouseEnter={() => setShopDropdownOpen(true)}
          onMouseLeave={() => setShopDropdownOpen(false)}
        >
          <span className="flex items-center cursor-pointer">
            Shop <span className="ml-1">▼</span>
          </span>
          {isShopDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
              <Link href="/shop/men">
                <a className="block px-4 py-2 hover:bg-gray-100">Men</a>
              </Link>
              <Link href="/shop/women">
                <a className="block px-4 py-2 hover:bg-gray-100">Women</a>
              </Link>
              <Link href="/shop/kids">
                <a className="block px-4 py-2 hover:bg-gray-100">Kids</a>
              </Link>
            </div>
          )}
        </div>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/pages">Pages</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <FaUser />
            <span className="hidden sm:inline">Login / Register</span>
          </a>
        </Link>
        <button className="text-gray-700 hover:text-gray-900">
          <FaSearch />
        </button>
        <button className="text-gray-700 hover:text-gray-900">
          <FaShoppingBasket />
        </button>
        <button className="text-gray-700 hover:text-gray-900">
          <FaHeart />
        </button>
      </div>
    </header>
  );
};

