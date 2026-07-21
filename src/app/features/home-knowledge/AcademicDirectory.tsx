import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import React from "react";

import {
    FaBookOpen,
    FaMapMarkerAlt,
    FaRegCommentDots,
    FaPlay,
} from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { LuBookMarked } from "react-icons/lu";

export const knowledgeCentre = [
    {
        id: 1,
        icon: FaBookOpen,
        title: "Learn Hajj",
        subtitle: "48 Lessons",
        href: "/knowledge/hajj",
    },
    {
        id: 2,
        icon: HiOutlineBookOpen,
        title: "Learn Umrah",
        subtitle: "32 Lessons",
        href: "/knowledge/umrah",
    },
    {
        id: 3,
        icon: FaMapMarkerAlt,
        title: "Ziyarah Guide",
        subtitle: "60+ Sites",
        href: "/knowledge/ziyarah",
    },
    {
        id: 4,
        icon: LuBookMarked,
        title: "Four Madhabs",
        subtitle: "In Depth",
        href: "/knowledge/madhabs",
    },
    {
        id: 5,
        icon: FaRegCommentDots,
        title: "Fatwas",
        subtitle: "1,200+",
        href: "/knowledge/fatwas",
    },
    {
        id: 6,
        icon: FaPlay,
        title: "Video Library",
        subtitle: "300+ Videos",
        href: "/knowledge/videos",
    },
];

const AcademicDirectory = () => {
    return (
        <section className={`${advance.section.padding} ${layout.section.gap} bg-[#F9F6F0]`}>
            <div className={`${layout.sectionDirection.flexCenter} `}>
                <p className={`${style.span.font} text-orangeColor `}> Knowledge Centre</p>
                <h2 className={`${style.heading.h2}`}>
                    A Living Library for Every Pilgrim
                </h2>
                <p className={`${style.text.md}`}>Scholarly guidance, interactive lessons, verified fatwas, and educational videos always accurate, always available.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {knowledgeCentre.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id}  className="group bg-white rounded-3xl border border-black/5 p-6 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#EEF5F2] flex items-center justify-center mb-5"> <Icon className="text-2xl text-primary group-hover:scale-110 transition-all-300" />
                            </div>

                            <h3 className="text-lg font-semibold heading-font mb-2"> {item.title}</h3>

                            <p className={style.text.sm}>{item.subtitle}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AcademicDirectory;
