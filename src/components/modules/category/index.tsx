"use client"

import React from 'react'
import CategoryCard from '@/components/ui/core/CategoryCard';
import SectionTitle from '@/components/shared/SectionTitle';

const ManageCategory = ({ categories }: { categories: any }) => {



    return (
       <div>
        <SectionTitle title='All Category'/>
        <hr />
        <div className="md:flex my-8 gap-8">
         {categories?.result?.length > 0 ? <div  className="grid mx-auto lg:grid-cols-8 justify-center md:grid-cols-4 grid-cols-2 gap-8 md:mt-0 mt-8">
            {categories?.result?.map((category: any) => 
                <CategoryCard key={category._id} category={category} />
            )}
        </div>: <>Category Not available</>}
       </div>
       </div>
    )
}

export default ManageCategory
