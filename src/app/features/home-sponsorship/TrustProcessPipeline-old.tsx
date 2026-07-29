import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import { FaBowlFood, FaHeart } from "react-icons/fa6";
import React from "react";
import { FaUtensils, FaTint, FaBookOpen, FaWheelchair, FaMoon, FaHandsHelping, } from "react-icons/fa";


export const distributionItems = [
    {
        id: 1,
        icon: FaUtensils,
        title: "Feed 1 Pilgrim",
        price: "SAR 45",
        funded: "12,400 funded",
        href: "/sponsor/feed-pilgrim",
    },
    {
        id: 2,
        icon: FaTint,
        title: "Water for Hajj",
        price: "SAR 25",
        funded: "8,200 funded",
        href: "/sponsor/water",
    },
    {
        id: 3,
        icon: FaBookOpen,
        title: "Mushaf Gift",
        price: "SAR 35",
        funded: "5,100 funded",
        href: "/sponsor/mushaf",
    },
    {
        id: 4,
        icon: FaWheelchair,
        title: "Wheelchair",
        price: "SAR 150",
        funded: "1,890 funded",
        href: "/sponsor/wheelchair",
    },
    {
        id: 5,
        icon: FaMoon,
        title: "Iftar Distribution",
        price: "SAR 60",
        funded: "9,750 funded",
        href: "/sponsor/iftar",
    },
    {
        id: 6,
        icon: FaHandsHelping,
        title: "Gaza Relief Fund",
        price: "Any",
        funded: "Ongoing",
        href: "/sponsor/gaza",
    },
];

const TrustProcessPipeline = () => {
    return (
        <section className={`${advance.section.padding} ${layout.section.gap} bg-[#F4EFE6]`}>
            {/* Header Part of Section */}
            <div className={`${layout.sectionDirection.flexCenter} `}>
                <p className={`${style.span.font} text-orangeColor `}> Sponsorship </p>
                <h2 className={`${style.heading.h2}`}>Give Where It Matters</h2>
                <p className={`${style.text.md}`}>
                    Support pilgrims through food, water, wheelchairs, mushaf, and relief every contribution reaches the sacred land.
                </p>
            </div>

            <div className="bg-primary rounded-3xl px-6 py-8 lg:px-10 lg:py-8 grid grid-cols-1  xl:grid-cols-[0.5fr_2fr_2fr_1.4fr]  gap-8 items-center">
                <div className="w-22 h-22 rounded-full border border-[#D4A537] flex items-center justify-center shrink-0">
                    <div className="w-16 h-16 rounded-full  flex items-center justify-center">
                        <FaBowlFood className="text-3xl text-[#D4A537]" />
                    </div>
                </div>

                <div>
                    <h3 className={`${style.heading.h3} text-white`}>Feed 10,000 <br /> Pilgrims This Season</h3>
                    <p className={`${style.text.sm} text-white/80`}>A complete meal for a pilgrim at the Haramain your sadaqah matters.</p>
                </div>

                <div className="space-y-5">
                    <p className="text-center text-xs uppercase tracking-[3px] text-white/70">
                        Season Progress
                    </p>

                    <div className="relative">
                        <div className="h-0.5 bg-white/30 rounded-full "></div>

                        <div className="absolute -top-2 left-0 w-5 h-5 rounded-full bg-[#D4A537]"></div>
                        <div className="absolute -top-5 left-1/2  -translate-x-1/2">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <FaHeart className="text-[#D4A537]" />
                            </div>
                        </div>
                        <div className="absolute -top-2 right-0 w-5 h-5 rounded-full bg-[#D4A537]"></div>
                    </div>

                    <div className="flex justify-between items-center pt-5">

                        <div className="text-center">
                            <h4 className={`${style.heading.h4} text-white `}>0</h4>
                            <p className="text-white">Start</p>
                        </div>
                        <div className="text-center ">
                            <div className="bg-[#D4A537] rounded-lg px-4 py-2 inline-block">
                                <h4 className={`${style.heading.h4} text-white `}>7,840</h4>
                            </div>
                        </div>

                        <div className="text-center">
                            <h4 className={`${style.heading.h4} text-white `}>10,000</h4>
                            <p className="text-white">Goal</p>
                        </div>
                    </div>


                </div>

                <div className="space-y-5">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">78% Funded</span>
                            <span className="text-white/70">2,160 meals to go</span>
                        </div>

                        <div className="h-2 bg-white rounded-full overflow-hidden">
                            <div className="w-[75%] bg-[#D4A537] h-full rounded-full"></div>
                        </div>
                    </div>

                    <button className={`${style.button.accent} w-full py-3  `}>Donate Now</button>
                </div>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 border border-[#E7D8B3] rounded-xl overflow-hidden">
                {distributionItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center justify-center gap-2 p-5 border-r border-[#E7D8B3] last:border-r-0 hover:bg-[#FFF8EC] transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#FFF8EC] flex items-center justify-center">
                                <Icon className="text-2xl text-[#D4A537] transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <h3 className="font-semibold text-sm text-center">
                                {item.title}
                            </h3>

                            <p className="text-[#D4A537] font-bold">
                                {item.price}
                            </p>

                            <p className="text-xs text-gray-500">
                                {item.funded}
                            </p>
                        </div>
                    );
                })}
            </div>









            {/* ================= PROCESS ================= */}

            <div className="bg-white rounded-4xl border border-gray-200 shadow-sm px-8 lg:px-14 py-12">

                <div className="relative">

                    {/* Line */}

                    <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-1 bg-gray-200 rounded-full">
                        <div className="w-full h-full bg-primary rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {processSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.id}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    <div className="relative z-10 w-20 h-20 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">

                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">

                                            <Icon className="text-3xl text-primary" />

                                        </div>

                                    </div>

                                    <div className="mt-6 flex items-center gap-2">

                                        <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                                            {step.id}
                                        </span>

                                        <h3 className="font-bold text-lg">
                                            {step.title}
                                        </h3>

                                    </div>

                                    <p className="mt-3 text-gray-600 text-sm leading-7 max-w-55">
                                        {step.description}
                                    </p>

                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-4 text-primary font-medium">

                        <FaShieldAlt />

                        <span>100% Transparent</span>

                        <span>•</span>

                        <span>100% Trusted</span>

                        <span>•</span>

                        <span>100% Impact</span>

                    </div>

                </div>

            </div>

            {/* ================= CHOOSE SPONSORSHIP ================= */}

            <div className="space-y-10">

                <div className="text-center">

                    <h2 className={style.heading.h2}>
                        Choose a Sponsorship
                    </h2>

                    <p className={`${style.text.md} max-w-xl mx-auto`}>
                        Support essential services for pilgrims and communities in need.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

                    {sponsorshipItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <Link
                                href={item.href}
                                key={item.id}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl duration-300"
                            >

                                {/* IMAGE */}

                                <div className="relative h-60 overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                                    {/* TOP ICON */}

                                    <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">

                                        <Icon className="text-xl" />

                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div className="p-6">

                                    <div className="flex justify-between gap-4">

                                        <div>

                                            <h3 className="text-[28px] font-amiri font-bold leading-tight text-headingColor">

                                                {item.title}

                                            </h3>

                                            <p className="mt-3 text-primary font-bold">

                                                {item.price}

                                                <span className="font-normal text-gray-600">

                                                    {" "}
                                                    {item.unit}

                                                </span>

                                            </p>

                                        </div>

                                        <div className="shrink-0">

                                            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary duration-300">

                                                <MdArrowForward className="text-xl text-primary group-hover:text-white duration-300" />

                                            </div>

                                        </div>

                                    </div>

                                    <p className="mt-5 text-gray-600 leading-7">

                                        {item.description}

                                    </p>

                                </div>

                                {/* FOOTER */}

                                <div className="border-t border-gray-100 bg-[#FAFAFA]">

                                    <div className="grid grid-cols-2">

                                        <div className="flex items-center gap-3 p-5">

                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                                                <MdCalendarToday className="text-primary" />

                                            </div>

                                            <div>

                                                <p className="text-xs text-gray-500">
                                                    Today
                                                </p>

                                                <p className="font-semibold text-sm">
                                                    {item.today}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="border-l border-gray-200 flex items-center gap-3 p-5">

                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">

                                                <MdAccessTime className="text-primary" />

                                            </div>

                                            <div>

                                                <p className="text-xs text-gray-500">
                                                    Last Update
                                                </p>

                                                <p className="font-semibold text-sm">
                                                    {item.update}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                        );

                    })}

                </div>

                {/* BUTTON */}

                <div className="flex justify-center">

                    <Link
                        href="/sponsorship"
                        className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                    >

                        View All Sponsorships

                        <MdArrowForward className="text-xl" />

                    </Link>

                </div>

            </div>

















        </section>
    );
};

export default TrustProcessPipeline;