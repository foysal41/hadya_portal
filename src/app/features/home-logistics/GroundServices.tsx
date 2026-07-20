import React from "react";
import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import {
  MdOutlineAirportShuttle,
  MdHotel,
  MdSimCard,
  MdOutlineSupportAgent,
  MdGroups,
} from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import left_image from "../../../../public/images/madina-bg-remove-image.webp";
import right_image from "../../../../public/images/right-side-bg-remove-image.webp";
import Image from "next/image";

const groundServices = [
  {
    id: 1,
    icon: MdOutlineAirportShuttle,
    title: "Airport Transfers",
    description:
      "Jeddah & Madinah airport to hotel, guaranteed and pre-arranged.",
  },
  {
    id: 2,
    icon: MdHotel,
    title: "Hotel Reservations",
    description: "Curated stays near the Haram at every budget tier.",
  },
  {
    id: 3,
    icon: MdSimCard,
    title: "Saudi SIM Cards",
    description: "Stay connected from Day 1 of your arrival in the Kingdom.",
  },
  {
    id: 4,
    icon: FaRoute,
    title: "Ziyarah Tours",
    description: "Guided visits to sacred sites across Makkah and Madinah.",
  },
  {
    id: 5,
    icon: MdOutlineSupportAgent,
    title: "Emergency Assistance",
    description: "24/7 multilingual support throughout your entire stay.",
  },
  {
    id: 6,
    icon: MdGroups,
    title: "Group Transport",
    description: "Coordinated logistics for groups of all sizes.",
  },
];

const GroundServices = () => {
  return (
    <section className={`${advance.section.padding} bg-[#F9F6F0] overflow-hidden`} >
      <div className=" relative  bg-linear-to-b from-[#FCFBF8] to-[#F6F2EB] py-10 md:px-12 ">
        {/* Left Image */}
        <div className="absolute left-0 bottom-0  hidden lg:block ">
          <Image src={left_image} alt="" width={500} height={500} className="w-20 h-100 md:w-30 lg:w-40 opacity-50    "  />
          
        </div>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <Image src={right_image} alt="" width={500} height={500} className="w-20 h-100 md:w-30 lg:w-40 opacity-50"
          />
        </div>

        {/* Heading */}
        <div className={`${layout.sectionDirection.flexCenter} mb-10`}>
          <p className={`${style.span.font} text-orangeColor`}>
            {" "}
            Travel • On-Ground
          </p>

          <h2 className={style.heading.h3}> Every Step, Taken Care Of </h2>

          <p className={`${style.text.sm} max-w-3xl`}>          
            From your arrival at the airport to your final visit before
            departure every detail seamlessly coordinated.{" "}
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:px-15">
          {groundServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative text-center flex flex-col items-center"
              >
                {/* Connector Line */}
                {service.id !== groundServices.length && (
                  <div className="hidden lg:block absolute top-5 left-[58%] w-full border-t border-dashed border-[#CFC8BA]" />
                )}

                {/* Icon */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-[#EEF5F2] flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                  <Icon className="text-xl text-primary group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>

                {/* Text */}
                <h3 className="mt-4 font-semibold text-[15px] text-main">
                  {service.title}
                </h3>

                <p className={`${style.text.xs} mt-2 max-w-42.5`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className={style.button.primary}>
            Book Travel Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroundServices;
