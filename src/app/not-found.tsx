import { Button } from '@/components/ui/button'
import React from 'react'

const NotfoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-[#e5532a]">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-6 text-blue-500 underline">
        <Button className='w-full bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] px-6 py-2 rounded-[4px] text-white font-semibold text-[18px] shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-[#e5532a] hover:to-[#e5532a] hover:shadow-lg active:scale-75 focus:outline-none cursor-pointer'>Go back to the homepage</Button>
      </a>
    </div>
  )
}

export default NotfoundPage
