"use client"

import React from 'react'
import CategoryCard from '@/components/ui/core/CategoryCard';

const ManageCategory = ({ categories }: { categories: any }) => {



    return (
       <div className="md:flex my-8 gap-8">
         <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 md:mt-0 mt-8">
            {categories?.result?.map((category: any) => 
                <CategoryCard key={category._id} category={category} />
            )}
        </div>
       </div>
    )
}

export default ManageCategory
