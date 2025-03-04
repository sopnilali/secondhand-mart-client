import AddCategoryForm from '@/components/modules/dashboard/category/AddCategoryForm';
import { getAllUser, getCurrentUser } from '@/services/AuthService';
import { IUser } from '@/types';
import React from 'react'

const AddCategory = async() => {

        const { data } = await getAllUser();
        const user = await getCurrentUser();
        const currentUserData = data?.find((person: IUser) => person?.email === user?.userEmail)
    
        console.log(currentUserData)

  return (
    <div>
      <AddCategoryForm/>
    </div>
  )
}

export default AddCategory
