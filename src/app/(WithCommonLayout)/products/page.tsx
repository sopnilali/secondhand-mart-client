import SHContainer from '@/components/ui/core/SHContainer';
import { getAllListing } from '@/services/listing'
import { Metadata } from 'next';
import React from 'react'
import ManageProducts from '@/components/modules/products';

export const metadata : Metadata = {
  title: 'All Products',
  description: 'List of available products',
  keywords: ['products', 'second-hand', 'buy', 'sell'],
}

const ProductPage = async() => {

  const {data: products} = await getAllListing();

  const filteredProducts = products.result.filter((p : any) => p.status === "available");

  return (
    <div>
          <SHContainer>
          <ManageProducts products={filteredProducts || []}/>
          <div></div>
          </SHContainer>
    </div>
  )
}

export default ProductPage
