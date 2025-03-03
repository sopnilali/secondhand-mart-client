import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import heroImg from '@/assets/Second_Hand_image.png'
import SHContainer from '@/components/ui/core/SHContainer';

const HeroSection = () => {

  return (
    <div className="container mx-auto">
       <SHContainer>
       <div
        className= " rounded-3xl  mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="pl-12">
            <h1 className="text-4xl font-bold leading-normal">
              Don&apos;t Miss Out on <br /> These Unbeatable Black <br /> Friday
              Deals!
            </h1>
            <p className="my-5">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>
            <Button size="lg" className="mr-5 rounded-full">
              Buy Now
            </Button>
            <Link href={'/products'}><Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-gray-100"
            >
              All Products
            </Button></Link>
          </div>
          <div className="flex items-center justify-center">
           <Image src={heroImg} height={500} width={600} alt='second hand products'/>
          </div>
        </div>
      </div>
       </SHContainer>
    </div>
  )
}

export default HeroSection
