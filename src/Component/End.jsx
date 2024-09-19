import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

function End() {
  return (
    <div className=' lg:pt-5 bg-black   '>
        <div className=' gap-[4cm] md:pl-6 md:pr-12 text-center lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 grid grid-cols-2 '>
            <div className='md:text-[26px] md:font-semibold'>
             <span className=' text-white'>Car</span>
             <span className=' text-red-700'>Point</span>
             <span className= ' max-lg:relative max-lg:left-[1px] xl:relative xl:left-[1cm] lg:relative lg:left-7 md:ml-5  mt-2 ml-14 flex justify-center gap-4 md:w-[3cm] w-[4cm] relative right-10  text-gray-400'><FaFacebookF  className=' w-28'/> <FaTwitter  className=' w-44'/><FaInstagram className=' w-44'/> <FaYoutube  className=' text-red-400 w-48'/>  </span>
            </div>
            <span className=' text-start flex flex-col gap-3 '><span className='md:text-[27px] md:font-semibold text-white'>Page</span>
                <span className=' text-gray-500'>Home</span>
                <span className=' text-gray-500'>Car</span>
                <span className=' text-gray-500'>Parts</span>
                <span className=' text-gray-500'>Scales</span>
            </span>
            
            <span  className=' text-white text-start lg:mt-0 flex flex-col gap-3 mt-5 md:mt-0 '> <span className='md:text-[27px] md:font-semibold'>Legal</span> 
                <span className=' text-gray-500'>Privacy</span>
                <span className=' text-gray-500'>Refund Policy</span>
                <span className=' text-gray-500'>Cookie Policy</span>
            </span>
            <span className=' text-white text-start lg:mt-0  flex flex-col gap-3 mt-7 md:mt-0'><span className='md:text-[27px] md:font-semibold'>Contact</span>
                <span className=' text-gray-500'>United States</span>
                <span className=' text-gray-500'>Japan</span>
                <span className=' text-gray-500'>Germany</span>
             
            </span>
        </div>
    </div>
  )
}

export default End