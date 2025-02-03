import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 font-montserrat">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center bg-gray-100 px-6 py-4">
          {/* Logo and Name */}
          <div>
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-blue-600 text-xl">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-sm">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#252B42] mb-4">Company Info</h4>
            <ul className="text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-[#252B42] mb-4">Legal</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies Policy</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-[#252B42] mb-4">Features</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-[#252B42] mb-4">Resources</h4>
            <ul className="text-gray-600 space-y-2">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold text-[#252B42] mb-4">Get in Touch</h4>
            <form className="flex gap-2 items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 w-56 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-600">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p>Made With Love By Finland. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
