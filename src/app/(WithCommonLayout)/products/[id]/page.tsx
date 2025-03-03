import ProductDetails from '@/components/ui/productDetails';
import { getSingleProduct } from '@/services/Products';
import React from 'react'

const ProductDetailsPage = async({ params }: any) => {

    // Fetch product details using the product id from the URL params
    const id = params['id'];

    const {data: productDetails} = await getSingleProduct(id)

    return (
      <div>
        <ProductDetails product={productDetails}/>
      </div>
    )
}

export default ProductDetailsPage
