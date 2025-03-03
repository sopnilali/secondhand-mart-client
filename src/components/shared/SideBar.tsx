"use client"
import Link from 'next/link'
import { useState } from 'react';

const SideBar = () => {


  const SidebarLinks = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'User Info',
      href: '/dashboard/userinfo',
    },
    {
      label: 'Project Management',
      href: '#',
      subLinks: [
        { label: 'Add Project', href: '/dashboard/projects/addproject' },
        { label: 'Projects', href: '/dashboard/projects' },
      ],
    },
    {
      label: 'Blog Management',
      href: '#',
      subLinks: [
        { label: 'Add Blog', href: '/dashboard/blogs/addblog' },
        { label: 'Blogs', href: '/dashboard/blogs' },
      ],
    },
    {
      label: 'Message Management',
      href: '#',
      subLinks: [
        { label: 'View Message', href: '/dashboard/messages' },
      ],
    },
    {
      label: 'Home',
      href: '/',
    },
  ];

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index : any) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };


  return (
    <div className='min-h-screen md:w-64 bg-gray-800 text-white '>
      <h1 className='text-2xl font-bold mb-6 text-center py-3 pb-0'>My SideBar</h1>
      <nav className="space-y-4">
      {SidebarLinks.map((link, index) => (
        <div key={index}>
          <div
            className="flex items-center justify-between px-4 py-2 capitalize rounded hover:bg-green-500 hover:text-white cursor-pointer"
            onClick={() => toggleSubMenu(index)}
          >
            <Link href={link.href}>{link.label}</Link>
            {link.subLinks && (
              <span className="ml-2">
                {openSubMenu === index ? '▲' : '▼'}
              </span>
            )}
          </div>
          {link.subLinks && openSubMenu === index && (
            <div className="pl-6 space-y-2">
              {link.subLinks.map((subLink, subIndex) => (
                <Link
                  key={subIndex}
                  href={subLink.href}
                  className="block px-4 py-2 capitalize rounded hover:bg-green-500 hover:text-white"
                >
                  {subLink.label}
                </Link>
              ))}
             
            </div>
            
          )}
         
        </div>
        
      ))}
    </nav>
    <button className='text-md font-bold mb-6 hover:bg-green-700 rounded my-4 w-full text-center px-4 py-2 '>Logout</button>
    </div>
  )
}

export default SideBar