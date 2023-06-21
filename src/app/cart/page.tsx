'use client';
import ProductCard from '@/components/ProductCard';
import React, { useState } from 'react';

type CartItem = {
    image: string;
    title: string;
    price: number;
    id: Number
    rating: {
      rate: number;
    };
  };
  

function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      // Retrieve cart items from localStorage
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      return storedCartItems;
    }
    return [];
  });

  const handleRemoveItem = (index: number) => {
    // Create a copy of the cartItems array
    const updatedCartItems = [...cartItems];
    // Remove the item from the copied array
    updatedCartItems.splice(index, 1);
    // Update the state and localStorage
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <div className='flex flex-row'>
            <ProductCard data={item} />
            <button className='bg-red-500 w-32 h-14 rounded-full self-center' onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
