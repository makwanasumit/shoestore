"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

const RelatedProduct = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="mx-[50px] md:mt-[100px] mb-[100px] md:mb-0">
            <div className='text-2xl font-bold mb-5'>
                You May Also Like
            </div>
            <Carousel 
            responsive={responsive}
            containerClass='-mx-[10px]'
            itemClass='mx-[10px]'
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Carousel>
        </div>
    )
}

export default RelatedProduct