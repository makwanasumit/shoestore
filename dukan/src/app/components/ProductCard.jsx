import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ data }) => {
  // Ensure that the required properties exist before using them
  if (!data || !data.attributes) {
    return <div>Product data is missing</div>;
  }

  const { attributes: p, id } = data;
  const { slug, image, name } = p;

  return (
    <Link href={`/product/${slug}`} className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
      {thumbnail?.url ? (
        <Image src={p.formats.thumbnail.url} alt={name || 'Product Image'} width={500} height={500} />
      ) : (
        <div style={{ width: 500, height: 500, backgroundColor: '#f0f0f0' }}>Image not available</div>
      )}
      <div className='text-lg font-medium'>
        <h2>{name || 'Product Name'}</h2>
        <div className='flex items-center text-black/[0.5]'>
          <p className='mr-2 text-lg font-semibold'>$20.00</p>
          <p className='text-base font-medium line-through'>$25.00</p>
          <p className='ml-auto text-base font-medium text-green-400'>
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
