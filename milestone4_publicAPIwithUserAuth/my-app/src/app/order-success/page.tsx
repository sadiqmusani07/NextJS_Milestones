'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OrderSuccess = () => {
  const router = useRouter();

  // Optional: Use sessionStorage or localStorage to check if the order was placed
  useEffect(() => {
    if (!sessionStorage.getItem('order-placed')) {
      router.push('/');
    } else {
      // Wait for a couple of seconds before redirecting
      setTimeout(() => {
        sessionStorage.removeItem('order-placed');
        router.push('/');
      }, 3000); // 3 seconds delay before redirect
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">Order Placed Successfully!</h2>
        <p className="text-lg mb-6">Thank you for your purchase. Your order is being processed.</p>
        <p className="text-lg">Redirecting you to the homepage...</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
