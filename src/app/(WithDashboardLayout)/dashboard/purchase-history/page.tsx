import MangePurchasesHistory from '@/components/modules/purchasesHistory';
import { getAllUser, getCurrentUser } from '@/services/AuthService';
import { getPurchasesHistory } from '@/services/Transaction';
import { IUser } from '@/types';
import React from 'react'

const PurchasesHistoryPage = async() => {

    const { data } = await getAllUser();
    const user = await getCurrentUser();
    const presentUser = data?.find((person: IUser) => person?.email === user?.userEmail)
    const { data : orders } = await getPurchasesHistory(presentUser?._id)

  return (
    <div>
      <MangePurchasesHistory orders={orders}/>
    </div>
  )
}

export default PurchasesHistoryPage
