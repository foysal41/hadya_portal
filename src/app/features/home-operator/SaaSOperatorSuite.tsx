import React from "react";
import Link from "next/link";
import { advance, layout, style } from "@/app/csslib/GlobalCSS";

import {
  HiOutlineIdentification,
  HiOutlineUsers,
  HiOutlineBolt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    icon: HiOutlineIdentification,
    title: "OCR Document Scan",
    description:
      "Instant passport and ID data extraction in seconds.",
  },
  {
    id: 2,
    icon: HiOutlineUsers,
    title: "Pilgrim Management",
    description:
      "Full lifecycle tracking per pilgrim, from arrival to departure.",
  },
  {
    id: 3,
    icon: HiOutlineBolt,
    title: "Bulk ID Printing",
    description:
      "Automated wristbands, badges, and identification cards.",
  },
  {
    id: 4,
    icon: HiOutlineShieldCheck,
    title: "Smart Room Allocation",
    description:
      "Intelligent hotel room assignment and upgrade engine.",
  },
];

const pilgrims = [
  {
    initials: "AA",
    name: "Ahmad Al-Farsi",
    id: "SA-00234",
    status: "Checked In",
    color: "bg-green-100 text-green-700",
  },
  {
    initials: "MB",
    name: "Mariam Bello",
    id: "NG-00891",
    status: "In Transit",
    color: "bg-blue-100 text-blue-700",
  },
  {
    initials: "FH",
    name: "Farhan Hussain",
    id: "PK-01102",
    status: "Pending",
    color: "bg-orange-100 text-orange-700",
  },
  {
    initials: "SN",
    name: "Siti Nurhaliza",
    id: "MY-00456",
    status: "Checked In",
    color: "bg-green-100 text-green-700",
  },
  {
    initials: "OE",
    name: "Omar El-Sheikh",
    id: "EG-00789",
    status: "Departed",
    color: "bg-gray-100 text-gray-700",
  },
];

const SaaSOperatorSuite = () => {
  return (
    <section
      className={`${advance.section.padding} bg-[#F4EFE6]`}
    >
      <div
        className={`${layout.containerDirection.twoColumnGrid} items-center gap-12 max-w-7xl mx-auto`}
      >
        {/* Left Side */}
        <div className="space-y-8">
          <div className="space-y-5">
            <p className={`${style.span.font} text-orangeColor `}> Tour Operator Solutions  </p>
            <h2 className={style.heading.h2}>Built for Operators Who Serve Thousands</h2>

            <p className={`${style.text.md} max-w-xl`}>
              Enterprise-grade tools designed for the complexity of Hajj and
              Umrah group management. From OCR scanning to bulk printing —
              one integrated platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl border border-black/5 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EEF5F2] flex items-center justify-center mb-5">
                    <Icon className="text-2xl text-primary group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold heading-font mb-2">
                    {item.title}
                  </h3>

                  <p className={style.text.sm}>{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/operator">
              <button className={style.button.primary}>
                Apply as Operator
              </button>
            </Link>

            <button className={style.button.secondary}>
              View Demo
            </button>
          </div>
        </div>

        {/* Right Side Dashboard */}
        <div className="bg-white rounded-[28px] overflow-hidden shadow-2xl border border-black/5">
          {/* Top Bar */}
          <div className="bg-primary px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>
              <span className="w-3 h-3 rounded-full bg-white/20"></span>

              <span className="text-white/90 text-sm ml-2">
                Hadya Operator Dashboard · 2025 Season
              </span>
            </div>

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-6">
              Pilgrim Management
            </h3>

            <div className="space-y-2">
              {pilgrims.map((pilgrim, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-black/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F2ECE3] flex items-center justify-center font-semibold text-gray-600">
                      {pilgrim.initials}
                    </div>

                    <div>
                      <h4 className="font-medium">{pilgrim.name}</h4>

                      <p className="text-sm text-gray-500">
                        {pilgrim.id}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs px-4 py-2 rounded-full font-medium ${pilgrim.color}`}
                  >
                    {pilgrim.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6">
              <p className="text-sm text-gray-500">
                Showing 5 of 1,248 pilgrims
              </p>

              <button className="text-primary font-medium hover:underline">
                View All →
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default SaaSOperatorSuite;