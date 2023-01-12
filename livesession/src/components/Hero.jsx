import React from 'react'
import hero from '../assets/hero.webp'

const Hero = () => {
    return (
        <main className='flex items-center justify-center w-full gap-5 mb-40 flex-wrap '>
            <div >
                <p className='uppercase text-[14px]'>ANALYTICS SOFTWARE</p>
                <h1 className='text-[48px] font-extrabold md:text-[30px]'>Understand your users<br /> like never before</h1>
                <p className='text-[21px]  md:text-[14px] font-extralight'>LiveSession helps you analyze users’ behavior, improve UX,<br /> find bugs, and increase conversion rates using session<br /> replays, and event-based product analytics.</p>
                <div className='flex items-center justify-start gap-2 mt-4'>
                    <input type="email" name="email" placeholder='Your Business Email' className='focus:outline-none px-12 py-3  md:px-6 md:py-1 border-black border-2 ' />
                    <button className='bg-black px-8 py-3 md:px-6 md:text-[10px] font-bold text-[18px] rounded-lg text-white hover:bg-[#0a4ed6]  '>Sign Up</button>
                </div>
                <ul className='flex items-center gap-4 justify-start mt-4 font-light md:text-[14px]'>
                    <li>14 Days Free Trail</li>
                    <li>No Credit Card</li>
                    <li>easy Setup</li>
                </ul>
            </div>
            <div className='object-cover w-fit'>
                <img src={hero} alt="HeroImg" className='w-[576px]  object-cover bg-[#f8d047]' />
            </div>
        </main>
    )
}

export default Hero