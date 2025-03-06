"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import SeconHandIcon from "@/assets/SHIcon.svg";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";



const Navbar = () => {
  const {user, setIsLoading} =  useUser();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/category", label: "Category" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="bg-primary hover:bg-primary/90 bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black">
          <div className="flex justify-center items-center">
            <Image src={SeconHandIcon} width={50} height={50} alt="brand logo" />
            <p className="text-3xl font-bold ml-3">Second Hand</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => (

            <Link key={index} href={`${item.href}`} className={`${pathname === `${item.href}`
              ? "text-black font-bold "
              : "text-white hover:text-black  "
              }`}>
              {item.label}
            </Link>

          ))}
        </div>

        {/* Desktop Menu Right */}
        <div className="hidden md:flex space-x-6 ">
          {user ? (<button onClick={handleLogOut} className="text-white duration-200 transition-all hover:bg-orange-600 border hover:border-orange-600 rounded-full py-2 px-4 block hover:text-gray-200">
            Logout
          </button>) : <Link href="/login" className="text-white border hover:bg-teal-700 hover:border-teal-700 rounded-full py-2 px-4 hover:text-gray-200">
            Login</Link>


          }

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary hover:bg-primary/90 bg-gradient-to-r from-[#e5532a] to-[#d1461cd2] shadow-lg text-white hover:text-black p-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={`${item.href}`}
              className={`block py-2 text-lg hover:text-gray-200 ${pathname === `${item.href}`
                ? "text-black font-bold"
                : "text-white hover:text-black"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>

          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;