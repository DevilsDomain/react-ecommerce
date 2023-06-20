import React from 'react'
import Image from 'next/image'
import shop from '../../public/shop.svg'
import cart from '../../public/Buy.svg'
import login from '../../public/Password.svg'
import search from '../../public/Search.svg'
import Dropdown from './Dropdown/Dropdown'

function Navbar() {
  return (
    <div className='flex flex-row justify-center pt-5'>
        {/* left side start */}
        <div className='flex flex-row items-center gap-x-10 pr-96'>
            <Image src={shop} width={45} height={45} alt='shop icon'/>
            <p className='-ml-8'>Home</p>
            <p>About</p>
            <Dropdown name="Categories"/>
            <div className='flex flex-row'>
                <Image src={cart} width={25} height={25} alt='shopping cart' />
                <p className='pl-1'>Cart</p>
            </div>
        </div>
        {/* left side end */}

        {/* right side start */}
        <div className='flex flex-row items-center'>
            <div className='flex flex-row'>
                <Image src={login} width={25} height={25} alt='shopping cart' />
                <p className='pl-1 pr-3'>Login</p>
            </div>
            <div className='flex flex-row'>
                <input placeholder='Search...' className='bg-red-200 rounded-full w-96 h-10 placeholder:text-zinc-900 pl-7'/>
                <Image src={search} width={20} height={20} alt='shopping search' className='z-10 -ml-10'/>
            </div>
        </div>
        {/* right side end */}
    </div>
  )
}

export default Navbar