import React from "react";
import { FaCalendarMinus } from "react-icons/fa";

const headingText = "Narrated by Aisha (RA)... Narrated or verified Hadith...";
const hijriDate = "18 Dhul Hijjah 1447 AH";
const textSize = "text-sm ";


export const GlobalUtilityBar = () => {
  return (
    <div className="w-full bg-[#126C62] text-white">
      {/* Flex two column */}
      <div className="max-w-7xl mx-auto  px-4 py-2 md:flex justify-between items-center ">
        {/* left  column */}
        <div className={`flex items-center gap-2 ${textSize}`}>
          <span className="text-yellow-400">⚠</span>
          <p className="  text-gray-200 ">{headingText}</p>
        </div>

        {/* Right  Column inside flex two column */}
        <div className={`flex justify-start items-center gap-4 ${textSize}`}>
          {/* flex: Hijri  Data */}
          <div className="flex  justify-left items-center gap-2 ">
            <span>
              <FaCalendarMinus />
            </span>
            <span>{hijriDate}</span>
          </div>

          <div className="h-4 bg-gray-400 w-px"></div>

          {/* Language */}
          <div className="relative">
            <button className="flex items-center gap-1 text-xs">
              English
              <span>▾</span>
            </button>

      
          </div>
        </div>
      </div>
    </div>
  );
};
