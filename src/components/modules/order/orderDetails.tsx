import { Itransaction } from '@/types/transaction';
import React from 'react';

const OrderDetails = ({ payment }  : {payment: Itransaction[]}) => {

    console.log(payment)
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Payment Details</h1>

      {/* Buyer Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Buyer Information</h2>
        <div className="space-y-1">
          <p><span className="font-medium">Name:</span> {payment[0]?.buyerID?.name} </p>
          <p><span className="font-medium">Email:</span> {payment[0]?.buyerID?.email} </p>
        </div>
      </div>

      {/* Item Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Item Information</h2>
        <div className="space-y-1">
          <p><span className="font-medium">Title:</span> {payment[0]?.itemID.title}</p>
          <p><span className="font-medium">Description:</span>{payment[0]?.itemID.description} </p>
          <p><span className="font-medium">Price:</span> ${payment[0]?.itemID.price}</p>
          <p><span className="font-medium">Condition:</span> {payment[0]?.itemID.condition}</p>
        </div>
      </div>

      {/* Seller Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Seller Information</h2>
        <div className="space-y-1">
          <p><span className="font-medium">Name:</span>{payment[0]?.sellerID.name}</p>
          <p><span className="font-medium">Email:</span>{payment[0]?.sellerID.email} </p>
          <p><span className="font-medium">Phone:</span> {payment[0]?.sellerID.phonenumber}</p>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Transaction Information</h2>
        <div className="space-y-1">
          <p><span className="font-medium">Transaction ID:</span> {payment[0].transactionId}</p>
          <p><span className="font-medium">Status:</span> <span className={`px-2 py-1 rounded ${payment[0].status === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>{payment[0].status}</span></p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;