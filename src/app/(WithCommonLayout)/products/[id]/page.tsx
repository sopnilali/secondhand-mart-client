

import ProductDetails from '@/components/ui/productDetails';
import { getSingleProduct } from '@/services/Products';
import React from 'react'

const ProductDetailsPage = async({ params }: any) => {

  const {id} = await params

    const {data: productDetails} = await getSingleProduct(id)

    return (
      <div>
        <ProductDetails product={productDetails}/>
      </div>
    )
}

export default ProductDetailsPage
