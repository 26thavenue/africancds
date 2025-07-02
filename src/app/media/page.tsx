'use client'

import React from 'react'
import VenueMap from "../components/VenueMap"
import Navbar from "../components/Navbar"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const sectionOne = Array.from({ length: 5 }, (_, i) => `/Media${i + 1}.jpg`);
const sectionTwo = Array.from({ length: 8 }, (_, i) => `/media/Media${i + 7}.jpg`);
const sectionThree = Array.from({ length: 11 }, (_, i) => `/media/Media${i + 15}.jpg`);

const renderGrid = (images: string[]) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {images.map((src, idx) => (
      <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={src}
          alt={`Media ${idx + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    ))}
  </div>
);

const page = () => {
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
    <main>
    <div
  style={{
    backgroundImage: "url('/media/Media24.jpg')",
    backgroundRepeat: "repeat",
    backgroundSize: "auto"
  }}
  className="relative bg-primary bg-no-repeat mb-16 min-h-[60dvh] lg:min-h-[90dvh] flex flex-col items-center justify-center"
>

  <div className="absolute inset-0 bg-black opacity-60 z-0" />
  <Navbar />
  <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 container mx-auto">
    <div className="container mx-auto px-6 text-center">
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2"
      >
        {"Media".split(" ").map((word, i) => (
          <span key={i} className="word inline-block">
            {word}
          </span>
        ))}
      </h1>
      <p
        ref={paragraphRef}
        className="text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto flex flex-wrap justify-center gap-2"
      >
        {"Advancing Africa’s Security with Strategic Defence Procurement & Cooperation"
          .split(" ")
          .map((word, i) => (
            <span key={i} className="word inline-block">
              {word}
            </span>
          ))}
      </p>
    </div>
  </div>
    </div>

    <section className="  p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <div>
          <h2 className="text-3xl max-w-4xl font-bold  my-8">Summit Media Gallery</h2>
          {renderGrid(sectionOne)}
        </div>

        
        <div>
          <h2 className="text-3xl max-w-4xl font-semibold my-8">
            Visit of the Coordinator and Members of the Organising Committee to the Ministry of Foreign Affairs
          </h2>
          {renderGrid(sectionTwo)}
        </div>

        
        <div>
          <h2 className="text-3xl max-w-4xl font-semibold my-8">
            Visit of the Coordinator, Chairman and Some Members of the Committee to the Honourable Minister of Defence
          </h2>
          {renderGrid(sectionThree)}
        </div>
      </div>
    </section>

      <VenueMap/>
    </main>
  )
}

export default page