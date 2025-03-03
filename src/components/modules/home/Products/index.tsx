import SectionTitle from '@/components/shared/SectionTitle'
import SHContainer from '@/components/ui/core/SHContainer'
import ItemCard from '@/components/ui/ItemCard';
import { getAllProducts } from '@/services/Products';
import { TListings } from '@/types/product';
import React from 'react'

const AvailableProducts = async() => {

  const { data: products } = await getAllProducts();

  const filteredProducts = products.result.filter((p : any) => p.status === "available");

  console.log(filteredProducts)

  return (
    <>
    <SHContainer>
      <SectionTitle title='Available Products'/>
      {/* Add products here */}
      {filteredProducts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-2 ">
        {filteredProducts?.map((category: TListings, idx: number) => (
          <ItemCard key={idx} item={category} />
        ))}
      </div>: <div >Not Available</div>}
    </SHContainer>
    </>
  )
}

export default AvailableProducts
