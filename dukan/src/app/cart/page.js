"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Wrapper from '../components/Wrapper'
import CartItem from '../components/CartItem'


const cart = () => {
  return (
    <div className=' w-full md:py-20'>
      <Wrapper className="flex justify-center items-center flex-col">
        {/* Heading and Paragraph start */}
        <div className='text-center max-w-[800px] flex justify-center items-center mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 md:mb-0 font-semibold leading-tight'>
            Shoping cart
          </div>
        </div>
        {/* Heading and Paragraph start */}
        {/* Cart contemt start */}
        <div className='flex flex-col w-full lg:flex-row gap-12 py-10'>
          {/* Cart item Start */}
          <div className='flex-[2]'>
            <div className='text-lg font-bold'>
              Cart Item
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart item End */}
          {/* Summary Start */}
          <div className='flex-[1]'>
            <div className='text-lg font-bold'>
              Summary
            </div>
            <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
              <div className='flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>
                  Subtotal
                </div>
                <div className='text-md md:text-lg font-medium text-black'>
                  ₹ 19 695.00
                </div>
              </div>
              <div className='mt-5 border-t text-sm md:text-md py-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque eum rem enim quasi eos quidem! Dolor magnam, placeat laborum sapiente error exercitationem quasi et quaerat, deserunt alias consequuntur reprehenderit iste vitae laboriosam maxime.
              </div>
              {/* Button Start */}
              <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                Checkout
              </button>
              {/* Button End */}
            </div>
          </div>
          {/* Summary end */}
        </div>
        {/* Cart contemt end */}
        {/* <div className='flex-[2] flex flex-col item-center pb-[50px] md:-mt-14'>
          <Image src="/empty-cart.jpg" alt="Error" width={300} height={300} className='w-[300px] md:w-[400px]' />
          <span className='text-center text-xl font-bold'>
            Your cart is empty
          </span>
          <span className='text-center mt-4'>
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link href={"/"} className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 text-center hover:opacity-75 mt-8'>
          Continue Shopping 
          </Link>
        </div> */}
      </Wrapper>
    </div>
  )
}

export default cart