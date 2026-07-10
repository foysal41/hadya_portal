'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/../public/images/logo-hadya.png'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import { CiMenuFries } from "react-icons/ci";
import { MobileNav } from './MobileNav'




const NAVLINKS = [
  {
    id:1,
    url: "#",
    label: "Home"
  },
  {
    id:2,
    url: "#",
    label: "Shop"
  },
  {
    id:3,
    url: "#",
    label: "Sponsor"
  },
  {
    id: 4,
    url : "#",
    label: "Digital Tools"
  },
  {
    id: 5,
    url: "#",
    label: "Travel Services"
  },
  {
    id: 6,
    url: "#",
    label: "Tour Operators"
  },
  {
    id: 7,
    url: "#",
    label: "Knowledge"
  },
  {
    id: 8, 
    url : "#",
    label: "About"
  }
]

const flexClass = "flex items-center justify-between gap-2"
const sectionPadding ="py-2 px-4 lg:px-0"


const ReusableHeader = () => {

  const [showNav, setShowNav] = useState(false)

const openNav = () => setShowNav(true);
const closeNav = () => setShowNav(false);

  return (
    <div className={`w-full bg-[#083F39] text-white transition-all duration-200 h-12vh z-100`}>
      <div className='max-w-7xl mx-auto'> 
        {/* Flex three column */}
          <div className={`${flexClass} ${sectionPadding}`}>
            {/* Logo */}
            <div className=''>
              <Link href={'/en'}><Image src={logo} height={50} width={50} alt='hadya-logo' className='cursor-pointer md:w-20 md:h-20 ' ></Image></Link>
            </div>

            {/* Menu */}
            <div className={`hidden lg:flex items-center space-x-5`}>
              {NAVLINKS.map((link) => {
                return <Link key={link.id} href={link.url}>{link.label}</Link>
              })}
            </div>
            {/* <MobileNav showNav={showNav} closeNav={closeNav}></MobileNav> */}
           <MobileNav  navlink={NAVLINKS} showNav={showNav} closeNav={closeNav}  />

            {/* Auth Btn */}
            <div className={`${flexClass}`}>
                <BiSearch size={25} className='hidden lg:block cursor-pointer'></BiSearch>
                 <button className='hidden lg:block text-[16px] md:text-[16px] px-[20px] py-[8px] border border-white rounded-md cursor-pointer' >Login</button>
                  <button className='hidden lg:block text-[16px] md:text-[16px] px-[20px] py-[8px] border border-[#0B794F] bg-[#0B794F] hover:bg-[#149865]  rounded-md cursor-pointer transition-all duration-300 ' >Register</button>

                  {/* Hamburger Menu */}
                  <div>
                  <CiMenuFries onClick={openNav} className='lg:hidden w-8 h-8 cursor-pointer text-white' />                 
                  </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ReusableHeader