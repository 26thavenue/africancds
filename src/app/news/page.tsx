'use client'

import Link from 'next/link';
import Navbar from "../components/Navbar"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// lib/news.ts
export const newsData = [
  {
    id: 'summit-security-collab',
    title: 'African Defense Summit Focuses on Regional Security Collaboration',
    summary: 'Top military leaders from across Africa gather in Abuja to strengthen joint military operations, intelligence sharing, and peacekeeping efforts.',
    content: `The African Defense Summit kicked off with over 30 African nations discussing ways to unify regional military strategies. Key topics included counter-terrorism, border control, and cybersecurity infrastructure.`,
    date: '2025-07-01',
    imgAddress:"https://images.unsplash.com/photo-1723088672878-045d1dc32cc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmlnZXJpYSUyME1pbGl0YXJ5fGVufDB8fDB8fHww"
  },
  {
    id: 'drone-tech-advancement',
    title: 'Breakthroughs in African Drone Technology Unveiled at Defense Expo',
    summary: 'Indigenous drone systems designed for surveillance, rescue missions, and tactical strikes were showcased by defense startups from Kenya, Nigeria, and South Africa.',
    content: `At the Defense Tech Expo 2025, emerging African tech firms unveiled next-gen UAVs aimed at supporting defense operations and reducing reliance on imported systems.`,
    date: '2025-06-29',
    imgAddress:"https://images.unsplash.com/photo-1510181794251-e94190c17f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5pZ2VyaWElMjBNaWxpdGFyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 'peacekeeping-initiative',
    title: 'New African Peacekeeping Initiative Targets Conflict Zones',
    summary: 'A collaborative initiative backed by the AU aims to deploy 5,000 rapid response troops to stabilize high-risk areas across West and Central Africa.',
    content: `The AU’s new peacekeeping plan proposes faster deployment, digital command centers, and local community engagement to reduce unrest in volatile zones.`,
    date: '2025-06-27',
    imgAddress:"https://images.unsplash.com/photo-1685157782880-4479324e907b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fE5pZ2VyaWElMjBNaWxpdGFyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
];


export default function NewsPage() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  sectionsRef.current = [] 

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  useEffect(() => {
  if (!titleRef.current || !paragraphRef.current) return

  const titleWords = titleRef.current.querySelectorAll(".word")
  const paraWords = paragraphRef.current.querySelectorAll(".word")

  gsap.from(titleWords, {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: titleRef.current,
      start: "top 80%",
    },
  })

  gsap.from(paraWords, {
    opacity: 0,
    y: 30,
    stagger: 0.08,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: paragraphRef.current,
      start: "top 85%",
    },
  })

  sectionsRef.current.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    })
  })
}, [])


  return (
    <div className="">

         <div
      style={{
        backgroundImage: "url('/pattern2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }} 
      className="bg-primary  mb-16 min-h-[60dvh] lg:min-h-[90dvh] flex flex-col items-center justify-center">
        <Navbar/>
        <div className="flex-1 flex items-center justify-center text-center px-6 container mx-auto">
            <div className="container mx-auto px-6 text-center">
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2">
              {"News".split(" ").map((word, i) => (
                <span key={i} className="word inline-block">
                  {word}
                </span>
              ))}
            </h1>
            <p ref={paragraphRef} className="text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto flex flex-wrap justify-center gap-2">
            {"Stay updated with the latest developments in African defense ".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </p>
          </div>
        </div>
        
      </div>

      {/* News List */}
      <section className="l mx-auto p-6 lg:p-12">
        <h2 className="text-3xl font-semibold mb-6">Latest News</h2>
        <div className="space-y-8">
          {newsData.map((news) => (
            <article key={news.id} className="border-b pb-6 max-w-fit">
              <img src={news.imgAddress} alt={news.title} className="h-[400px] w-[800px] object-cover"/>
              <h3 className="text-xl font-bold text-gray-800 my-6">
                <Link href={`/news/${news.id}`} className="hover:underline text-blue-700">
                  {news.title}
                </Link>
              </h3>
              <p className="text-gray-700 mb-2">{news.summary}</p>
              <p className="text-sm text-gray-600">{news.date}</p>
            </article>
          ))}
        </div>
      </section>
      
    </div>
  );
}
