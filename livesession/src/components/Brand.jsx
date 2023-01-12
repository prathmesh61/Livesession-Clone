import React from 'react'
import t1 from '../assets/t1.svg'
import t2 from '../assets/t2.svg'
import t3 from '../assets/t3.svg'
import t4 from '../assets/t4.svg'
import t5 from '../assets/t5.svg'
import t6 from '../assets/t6.svg'
import t7 from '../assets/t7.svg'
import t8 from '../assets/t8.svg'
import t9 from '../assets/t9.svg'
import t10 from '../assets/t10.svg'
import t11 from '../assets/t11.svg'
import t12 from '../assets/t12.svg'


const Brand = () => {
    return (
        <section className='px-[30px] py-[40px] text-center flex flex-col gap-5 w-full'>
            <h2 className='font-bold text-[25px] text-center'>Trusted by companies of all sizes</h2>
            <div className='overflow-hidden h-[100px] w-[1200px] mx-auto flex gap-10'>
                <img className='ml-6 animate-slide ' src={t1} alt="" />
                <img className='ml-6 animate-slide ' src={t2} alt="" />
                <img className='ml-6 animate-slide ' src={t3} alt="" />
                <img className='ml-6 animate-slide ' src={t4} alt="" />
                <img className='ml-6 animate-slide ' src={t5} alt="" />
                <img className='ml-6 animate-slide ' src={t6} alt="" />
                <img className='ml-6 animate-slide ' src={t7} alt="" />
                <img className='ml-6 animate-slide ' src={t8} alt="" />
                <img className='ml-6 animate-slide ' src={t9} alt="" />
                <img className='ml-6 animate-slide ' src={t10} alt="" />
                <img className='ml-6 animate-slide ' src={t11} alt="" />
                <img className='ml-6 animate-slide ' src={t12} alt="" />
            </div>
            <button className='bg-black px-8 py-1 font-bold text-[18px] rounded-lg text-white w-fit mx-auto hover:bg-[#0a4ed6]  md:text-[10px]'>Sign Up</button>
        </section>

    )
}

export default Brand