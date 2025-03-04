import OrderDetails from '@/components/modules/order/orderDetails';
import { getAllUser, getCurrentUser } from '@/services/AuthService';
import { getPurchasesHistory, getSinglePurchasesHistory } from '@/services/Transaction';
import { IUser } from '@/types';
import React from 'react'

const PurchaseHistoryDetails = async() => {

        const { data } = await getAllUser();
        const user = await getCurrentUser();
        const presentUser = data?.find((person: IUser) => person?.email === user?.userEmail)
        const { data : orders } = await getPurchasesHistory(presentUser?._id)
        const { data: history } = await getSinglePurchasesHistory(orders.transactionID)
        console.log(history)
  return (
    <div>

    </div>
  )
}

export default PurchaseHistoryDetails 
