'use client';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';

type ProductParams = {
  params: { productId: number };
};

function Page({ params: { productId } }: ProductParams) {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const response = await fetch(...args);
    return response.json();
  };

  const { data, error, isLoading } = useSWR(
    `https://fakestoreapi.com/products/${productId}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleAddToCart = () => {
    // Retrieve cart items from localStorage
    const cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

    // Add the product to the cart
    cartItems.push(data);

    // Update the cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Log the updated cart items to the console
    console.log(cartItems);
  };

  return (
    <div className='flex flex-row'>
      <div className='w-2/3 ml-32 mt-20'>
        <Image src={data.image} width={350} height={350} alt='desc' />
      </div>
      <div className='w-1/2 -ml-96 mt-20'>
        <h1 className='text-5xl mb-3'>{data.title}</h1>
        <p className='text-2xl'>Stars: {data.rating.rate}</p>
        <p className='mb-3'>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
        <h2 className='text-4xl mb-10'>${data.price}</h2>
        <button
          className='w-32 h-14 bg-red-200 rounded-full'
          onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Page;
