'use client';

import { useState, useCallback } from 'react';
import { useCart } from '../context/CartContext';
import { useSession } from 'next-auth/react';
import { urlFor } from '@/sanity/lib/image'; // Ensure you have this utility
import { Product } from '../../types/product';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

interface ProductClientComponentProps {
  product: Product; // Ensure product has stock and other properties
}

export default function ProductClientComponent({ product }: ProductClientComponentProps): JSX.Element {
  const { addToCart } = useCart();
  const { data: session } = useSession();
  const [showError, setShowError] = useState<boolean>(false);
  const [stockError, setStockError] = useState<boolean>(false); // For handling stock error message

  // Add to cart handler
  const handleAddToCart = useCallback((): void => {
    if (!session) {
      setShowError(true);
      const timer = setTimeout(() => setShowError(false), 3000);
      return clearTimeout(timer);
    }

    if (product.stock <= 0) {
      setStockError(true); // Show error if stock is 0
      const timer = setTimeout(() => setStockError(false), 3000);
      return clearTimeout(timer);
    }

    // Check the existing quantity in the cart
    const existingItem = JSON.parse(localStorage.getItem('cart') || '[]').find((item: any) => item._id === product._id);
    const newQuantity = existingItem ? existingItem.quantity + 1 : 1;

    // If quantity exceeds stock, show error message
    if (newQuantity > product.stock) {
      setStockError(true); // Show error if adding this quantity exceeds stock
      const timer = setTimeout(() => setStockError(false), 3000);
      return clearTimeout(timer);
    }

    // Prepare the item to be added to cart
    const cartItem = {
      _id: product._id,
      name: product.title,
      price: product.price,
      image: urlFor(product.productImage).url(),
      quantity: newQuantity,
      stock: product.stock, // Pass stock value to Cart Context
    };

    addToCart(cartItem);
  }, [session, product, addToCart]);

  return (
    <div className="flex flex-col bg-white">
      {/* Header Section */}
      <Header />

      {/* Product Section (Image on left, Details on right) */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start p-6">
        {/* Image Section */}
        <div className="sm:w-1/2 w-full mb-6 sm:mb-0">
          <Image
            src={urlFor(product.productImage).url()} // Use utility to get image URL
            alt={product.title}
            className="w-full h-auto object-contain rounded-lg"
            loading="lazy"
            height={400} // Adjusted height
            width={400}  // Adjusted width
          />
        </div>

        {/* Product Details Section */}
        <div className="sm:w-1/2 w-full sm:pl-6">
          <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-4 text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>

          {/* Stock check */}
          {product.stock <= 0 ? (
            <div className="mt-4 text-red-500">Out of Stock</div>
          ) : (
            <div className="mt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`Add ${product.title} to cart`}
                disabled={product.stock <= 0} // Disable if stock is 0 or less
              >
                Add to Cart
              </button>
            </div>
          )}

          {/* Error Messages */}
          {showError && (
            <div className="mt-2 text-red-500 text-sm bg-red-50 p-2 rounded-md" role="alert">
              Please <Link href="/login">login</Link> to add items to cart
            </div>
          )}
          {stockError && (
            <div className="mt-2 text-red-500 text-sm bg-red-50 p-2 rounded-md" role="alert">
              Stock is limited! Cannot add more than available
            </div>
          )}
          
          {/* Badges for New or Discounted Items */}
          {product.isNew && (
            <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              New
            </span>
          )}
          {product.discountPercentage && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
