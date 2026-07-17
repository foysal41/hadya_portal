'use client'
import React, { useEffect, useState } from 'react'
import hero1 from "@/../public/images/Kaaba.webp"
import hero2 from "@/../public/images/Masjid_a_-nabawi.webp";
import hero3 from "@/../public/images/Pilgrims_ritual.webp";
import hero4 from "@/../public/images/distribution.webp";
import Image from 'next/image';


const slides = [
  {
    image: hero1,
    title: "Prepare for Your Blessed Journey",
    description:
      "Technology, Guidance & Services for Every Pilgrim.",
  },
  {
    image: hero2,
    title: "Your Companion Throughout Umrah & Hajj",
    description:
      "Trusted digital tools designed for a peaceful pilgrimage.",
  },
  {
    image: hero3,
    title: "Knowledge, Guidance & Digital Excellence",
    description:
      "Everything a pilgrim needs in one premium platform.",
  },
  {
    image: hero4,
    title: "Verified Sponsorship with Transparency",
    description:
      "Support pilgrims through trusted distribution services.",
  },
];



const HeroSlider = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(()=> {
      setActive((prev) => (prev+1) % slides.length);
    }, 10000)
    return()=> clearInterval(interval)
  }, [])
   
  return (
    <div className='relative overflow-hidden h-[90vh] '>
      {/* Background Image */}
      {
        slides.map((slide, idx)=> (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1500 ${active === idx? "opacity-100" : "opacity-0" }`}> 
            <Image src={slide.image} alt={slide.title} fill priority={idx===0} className={`object-cover transition-transform duration-35000 ${active === idx ? "scale-[1.02]" : "scale-100"}`} ></Image>
            
            {/* Overlay */}
            <div className='absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/55'></div>

          </div>
        ))
      }


      {/* Content */}
      <div className='relative z-20 flex h-full items-center justify-center px-6'>
        <div className='text-center text-white transition-transform duration-75' >
          <h1 className='heading-font text-3xl md:text-6xl  font-bold leading-tight'>{slides[active].title}</h1>
          <p className=' text-font mx-auto mt-3 text-base md:text-lg text-gray-200 '>{slides[active].description}</p>

          <div className='flex flex-col items-center justify-center mt-10 gap-4 sm:flex-row'>
            <button className='rounded-full bg-[#0B794F] hover:bg-[#149865] px-8 py-4 font-semibold text-white border border-[#0B794F]  shadow-lg transition-all duration-300 cursor-pointer'><span>Explore Hadya</span></button>
            <button className='rounded-full border border-white px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-[#074D43]'><span>Discover Services</span></button>

          </div>
      </div>


      </div>

    </div>
  )
}

export default HeroSlider