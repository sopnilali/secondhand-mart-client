"use client"
import React from 'react'


const OrderFaildPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <svg
          className="mx-auto h-12 w-12 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Order Failed</h1>
        <p className="mt-2 text-gray-600">
          We're sorry, but your order could not be processed.
        </p>
        <div className="mt-6 space-x-4">
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

export default OrderFaildPage
