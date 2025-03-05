"use client"

import ProductCard from '@/components/ui/core/ProductCard'
import { TListings } from '@/types/product'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import ListFilter from './ListFilterSidebar'
import { ICategory } from '@/types/category'
import SectionTitle from '@/components/shared/SectionTitle'

interface IManageProductsProps {
  products: TListings[],
  categories: ICategory[] | any
}

const ManageProducts = ({ products, categories }: IManageProductsProps) => {

  const searchParams = useSearchParams()
  const search = searchParams.get('category')
  const filterByCategoryProducts = products?.filter(product => product?.category?.name === search)

  return (
    <div>

      <div>
        <SectionTitle title='All Product'/>
        <p className=" mt-2 font-medium md:text-xl text-center">
          Discover a wide range of products available at the best prices, handpicked just for you!
        </p>
      </div>

      <div className='md:flex my-8 gap-5'>
        {/* <div>
        <ListFilter categories={categories?.result} />
        </div> */}
      {
          search && filterByCategoryProducts?.length > 0 ? <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 md:mt-0 overflow-hidden  mt-8">
          {filterByCategoryProducts?.map((product: TListings, idx: number) => (
            <ProductCard key={idx} product={product} />
          )) ? filterByCategoryProducts?.map((product: TListings, idx: number) => (
            <ProductCard key={idx} product={product} />
          )) : <h2>Not avialble Product</h2>}
        </div> : <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 md:mt-0 overflow-hidden  mt-8">
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
