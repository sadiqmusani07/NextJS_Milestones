import React from 'react';
import { FaList,FaLeaf, FaAws, FaLyft, FaHooli, FaStripe, FaRedditAlien } from 'react-icons/fa';
import { BiSolidCategoryAlt } from 'react-icons/bi';

export default function ShopPage() {
  return (
    <div className="space-y-8 p-8">
      {/* Wrapper for maximum width */}
      <div className="max-w-screen-xl mx-auto">

        {/* First Div */}
        <div className="flex justify-between items-center bg-gray-200 p-2 rounded">
          <span className="text-gray-700 font-semibold px-6">Shop</span>
          <span className="text-gray-700 font-semibold px-6">
            Home &gt; <span className="font-bold">Shop</span>
          </span>
        </div>

        {/* Second Div - Products with Grey Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-200 px-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="shadow-sm p-4 flex flex-col items-center">
              {/* Image Container */}
              <div className="relative w-full h-[250px] overflow-hidden mb-8"> 
                {/* Increased height and overflow-hidden, margin-bottom added */}
                <img 
                  src={`/assets/shop_0${index + 1}.png`} 
                  alt={`Cloth ${index + 1}`} 
                  className="w-full h-full object-cover" // Removed padding and margin
                />
                {/* Text inside image */}
                {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h3 className="text-lg font-semibold">CLOTHS</h3>
                  <p className="text-sm">5 items</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Third Div - Filters and Views */}
        <div className="flex flex-wrap justify-between items-center mt-8 px-4 w-full">
          {/* Showing all 12 results */}
          <span className="text-gray-700 w-full md:w-auto mb-2 md:mb-0">Showing all 12 results</span>

          <div className="flex justify-center items-center space-x-6 w-full md:w-auto mb-2 md:mb-0">
            {/* Views Text with Icons (centered) */}
            <span className="text-gray-700">Views:</span>
            <span className="p-2 border border-gray-300 rounded">
              <span><BiSolidCategoryAlt /></span> {/* Replace with actual icon if necessary */}
            </span>
            <span className="p-2 border border-gray-300 rounded">
              <span><FaList /></span> {/* Replace with actual icon if necessary */}
            </span>
          </div>

          {/* Popularity Dropdown on Left */}
          <div className="flex items-center space-x-6 w-full md:w-auto mb-2 md:mb-0">
            <div className="relative w-full md:w-auto">
              <select className="border border-gray-300 rounded p-2 pr-8 w-full">
                <option>Popularity</option>
                {/* Add more options if needed */}
              </select>
              <span className="absolute right-2 top-2 text-gray-500">▼</span>
            </div>

            {/* Filter Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto">Filter</button>
          </div>
        </div>

        {/* Fourth Div - Logos with React Icons */}
        <div className="flex flex-wrap justify-center space-x-8 gap-8 px-4 mt-8 w-full">
          {/* Hooli Logo with FaHooli Icon */}
          <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
            <FaHooli size={120} />
          </div>

          {/* Lyft Logo with FaLyft Icon */}
          <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
            <FaLyft size={120} />
          </div>

          {/* Leaf-like Logo */}
          <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
            <FaLeaf size={120} />
          </div>

          {/* Stripe Logo with FaStripe Icon */}
          <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
            <FaStripe size={120} />
          </div>

          {/* AWS Logo */}
          <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
            <FaAws size={120} />
          </div>

          {/* Reddit Alien Logo with FaRedditAlien Icon */}
          <div className="flex justify-center items-center mb-4 w-full sm:w-auto text-gray-600">
            <FaRedditAlien size={120} />
          </div>
        </div>
      </div>
    </div>
  );
}
