import { SiYoutubemusic } from "react-icons/si";
import React from 'react'
import Image from '../../Assets/templatemo_309_city_blog/images/templatemo_image_01.jpg'
import Image2 from '../../Assets/templatemo_309_city_blog/images/onebit_15.png'
import Image3 from '../../Assets/templatemo_309_city_blog/images/onebit_16.png'
import { AiFillCaretRight } from "react-icons/ai";



const About = () => {
  return (
    <div className='w-[100%] px-10 pt-20 h-[140vh]'>
      <div className='w-[90%] flex gap-8 sm:w-[100%] md:w-[97%] lg:w-[100%] xl:h-[34%]'>
        <div className='text-right'>
          <p className="text-3xl text-[#00BAF2] text-left -mt-16 pb-8"> About Us</p>
          <img className='border-[1px] p-1 border-white h-[216px]' src={Image} alt="" />
        </div>
        <div className='w-[55%] text-left'>
          <p className="text-xs font-bold font-serif text-[#BF4D09]">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent aliquam velit a magna sodales quis elementum ipsum auctor.</p>
          <p className='text-xs text-gray-300 leading-5 py-4'>In ac libero urna. Suspendisse sed odio ut mi auctor blandit. Duis luctus nulla metus, a vulputate mauris. Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero. Cras purus libero, dapibus nec rutrum in, dapibus nec risus. Ut interdum mi sit amet magna feugiat auctor. Fusce venenatis consequat lacinia. Vivamus elit erat, tincidunt eget scelerisque vitae, aliquet non purus.</p>
          <div className="text-right flex justify-between">
            <p className="text-[#262626]">.</p>
            <button className='bg-[#00BAF2] text-black flex text-sm px-2 justify-between w-28 gap-1 items-center font-semibold rounded border-t-black pb-1 hover:text-white'> Read more <SiYoutubemusic color="white" /></button>
          </div>
        </div>
      </div>
      <div className="-mt-20">
        <div>
          <p className="text-3xl text-[#00BAF2] text-left pt-6"> Services</p>
          <p className='text-xs text-gray-300 leading-5 py-4 text-left'>In ac libero urna. Suspendisse sed odio ut mi auctor blandit. Duis luctus nulla metus, a vulputate mauris. Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero. Cras purus libero, dapibus nec rutrum in, dapibus nec risus. Ut interdum mi sit amet magna feugiat auctor.</p>
        </div>
        <div className="flex items-center pt-2 gap-6">
          <div>
            <img className="w-20 -mt-16" src={Image2} alt="" />
          </div>
          <div className="grid gap-2 text-left">
            <p className="text-xl text-[#00BAF2] text-left"> Marketing</p>
            <p className="text-gray-300 text-xs pr-10">Credit goes to Icojoy.com for icons. Morbi sed nulla ac est cursus suscipit. Nullam consectetur posuere porta. Aliquam laoreet, libero ac placerat tempor.</p>
            <a href="#" className="flex items-center text-sm gap-2"> <AiFillCaretRight color="#cd7e00" /> Vestibulum pretium convallis diam sit amet</a>
            <a href="#" className="flex items-center text-sm gap-2"> <AiFillCaretRight color="#cd7e00" /> Donec consequat, lacus eget accumsan volutpat</a>
            <a href="#" className="flex items-center  text-sm gap-2"> <AiFillCaretRight color="#cd7e00" /> Fusce sem nulla, rutrum ac suscipit eget vitae</a>
            <div className="text-right flex justify-between">
              <p className="text-[#262626]">.</p>
              <button className='bg-[#00BAF2] text-black flex text-sm px-2 justify-between w-28 gap-1 items-center font-semibold rounded border-t-black pb-1 hover:text-white'> Read more <SiYoutubemusic color="white" /></button>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-20 gap-6 xl:pb-44">
          <div>
            <img className="w-20 -mt-16" src={Image3} alt="" />
          </div>
          <div className="grid gap-2 text-left">
            <p className="text-xl text-[#00BAF2] text-left"> Advertising</p>
            <p className="text-gray-300 text-xs pr-10">Credit goes to Icojoy.com for icons. Morbi sed nulla ac est cursus suscipit. Nullam consectetur posuere porta. Aliquam laoreet, libero ac placerat tempor.</p>
            <a href="#" className="flex items-center text-sm gap-2"> <AiFillCaretRight color="#cd7e00" /> Vestibulum pretium convallis diam sit amet</a>
            <a href="#" className="flex items-center text-sm gap-2"> <AiFillCaretRight color="#cd7e00" /> Donec consequat, lacus eget accumsan volutpat</a>
            <a href="#" className="flex items-center  text-sm gap-2"> <AiFillCaretRight color="#cd7e00" /> Fusce sem nulla, rutrum ac suscipit eget vitae</a>
            <div className="text-right flex justify-between">
              <p className="text-[#262626]">.</p>
              <button className='bg-[#00BAF2] text-black flex text-sm px-2 justify-between w-28 gap-1 items-center font-semibold rounded border-t-black pb-1 hover:text-white'> Read more <SiYoutubemusic color="white" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About