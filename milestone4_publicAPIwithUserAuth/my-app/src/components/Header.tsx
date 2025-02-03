import { useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaShoppingBasket, FaHeart, FaPowerOff } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const { data: session } = useSession(); // Get session data from NextAuth

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Bandage</div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/pages">Pages</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Conditionally render based on session */}
        {session ? (
          <div className="flex items-center space-x-4">
            {/* Display user's name */}
            <span className="text-gray-700">{session.user?.username || "User"}</span>

            {/* Logout Button */}
            <button
              onClick={() => signOut()}
              className="flex items-center justify-center p-2 rounded-md hover:bg-red-600 bg-red-500 text-white"
              title="Logout"
            >
              <FaPowerOff size={16} />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
          >
            <FaUser />
            <span className="hidden sm:inline">Login / Register</span>
          </Link>
        )}

        {/* Search Icon */}
        <button className="text-gray-700 hover:text-gray-900">
          <FaSearch />
        </button>

        {/* Cart Icon */}
        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
          <FaShoppingBasket />
        </Link>

        {/* Wishlist Icon */}
        <button className="text-gray-700 hover:text-gray-900">
          <FaHeart />
        </button>
      </div>
    </header>
  );
}
