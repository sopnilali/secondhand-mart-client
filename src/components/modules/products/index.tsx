"use client"

import ProductCard from '@/components/ui/core/ProductCard'
import { TListings } from '@/types/product'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import ListFilter from './ListFilterSidebar'

const ManageProducts = ({ products }: { products: TListings[] }) => {

  return (
    <div>

      <div>
        <h2 className="md:text-3xl text-2xl font-bold text-center ">
          All Product
        </h2>
        <p className=" mt-2 font-medium md:text-xl">
          Discover a wide range of products available at the best prices, handpicked just for you!
        </p>
      </div>

      <div className='md:flex my-8 gap-5'>
        <div>
        <ListFilter />
        </div>
      {
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 md:mt-0 overflow-hidden  mt-8">
            {products?.map((product: TListings, idx: number) => (
              <ProductCard key={idx} product={product} />
            )) ? products?.map((product: TListings, idx: number) => (
              <ProductCard key={idx} product={product} />
            )) : <h2>Not avialble Product</h2>}
          </div>
      }
      </div>

    </div>
  )
}

export default ManageProducts
