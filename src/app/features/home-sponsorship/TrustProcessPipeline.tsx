import React from "react";
import Image from "next/image";
import Link from "next/link";

import { advance, layout, style } from "@/app/csslib/GlobalCSS";

import {
  FaBookOpen,
  FaTint,
  FaBoxOpen,
  FaWheelchair,
  FaShieldAlt,
} from "react-icons/fa";

import {
  MdShoppingBag,
  MdOutlinePayments,
  MdConfirmationNumber,
  MdVerified,
  MdArrowForward,
  MdAccessTime,
  MdCalendarToday,
} from "react-icons/md";

import quranImg from "../../../../public/images/quran-distribution.png";
import waterImg from "../../../../public/images/water-distribution.jpg";
import foodImg from "../../../../public/images/food-pack.webp";
import wheelchairImg from "../../../../public/images/wheelchair-support.webp";
import { div } from "framer-motion/client";

export const processSteps = [
  {
    id: 1,
    icon: MdShoppingBag,
    title: "Select Item",
    description:
      "Choose a sponsorship product that you want to support.",
  },
  {
    id: 2,
    icon: MdOutlinePayments,
    title: "Secure Purchase",
    description:
      "Make a secure payment through trusted gateway.",
  },
  {
    id: 3,
    icon: MdConfirmationNumber,
    title: "Get Unique Code",
    description:
      "Receive your sponsorship code via email or SMS.",
  },
  {
    id: 4,
    icon: MdVerified,
    title: "Receive Delivery Proof",
    description:
      "We deliver on the ground and send you real-time proof.",
  },
];

export const sponsorshipItems = [
  {
    id: 1,
    image: quranImg,
    icon: FaBookOpen,
    title: "Quran Distribution",
    price: "SAR 25",
    unit: "/ per Quran",
    description:
      "Provide the gift of Quran to pilgrims and students.",
    today: "1,250 Qurans",
    update: "5 mins ago",
    href: "/sponsorship/quran",
  },
  {
    id: 2,
    image: waterImg,
    icon: FaTint,
    title: "Water Distribution",
    price: "SAR 10",
    unit: "/ per Bottle",
    description:
      "Provide clean Zamzam water to thirsty pilgrims.",
    today: "8,750 Bottles",
    update: "8 mins ago",
    href: "/sponsorship/water",
  },
  {
    id: 3,
    image: foodImg,
    icon: FaBoxOpen,
    title: "Food Pack Distribution",
    price: "SAR 35",
    unit: "/ per Pack",
    description:
      "Nutritious meals for pilgrims and the needy.",
    today: "2,100 Packs",
    update: "12 mins ago",
    href: "/sponsorship/food-pack",
  },
  {
    id: 4,
    image: wheelchairImg,
    icon: FaWheelchair,
    title: "Wheelchair Support",
    price: "SAR 60",
    unit: "/ per Use",
    description:
      "Help elderly and disabled pilgrims perform their journey with ease.",
    today: "320 Supports",
    update: "15 mins ago",
    href: "/sponsorship/wheelchair",
  },
];

const TrustProcessPipeline = () => {
  return (
    <section className={`${advance.section.padding} ${layout.section.gap} bg-[#F4EFE6]`} >
      {/* ================= HEADER ================= */}

      <div className={`${layout.sectionDirection.flexCenter}`}>
        <p className={`${style.span.font} text-orangeColor uppercase`}>
          Sponsorship With Impact
        </p>

        <h2 className={style.heading.h2}>
          Give with Trust. Impact with Transparency.
        </h2>

        <p className={`${style.text.md} max-w-2xl`}>
          Your support reaches the right people, in the right places.
          Follow our transparent 4-step process.
        </p>
      </div>

      <div className="bg-white rounded-4xl border border-gray-200 shadow-sm py-5 px-8 lg:px-14 rounded-ful">
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-1 gray-200 rounded-full">
            <div className="w-full h-full bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {
              processSteps.map((step) => {
                const Icon = step.icon

                return (

                  <div key={step.id} className="relative  flex  flex-col items-center text-center">
                    <div className="relative z-10 w-20 h-20 rounded-full border border-gray-200 bg-white flex  items-center justify-center shadow-sm"  >
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="text-3xl text-primary" />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                     
                      <h3 className="font-bold text-lg">{step.title}</h3>

                    </div>
                    <p className="mt-3 text-gray-600 text-sm leading-7 max-w-55">{step.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>



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

              <Link href={item.href} key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl duration-300"
              >

                {/* IMAGE */}

                <div className="relative h-60 overflow-hidden">

                  <Image src={item.image}  alt={item.title}  fill className="object-cover duration-500 group-hover:scale-110"
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

          <Link href="/sponsorship" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
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