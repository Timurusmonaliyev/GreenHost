import React from 'react'
import Image from '../../Assets/templatemo_309_city_blog/images/gallery/image_01.jpg'
import Image2 from '../../Assets/templatemo_309_city_blog/images/gallery/image_02.jpg'
import Image3 from '../../Assets/templatemo_309_city_blog/images/gallery/image_03.jpg'
import { SiYoutubemusic } from "react-icons/si";


const Gallery = () => {
  return (
    <div className='px-10 text-left pt-6'>
      <div className="grid gap-3">
        <p className="text-[34px] font-medium text-[#00BAF2]">Web Design Gallery</p>
        <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus rutrum tellus at varius. Ut sit amet arcu elit, in posuere arcu. Phasellus in sapien vel felis imperdiet ullamcorper.</p>
      </div>
      <div className='pt-10 py-4 border-b-[1px] border-dotted border-b-[#5e4c41]'>
        <div className='flex text-left gap-4'>
          <div className='w-[50%]'>
            <img className='border-2 p-1 border-black h-56' src={Image} alt="" />
          </div>
          <div className='w-[70%] leading-10'>
            <p className="text-[18px] text-[#00BAF2]"> Project 1</p>
            <p className='text-xs font-serif text-[#BF4D09] font-semibold py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus egestas diam quis dapibus.</p>
            <p className='text-xs font-normal leading-6'>Quisque sed mauris velit, a congue lorem. Aliquam quis mi sed libero dapibus iaculis a et mi. Egestas diam quis dapibus. Quisque sed mauris velit, a congue lorem.</p>
            <div className="text-right flex justify-between my-6">
              <p className="text-[#262626]">.</p>
              <a href='#' className='bg-[#0E7A9A] text-black flex h-8 text-sm px-2 justify-between w-28 gap-1 items-center font-semibold rounded border-t-black hover:text-white'> Visit site<SiYoutubemusic color="white" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-6 border-b-[1px] border-dotted border-b-[#5e4c41]'>
        <div className='flex text-left gap-4'>
          <div className='w-[50%]'>
            <img className='border-2 p-1 border-black h-56' src={Image2} alt="" />
          </div>
          <div className='w-[70%] leading-10'>
            <p className="text-[18px] text-[#00BAF2]"> Project 2</p>
            <p className='text-xs font-serif text-[#BF4D09] font-semibold py-2'>Cras id tortor nisl. Nullam ante diam, interdum sit amet. Velit justo sodales lectus, ac porta nunc eros vitae.</p>
            <p className='text-xs font-normal leading-6'>Quisque sed mauris velit, a congue lorem. Aliquam quis mi sed libero dapibus iaculis a et mi. Egestas diam quis dapibus. Quisque sed mauris velit, a congue lorem.</p>
            <div className="text-right flex justify-between my-6">
              <p className="text-[#262626]">.</p>
              <a href='#' className='bg-[#0E7A9A] text-black flex h-8 text-sm px-2 justify-between w-28 gap-1 items-center font-semibold rounded border-t-black hover:text-white'> Visit site<SiYoutubemusic color="white" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-8'>
        <div className='flex text-left gap-4'>
          <div className='w-[50%]'>
            <img className='border-2 p-1 border-black h-56' src={Image3} alt="" />
          </div>
          <div className='w-[70%] leading-10'>
            <p className="text-[18px] text-[#00BAF2]"> Project 3</p>
            <p className='text-xs font-serif text-[#BF4D09] font-semibold py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus egestas diam quis dapibus.</p>
            <p className='text-xs font-normal leading-6'>Quisque sed mauris velit, a congue lorem. Aliquam quis mi sed libero dapibus iaculis a et mi. Egestas diam quis dapibus. Quisque sed mauris velit, a congue lorem.</p>
            <div className="text-right flex justify-between my-6">
              <p className="text-[#262626]">.</p>
              <a href='#' className='bg-[#0E7A9A] text-black flex h-8 text-sm px-2 justify-between w-28 gap-1 items-center font-semibold rounded border-t-black hover:text-white'> Visit site<SiYoutubemusic color="white" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery