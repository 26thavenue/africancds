'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import toast from "react-hot-toast"
import Navbar from "./Navbar"

const Hero = () => {
  const bgRef = useRef(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef(null)
  const infoRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    if(!headlineRef.current ) return 
    const words = headlineRef.current.querySelectorAll(".word")

    const tl = gsap.timeline()

    tl.from(bgRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })

    tl.from(words, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out"
    }, "-=0.4")

    // 3. Paragraph
    tl.from(paragraphRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")

    // 4. Info section
    tl.from(infoRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")

    // 5. Buttons
    tl.from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    // link.href = "/eventSchedule.pdf"
    // link.download = "eventSchedule.pdf"
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
    toast.success("Event Schedule has been downloaded!")
  }

  const headline = "African Chiefs of Defence Staff Summit"

  return (
    <div className="relative bg-black/85 min-h-[60dvh] lg:min-h-[90dvh]">
      {/* Background pattern */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-30">
        <div
          style={{
            backgroundImage: "url('/Image.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        />
      </div>

      <div className=" mx-auto relative z-10 flex flex-col h-full min-h-[85dvh]">
        <Navbar />
        <div className="flex-1 max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full">

          {/* HEADLINE */}
          <h1
            ref={headlineRef}
            className="text-3xl md:text-6xl lg:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2"
          >
            {headline.split(" ").map((word, idx) => (
              <span key={idx} className="word inline-block">
                {word}
              </span>
            ))}
          </h1>

          {/* PARAGRAPH */}
          <p ref={paragraphRef} className="text-lg md:text-2xl text-gray-300 mb-8">
            Combating Contemporary Threats to Regional Peace and Security in Africa: The Role of Strategic Defence Collaboration.
          </p>

          {/* INFO */}
          <div
            ref={infoRef}
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10"
          >
            <div className="flex items-center justify-center text-yellow-500">
              <Calendar size={20} className="mr-2" />
              <span>August 25–27th 2025</span>
            </div>
            <div className="flex items-center justify-center text-yellow-500">
              <MapPin size={20} className="mr-2" />
              <span>Transcorp Hilton Hotel, Abuja</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/register"
              className="bg-yellow-500 hover:bg-yellow-700 text-navy-dark font-medium px-8 py-3 rounded transition-colors"
            >
              Register Now
            </Link>
            <button
              onClick={handleDownload}
              className="border border-yellow-700 cursor-pointer rounded text-white hover:bg-yellow-800 font-medium px-8 py-3 transition-colors"
            >
              Download Schedule
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
