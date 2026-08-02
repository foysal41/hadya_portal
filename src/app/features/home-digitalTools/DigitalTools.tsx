"use client";

import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import React, { useEffect, useState } from "react";
import {
  FaKaaba,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaBookOpen,
  FaCompass,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const tools = [
  {
    id: 1,
    icon: FaKaaba,
    title: "Hajj Analyzer",
    description: "Plan and understand your Hajj steps with scholarly guidance.",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Group Dhikr Counter",
    description: "Synchronized dhikr tracking for groups.",
  },
  {
    id: 3,
    icon: FaClock,
    title: "Salawat Counter",
    description: "Track collective salawat together.",
  },
  {
    id: 4,
    icon: FaMapMarkerAlt,
    title: "Madinah Direction",
    description: "Find important sacred locations and directions with ease.",
  },
  {
    id: 5,
    icon: FaBookOpen,
    title: "Qur'an Tracker",
    description: "Weekly reading goals with progress.",
  },
  {
    id: 6,
    icon: FaCompass,
    title: "Qibla Direction",
    description: "Precision direction toward the Kaaba from anywhere on Earth.",
  },
];

const DigitalTools = () => {
  const [active, setActive] = useState(0);

  // Active tool
  const currentTool = tools[active];
  const ActiveIcon = currentTool.icon;

  // Previous
  const handlePrevious = () => {
    setActive((prev) => (prev === 0 ? tools.length - 1 : prev - 1));
  };

  // Next
  const handleNext = () => {
    setActive((prev) => (prev === tools.length - 1 ? 0 : prev + 1));
  };

  // Auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % tools.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Left items
  const leftItems = [
    tools[(active - 2 + tools.length) % tools.length],
    tools[(active - 1 + tools.length) % tools.length],
  ];

  // Right items
  const rightItems = [
    tools[(active + 1) % tools.length],
    tools[(active + 2) % tools.length],
  ];

  return (
    <section className={`${advance.section.padding} ${layout.section.gap} bg-[#F9F6F0] overflow-hidden`}>

      {/* Header */}
      <div className={layout.sectionDirection.flexCenter}>
        <p className={`${style.span.font} text-orangeColor`}>
          Digital Tools
        </p>

        <h2 className={style.heading.h2}>
          Technology Built for the Sacred Journey
        </h2>

        <p className={`${style.text.md} max-w-3xl`}>
          Precision-crafted spiritual tools, available free to every registered
          pilgrim—from the moment you land to your final prayer.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-12">

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_440px_1fr] items-center gap-8">

          {/* Left Cards */}
          <div className="hidden xl:flex items-center justify-end gap-5">
            {leftItems.map((tool) => {
              const Icon = tool.icon;

              return (
                <div key={tool.id} className="w-55 min-h-56 shrink-0 rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-500">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF5F2]">
                    <Icon className="text-lg text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-[#4B5854]">
                    {tool.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-[#667085]">
                    {tool.description}
                  </p>

                </div>
              );
            })}
          </div>

          {/* Middle Featured Card - Position Fixed */}
          <div className="relative z-20 w-full max-w-110 mx-auto">

            <div className="min-h-93 rounded-[30px] bg-primary p-8 md:p-10 shadow-xl flex flex-col justify-center">

              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <ActiveIcon className="text-2xl text-[#D5A32F]" />
              </div>

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#D5A32F]">
                Featured Tool
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                {currentTool.title}
              </h3>

              <p className="mt-5 text-base leading-7 text-white/80">
                {currentTool.description}
              </p>

              <button className="mt-8 w-fit rounded-full bg-[#D5A32F] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105">
                Launch Tool
              </button>

            </div>
          </div>

          {/* Right Cards */}
          <div className="hidden xl:flex items-center justify-start gap-5">
            {rightItems.map((tool) => {
              const Icon = tool.icon;

              return (
                <div key={tool.id} className="w-55 min-h-56 shrink-0 rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-500">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF5F2]">
                    <Icon className="text-lg text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-[#4B5854]">
                    {tool.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-[#667085]">
                    {tool.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

        {/* Left Arrow */}
        <button onClick={handlePrevious} aria-label="Previous tool" className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-white border border-black/10 shadow-md text-primary hover:bg-primary hover:text-white transition-all duration-300">
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button onClick={handleNext} aria-label="Next tool" className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-primary shadow-md text-white hover:scale-105 transition-all duration-300">
          <FaArrowRight />
        </button>

      </div>

      {/* Dots */}
      <div className="mt-10 flex items-center justify-center gap-3">
        {tools.map((tool, index) => (
          <button
            key={tool.id}
            onClick={() => setActive(index)}
            aria-label={`Show ${tool.title}`}
            className={`h-3 rounded-full transition-all duration-300 ${active === index ? "w-10 bg-[#D5A32F]" : "w-3 bg-[#C9D8D3]"}`}
          />
        ))}
      </div>

    </section>
  );
};

export default DigitalTools;