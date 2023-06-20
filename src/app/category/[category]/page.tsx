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
    <div className='flex flex-col justify-center items-center gap-x-8'>
      <h1 className='text-5xl mt-10 mb-20'>Browse Items in {category}</h1>
      <div className='flex flex-row flex-wrap  gap-x-8 w-4/5'>
        {data.map((item, itemIndex) => (
          <ProductCard key={itemIndex} data={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
