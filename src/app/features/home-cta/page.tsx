import { advance, style } from "@/app/csslib/GlobalCSS";
import Image from "next/image";
import React from "react";
import ctaImage from "../../../../public/images/nwes-letter-image.webp";
import { PiEnvelopeLight } from "react-icons/pi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const CTA = () => {
  return (
    <section className={`${advance.section.padding} bg-[#F9F6F0]`}>
      
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] items-center gap-8 lg:gap-12 max-w-5xl mx-auto">

     
        <div className="flex justify-center lg:justify-start">
          <Image
            src={ctaImage}
            alt="Hadya newsletter"
            width={260}
            height={260}
            className="w-55 lg:w-65 h-auto"
          />
        </div>


    
        <div className="text-center lg:text-left">

          <h2 className={`${style.heading.h2} text-primary`}>
            Stay Updated with Hadya
          </h2>

          <p className={`${style.text.md} text-gray-600 mt-2 max-w-2xl`}>
            Subscribe to our newsletter and stay informed about our latest
            products, services, articles, news and updates.
          </p>


          
          <form className="mt-6 flex flex-col sm:flex-row items-stretch gap-2 max-w-2xl">

          
            <div className="relative flex-1">

            
              <PiEnvelopeLight className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[22px] pointer-events-none" />

            
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-14 border border-black/10 bg-white pl-12 pr-4 rounded-lg outline-none focus:border-primary transition-colors"
              />

            </div>


       
            <button
              type="submit"
              className="h-14 bg-primary text-orangeColor px-7 rounded-lg font-medium flex items-center justify-center gap-3 whitespace-nowrap"
            >
              Subscribe

              <HiArrowRight className="text-lg" />
            </button>

          </form>


          
          <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-500">
            <HiOutlineShieldCheck className="text-primary text-base" />

            <span>
              No spam, only valuable updates. You can unsubscribe anytime.
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CTA;