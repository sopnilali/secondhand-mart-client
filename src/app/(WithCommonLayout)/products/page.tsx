import SHContainer from '@/components/ui/core/SHContainer';
import { getAllListing } from '@/services/listing'
import { Metadata } from 'next';
import React from 'react'
import ManageProducts from '@/components/modules/products';
import { getAllCategory } from '@/services/category';

export const metadata : Metadata = {
  title: 'All Products',
  description: 'List of available products',
  keywords: ['products', 'second-hand', 'buy', 'sell'],
}

const ProductPage = async({ searchParams }: { searchParams: any }) => {
  const query = await searchParams;
  

  const { data: products } = await getAllListing(undefined, query);
  const { data: categories } : any = await getAllCategory();

  return (
    <div>
          <SHContainer>
          <ManageProducts products={products?.result } categories={categories}  />
          </SHContainer>
    </div>
  )
}

export default ProductPage
