import React from 'react'
import arrow from '../assets/arrow.svg'

const Help = () => {
    return (
        <div className='bg-[#F5F5F5] mb-40'>
            <h2 className='font-bold text-[30px] md:text-[25px] text-center'>How LiveSession can help your business?</h2>
            <section className='max-w-7xl mx-auto flex justify-center  items-center gap-4 mt-10 px-4 py-2 flex-wrap'>
                <div className='flex items-start gap-4 flex-col'>
                    <h3 className='text-[25px] md:text-[20px] font-bold'>With LiveSession, you can<br /> answer questions like:</h3>
                    <p className='text-[15px] font-bold text-[#0a4ed6]'>LiveSession for SaaS</p>
                    <p className='text-[15px] font-bold text-[#0a4ed6]'>LiveSession for eCommerce</p>
                </div>

                <div>
                    <img className='w-[274px] md:rotate-90' src={arrow} alt="Help-Arrow" />
                </div>

                <ul className='flex items-start gap-8 flex-col text-[20px] md:text-[15px]'>
                    <li>1.How users use my application?</li>
                    <li>2.Where and why do users drop off?</li>
                    <li>3.What are the most crucial page elements?</li>
                    <li>4.What features are most used in my product?</li>
                    <li>5.What Javascript and network errros users have?</li>
                    <li>6.What are the frustration signals on my page?</li>
                </ul>
            </section>
        </div>
    )
}

export default Help