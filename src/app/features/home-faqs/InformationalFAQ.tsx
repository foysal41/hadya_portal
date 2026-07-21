"use client";

import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { advance, style } from "@/app/csslib/GlobalCSS";

const faqs = [
  {
    question: "How do pilgrims register on Hadya?",
    answer:
      "Pilgrims can register through approved tour operators or directly via the Hadya platform using their passport and required travel documents.",
  },
  {
    question: "Does Hadya support OCR passport scanning?",
    answer:
      "Yes. Hadya uses AI-powered OCR to instantly scan passports and automatically extract pilgrim information within seconds.",
  },
  {
    question: "Can operators track pilgrims in real time?",
    answer:
      "Yes. Operators can monitor every pilgrim's journey in real time, from arrival and accommodation to departure using the Hadya dashboard.",
  },
   {
    question: "Are the Digital Tools free to use?",
    answer:
      "Yes. All core digital tools including Qibla Direction, Madinah Direction, and the Qur'an Tracker are completely free for all registered users.",
  },
   {
    question: "How can tour operators join the platform?",
    answer:
      "Tour operators can apply through the Tour Operator Solutions section. After verification, you gain full access to our B2B suite including OCR, room allocation, and bulk printing tools.",
  },
   {
    question: "Is the platform available in Arabic?",
    answer:
      " Yes. The platform is fully available in Arabic, English, Urdu, Bahasa Melayu, Turkish, and French. Additional languages are continuously being added.",
  },
];

const InformationalFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`${advance.section.padding} bg-[#F9F6F0]`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className={`${style.span.font} text-orangeColor`}>
            Frequently Asked Questions
          </p>

          <h2 className={`${style.heading.h2} mt-3`}>
           Common Questions
          </h2>

          <p className={`${style.text.md} mt-5`}>
            Find answers to the most common questions about Hadya Platform,
            Hajj & Umrah management, registration, operators and more.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-7xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300">
                <button onClick={() => setOpenIndex(isOpen ? null : index) }className="w-full flex items-center justify-between gap-4 p-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EEF5F2] text-primary font-semibold flex items-center justify-center">
                      ?
                    </div>

                    <h3 className="text-lg font-semibold"> {faq.question} </h3>
                  </div>

                  {isOpen ? ( <HiOutlineMinus className="text-xl text-primary flex-0" /> ) : ( <HiOutlinePlus className="text-xl text-gray-500 flex-shrink-0" />
                  )}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${ isOpen ? "max-h-40" : "max-h-0" }`}
                >
                  <div className="border-t border-gray-100 px-6 py-5">
                    <p className={style.text.sm}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InformationalFAQ;