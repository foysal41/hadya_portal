'use client'
import { advance, layout, style } from "@/app/csslib/GlobalCSS";
import React, { useState } from "react";
import image1 from "../../../../public/images/Kaaba.webp"
import image2 from "../../../../public/images/hajj-record.png"
import image3 from "../../../../public/images/Mecca_Haram_mosque_pilgrims_vertical.jpg"
import Image from "next/image";


export const featuredProducts = [
    {
        id: 1,
        badge: "Premium Store",
        title: "Complete Umrah Kit",
        subtitle: "Exclusive Hadya Collection",
        price: "SAR 245",
        description: "Everything you need for a meaningful pilgrimage.",
        image: image1,
        href: "#",
    },
    {
        id: 2,
        badge: "Premium Store",
        title: "Luxury Prayer Set",
        subtitle: "Premium Prayer Essentials",
        price: "SAR 185",
        description: "Prayer mat, tasbih and premium fragrance.",
        image: image2,
        href: "#",
    },
    {
        id: 3,
        badge: "Premium Store",
        title: "Hajj Essentials Box",
        subtitle: "Everything in One Box",
        price: "SAR 320",
        description: "Ihram, slippers, belt and travel accessories.",
        image: image3,
        href: "#",
    },
];
const BoutiqueStorefront = () => {
    const [activeProduct, setActiveProduct] = useState(featuredProducts[0])
    
    return (
        <section className={`${advance.section.padding} bg-canvas `}>
            {/* Header Part of Section */}
            <div className={`${layout.sectionDirection.flexCenter} `}>
                <p className={`${style.span.font} text-orangeColor `}> Premium Store </p>
                <h2 className={`${style.heading.h2}`}>Curated Essentials For Every Pilgrim </h2>
                <p className={`${style.text.md}`}>
                    Premium travel kits, prayer essentials and carefully selected Islamic products.
                </p>
            </div>



            {/* Main Card */}
            <div className="max-w-7xl mx-auto mt-10 overflow-hidden rounded-3xl shadow-xl bg-white grid lg:grid-cols-2 ">
                {/* left */}
                <div className="bg-primary p-5 lg:p-12 flex flex-col justify-center">
                    <h2 className={`${style.heading.h2} text-white`}>{activeProduct.title}</h2>
                    <p className="text-white/70 mt-2">{activeProduct.subtitle}</p>
                    <h3 className="heading-font text-4xl text-white mt-6">{activeProduct.price}</h3>
                    <p className="text-white/70  max-w-md">{activeProduct.description}</p>

                    <div className="flex gap-4 mt-8">
                        <button className={`${style.button.accent}`}>Add to Cart</button>
                    </div>
                    
                </div>

                {/* Right */}
                <div className="relative min-h-50  md:min-h-105 ">
                    <Image src={activeProduct.image} alt="kit" fill className="object-cover"></Image>
                </div>


            </div>

            {/* Thumbnail */}
            <div className="max-w-7xl mx-auto mt-5 flex gap-4">
                {featuredProducts.map((product) => {

                    return <button key={product.id} onClick={() => setActiveProduct(product)} className={`relative h-24 w-24 overflow-hidden rounded-2xl border-2 transition-all duration-300 ${activeProduct.id === product.id ? "border-primary scale-105" : "border-transparent hover:border-primary"}`} ><Image src={product.image} alt={product.title} fill className="object-cover"></Image></button>
                })}
            </div>


        </section>
    );
};

export default BoutiqueStorefront;
