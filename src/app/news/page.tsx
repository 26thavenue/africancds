'use client'

import Link from 'next/link';
import Navbar from "../components/Navbar"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import newsData from '../lib/news';



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
          {newsData?.map((news) => (
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
