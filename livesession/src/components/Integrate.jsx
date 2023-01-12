import React from 'react'
import tools from '../assets/tools.png'

const Integrate = () => {
    return (
        <div>
            <section className=' px-4 py-2 flex justify-center items-center gap-5 flex-wrap-reverse'>

                <div className='w-[535px]'>
                    <img className='w-fit' src={tools} alt="ToolsImg" />
                </div>
                <div className='flex flex-col items-start '>
                    <h2 className='text-[36px] md:text-[26px] font-bold mb-4'>Integrate LiveSession with<br /> your tool stack</h2>
                    <p className='text-[18px] md:text-[14px] font-light mb-6'>Use LiveSession with your favourite apps to get<br /> full potential of your software stack.</p>
                    <span className='text-[16px] md:text-[12px] font-bold text-[#0a4ed6] mb-6'>See all integrations</span>

                </div>
            </section>
        </div>
    )
}

export default Integrate