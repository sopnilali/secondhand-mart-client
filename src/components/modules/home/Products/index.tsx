import SectionTitle from '@/components/shared/SectionTitle'
import SHContainer from '@/components/ui/core/SHContainer'
import ItemCard from '@/components/ui/core/ProductCard';
import { getAllListing, } from '@/services/listing';
import { TListings } from '@/types/product';
import React from 'react'
import ProductCard from '@/components/ui/core/ProductCard';

const AvailableProducts = async() => {

  const { data: products } = await getAllListing();

  const filteredProducts = products.result.filter((p : any) => p.status === "available");

  return (
    <>
    <SHContainer>
      <SectionTitle title='Available Products'/>
      {/* Add products here */}
      {filteredProducts.length > 0 ? <div key={filteredProducts?._id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-2 ">
        {filteredProducts?.map((product: TListings, idx: number) => (
         <ProductCard product={product}></ProductCard>
        ))}
      </div>: <div >Not Available</div>}
    </SHContainer>
    </>
  )
}

export default AvailableProducts
