import { advance, layout, style } from '@/app/csslib/GlobalCSS'
import React from 'react'

import { MdExplore, MdOutlineShield, MdOutlineAccessTime, MdGroups, MdMenuBook, } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import Link from 'next/link';

export const digitalTools = [
    {
        id: 1,
        icon: FaCompass,
        title: "Qibla Direction",
        description:
            "Precise compass toward the Kaaba from anywhere on Earth.",
        href: "/tools/qibla-direction",
    },

    {
        id: 2,
        icon: MdExplore,
        title: "Madinah Direction",
        description:
            "Find direction toward Al-Masjid an-Nabawi.",
        href: "/tools/madinah-direction",
    },

    {
        id: 3,
        icon: MdOutlineShield,
        title: "Dam Analyzer",
        description:
            "Calculate dam obligations with scholarly guidance.",
        href: "/tools/dam-analyzer",
    },

    {
        id: 4,
        icon: MdGroups,
        title: "Group Dhikr Counter",
        description:
            "Synchronized dhikr tracking for entire groups.",
        href: "/tools/group-dhikr",
    },

    {
        id: 5,
        icon: MdOutlineAccessTime,
        title: "Salawat Counter",
        description:
            "Track collective salawat with live group feeds.",
        href: "/tools/salawat-counter",
    },

    {
        id: 6,
        icon: MdMenuBook,
        title: "Qur'an Tracker",
        description:
            "Weekly reading goals with progress visualization.",
        href: "/tools/quran-tracker",
    },
];

const DigitalTools = () => {
    return (
        <section className={`${advance.section.padding} ${layout.section.gap} bg-[#F9F6F0]`}>
            {/* Header Part of Section */}
            <div className={`${layout.sectionDirection.flexCenter} `}>
                <p className={`${style.span.font} text-orangeColor `}> Digital Tools  </p>
                <h2 className={style.heading.h2}>Technology Built for the Sacred Journey</h2>
                <p className={`${style.text.md}`}>
                    Precision-crafted spiritual tools, available free to every registered pilgrim — from the moment you land to your final prayer.
                </p>
            </div>

            <div className={`${layout.sectionDirection.gridCard} max-w-7xl mx-auto`}>
                {digitalTools.map((digitalTool) => {
                    const ToolIcon = digitalTool.icon

                    return <Link key={digitalTool.id} href={digitalTool.href}>
                        <div className=' group bg-white border border-black/10 rounded-2xl p-5 transition-all duration-500 hover:shadow-lg  space-y-2'>
                            <div className='w-14 h-14  rounded-full  bg-[#EEF5F2] flex items-center justify-center transition-all'>
                                <ToolIcon className="text-2xl text-primary transition-all duration-300  group-hover:scale-110 group-hover:rotate-12" />                    </div>
                            <h3 className={`${style.heading.h3}`}>{digitalTool.title}</h3>
                            <p className={`${style.text.sm}`}>{digitalTool.description}</p>
                        </div>
                    </Link>
                })}
            </div>

            <div className='text-center'>
                <button className={`${style.button.primary}`}>View All Tools</button>
            </div>
        </section>
    )
}

export default DigitalTools