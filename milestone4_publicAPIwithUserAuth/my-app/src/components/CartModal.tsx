// CartModal.tsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const CartModal = () => {
  const { items, removeFromCart, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Cart Icon */}
      <button onClick={toggleModal} className="relative">
        <span>🛒</span>
        {items.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Modal for Cart */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h3 className="text-xl font-semibold">Your Cart</h3>
            <ul className="space-y-4">
              {items.length === 0 ? (
                <li>Your cart is empty</li>
              ) : (
                items.map((item) => (
                  <li key={item._id} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))
              )}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <span>Total: ${total.toFixed(2)}</span>
              <Link href="/cart" passHref>
                <button
                  onClick={toggleModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View Cart
                </button>
              </Link>
            </div>
            <button onClick={toggleModal} className="mt-4 text-gray-800">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
