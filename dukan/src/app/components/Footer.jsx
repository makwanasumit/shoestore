"use client"
import React from 'react'
import Wrapper from './Wrapper'
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-14 pb-3 '>
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* left start */}
        <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row'>
          {/* Menu start */}
          <div className='flex flex-col gap-3 shrink-0'>
            <div className='font-sans font-medium uppercase text-sm cursor-pointer'>
              Find a store
            </div>
            <div className='font-sans font-medium uppercase text-sm cursor-pointer'>
              Become a partner
            </div>
            <div className='font-sans font-medium uppercase text-sm cursor-pointer'>
              Sign up for email
            </div>
            <div className='font-sans font-medium uppercase text-sm cursor-pointer'>
              Send us feedback
            </div>
            <div className='font-sans font-medium uppercase text-sm cursor-pointer'>
              Student discount
            </div>
          </div>
          <div className='flex flex-col gap-3 shrink-0'>
            <div className="font-oswald font-medium uppercase text-sm">
              get help
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Order Status
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Delivery
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Returns
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Payment Options
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              Contact Us
            </div>
          </div>
          <div className='flex flex-col gap-3 shrink-0'>
            <div className="font-oswald font-medium uppercase text-sm">
              About Nike
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              news
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              careers
            </div>
            <div className="text-sm   text-white/[0.5] hover:text-white cursor-pointer">
              Investors
            </div>
            <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
              sustainability
            </div>
          </div>
        </div>
        {/* Left End */}
        {/* Right start */}
        <div className='flex gap-4 justify-center md:justify-start'>
          <div onClick={()=>window.open('https://facebook.com','_blank')} className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5]'>
            <FaFacebookF size={20}/>
          </div>
          <div onClick={()=>window.open('https://x.com','_blank')} className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5]'>
            <FaTwitter size={20}/>
          </div>
          <div onClick={()=>window.open('https://youtube.com','_blank')} className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5]'>
            <FaYoutube size={20}/>
          </div>
          <div onClick={()=>window.open('https://instagram.com','_blank')} className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5]'>
            <FaInstagram size={20}/>
          </div>
        </div>
        {/* Right End */}
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* Left Start */}
        <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer md:text-left'>
          @2024 Nike, Inc. All Rights Reserved
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div className='flex gap-2 md:gap-5  text-center  md:text-left flex-wrap justify-center'>
          <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
            Guides
          </div>
          <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
            Terms of Sale
          </div>
          <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
            Terms of Use
          </div>
          <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer'>
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer