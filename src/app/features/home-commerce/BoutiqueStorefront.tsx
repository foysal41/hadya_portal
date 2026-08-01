"use client";
import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import React, { useState } from "react";
import image1 from "../../../../public/images/man-watcing-qubla-direction.jpeg";
import image2 from "../../../../public/images/hajj-record.png";
import image3 from "../../../../public/images/Mecca_Haram_mosque_pilgrims_vertical.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";




export const featuredProducts = [
  {
    id: 1,
    badge: "Premium Dates",
    title: "Complete Umrah Kit",
    subtitle: "Exclusive Hadya Collection",
    price: "SAR 245",
    description: "Everything you need for a meaningful pilgrimage.",
    image: image1,
    href: "#",
    type: "Ajwa · Safawi · Sukkari",
    productQuantity: "18 Products",
    exploreHref: "#",
  },
  {
    id: 2,
    badge: "Islamic Books",
    title: "Luxury Prayer Set",
    subtitle: "Premium Prayer Essentials",
    price: "SAR 185",
    description: "Prayer mat, tasbih and premium fragrance.",
    image: image2,
    href: "#",
    type: "Arabic · Urdu · English",
    productQuantity: "42 Books",
    exploreHref: "#",
  },
  {
    id: 3,
    badge: "Prayer Essentials",
    title: "Hajj Essentials Box",
    subtitle: "Everything in One Box",
    price: "SAR 320",
    description: "Ihram, slippers, belt and travel accessories.",
    image: image3,
    href: "#",
    type: "Musallah · Ihram · Tasbeeh",
    productQuantity: "15 Products",
    exploreHref: "#",
  },
  {
    id: 4,
    badge: "Attar & Gifts",
    title: "Hajj Essentials Box",
    subtitle: "Everything in One Box",
    price: "SAR 320",
    description: "Ihram, slippers, belt and travel accessories.",
    image: image3,
    href: "#",
    type: "Perfumes · Umbrellas · Gifts",
    productQuantity: "27 Products",
    exploreHref: "#",
  },
];
const BoutiqueStorefront = () => {
  const [activeProduct, setActiveProduct] = useState(featuredProducts[0]);

  return (
    <section className={`${advance.section.padding} bg-canvas `}>
      {/* Header Part of Section */}
      <div className={`${layout.sectionDirection.flexCenter} `}>
        <p className={`${style.span.font} text-orangeColor `}>
          {" "}
          Premium Store{" "}
        </p>
        <h2 className={`${style.heading.h2}`}>
          Curated Essentials For Every Pilgrim{" "}
        </h2>
        <p className={`${style.text.md}`}>
          Premium travel kits, prayer essentials and carefully selected Islamic
          products.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-7xl mx-auto mt-10 overflow-hidden rounded-3xl shadow-xl bg-white grid lg:grid-cols-2 ">
        {/* left */}
        <div className="bg-primary p-5 lg:p-12 flex flex-col justify-center">
          <h2 className={`${style.heading.h2} text-white`}>
            {activeProduct.title}
          </h2>
          <p className="text-orangeColor mt-2 ">{activeProduct.subtitle}</p>
          <h3 className="heading-font text-4xl text-white mt-6">
            {activeProduct.price}
          </h3>
          <p className="text-white/70  max-w-md">{activeProduct.description}</p>

          <div className="flex gap-4 mt-8">
            <Link href={"#"}>
              <button className={`${style.button.accent} `}>
               
                <BsCartCheck size={20} className="mr-2 " /> Add to Cart
              </button>
            </Link>

            <Link href={"#"}>
              <button className="flex items-center gap-2 cursor-pointer rounded-full border border-orangeColor  text-orangeColor text-sm md:text-base font-medium text-font px-5 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:bg-orangeColorHover hover:text-white">
                View Collection 
                <FaArrowRight  size={20} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative min-h-50  md:min-h-105 ">
          <Image
            src={activeProduct.image}
            alt="kit"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>

      {/* Thumbnail */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-4">
        {featuredProducts.map((product) => {
          return (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={` relative w-full h-64 sm:h-80 lg:h-80 overflow-hidden rounded-2xl border-2 transition-all duration-300 ${activeProduct.id === product.id ? "border-primary scale-105" : "border-transparent hover:border-primary"}`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              ></Image>

              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-transparent"></div>

              <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 text-left space-y-1">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold heading-font text-white">
                  {product.title}
                </h3>
                <p className={`${style.text.sm}  text-yellow-500`}>
                  {product.type}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`${style.text.sm} text-white`}>
                    {product.productQuantity}
                  </span>
                  <Link href={product.exploreHref}>
                    <span className={`${style.text.sm} text-yellow-500`}>
                      Explore
                    </span>
                  </Link>
                </div>
              </div>
            </button>
          );
        })}

        
      </div>

      <Link
        href={"#"}
        className="flex items-center w-fit mx-auto rounded-full border border-primary px-8 py-4 mt-7 text-primary font-medium transition-all duration-300 hover:bg-primary/90 hover:text-white"
      >
      
      <IoBagHandleOutline size={20} className="mr-2" />

        Explore All Collections 
      </Link>

      
    </section>
  );
};

export default BoutiqueStorefront;
