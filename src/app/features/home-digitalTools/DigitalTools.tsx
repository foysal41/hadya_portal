"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { advance, layout, style } from "@/app/csslib/GlobalCSS";

import { MdExplore, MdOutlineShield, MdOutlineAccessTime, MdGroups, MdMenuBook, } from "react-icons/md";

import { FaCompass } from "react-icons/fa";

export const digitalTools = [
    {
        id: 1,
        icon: FaCompass,
        title: "Qibla Direction",
        description: "Precise compass toward the Kaaba from anywhere on Earth.",
        href: "/tools/qibla-direction",
    },

    {
        id: 2,
        icon: MdExplore,
        title: "Madinah Direction",
        description: "Find direction toward Al-Masjid an-Nabawi with precision.",
        href: "/tools/madinah-direction",
    },

    {
        id: 3,
        icon: MdOutlineShield,
        title: "Dam Analyzer",
        description: "Calculate dam obligations with scholarly guidance.",
        href: "/tools/dam-analyzer",
    },

    {
        id: 4,
        icon: MdGroups,
        title: "Group Dhikr Counter",
        description: "Synchronized dhikr tracking for groups.",
        href: "/tools/group-dhikr",
    },

    {
        id: 5,
        icon: MdOutlineAccessTime,
        title: "Salawat Counter",
        description: "Track collective salawat together.",
        href: "/tools/salawat-counter",
    },

    {
        id: 6,
        icon: MdMenuBook,
        title: "Qur'an Tracker",
        description:  "Weekly reading goals with progress.",
        href: "/tools/quran-tracker",
    },
];

const CARD_WIDTH = 260;



export default function DigitalTools() {
    const defaultIndex = digitalTools.findIndex(
        (item) => item.title === "Madinah Direction"
    );

    const [active, setActive] = useState(defaultIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % digitalTools.length);
        }, 35000);

        return () => clearInterval(interval);
    }, []);

    const goNext = () => {
        setActive((prev) => (prev + 1) % digitalTools.length);
    };

    const goPrev = () => {
        setActive((prev) =>
            prev === 0 ? digitalTools.length - 1 : prev - 1
        );
    };

    const orderedTools = useMemo(() => {
        return [
            ...digitalTools.slice(active),
            ...digitalTools.slice(0, active),
        ];
    }, [active]);

    const activeTool = orderedTools[0];

    return (
        <section
            className={`${advance.section.padding} bg-canvas overflow-hidden`}
        >
            {/* Heading */}

            <div
                className={`${layout.sectionDirection.flexCenter} mb-16`}
            >
                <p className={`${style.span.font} text-orangeColor`}>
                    Digital Tools
                </p>

                <h2 className={style.heading.h2}>
                    Technology Built for the Sacred Journey
                </h2>

                <p className={style.text.md}>
                    Precision-crafted spiritual tools, available free to every
                    registered pilgrim—from the moment you land to your final
                    prayer.
                </p>
            </div>

            {/* Conveyor */}

            <div className="relative max-w-[1600px] mx-auto">

                {/* Left Button */}

                <button
                    onClick={goPrev}
                    className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-border hover:bg-primary hover:text-white transition"
                >
                    ←
                </button>

                {/* Right Button */}

                <button
                    onClick={goNext}
                    className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-border hover:bg-primary hover:text-white transition"
                >
                    →
                </button>

                {/* Conveyor Track */}

                <motion.div
                    layout transition={{ type: "spring", stiffness: 180, damping: 22, }}
                    className="flex items-center justify-center gap-7 overflow-hidden px-20" >          {/* Left Small Card */}

                    <div className="hidden lg:flex gap-7s">
                        {orderedTools.slice(1, 3).map((tool) => {
                            const Icon = tool.icon;

                            return (
                                <motion.div key={tool.id} layout whileHover={{ scale: 0.96 }} transition={{
                                    type: "spring", stiffness: 180, damping: 20,
                                }} > <Link href={tool.href} onClick={() => setActive(digitalTools.findIndex((item) => item.id === tool.id))}
                                >
                                        <div className=" w-65 sm:w-85 md:w-105 lg:w-65 cursor-pointer rounded-3xl border border-border bg-white p-6 shadow-sm opacity-60 scale-[0.92] hover:opacity-100 duration-300" >
                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                                <Icon className="text-2xl text-primary" />
                                            </div>

                                            <h3 className={`${style.heading.h3} mb-3`}>
                                                {tool.title}
                                            </h3>

                                            <p className={style.text.sm}>
                                                {tool.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Center Featured Card */}

                    <motion.div layout key={activeTool.id} initial={{ scale: 0.9, opacity: 0, }}
                        animate={{ scale: 1.05, opacity: 1, }}
                        transition={{  type: "spring", stiffness: 180, damping: 18, }} >
                        <Link href={activeTool.href}>
                            <div className="w-[90vw] max-w-117 rounded-[34px] bg-primary p-6 md:p-8 lg:p-10 text-white shadow-2xl"  >
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">

                                    <activeTool.icon className="text-4xl text-orangeColor" />

                                </div>

                                <span className="mb-3 inline-block uppercase tracking-[0.25em] text-orangeColor">
                                    Featured Tool
                                </span>

                                <h3 className="mb-5 text-2xl md:text-4xl font-bold">
                                    {activeTool.title}
                                </h3>

                                <p className="mb-8 text-lg leading-8 text-white/80">
                                    {activeTool.description}
                                </p>

                                <button className={style.button.accent}>
                                    Launch Tool
                                </button>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Right Small Cards */}

                    <div className="hidden lg:flex gap-7">
                        {orderedTools.slice(3).map((tool) => {
                            const Icon = tool.icon;

                            return (
                                <motion.div key={tool.id} layout whileHover={{ scale: 0.96 }} transition={{
                                    type: "spring", stiffness: 180, damping: 20,
                                }}
                                >
                                    <Link href={tool.href} onClick={() => setActive(digitalTools.findIndex((item) => item.id === tool.id))
                                    } >
                                        <div style={{ width: CARD_WIDTH }} className="cursor-pointer rounded-3xl border border-border bg-white p-6 shadow-sm opacity-60 scale-[0.92] hover:opacity-100 duration-300">
                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                                                <Icon className="text-2xl text-primary" />
                                            </div>

                                            <h3 className={`${style.heading.h3} mb-3`}>
                                                {tool.title}
                                            </h3>

                                            <p className={style.text.sm}>
                                                {tool.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Pagination */}

                <div className="mt-12 flex justify-center gap-3">
                    {digitalTools.map((tool, index) => (
                        <button key={tool.id} onClick={() => setActive(index)} className={`h-3 rounded-full transition-all duration-300 ${index === active ? "w-10 bg-orangeColor" : "w-3 bg-primary/20" }`}
                        />
                    ))}
                </div>
            </div>

            {/* CTA */}

            <div className="mt-16 text-center">
                <button className={style.button.primary}>
                    View All Tools
                </button>
            </div>
        </section>
    );
}