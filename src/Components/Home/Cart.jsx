import React from 'react'
import Image from '../../Assets/templatemo_309_city_blog/images/templatemo_image_01.jpg'
import Image2 from '../../Assets/templatemo_309_city_blog/images/templatemo_image_02.jpg'

const Cart = () => {
    return (
        <div className='w-[100%] grid gap-6 px-10 md:w-[100%%]'>
            <div className='w-[90%] flex gap-8 sm:w-[100%] md:w-[97%] lg:w-[100%] border-b-[#4c4c4c] border-b-2 pb-4'>
                <div className='border-4 p-1 border-black h-[216px]'>
                    <img src={Image} alt="" />
                </div>
                <div className='w-[55%] text-left'>
                    <p className="text-3xl text-[#00BAF2]"> Web Design Tips</p>
                    <p className='w-full  mt-2 bg-[#131313] text-[#AAAAAA] text-xs font-semibold py-[4px]'> Date: May 26th, 2048 | Author: Steve</p>
                    <p className='text-xs text-gray-300 leading-5 py-4'><a href="#" className='text-white hover:border-b-2 '> templatemo.com</a> provides a lot of high quality free css templates for your personal or commercial websites. Credits go to PhotoVaco for photos, Rawox for brush and slideViewerPro for image slider.</p>
                    <button className='bg-[#1F92B5] text-black text-sm px-2 font-bold rounded border-t-black pb-1 hover:text-white'> Read more</button>
                    <p className='py-4 text-sm text-gray-400'> Category: <a href="#" className='text-white hover:border-b-2 '> Freebies,</a> <a href="#" className='text-white hover:border-b-2 '> Templates</a> <span className='text-white'> | 244 comments</span></p>
                </div>
            </div>
            <div className='w-[90%] flex gap-8 sm:w-[100%] md:w-[97%] lg:w-[100%] '>
                <div className='border-4 p-1 border-black h-[216px]'>
                    <img src={Image2} alt="" />
                </div>
                <div className='w-[55%] text-left'>
                    <p className="text-3xl text-[#00BAF2]"> Free Web Templates</p>
                    <p className='w-full mt-2 bg-[#131313] text-[#AAAAAA] text-xs font-semibold py-[4px]'>Date: May 18th, 2048 | Author: David</p>
                    <p className='text-xs text-gray-300 leading-5 py-4 sm:text-[10px]'>Mauris cursus, est at pretium sollicitudin, nunc ligula iaculis quam, pellentesque dapibus leo velit auctor dui. Vivamus non enim diam, at rutrum lorem. Praesent ut lacus nulla, nec aliquam nunc. Nam at odio tortor. Cras porta porta turpis, sed ornare quam adipiscing non. Mauris sit amet ipsum enim. Mauris et elit eget risus congue malesuada aliquet eget augue. Duis sit amet tortor libero.</p>
                    <button className='bg-[#00BAF2] text-black text-sm px-2 font-semibold rounded border-t-black pb-1 hover:text-white'> Read more</button>
                    <p className='py-4 pb-10 text-[2px] text-gray-400 sm:text-xs md:text-[10px] xl:text-sm'> Category: <a href="#" className='text-white hover:border-b-2'> Web Design,</a> <a href="#" className='text-white hover:border-b-2 '> Templates</a> <a href="#" className='text-white'> | 128 comments</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Cart