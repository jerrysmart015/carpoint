import React from 'react'
import { FaSearch, } from "react-icons/fa";

function Nav() {
  return (
    <div className=' invisible lg:visible'>
      <div className=''>  </div>
  
  <div className=' justify-center flex  '>
        <div className='  mt-4'> <span>Car</span>
        <span className='  text-red-500'>Point</span> </div>
     
      <nav className=' cursor-pointer w-[20cm]  h-[50px] flex items-center justify-center gap-2 lg:gap-10 md:gap-10  list-none'>
  
       <li className=' hover:bg-red-300 hover:'>HOME</li>
       <li>CARS</li>
       <li>ABOUT</li>
       <li>PARTS</li>
       <li>OUR BLOG</li>
      
      
      </nav>
      <li className=' list-none mt-5 text-white'> <FaSearch/> </li>
         </div>
    </div>
  )
}

export default Nav