import AddListingForm from '@/components/modules/listing/AddListingForm';
import { getAllUser, getCurrentUser } from '@/services/AuthService';
import { getAllCategory } from '@/services/category';
import { IUser } from '@/types';
import React from 'react'

const AddListing = async() => {

    const {data : categories} = await getAllCategory();
    const { data } = await getAllUser();
    const user = await getCurrentUser();
    const currentUserData = data?.find((person: IUser) => person?.email === user?.userEmail)

    console.log(currentUserData)

  return (
    <div>
       <AddListingForm userId={currentUserData?._id} categories={categories.result || []} />
    </div>
  )
}

export default AddListing
