import ManageListing from '@/components/modules/listing';
import { getCurrentUser } from '@/services/AuthService';
import { getAllListing, } from '@/services/listing';
import { TListings } from '@/types/product';
import React from 'react'

const ListingPages = async() => {
  const { data } = await getAllListing();
    const {userEmail} = await getCurrentUser();

    const filterListings = data?.result?.filter((product : TListings) => product?.userID?.email === userEmail)


  return (
    <div>
        <ManageListing listings={filterListings || []} />
    </div>
  )
}

export default ListingPages
