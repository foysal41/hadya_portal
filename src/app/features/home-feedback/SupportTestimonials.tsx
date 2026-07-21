"use client";

import React from "react";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { advance, style } from "@/app/csslib/GlobalCSS";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Hajj Tour Operator",
    review:
      "Hadya transformed our Hajj operations. OCR scanning and pilgrim tracking reduced manual work and improved the overall experience for our team.",
  },
  {
    id: 2,
    name: "Fatima Noor",
    role: "Umrah Agency Manager",
    review:
      "Managing thousands of pilgrims is now effortless. Everything from registration to accommodation is centralized in one platform.",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "Operations Director",
    review:
      "The dashboard is intuitive, fast, and reliable. Real-time updates help us provide better service throughout the pilgrimage journey.",
  },
];

const SupportTestimonials = () => {
  return (
    <section className={`${advance.section.padding} bg-[#F4EFE6]`}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className={`${style.span.font} text-orangeColor`}>
            Testimonials
          </p>

          <h2 className={`${style.heading.h2} mt-3`}>
            Thank You For Your Support
          </h2>

          <p className={`${style.text.md} mt-4`}>
            Trusted by Hajj & Umrah operators around the world for delivering
            reliable pilgrim management solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 px-8 pt-12 pb-8"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <HiMiniChatBubbleLeftRight className="text-white text-2xl" />
                </div>
              </div>

              

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 my-6"></div>

              {/* User */}
              <div className="flex flex-col items-center">
                {/* Review */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {item.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

                <h4 className="mt-4 font-semibold text-lg">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupportTestimonials;