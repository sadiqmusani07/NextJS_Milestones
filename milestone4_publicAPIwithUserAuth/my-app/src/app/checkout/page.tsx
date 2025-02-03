'use client';

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // For router push in app directory
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Import urlFor for Sanity images
import Header from "@/components/Header";

const CheckoutPage = () => {
  const { items, total } = useCart();
  const [shippingAddress, setShippingAddress] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);  // To track the loading state 
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  // Handle order submission
  const handlePlaceOrder = async () => {
    if (!shippingAddress) {
      alert("Please fill in your shipping address!");
      return;
    }

    const orderData = {
      user: { id: session?.user?.id },
      items: items.map(item => ({
        ...item,
        _key: item._id,  // Unique key (you can use the product ID, or generate your own)
      })),
      totalAmount: total,
      shippingAddress: { address: shippingAddress },
      paymentMethod,
      paymentStatus: "Completed",
    };

    setIsLoading(true);  // Start loading

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (response.ok && result.message === "Order placed successfully") {
        // Store the flag in sessionStorage to indicate that the order was placed
        sessionStorage.setItem('order-placed', 'true');
        
        // Redirect to the order-success page
        router.push("/order-success");
      } else {
        alert("Error placing order: " + result.message);
      }
    } catch (error) {
      alert("Error placing order");
      console.error(error);
    } finally {
      setIsLoading(false);  // Stop loading after the process
    }
  };

  if (status === "loading") {
    return <div>Loading session...</div>; // Handle loading state
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6">Checkout</h2>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {items.map((item) => (
                  <div key={item._id} className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image ? urlFor(item.image).url() : '/path/to/your/default-image.jpg'} // Fallback image
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                      <div>
                        <p className="text-lg">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-lg font-semibold">${item.price * item.quantity}</div>
                  </div>
                ))}
                <div className="border-t border-gray-300 mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-semibold">${total}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shipping Address */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md"
              placeholder="Enter your shipping address"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
          </div>

          {/* Payment */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
            <div className="flex flex-col space-y-2">
                {['Credit Card', 'Debit Card', 'JazzCash', 'COD'].map((method) => (
                <div key={method} className="flex items-center space-x-4">
                    <input
                    type="radio"
                    id={method}
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}  // Manage payment method selection
                    className="mr-2"
                    />
                    <label htmlFor={method} className="text-lg">{method}</label>
                </div>
                ))}
            </div>
            </div>

          {/* Place Order Button */}
          <div className="flex justify-end">
            <button
              onClick={handlePlaceOrder}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={isLoading}  // Disable button during loading
            >
              {isLoading ? 'Processing Order...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
