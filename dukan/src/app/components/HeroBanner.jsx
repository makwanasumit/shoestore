"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className='relative text-white w-full text-[20px] max-w-[1360px] mx-auto '>
      <Carousel 
      autoPlay={true} 
      infiniteLoop={true} 
      showThumbs={false} 
      showArrows={false} 
      showStatus={false} 
      showIndicators={false}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <div onClick={clickHandler} className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-70 '>
            <BiArrowBack className='text-sm md:text-lg'/>
        </div>
      )}
      renderArrowNext={(clickHandler, hasNext) => (
        <div onClick={clickHandler} className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-70'>
            <BiArrowBack className='rotate-180 text-sm md:text-lg'/>
        </div>
      )}
      >
        <div>
          <img src="/slide-1.png" className='aspect-[16/7] md:aspect-auto'/>
          <div className='px-2 md:px-10 py-1 md:py-[20px] font-sans bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[30px] uppercase font-bold cursor-pointer hover:opacity-90 '>Shop now</div>
        </div>
        <div>
          <img src="/slide-2.png" className='aspect-[16/7] md:aspect-auto'/>
          <div className='px-2 md:px-10 py-1 md:py-[20px] font-sans bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[30px] uppercase font-bold cursor-pointer hover:opacity-90 '>Shop now</div>
        </div>
        <div>
          <img src="/slide-3.png" className='aspect-[16/7] md:aspect-auto'/>
          <div className='px-2 md:px-10 py-1 md:py-[20px] font-sans bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[10px] md:text-[30px] uppercase font-bold cursor-pointer hover:opacity-90 '>Shop now</div>
        </div>
      </Carousel>
    </div>
  )
}

export default HeroBanner