import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpem , setIsOpen] = useState(false);

  return (
    <>
        <nav className='bg-primary text-white'>
            <div className='flex justify-between items-center h-16 px-4'>

                {/* Logo icon */}
                <div className='px-4 text-3xl'>
                  <a href="/"><img src="/logo.png" alt="" className='h-10 w-10 rounded-full items-center'/> </a>
                </div>
                {/* destop buton  */}
                <div className='px-4  hidden md:block '>
                    <a href="/" className='text-gray-100 px-4 text-xl'>Home</a>
                    <a href="/about" className='text-gray-100 px-4 text-xl'>About</a>
                    <a href="/contact" className='text-gray-100 px-4 text-xl'>Contact</a>
                    <a href="/gallery" className='text-gray-100 px-4 text-xl'>Gallery</a>
                    <a href="/facilities" className='text-gray-100 px-4 text-xl'>Facilities</a>
                    <a href="/location" className='text-gray-100 px-4 text-xl'>Location</a>                </div>
                <button onClick={()=> setIsOpen(!isOpem)} className='block md:hidden '><FaBars /></button>
            </div>
               

            

            {/* mobil buton */}
                <div className={ `${isOpem?"block":"hidden"} py-4 sm:hidden  bg-blue-300 space-y-2 pb-3`} >
                <a href="/" className='text-gray-100 px-4 text-xl block'>Home</a>
                <a href="/about" className='text-gray-100 px-4 text-xl block'>About</a>
                <a href="/contact" className='text-gray-100 px-4 text-xl block'>Contect</a>
                <a href="/gallery" className='text-gray-100 px-4 text-xl block'>Gallery</a>
                <a href="/facilities" className='text-gray-100 px-4 text-xl block'>Facilities</a>
                <a href="/location" className='text-gray-100 px-4 text-xl block'>Location</a>
            </div>
        </nav>
            
    </>
  )
}

export default Navbar