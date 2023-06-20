import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface ProductData {
    image: string;
    title: string;
    price: number;
    id: Number
    rating: {
      rate: number;
    };
  }
  
  interface ProductCardProps {
    data: ProductData;
  }
  

function ProductCard({data}: ProductCardProps) {
  return (
    <div className="h-96 w-64 border-2 border-amber-700 rounded-2xl flex items-end justify-center mb-9 text-sm">
        <div>
            <Image className='ml-10 mb-5' src={data.image} width={160} height={200} alt='desc'/>
            <Link href={`/products/${data.id}`} className='pl-3 pb-1'>{data.title}</Link>
            <p className='pl-3 pb-2'>${data.price}</p>
        </div>
        <p className='pb-2 pr-3'>{data.rating.rate}</p>
    </div>
  )
}

export default ProductCard