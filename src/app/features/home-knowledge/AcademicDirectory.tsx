import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import { FaBookOpen, FaScaleBalanced, FaLandmark, FaMosque, } from "react-icons/fa6";

import umrahImage from "../../../../public/images/Preparing_for_Your_First_Umrah.webp";
import madhhabImage from "../../../../public/images/Hajj and Umrah as per four Madhab.jpeg";
import birRuhaImage from "../../../../public/images/Story_of_Bir-e-Ruha.webp";
import madinahImage from "../../../../public/images/Visiting_the_Messenger_of_Allah.jpeg";

type KnowledgeItem = {
  id: number;
  image: StaticImageData;
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

export const knowledgeCentre: KnowledgeItem[] = [
  {
    id: 1,
    image: umrahImage,
    icon: FaBookOpen,
    title: "Preparing for Your First Umrah",
    description:
      "A step-by-step guide to help you prepare with confidence before beginning your sacred journey.",
    buttonText: "Read Guide",
    href: "/knowledge/umrah",
  },
  {
    id: 2,
    image: madhhabImage,
    icon: FaScaleBalanced,
    title: "Hajj & Umrah According to the Four Madhhabs",
    description:
      "Explore how the four recognised schools of Islamic jurisprudence explain the rulings and practices of Hajj and Umrah.",
    buttonText: "Explore the Madhhabs",
    href: "/knowledge/madhabs",
  },
  {
    id: 3,
    image: birRuhaImage,
    icon: FaLandmark,
    title: "The Story of Bir-e-Ruha",
    description:
      "Discover the history, virtues and significance of the blessed Well of Bir-e-Ruha in Madinah through authentic historical sources.",
    buttonText: "Read the History",
    href: "/knowledge/ziyarah",
  },
  {
    id: 4,
    image: madinahImage,
    icon: FaMosque,
    title: "Visiting the Messenger of Allah ",
    description:
      "Learn the beautiful etiquettes, supplications and guidance for visiting Al-Masjid An-Nabawi with reverence and respect.",
    buttonText: "Learn the Etiquettes",
    href: "/knowledge/visiting-madinah",
  },
];

const AcademicDirectory = () => {
  return (
    <section
      className={`${advance.section.padding} ${layout.section.gap} bg-[#F9F6F0]`}
    >
     
      <div className={layout.sectionDirection.flexCenter}>
        <p className={`${style.span.font} text-orangeColor`}>
          Knowledge Centre
        </p>

        <h2 className={style.heading.h2}>
          Knowledge for Every Step of the Journey
        </h2>

        <p className={`${style.text.md} max-w-2xl`}>
          Authentic guidance, practical learning and trusted scholarship for
          every stage of your pilgrimage.
        </p>
      </div>

      {/* ================= KNOWLEDGE CARDS ================= */}
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {knowledgeCentre.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.id}
              className=" group  bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-70 overflow-hidden">
                <Image
                  src={item.image} alt={item.title} fill
                  className=" object-cover transition-transform duration-500 group-hover:scale-105
                  "
                />
              
                <div
                  className=" absolute inset-s-4 bottom-2 w-11 h-11 rounded-full bg-[#FFFDF8] flex items-center justify-center shadow-md
                  "
                >
                  <Icon className="text-lg text-orangeColor" />
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5 pt-8 flex flex-col min-h-60">
                <h3
                  className=" heading-font text-xl font-semibold leading-tight text-primary mb-3 "
                >
                  {item.title}
                </h3>

                <p className={`${style.text.sm} leading-relaxed`}>
                  {item.description}
                </p>

                {/* Push CTA to bottom */}
                <Link
                  href={item.href}
                  className=" mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium  text-orangeColor group/link " >  {item.buttonText}

                  <span className=" transition-transform duration-300 group-hover/link:translate-x-1 " >
                    →
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* ================= BOTTOM BUTTON ================= */}
      <div className="flex justify-center">
        <Link
          href="/knowledge"
          className=" inline-flex items-center justify-center gap-3 bg-primary  text-white px-10 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/90
          "
        >
          Explore Knowledge Centre
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default AcademicDirectory;