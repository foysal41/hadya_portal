import { advance, style } from '@/app/csslib/GlobalCSS'
import Link from 'next/link'
import React from 'react'
import blogImage1 from "../../../../public/images/news-umrah-visa.png"
import blogImage2 from "../../../../public/images/news-hajj-ai.png"
import blogImage3 from "../../../../public/images/hajj-record.png"
import Image from 'next/image';



export const newsCards = [
  {
    id: 1,
    image: blogImage1,
    category: "Visa Update",
    date: "5 Muharram 1447 · Jul 2025",
    title: "Saudi Arabia Extends Umrah Visa Validity to 90 Days for 2025 Season",
    description:
      "The Ministry of Hajj and Umrah announced an extension allowing pilgrims to enjoy extended stays.",
    href: "/news/umrah-visa-update",
  },

  {
    id: 2,
    image: blogImage2,
    category: "Platform Update",
    date: "28 Dhul Hijjah 1446 · Jun 2025",
    title: "Hadya Launches AI-Powered Hajj Preparation Assistant",
    description:
      "Our new intelligent assistant helps pilgrims create personalized, step-by-step preparation plans.",
    href: "/news/hajj-ai-assistant",
  },

  {
    id: 3,
    image: blogImage3,
    category: "Hajj News",
    date: "15 Dhul Hijjah 1446 · Jun 2025",
    title:
      "Record 11.9 Million Pilgrims Complete Hajj 2025 with Enhanced Digital Services",
    description:
      "This historic season saw unprecedented attendance supported by Hadya's integrated ecosystem.",
    href: "/news/hajj-2025-record",
  },
];

const Update = () => {
  return (
    <section className={`${advance.section.padding} bg-canvas`}>
        <div className='grid md:grid-cols-3  gap-4 '>
            <div className='col-span-1 flex flex-col justify-center items-left gap-5'>
                <p className={`${style.span.font} text-orangeColor  `}>News & Updates </p>
                <h2 className={`${style.heading.h2}`}>Stay Informed </h2>
                 <p className={`${style.text.sm}`}>important updates and stories that metter to you.</p>
                 <Link href={"#"}><button className={`${style.button.primary}`}>View All News</button></Link>
                 
            </div>
            <div className='col-span-2'>
                <div className='grid  md:grid-cols-2  lg:grid-cols-3 gap-4'>
                    {newsCards.map((news) => {
                        return <div key={news.id} className='' >
                        <Image src={news.image} alt='kaaba' height={500} width={500} className='rounded-t-lg h-55 overflow-hidden' />
                        <div className='px-5 py-10 flex flex-col gap-5 bg-white'>
                            <span className={`${style.text.sm} text-accent bg-[#E8EDE9] rounded-full p-2 w-fit  `}>{news.category}</span>
                            <Link href={"#"}> <h3 className={`${style.heading.h3} hover:text-primary line-clamp-2 `}>{news.title} </h3>  </Link>   
                            <p>{news.date}</p>                        
                            
                            <Link href={"#"}>
                                <button className={`${style.button.secondary}`}>View Details</button>
                            </Link>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Update

