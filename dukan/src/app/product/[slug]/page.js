import ProductDetailsCarousel from '@/app/components/ProductDetailsCarousel'
import RelatedProduct from '@/app/components/RelatedProduct'
import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'




const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col md:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          {/* Left colunm start */}
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel /> 
          </div>
          {/* Left colunm End */}
          {/* Right colunm start */}
          <div className='flex-[1] py-3'>
            <div className='text-[34px] font-semibold mb-2'>
              Jorden Retro 6 G
            </div>
            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf shoes
            </div>
            <div className='text-lg font-semibold '>
              MRP: ₹19695.00
            </div>
            <div className='text-md font-medium text-black/[0.5]'>
              incl. all taxes
            </div>
            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {`(Fast delivery. usually dispatched in 1 day.)`}
            </div>

            {/* Product size range start */}
            <div className='mb-10'>
              {/* Heading Start */}
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>
                  Select Size
                </div>
                <div className='text-md font-semibold text-black/[0.5]'>
                  Select Guide
                </div>
              </div>
              {/* Heading end */}'
              {/* size start */}
              <div className='grid grid-cols-5 gap-2'>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-6
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-6.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-7
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-7.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-8
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-8.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-9
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-9.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-10
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK-10.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                  UK-11
                </div>
              </div>
              <div className='text-red-500 mt-1'>
                Size selection is required
              </div>
              {/* size end */}
            </div>
            {/* Product size range end */}
            {/* add to cart button start */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Add to Cart
            </button>
            {/* add to cart button end */}
            {/* Whishlist button start */}
            <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
              Whishlist
              <IoMdHeartEmpty size={20}/>
            </button>
            {/* Whishlist button end */}
            <div>
              <div className='text-lg font-bold mb-5'>
                Product Details
              </div>
              <div className='text-md mb-5 text-justify'>
                Feel unbeatable from the tee box to the final putt in a design that's pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses the strut of MJ's championship with some of our best Golf technology, helping you make a statement of confidence when it comes time to tame the course. 
              </div>
              <div className='text-md mb-5 text-justify'>
                Feel unbeatable from the tee box to the final putt in a design that's pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses the strut of MJ's championship with some of our best Golf technology, helping you make a statement of confidence when it comes time to tame the course. 
              </div>
            </div>
          </div>
          {/* Right colunm End */}

        </div>
        <RelatedProduct/>
      </Wrapper>
    </div>
  )
}

export default ProductDetails