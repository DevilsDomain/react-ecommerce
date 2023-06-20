import React from 'react'
import Image from 'next/image'

function ProductCard({data}: {data:String}) {
  return (
    <div className="h-96 w-64 border-2 border-amber-700 rounded-2xl flex items-end justify-center mb-9 text-sm">
        <div>
            <Image className='ml-10 mb-5' src={data.image} width={160} height={200} alt='desc'/>
            <p className='pl-3 pb-1'>{data.title}</p>
            <p className='pl-3 pb-2'>${data.price}</p>
        </div>
        <p className='pb-2 pr-3'>{data.rating.rate}</p>
    </div>
  )
}

export default ProductCard