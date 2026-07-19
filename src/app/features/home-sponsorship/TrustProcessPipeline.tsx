import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import { FaBowlFood, FaHeart } from "react-icons/fa6";
import React from "react";

const TrustProcessPipeline = () => {
    return (
        <section className={`${advance.section.padding} ${layout.section.gap} bg-[#F4EFE6]`}>
            {/* Header Part of Section */}
            <div className={`${layout.sectionDirection.flexCenter} `}>
                <p className={`${style.span.font} text-orangeColor `}> Sponsorship </p>
                <h2 className={style.heading.h2}>Give Where It Matters</h2>
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

        </section>
    );
};

export default TrustProcessPipeline;