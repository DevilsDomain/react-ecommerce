import React from "react"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-20 mb-16">
        <h1 className="text-5xl	">Browse our products in different categories</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus 
        hac tellus libero accumsan. </p>
      </div>
      <div className="flex flex-row justify-center gap-x-8">
        <div className="h-96 w-64 bg-lime-400	rounded-2xl flex items-end justify-center">
          <h2 className="text-xl pb-10">electronics</h2>
        </div>
        <div className="h-96 w-64 bg-orange-400	rounded-2xl flex items-end justify-center">
          <h2 className="text-xl pb-10">jewelery</h2>
        </div>
        <div className="h-96 w-64 bg-cyan-400	rounded-2xl flex items-end justify-center">
          <h2 className="text-xl pb-10">{`men's clothing`}</h2>
        </div>
        <div className="h-96 w-64 bg-rose-400	rounded-2xl flex items-end justify-center">
          <h2 className="text-xl pb-10">{`women's clothing`}</h2>
        </div>
      </div>

    </main>
  )
}
