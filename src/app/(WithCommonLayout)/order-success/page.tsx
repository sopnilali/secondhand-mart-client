import { Metadata } from 'next'
import Head from 'next/head'


export const metadata : Metadata= {
    title: 'Order Placed Successfully',
    description: 'Your order has been placed successfully.',
    keywords: ['order', 'success', 'second-hand', 'buy', 'sell'],
  
}
const OrderSucessPage = () => {


  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Order Payment Successfully!</h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Your order has been placed and is being processed.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSucessPage
