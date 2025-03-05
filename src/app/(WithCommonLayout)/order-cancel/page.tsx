import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'Second Hand Marketplace - Order Cancelled',
    description: 'Order cancelled page of the second hand marketplace',
    keywords: ['second hand marketplace', 'order cancelled', 'cancel order']
  
}
const OrderCancelPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <svg
          className="mx-auto h-12 w-12 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Order Cancelled</h1>
        <p className="mt-2 text-gray-600">
          Your order has been successfully cancelled.
        </p>
        <p className="mt-2 text-gray-600">
          If you have any questions, please contact our support team.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderCancelPage
