
import ManageCategory from '@/components/modules/dashboard/category';
import { getAllCategory } from '@/services/category'
import React from 'react'

const CategoryPages = async() => {

    const {data: category} = await getAllCategory();

  return (
    <div>
      <ManageCategory categories={category.result} />
    </div>
  )
}

export default CategoryPages
