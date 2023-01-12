import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=' flex justify-between items-center mb-20  '>
            <div className='flex  items-center justify-center cursor-pointer'>
                <p className='text-[20px] md:text-[14px]'>Livesession</p>
            </div>
            <div className='flex gap-6 items-center justify-center cursor-pointer md:text-[10px] md:hidden'>
                <p className='hover:text-[#0a4ed6]'>Product</p>
                <p className='hover:text-[#0a4ed6]'>Pricing</p>
                <p className='hover:text-[#0a4ed6]'>Customer</p>
                <p className='hover:text-[#0a4ed6]'>Resource</p>
            </div>
            <div className='flex gap-6 items-center justify-center'>
                <button className='text-[18px] md:text-[10px]  hover:text-[#0a4ed6] font-bold'>Log in</button>
                <button className='bg-black px-8 py-1 font-bold text-[18px] rounded-lg text-white hover:bg-[#0a4ed6]  md:text-[10px]'>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar