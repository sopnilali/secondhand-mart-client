"use client"

import Image from 'next/image';
import Link from 'next/link';
import BuyNowButton from './BuyNowButton';
import { TListings } from '@/types/product';

const ProductCard = ({ product  }: {product: TListings}) => {


  return (
    <div className="border relative rounded-lg overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className='flex justify-center'>
        <Image
          src={product?.images[0]} // Display the first image
          alt={product?.title}
          height={200}
          width={300}
        />
      </div>
      <h2 className='absolute top-4 right-2'>{product.status === "available" ? <p className='text-white px-2 rounded bg-green-600'>Available</p>: <p className='text-white px-2 rounded bg-red-400'>Sold</p>}</h2>
      <div className="p-4 ">
        <Link href={`/products/${product?._id}`}><h2 className="text-xl font-semibold mb-2">{product?.title}</h2></Link>
        <p className="text-gray-600 mb-2">{product?.description}</p>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-500'>Price:</p>
          <p className="text-lg font-bold text-green-600">BDT {product?.price}</p>
        </div>
        <div className="flex justify-end relative right-0 mt-4">
            <div className='absolute bottom-0 '>
            <BuyNowButton product={product}/>
            </div>
        </div>
        <div className='flex justify-between'>
          <p className="text-sm text-gray-500">Condition: {product?.condition}</p>
          {/* Action Buttons */}
          <p className="text-sm text-gray-500">Category: {product?.category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;