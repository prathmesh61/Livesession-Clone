import React from 'react'
import brands from '../assets/brandss.png'
const Brands = () => {
    return (
        <div className='flex justify-center items-center flex-col mb-40'>
            <section className='flex justify-center items-center gap-4 flex-col'>
                <h3>Trusted by 1000+ teams worldwide</h3>
                <img className='w-fit' src={brands} alt="Brands" />
            </section>
        </div>
    )
}

export default Brands