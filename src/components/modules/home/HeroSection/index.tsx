

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
          className=" rounded-3xl  mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="pl-12">
              <h1 className="text-4xl font-bold leading-normal">
                <span className='text-[#e5532a]'>Welcome to</span> <br />the Second Hand Marketplace


              </h1>
              <p className="my-5">
                Save big this Black Friday with unbeatable deals on tech, home
                essentials, fashion, and more! Limited stock.
              </p>
              <Link href={'/products'}><Button
                size="lg"
                className="bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-6 py-2 rounded-full text-white text-[14px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer"
              >
                Get Started
              </Button></Link>
            </div>
            <div className="flex items-center justify-center">
              <Image src={heroImg} height={500} width={600} alt='second hand products' />
            </div>
          </div>
        </div>
      </SHContainer>
    </div>
  )
}

export default HeroSection
