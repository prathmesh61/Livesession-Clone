import React, { useEffect, useState } from 'react'
import testi1 from '../assets/testi1.png'
import testi2 from '../assets/testi2.png'
import testi3 from '../assets/testi3.png'
import testi4 from '../assets/testi4.png'
import testi5 from '../assets/testi5.png'






const Testimonial = () => {
    const [index, setIndex] = useState([])

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === data.length - 1) {
            setIndex(0)
        } else (
            setIndex(index + 1)
        )
    }
    const prev = () => {
        if (index === 0) {
            setIndex(data.length - 1)
        } else (
            setIndex(index - 1)
        )
    }


    return (
        <div className='relative '>
            <h2 className='font-bold text-[25px] md:text-[16px] text-center mb-10 bg-[#0a4ed6] text-white px-2 py-1 w-fit mx-auto'>What customers say about us?</h2>
            <div className='flex justify-between items-center  overflow-x-hidden w-[930px] mx-auto gap-10'>
                <img src={testi1} alt="" className='w-[400px] h-[350px] animate-slide' />
                <img src={testi2} alt="" className='w-[400px] h-[350px] animate-slide' />
                <img src={testi3} alt="" className='w-[400px] h-[350px] animate-slide' />
                <img src={testi4} alt="" className='w-[400px] h-[350px] animate-slide' />
                <img src={testi5} alt="" className='w-[400px] h-[350px] animate-slides' />
            </div>

        </div>
    )
}

export default Testimonial

