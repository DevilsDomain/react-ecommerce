'use client';
import React, { useState } from 'react';

type CartItem = {
    title: string;
    price: number;
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
          {/* Render the cart item details */}
          <p>{item.title}</p>
          <p>${item.price}</p>
          {/* Add more fields as needed */}
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
