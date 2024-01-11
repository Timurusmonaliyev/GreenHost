import { AiFillCaretRight } from "react-icons/ai";
import React from 'react'
import Style from './App.css'
import Image from './Assets/templatemo_309_city_blog/images/templatemo_header.jpg'
import Image2 from './templatemo_logo_PNG_source.png'
import Image3 from './templatemo_menu.jpg'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Image4 from './Assets/templatemo_309_city_blog/images/templatemo_ads.jpg'

const App = () => {
  return (
    <div>
      <div className="flex w-full justify-center bg-[#121212] h-full">
        <div className="container w-[100%] sm:w-[100%] md:w-[97%] lg:w-[100%] xl:w-[64%] text-center justify-center">
          <div className='sm:w-[100%] md:w-[97%] lg:w-[97%] xl:w-[100%] ml-3 justify-center' style={{ backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', height: '30vh' }}>
            <div className='text-[#ffc66c] font-serif pt-12 grid justify-center'>
              <img src={Image2} alt="" />
              <p className='font-normal text-sm'>YOUR TAGLINE GOES HERE</p>
            </div>
          </div>
          <div className='px-2 -mt-[128px]'>
            <div className='flex xl:w-[100%] justify-start items-center text-white xl:px-6' style={{ backgroundImage: `url(${Image3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '12vh', marginTop: '50px' }}>
              <div>
                <ul className='flex gap-1'>
                  <NavLink to={'/'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active1" : "current gap-2 text-center"
                  }><p className='font-bold text-sm'>Home<p className='text-xs text-gray-700 font-normal'>Donec Magna</p></p></NavLink>
                  <NavLink to={'/About'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active1" : "current gap-2 text-center"
                  }><p className='font-bold text-sm'>About Us<p className='text-xs text-gray-700 font-normal'>Praesent Nec</p></p></NavLink>
                  <NavLink to={'/Gallery'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active1" : "current gap-2 text-center"
                  }><p className='font-bold text-sm'>Gallery<p className='text-xs text-gray-700 font-normal'>Cras Eget Urna</p></p></NavLink>
                  <NavLink to={'/Contact'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active1" : "current gap-2 text-center"
                  }><p className='font-bold text-sm'>Contact Us<p className='text-xs text-gray-700 font-normal'>Phasellus Sodales</p></p></NavLink>
                </ul>
              </div>
            </div>
            <div className="flex text-white justify-between rounded bg-[#262626] border-l-[8px] border-l-[#81776B] border-b-[10px] border-b-[#81776B]">
              <div className='w-[74%] xl:grid grid-cols-1'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/gallery' element={<Gallery />} />
                </Routes>
              </div>
              <div className="w-[26%] border-r-[8px] border-r-[#81776B] border-l-[#323232] border-l-2 xl:px-6 py-10">
                <div className='text-left grid gap-2'>
                  <img className='border-b-[#71695c] border-b-[1px] pb-4' src={Image4} alt="" />
                  <div className="border-b-2 grid gap-4 border-b-[#44403c] pb-4">
                    <p className="text-xl text-[#00BAF2] pt-2"> Categories</p>
                    <a href="#" className="flex items-center hover:border-b-white hover:border-b-[1px] text-xs gap-2"> <AiFillCaretRight color="#cd7e00" /> Aliquam at adipiscing</a>
                    <a href="#" className="flex items-center hover:border-b-white hover:border-b-[1px] text-xs gap-2"> <AiFillCaretRight color="#cd7e00" /> Cras eget urna eu nisi</a>
                    <a href="#" className="flex items-center hover:border-b-white hover:border-b-[1px] text-xs gap-2"> <AiFillCaretRight color="#cd7e00" /> Integer aliquet tempus</a>
                    <a href="#" className="flex items-center hover:border-b-white hover:border-b-[1px] text-xs gap-2"> <AiFillCaretRight color="#cd7e00" /> Nam non diam at augue</a>
                    <a href="#" className="flex items-center hover:border-b-white hover:border-b-[1px] text-xs gap-2"> <AiFillCaretRight color="#cd7e00" /> Pellentesque erat ipsum</a>
                    <a href="#" className="flex items-center hover:border-b-white hover:border-b-[1px] text-xs gap-2"> <AiFillCaretRight color="#cd7e00" /> Sed volutpat urna vitae</a>
                  </div>
                  <p className="text-xl text-[#00BAF2] pt-2"> Recent comments</p>
                  <div className="border-b-2 border-dotted border-b-[#44403c] pb-4">
                    <p className="text-[#cd7e00] font-bold text-[12px]"> Lorem ipsum dolor si</p>
                    <p className="text-[12px] text-[#AAAAAA]">  Maecenas tellus erat, dictum vel semper a, dapibus ac elit. Nunc rutrum pretium porta.</p>
                  </div>
                  <div className="border-b-2 border-dotted border-b-[#44403c] pb-4">
                    <p className="text-[#cd7e00] font-bold text-[12px]"> Aenean feugiat mattis</p>
                    <p className="text-[12px] text-[#AAAAAA]"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Validate <a href="#" className="text-[#cd7e00] font-extrabold">XHTML</a> & <a href="#" className="text-[#cd7e00] font-extrabold">CSS</a>.</p>
                  </div>
                  <div className="border-b-2 border-solid border-b-[#44403c] pb-4">
                    <p className="text-[#cd7e00] font-bold text-[12px]"> Lorem ipsum dolor si</p>
                    <p className="text-[12px] text-[#AAAAAA]"> Maecenas tellus erat, dictum vel semper a, dapibus ac elit. Nunc rutrum pretium porta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-[#71695c] text-xs bg-[#000000] text-center -mt-10 border-t-[#383531] border-t-[0.1px] grid gap-2'>
        <div className='pt-12'>
          <Link to={'/'} className='px-2'> Home</Link>
          <Link to={'/About'} className='border-l-[#71695c] border-l-[1px] px-2'> About Us</Link>
          <Link to={'/Gallery'} className='border-l-[#71695c] border-l-[1px] px-2'> Gallery</Link>
          <Link to={'/Contact'} className='border-l-[#71695c] border-l-[1px] px-2'> Contact Us</Link>
        </div>
        <div>
          <p className="text-[#71695c]"> <span className='text-[#4b4b4b]'>Copyright © 2048 </span> Your Company Name</p>
        </div>
      </div>
    </div>
  )
}

export default App