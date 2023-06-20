import React from 'react'
import Image from 'next/image'

function ProductCard({data}: {data:String}) {
  return (
    <div>
        <Image src={data.image} width={400} height={350} alt='desc'/>
        <p>{data.title}</p>
        <p>{data.price}</p>
    </div>
  )
}

export default ProductCard