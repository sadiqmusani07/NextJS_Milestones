'use client';  // Add this line to indicate client-side rendering

import { useState } from "react";
import Image from "next/image";
import CardText from "./CardText";
import pic1 from "@/../public/assets/product.png";
import pic2 from "@/../public/assets/product1.png";
import pic3 from "@/../public/assets/product2.png";
import pic4 from "@/../public/assets/product3.png";
import pic5 from "@/../public/assets/product4.png";
import pic6 from "@/../public/assets/product5.png";
import pic7 from "@/../public/assets/product6.png";
import pic8 from "@/../public/assets/product7.png";
import pic9 from "@/../public/assets/EP_Men.png";
import pic10 from "@/../public/assets/EP_Women.png";
import pic11 from "@/../public/assets/EP_Accessories.png";
import pic12 from "@/../public/assets/EP_Kids.png";

export default function Product() {
  // Array of 12 products that will be shown in each page
  const products = [pic9, pic10, pic11, pic12, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products per page
  
  // Handle previous and next page
  const nextPage = () => {
    if (currentPage < 3) { // Only allow next page until page 3
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) { // Only allow prev page if it's not the first page
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle page click
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Pagination range (calculating total pages, we are limiting it to 3 pages)
  const pageNumbers = [1, 2, 3];  // Limiting to pages 1, 2, and 3

  return (
    <div className="w-full flex justify-center bg-[#FAFAFA] py-[80px]">
      <div className="max-w-screen-xl w-full px-4 sm:px-6 lg:px-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Cards */}
          {products.map((pic, index) => (
            <div key={index} className="w-full h-auto flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-[300px]">
                <Image src={pic} alt={`product${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <CardText />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-gray-300 rounded-md"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`px-4 py-2 rounded-md ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={nextPage}
            className="px-4 py-2 bg-gray-300 rounded-md"
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
