'use client';
import React from 'react';
import useSWR from 'swr';

type ProductParams = {
  params: { productId: Number };
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

  return (
    <div>
        <p>the product is : {data.title}, the id is {data.id}</p>
    </div>
  );
}

export default Page;
