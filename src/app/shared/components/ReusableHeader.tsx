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
    id: 1,
    label: "Home",
    url: "/",
  },

  {
    id: 2,
    label: "Shop",
    url: "/shop",
    submenu: [
      { label: "Ajwa Dates", url: "/shop/ajwa-dates" },
      { label: "Prayer Mats", url: "/shop/prayer-mats" },
      { label: "Attar", url: "/shop/attar" },
      { label: "Umrah Kits", url: "/shop/umrah-kits" },
    ],
  },

  {
    id: 3,
    label: "Sponsor",
    url: "/sponsor",
    submenu: [
      { label: "Food Distribution", url: "/sponsor/food" },
      { label: "Water Distribution", url: "/sponsor/water" },
      { label: "Wheelchair", url: "/sponsor/wheelchair" },
    ],
  },

  {
    id: 4,
    label: "Digital Tools",
    url: "/digital-tools",
    submenu: [
      { label: "Qibla Finder", url: "/digital-tools/qibla" },
      { label: "Dam Analyzer", url: "/digital-tools/dam" },
      { label: "Quran Tracker", url: "/digital-tools/quran-tracker" },
    ],
  },

  {
    id: 5,
    label: "Travel Services",
    url: "/travel-services",
  },

  {
    id: 6,
    label: "Tour Operators",
    url: "/tour-operators",
  },

  {
    id: 7,
    label: "Knowledge",
    url: "/knowledge",
  },

  {
    id: 8,
    label: "About",
    url: "/about",
  },
];

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
              {NAVLINKS.map((link) => (
                <div key={link.id} className='relative group'>
                  <Link href={link.url} className='flex items-center gap-1 text-sm hover:text-emerald-300 transition'>{link.label}
                  {link.submenu && (
                    <span className='text-xs'>▾</span>
                  )}
                  </Link>

                  {
                    link.submenu &&(
                      <div className='absolute left-0 top-full hidden group-hover:block w-56 rounded-md bg-white shadow-xl py-2 z-50'>
                          {link.submenu.map((item ) => (
                            <Link key={item.url} href={item.url} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>{item.label}</Link>
                          ))}
                      </div>
                    )
                  }
                </div>
              ))}
            </div>
            {/* <MobileNav showNav={showNav} closeNav={closeNav}></MobileNav> */}
           <MobileNav  navlink={NAVLINKS} showNav={showNav} closeNav={closeNav}  />

            {/* Auth Btn */}
            <div className={`${flexClass}`}>
                <BiSearch size={25} className='hidden lg:block cursor-pointer'></BiSearch>
                 <button className='hidden text-font lg:block text-[16px] md:text-[16px] px-[20px] py-[8px] border border-white rounded-md cursor-pointer' >Login</button>
                  <button className='hidden text-font lg:block text-[16px] md:text-[16px] px-[20px] py-[8px] border border-[#0B794F] bg-[#0B794F] hover:bg-[#149865]  rounded-md cursor-pointer transition-all duration-300 ' >Register</button>

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