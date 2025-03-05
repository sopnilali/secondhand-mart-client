

import { getAllUser, getCurrentUser } from '@/services/AuthService';
import { getSalesHistory } from '@/services/Transaction';
import { IUser } from '@/types';
import React from 'react'
import ManageSalesHistory from '@/components/modules/salesHistory';

const SalesHistoryPage = async() => {

    
        const { data } = await getAllUser();
        const user = await getCurrentUser();
        const presentUser = data?.find((person: IUser) => person?.email === user?.userEmail)

        const { data : orders } = await getSalesHistory(presentUser?._id);


  return (
    <div>
        <h1>Sales History</h1>
        <ManageSalesHistory orders={orders || []}/>
    </div>
  )
}

export default SalesHistoryPage
