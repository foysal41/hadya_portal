import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import Link from "next/link";
import React from "react";
import { FaPlane, FaHeart, FaBookOpen, FaShoppingBag } from "react-icons/fa";
import { MdOutlineComputer, MdGroups } from "react-icons/md";

export const platformCards = [
  {
    id: 1,
    icon: MdOutlineComputer,
    iconBg: "bg-emerald-700",
    title: "Digital Tools",
    description:
      "Qibla direction, Madinah direction, Dam analyzer, group dhikr and more.",
    buttonText: "Explore",
    href: "/digital-tools",
  },
  {
    id: 2,
    icon: FaHeart,
    iconBg: "bg-rose-600",
    title: "Sponsorship",
    description:
      "Food, water, mushaf, wheelchairs — give where it matters most.",
    buttonText: "Explore",
    href: "/sponsorship",
  },
  {
    id: 3,
    icon: FaShoppingBag,
    iconBg: "bg-amber-700",
    title: "E-Commerce",
    description:
      "Premium Ajwa dates, prayer mats, Umrah kits and sacred gifts.",
    buttonText: "Explore",
    href: "/shop",
  },
  {
    id: 4,
    icon: FaPlane,
    iconBg: "bg-blue-700",
    title: "Travel & On-Ground",
    description: "Airports, hotels, transport, SIM cards, ziyarah and more.",
    buttonText: "Explore",
    href: "/travel",
  },
  {
    id: 5,
    icon: MdGroups,
    iconBg: "bg-slate-700",
    title: "Tour Operator Solutions",
    description:
      "OCR, ID cards, group management, bulk printing and coordination.",
    buttonText: "Explore",
    href: "/operators",
  },
  {
    id: 6,
    icon: FaBookOpen,
    iconBg: "bg-teal-600",
    title: "Knowledge Centre",
    description:
      "Learn Hajj, Umrah, Ziyarah, Fatwas, articles and ask a scholar.",
    buttonText: "Explore",
    href: "/knowledge",
  },
];

const PlatformSection = () => {
  return (
    <section
      className={`${advance.section.padding} ${layout.section.gap}  bg-canvas`}
    >
      {/* Header Part of Section */}
      <div className={`${layout.sectionDirection.flexCenter}`}>
        <span className={`${style.span.font} text-spanColor `}>
          One Platform
        </span>
        <h2 className={style.heading.h2}>Six Ways to Serve You</h2>
        <p className={`${style.text.md}`}>
          Every dimension of your pilgrimage journey, connected under one
          trusted ecosystem.
        </p>
      </div>

      {/* Cards section */}
      <div className={`${layout.sectionDirection.gridCenter}`}>
        {/* Card Item */}
        {platformCards.map((platformCard, idx) => {
          const Icon = platformCard.icon;

          return (
            <div
              key={idx}
              className={`relative overflow-hidden  min-h-105 md:min-h-110  bg-white py-10 flex flex-col justify-center items-center rounded-lg border border-gray-300 transition-all duration-200 ease-in hover:shadow-md hover:-translate-y-1 `}
            >
              <div
                style={{ backgroundImage: "url('/images/card-bg-2.webp')" }}
                className="absolute h-120 lg:h-180 -top-5  lg:-top-20 xl:top-0 right-0 left-0 bg-center bg-no-repeat  bg-cover"
              ></div>
              <div className="absolute bg-white/95 inset-0"></div>
              {/* content */}
              <div className="flex flex-col items-center justify-center relative z-10 space-y-5">
                <div className={`${platformCard.iconBg} flex h-14 w-14 items-center justify-center rounded-2xl`} >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={`${style.heading.h3}`}>{platformCard.title}</h3>
                <p className={`${style.text.md} text-center w-[90%]  lg:w-[65%]`}>
                  {platformCard.description}
                </p>
                <Link href={platformCard.href}>
                  <button className={`${style.button.secondary}`}>
                    {platformCard.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlatformSection;
