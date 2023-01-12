import React from 'react'
import GDPR from '../assets/gdpr.svg'
import CCPA from '../assets/ccpa.svg'
import Pri from '../assets/Private.webp'

const Private = () => {
    return (
        <div>
            <section className='bg-[#F5F5F5] px-4 py-2 flex justify-center items-center gap-5 flex-wrap'>
                <div className='flex flex-col items-start '>
                    <h2 className='text-[36px] md:text-[26px] font-bold mb-4'>Private by default</h2>
                    <p className='text-[18px] md:text-[14px] font-light mb-6'>LiveSession gives you full control of what part of the page<br /> and application is recorded. We are GDPR and CCPA<br /> compliant.</p>
                    <span className='text-[16px] md:text-[12px] font-bold text-[#0a4ed6] mb-6'>Read about the privacy</span>
                    <div className='flex items-start gap-2 w-[164px] md:w-[120px]'>
                        <img className='w-fit' src={GDPR} alt="GDPR" />
                        <img className='w-fit' src={CCPA} alt="CCPA" />
                    </div>
                </div>
                <div className='w-[535px]'>
                    <img className='w-fit' src={Pri} alt="PrivateImg" />
                </div>
            </section>
        </div>
    )
}

export default Private