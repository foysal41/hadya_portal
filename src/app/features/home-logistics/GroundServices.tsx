import React from "react";
import { advance, layout, style } from "@/app/csslib/GlobalCSS";

import {
  MdOutlineAirportShuttle,
  MdLuggage,
  MdDirectionsBus,
  MdSimCard,
  MdHotel,
  MdOutlineMedicalServices,
  MdGroups,
  MdWaterDrop,
  MdRestaurant,
} from "react-icons/md";

import { BsCurrencyExchange } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export const featuredServices = [
  {
    id: 1,
    icon: MdOutlineAirportShuttle,
    title: "Airport Pickup & Drop",
    description:
      "Comfortable transfers to and from airports across the Kingdom.",
    image: "/images/Airport Pickup & Drop.webp",
  },
  {
    id: 2,
    icon: MdLuggage,
    title: "Extra Luggage Handling",
    description: "We handle your additional luggage with care and reliability.",
    image: "images/Extra Luggage Handling.webp",
  },
  {
    id: 3,
    icon: MdDirectionsBus,
    title: "Private Ziyarah Transportation",
    description:
      "Private and comfortable transport for your spiritual journeys.",
    image: "/images/Private Ziyarah Transportation.webp",
  },
];

// Supporting Services
export const supportingServices = [
  {
    id: 4,
    icon: MdSimCard,
    title: "Saudi SIM Assistance",
    description: "Stay connected with local SIM solutions.",
  },
  {
    id: 5,
    icon: BsCurrencyExchange,
    title: "Forex Assistance",
    description: "Best rates and secure currency exchange.",
  },
  {
    id: 6,
    icon: MdHotel,
    title: "Hotel Room Support",
    description: "Quick and reliable hotel assistance anytime.",
  },
  {
    id: 7,
    icon: MdRestaurant,
    title: "Special Food Arrangements",
    description: "Hygienic and personalized food arrangements.",
  },
  {
    id: 8,
    icon: MdWaterDrop,
    title: "Zamzam Water Delivery",
    description: "Pure Zamzam water delivered to you.",
  },
  {
    id: 9,
    icon: MdWaterDrop,
    title: "Bir-e-Ruha Water Delivery",
    description: "Refreshing Bir-e-Ruha water at your service.",
  },
  {
    id: 10,
    icon: MdOutlineMedicalServices,
    title: "Emergency Assistance",
    description: "24/7 support for any medical emergencies.",
  },
  {
    id: 11,
    icon: MdGroups,
    title: "Group Meal Services",
    description: "Nutritious meals organized for groups.",
  },
];

const GroundServices = () => {
  return (
    <section
      className={`${advance.section.padding} bg-[#F9F6F0] overflow-hidden`}
    >
      <div className="   bg-linear-to-b from-[#FCFBF8] to-[#F6F2EB] py-10 md:px-12 ">
        {/* Heading */}
        <div className={`${layout.sectionDirection.flexCenter} mb-10`}>
          <p className={`${style.span.font} text-orangeColor`}>
            Travel • On-Ground
          </p>

          <h2 className={style.heading.h3}> Every Step, Taken Care Of </h2>

          <p className={`${style.text.sm} max-w-3xl`}>
            Premium logistics and trusted on-ground support throughout your
            sacred journey.
          </p>
        </div>

        {/* Feature Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-8 ">
          {featuredServices.map((featureService, idx) => {
            return (
              <div key={idx}>
                <div
                  style={{ backgroundImage: `url("${featureService.image}")` }}
                  className="relative group h-full min-h-100 rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div className="absolute inset-x-0  bottom-0 p-4 text-white">
                    <h3 className={`${style.heading.h3}`}>
                      {featureService.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className={`${style.text.sm} text-white w-90`}>
                        {featureService.description}
                      </p>
                      <span>
                        <IoArrowForwardCircleOutline
                          size={40}
                          className="group-hover:-rotate-30 duration-300 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Services */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {supportingServices.map((supportingService) => {
            const Icon = supportingService.icon;

            return (
              <div
                key={supportingService.id}
                className=" flex items-center gap-5 rounded-lg p-5 shadow-md ">

                {/* Icon */}
                <div className="shrink-0 rounded-full bg-[#F2EEE5] p-4">
                  <Icon size={25} className="text-primary" />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <h3>{supportingService.title}</h3>

                  <p className="mt-1 text-sm">
                    {supportingService.description}
                  </p>
                </div>

                {/* Arrow */}
                <FaArrowRight className="shrink-0 text-primary" />
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className={style.button.primary}>
            Explore All Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroundServices;
