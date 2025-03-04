
import UpdateCategoryForm from '@/components/modules/dashboard/category/UpdateCategoryForm'
import { getSingleCategory } from '@/services/category';
import React from 'react'

const updateCategory = async({ params }: any) => {
    const { id } = await params;
    const { data: categorydata } = await getSingleCategory(id)


  return (
    <div>
      <UpdateCategoryForm category={categorydata}/>
    </div>
  )
}

export default updateCategory
