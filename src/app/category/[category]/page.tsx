'use client';
import React from 'react';
import useSWR from 'swr'
import ProductCard from '@/components/ProductCard';

type CategoryParams = {
  params: { category: string };
}

function page({ params: { category }}: CategoryParams) {

  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const response = await fetch(...args);
    return response.json();
  };  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/category/${category}`, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <h1>Category: {category}</h1>
      {data.map((item, itemIndex) => (
        <ProductCard key={itemIndex} data={item} />
      ))}
    </div>
  );
}

export default page;
