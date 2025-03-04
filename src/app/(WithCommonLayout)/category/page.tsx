import ManageCategory from '@/components/modules/category'
import SHContainer from '@/components/ui/core/SHContainer'
import { getAllCategory } from '@/services/category'
import React from 'react'

const CategoryPage = async() => {

  const {data: categoryData} = await getAllCategory();

  return (
    <div>
      <SHContainer>
        <ManageCategory categories={categoryData} />
      </SHContainer>
    </div>
  )
}

export default CategoryPage
