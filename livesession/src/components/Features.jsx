import React, { useState } from 'react'
import f1 from '../assets/f1.webp'
import f2 from '../assets/f2.webp'
import f3 from '../assets/f3.webp'
import f4 from '../assets/f4.webp'
import f5 from '../assets/f5.webp'

const Features = () => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <h3 className='text-[25px] font-bold text-center'>The power of combined analytics</h3>
            <p className='  text-center font-light'>Combine data from several tools to get the big picture. Draw right conclusions based on facts, not guesses.</p>

            <section >
                <div className='mt-20  '>
                    <div className='mb-10 flex gap-6 justify-center items-start  cursor-pointer md:text-[10px]'>
                        <p onClick={() => setIndex(0)} className={index === 0 ? "bg-[#0a4ed6] text-white px-3 rounded-lg py-0" : ''}>Session Replay</p>
                        <p onClick={() => setIndex(1)} className={index === 1 ? "bg-[#0a4ed6] text-white px-3 rounded-lg py-0" : ''}>Heap Maps</p>
                        <p onClick={() => setIndex(2)} className={index === 2 ? "bg-[#0a4ed6] text-white px-3 rounded-lg py-0" : ''}>Dev tools</p>
                        <p onClick={() => setIndex(3)} className={index === 3 ? "bg-[#0a4ed6] text-white px-3 rounded-lg py-0" : ''}>Event</p>
                        <p onClick={() => setIndex(4)} className={index === 4 ? "bg-[#0a4ed6] text-white px-3 rounded-lg py-0" : ''}>Funnels</p>
                    </div>
                    <div className=' flex justify-between items-center  overflow-x-hidden w-fit mx-auto '>
                        <img src={f1} alt="" className={index === 0 ? 'block object-cover w-[600px]' : 'hidden'} hidden={index === 0} />
                        <img src={f2} alt="" className={index === 1 ? 'block object-cover w-[600px]' : 'hidden'} hidden={index === 1} />
                        <img src={f3} alt="" className={index === 2 ? 'block object-cover w-[600px]' : 'hidden'} hidden={index === 2} />
                        <img src={f4} alt="" className={index === 3 ? 'block object-cover w-[600px]' : 'hidden'} hidden={index === 3} />
                        <img src={f5} alt="" className={index === 4 ? 'block object-cover w-[600px]' : 'hidden'} hidden={index === 4} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features