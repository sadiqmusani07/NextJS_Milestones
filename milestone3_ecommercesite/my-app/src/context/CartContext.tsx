'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { urlFor } from '@/sanity/lib/image';

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image property
  stock: number;  // Added stock property to track product stock
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { data: session } = useSession();

  // Load cart from localStorage when component mounts and session changes
  useEffect(() => {
    if (session?.user?.id) {
      const savedCart = localStorage.getItem(`cart_${session.user.id}`);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } else {
      setItems([]); // Reset the cart if no session
    }
  }, [session]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (session?.user?.id) {
      localStorage.setItem(`cart_${session.user.id}`, JSON.stringify(items));
    }
  }, [items, session]);

  const addToCart = (product: any) => {
    if (!session?.user) return;

    setItems(currentItems => {
      const existingItem = currentItems.find(item => item._id === product._id);

      if (existingItem) {
        // If the item already exists, increment the quantity only if stock is available
        if (existingItem.quantity < existingItem.stock) {
          return currentItems.map(item =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // Optionally show a message or prevent adding if no stock is left
          alert('Cannot add more, stock is limited!');
          return currentItems;
        }
      }

      // Add a new item to the cart with stock included, make sure product is structured properly
      return [...currentItems, {
        _id: product._id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.productImage ? urlFor(product.productImage).url() : '', // Using Sanity's `urlFor` to get image URL
        stock: product.stock,
      }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item._id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;

    setItems(currentItems =>
      currentItems.map(item =>
        item._id === productId
          ? { ...item, quantity: Math.min(quantity, item.stock) } // Ensure quantity doesn't exceed stock
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        total 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
