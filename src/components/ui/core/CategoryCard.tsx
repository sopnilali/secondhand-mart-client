import { ICategory } from '@/types/category'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardHeader } from '../card'

const CategoryCard = ({ category }: { category: ICategory }) => {

    const { name, image } = category;

  return (
    <div>
            <Link href={`/products?category=${name}`}>
                <Card className="p-3 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full">
                    <CardHeader className="relative p-0 h-[130px] overflow-hidden">
                        <Image
                            className="rounded-t-lg h-[120px] w-full md:scale-90 transition-transform duration-500 ease-in-out transform hover:scale-100 hover:rounded-lg"
                            src={
                                image ||
                                "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                            }
                            width={500}
                            height={500}
                            alt="product image"

                        />
                    </CardHeader>
                    <h2 className="md:text-sm sm:text-sm overflow-hidden font-medium text-center capitalize">{name}</h2>
                </Card>
            </Link>
        </div>
  )
}

export default CategoryCard
