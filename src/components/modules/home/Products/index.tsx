import SectionTitle from '@/components/shared/SectionTitle'
import SHContainer from '@/components/ui/core/SHContainer'
import ItemCard from '@/components/ui/core/ProductCard';
import { getAllListing, } from '@/services/listing';
import { TListings } from '@/types/product';
import React from 'react'
import ProductCard from '@/components/ui/core/ProductCard';
import Link from 'next/link';

const AvailableProducts = async () => {

  const { data: products } = await getAllListing();

  const filteredProducts = products?.result?.filter((p: any) => p.status === "available");

  return (
    <>
      <SHContainer>
        <SectionTitle title='Available Products' />
        {/* Add products here */}
        {filteredProducts?.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-2 ">
          {filteredProducts?.slice(0, 8).map((product: TListings, idx: number) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div> : <div >Not Available</div>}
        <div className='flex justify-center mt-6'>
          <Link className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-8 py-2 rounded-full text-white text-[14px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer' href={'/products'}>See All</Link>
        </div>
      </SHContainer>
    </>
  )
}

export default AvailableProducts
