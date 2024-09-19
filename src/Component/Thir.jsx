import React from 'react'
import { FaInfo, FaInfoCircle } from 'react-icons/fa'

function Thir() {
  return (
    <div className=' max-sm:h-[13cm] md:h-[20cm] lg:h-[15cm] '>
      <center>
       
        <div className=' lg:relative lg:left-[40px]'>

      <div className=' lg:relative lg:top-[4cm] lg:pl-[20px] lg:ml-[17cm] lg:text-start lg:px-[cm] md:px-[5cm]  px-[8px]'> 
        <div className=' '>
         <span className=' relative top-9'>About Us  </span>  <div className=' md:invisible invisible lg:visible lg:ml-[72px] mt-4'><FaInfoCircle/></div> </div> <br />
      <div className=''> <span className= ' md:text-[35px] font-bold text-[23px] '>Cheap Prices With <br /> Quality Cars</span><br />
        <span className=' lg:text-[20px] md:text-[21px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque dolore ab tempora molestiae minus temporibus</span>  <br />
         <button className=' shadow-md shadow-black h-8 px-3 bg-red-600'>Learn More</button></div>
      </div>
      </div>
      <div className=' lg:mt-2 lg:right-[21cm] lg:w-[60cm] lg:h-[12cm] lg:mr-[10cm] lg:relative lg:bottom-[6cm]  mt-14 '> <img className=' mr-[26px] lg:w-[cm] lg:h-[11cm]' src="img/lx.png" alt="" /> </div>
      
      </center>

    </div>
   

  )
}

export default Thir