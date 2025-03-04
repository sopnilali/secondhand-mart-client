import ProductDetails from '@/components/modules/products/productDetails';
import { getSinglelisting } from '@/services/listing';
import React from 'react'

const ProductDetailsPage = async({ params }: any) => {

  const {id} = await params

    const {data: productDetails} = await getSinglelisting(id)

    return (
      <div>
        <ProductDetails product={productDetails}/>
      </div>
    )
}

export default ProductDetailsPage
