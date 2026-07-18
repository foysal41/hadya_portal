import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import React from "react";
import kabaImage from "../../../../public/images/minarets_Kaaba_vertical.jpg"
import kaabaGoldenHour from "../../../../public/images/Kaaba_golden_hour_vertical.jpg"
import meccaMosque from "../../../../public/images/Mecca_Haram_mosque_pilgrims_vertical.jpg"
import Image from "next/image";
import Link from "next/link";

const Spotlight = () => {
  return (
    <section
      className={`${advance.section.padding} ${layout.section.gap} bg-primary`}>
      <div className={`${layout.containerDirection.twoColumnGrid}`}>
        {/* Left Side */}
        <div className="flex flex-col gap-8">
          <p className={`${style.span.font} text-orangeColor  `}>Featured Spotlight</p>
          <h2 className={`${style.heading.h2} text-white`}>AI-Powered Hajj Preparation Assistant</h2>
          <p className={`${style.text.sm} text-white/60`}>A personalized, step-by-step preparation guide built on scholarly guidance and two decades of pilgrimage insight. From visa to return flight — intelligently guided. </p>

          <div className="flex gap-4 md:gap-15">
            <div>
                <p className={`${style.heading.h4} text-white`}>60+</p>
                <span className={`${style.text.xs} text-white/60`}>Countries</span>
            </div>
             <div>
                <p className={`${style.heading.h4} text-white`}>2.8M+</p>
                <span className={`${style.text.xs} text-white/60`}>Pilgrims Served</span>
            </div>

             <div>
                <p className={`${style.heading.h4} text-white`}>98%</p>
                <span className={`${style.text.xs} text-white/60`}>Satisfaction</span>
            </div>
          
          </div>

          <hr className="text-white/20" />
        
         {/* Duel Btn */}
          <div className={`flex items-center gap-4`}>
            <Link href={"#"}><button className={`${style.button.accent}`}>Try It Free</button></Link>
            <Link href={"#"}><button className={`${style.button.secondary2}`}>Learn More </button></Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative h-105 md:h-137 flex items-center justify-center">
           {/* right card */}
           <div className="absolute right-0 md:right-10 w-50 h-60 md:w-72 md:h-107 rounded-3xl overflow-hidden rotate-12 opacity-60">
            <Image src={kabaImage} alt="Masjid al Haram minarets Kaaba vertical" fill className="object-cover"></Image>
           </div>
           {/* Left Card */}
           <div className="absolute left-0   md:left-10 w-60 h-64 md:w-72 md:h-107 rounded-3xl overflow-hidden -rotate-12 opacity-60">
            <Image src={kaabaGoldenHour} alt="Kaaba_golden_hour_vertical" fill className="object-cover"></Image>
           </div>

           {/* Center Card */}
           <div className="relative z-10 w-48 h-72 md:w-80 md:h-120 rounded-3xl overflow-hidden shadow-2xl border-4 border-white  ">
            <Image src={meccaMosque} alt="Mecca_Haram_mosque_pilgrims_" fill className="object-cover"></Image>
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 rounded-2xl p-4">
                <p className={`${style.text.sm} font-bold`}>2.8M+ </p>
                <p className={`${style.text.xs}`}>Pilgrims Served </p>
            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;


