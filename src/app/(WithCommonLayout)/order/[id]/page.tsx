import OrderDetails from '@/components/modules/order/orderDetails';
import SHContainer from '@/components/ui/core/SHContainer';
import { getPaymentDetails } from '@/services/Transaction';
import Link from 'next/link';
import React from 'react'

const OrderSuccessPage = async({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    const {data: paymentdetails} = await getPaymentDetails(id)


  return (
    <div>
     <SHContainer>
        <div className="md:mx-0 mx-4">
            <h1 className="text-3xl font-bold text-center  my-5">Order Placed Successfully</h1>
            <p>Your order ID is: {id}</p>
            <p>Thank you for shopping with us!</p>
            <Link href='/'>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Continue Shopping
            </button></Link>
        </div>
        <OrderDetails payment={paymentdetails}/>


     </SHContainer>
    </div>
  )
}

export default OrderSuccessPage
