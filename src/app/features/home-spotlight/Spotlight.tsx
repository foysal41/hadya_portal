"use client";

import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import kabaImage from "../../../../public/images/minarets_Kaaba_vertical.jpg";
import kaabaGoldenHour from "../../../../public/images/Kaaba_golden_hour_vertical.jpg";
import meccaMosque from "../../../../public/images/Mecca_Haram_mosque_pilgrims_vertical.jpg";

type Slide = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  badge: string;
  stats: {
    value: string;
    label: string;
  }[];
  cardValue: string;
  cardLabel: string;
  primaryBtn: string;
  secondaryBtn: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: meccaMosque,
    badge: "Featured Spotlight",
    title: "AI-Powered Hajj Preparation Assistant",
    description:
      "A personalized, step-by-step preparation guide built on scholarly guidance and two decades of pilgrimage insight. From visa to return flight — intelligently guided.",
    stats: [
      {
        value: "60+",
        label: "Countries",
      },
      {
        value: "2.8M+",
        label: "Pilgrims Served",
      },
      {
        value: "98%",
        label: "Satisfaction",
      },
    ],
    cardValue: "2.8M+",
    cardLabel: "Pilgrims Served",
    primaryBtn: "Try It Free",
    secondaryBtn: "Learn More",
  },

  {
    id: 2,
    image: kabaImage,
    badge: "Featured Spotlight",
    title: "Sacred Journey Companion",
    description:
      "Navigate every ritual with confidence using AI-powered checklists, reminders, maps, and authentic guidance for your pilgrimage.",
    stats: [
      {
        value: "150+",
        label: "Guides",
      },
      {
        value: "24/7",
        label: "Support",
      },
      {
        value: "99%",
        label: "Accuracy",
      },
    ],
    cardValue: "150+",
    cardLabel: "Interactive Guides",
    primaryBtn: "Explore",
    secondaryBtn: "View Guide",
  },

  {
    id: 3,
    image: kaabaGoldenHour,
    badge: "Featured Spotlight",
    title: "Knowledge Built by Scholars",
    description:
      "Trusted Islamic scholars and experienced pilgrims have contributed authentic knowledge for every step of your sacred journey.",
    stats: [
      {
        value: "500+",
        label: "Articles",
      },
      {
        value: "80+",
        label: "Scholars",
      },
      {
        value: "40+",
        label: "Languages",
      },
    ],
    cardValue: "500+",
    cardLabel: "Knowledge Resources",
    primaryBtn: "Start Reading",
    secondaryBtn: "Discover",
  },
];

const Spotlight = ():React.ReactElement => {
const [active, setActive] = useState<number>(0);

useEffect(() => {
  const interval = setInterval(() =>{
    setActive((prev) => (prev + 1) % slides.length)
  }, 3000);

  return () => clearInterval(interval);

}, [])

const prev = active === 0 ? slides.length - 1 : active -1;
const next = active === slides.length -1 ? 0 : active +1;
const current = slides[active]

  return (
    <section  className={`${advance.section.padding} ${layout.section.gap} bg-primary`} >
      <div className={layout.containerDirection.twoColumnGrid}>
        {/* LEFT */}

        <div
          key={current.id}
          className="flex flex-col gap-8 transition-all duration-700"
        >
          <p className={`${style.span.font} text-orangeColor`}>
            {current.badge}
          </p>

          <h2 className={`${style.heading.h2} text-white`}>
            {current.title}
          </h2>

          <p className={`${style.text.sm} text-white/60`}>
            {current.description}
          </p>

          <div className="flex gap-4 md:gap-15">
            {current.stats.map((item, index) => (
              <div key={index}>
                <p className={`${style.heading.h4} text-white`}>
                  {item.value}
                </p>

                <span className={`${style.text.xs} text-white/60`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <hr className="border-white/20" />

          <div className="flex items-center gap-4">
            <Link href="#">
              <button className={style.button.accent}>
                {current.primaryBtn}
              </button>
            </Link>

            <Link href="#">
              <button className={style.button.secondary2}>
                {current.secondaryBtn}
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative h-105 md:h-137 flex items-center justify-center">
          {/* Previous */}

          <div key={slides[prev].id} className="absolute left-0 md:left-10 w-60 h-64 md:w-72 md:h-107 rounded-3xl overflow-hidden -rotate-12 opacity-60 transition-all duration-1000"
          >
            <Image src={slides[prev].image} alt="" fill className="object-cover" />
          </div>

          {/* Next */}

          <div key={slides[next].id} className="absolute right-0 md:right-10 w-50 h-60 md:w-72 md:h-107 rounded-3xl overflow-hidden rotate-12 opacity-60 transition-all duration-1000"
          > <Image src={slides[next].image} alt="" fill className="object-cover"/>
          </div>

          {/* Active */}

          <div
            key={current.id} className="relative z-10 w-48 h-72 md:w-80 md:h-120 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-1000"
          >
            <Image src={current.image} alt="" fill className="object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-white/90 rounded-2xl p-4 backdrop-blur">
              <p className={`${style.text.sm} font-bold`}>
                {current.cardValue}
              </p>

              <p className={style.text.xs}>
                {current.cardLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;