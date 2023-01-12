import React from 'react'

const FooterLinks = () => {
    return (
        <footer className='mt-[70px]' >
            <h2 className='text-center text-[20px] font-bold'>Start using LiveSession for free</h2>
            <div className="flex justify-between items-start gap-3 flex-wrap mt-[15px] ">
                <div className=" ">

                    <p className='text-[15px] font-semibold truncate flex-row' >
                        We're here to help brands make better marketing<br /> decisions by delivering world-class, scalable insights.
                    </p>
                    <span className='text-[13px] font-light'>Made with🧠 and ❤️ in Berlin.</span>
                </div>
                <ul className="  text-[13px] text-black cursor-pointer">
                    <h4 className='font-semibold text-[18px]'>Company</h4>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Room</li>
                    <li>Contact Us</li>
                    <li>Knoeledge Center</li>
                </ul>
                <ul className="text-[13px] text-black cursor-pointer">
                    <h4 className='font-semibold text-[18px]'>Product</h4>

                    <li>Features</li>
                    <li>MRP</li>
                    <li>Book Demo</li>
                    <li>Data Quality</li>
                    <li>Reports</li>
                    <li>Guides</li>
                </ul>
                <ul className=" text-[13px] text-black cursor-pointer">
                    <h4 className='font-semibold text-[18px]'>Resources</h4>

                    <li>Articles</li>
                    <li>Whitepapers</li>
                    <li>Customer Stories</li>
                    <li>Indices</li>
                    <li>Brand</li>
                </ul>
            </div>

        </footer>
    )
}

export default FooterLinks