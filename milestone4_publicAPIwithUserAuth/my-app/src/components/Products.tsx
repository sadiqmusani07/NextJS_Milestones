"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";  // Import Link from next/link
import { Product } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Number of products per page

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  // Calculate the range of products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full flex justify-center bg-[#FAFAFA] py-[80px]">
      <div className="max-w-screen-xl w-full px-4 sm:px-6 lg:px-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Render products for the current page */}
          {currentProducts.map((product) => (
            <Link
              key={product._id}
              href={`/productDetails/${product.slug.current}`}  // Make sure the slug is passed correctly
            >
              <div
                className="w-full h-auto flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="w-full h-[300px]">
                  {product.productImage && (
                    <Image
                      src={urlFor(product.productImage).url()}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-blue-500 font-bold">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {products.length > productsPerPage && (
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevPage}
              className="px-4 py-2 bg-gray-300 rounded-md"
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => goToPage(number)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {number}
                </button>
              )
            )}

            <button
              onClick={nextPage}
              className="px-4 py-2 bg-gray-300 rounded-md"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
