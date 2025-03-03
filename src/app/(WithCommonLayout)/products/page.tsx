import SHContainer from '@/components/ui/core/SHContainer';
import ItemCard from '@/components/ui/ItemCard';
import { getAllProducts } from '@/services/Products'
import { TListings } from '@/types/product';
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
  title: 'All Products',
  description: 'List of available products',
  keywords: ['products', 'second-hand', 'buy', 'sell'],
}

const ProductPage = async() => {

  const {data: products} = await getAllProducts();

  return (
    <div>
          <SHContainer>
          {products.result.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-2 ">
        {products.result?.map((category: TListings, idx: number) => (
          <ItemCard key={idx} item={category} />
        ))}
      </div>: <div >Not Available</div>}
          </SHContainer>
    </div>
  )
}

export default ProductPage
