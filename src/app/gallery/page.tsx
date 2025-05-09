'use client'

import { useState } from "react";
import Banner from "../components/Banner";
import MinisterJson from "../ministers.json"
import VenueMap from "../components/VenueMap"
import Navbar from "../components/Navbar";
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const filterRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)


  const galleryImages = [
    {
      id: 61,
      category: "officials",
      title: "Chief of Defense Staff - Nigeria",
      subtitle: "General Christopher Musa",
      imageUrl: "https://africacdssummit.com/wp-content/uploads/2025/03/image006.png",
      country: "Nigeria"
    },
    {
      id: 67,
      category: "venues",
      title: "Transcorp Hotel - Exterior",
      subtitle: "Summit Venue",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 68,
      category: "venues",
      title: "Main Conference Hall",
      subtitle: "Plenary Sessions Venue",
      imageUrl: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
    },
    {
      id: 69,
      category: "venues",
      title: "Exhibition Area",
      subtitle: "Defense Technology Showcase",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      id: 60,
      category: "planning",
      title: "Planning Committee Meeting",
      subtitle: "Inaugural Session",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    },
    {
      id: 71,
      category: "planning",
      title: "Site Inspection",
      subtitle: "Venue Preparation",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
      id: 72,
      category: "planning",
      title: "Press Conference",
      subtitle: "Summit Announcement",
      imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
    }
  ];

  const arr = [...galleryImages,...MinisterJson]

  const filteredImages = activeCategory === "all" 
    ? arr 
    : arr.filter(image => image.category === activeCategory);

  useEffect(() => {
    const titleWords = titleRef.current?.querySelectorAll('.word') || []
    const paraWords = paragraphRef.current?.querySelectorAll('.word') || []

    gsap.from(titleWords, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    })

    gsap.from(paraWords, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 80%',
      },
    })

    gsap.from(filterRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: filterRef.current,
        start: 'top 85%',
      },
    })

    gsap.from(galleryRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top 85%',
      },
    })
  }, [])


  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div style={{
          backgroundImage: "url('/pic1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="bg-[#0B3D2E] relative w-full min-h-[90dvh] mx-auto rounded flex flex-col">
           <div className="absolute inset-0 bg-black/10  z-0"></div>
           <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 container mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2"
          >
            {"Summit Gallery".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </h1>
         <p
        ref={paragraphRef}
        className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto flex flex-wrap justify-center gap-2"
      >
        {"Meet the Defense Staff Chiefs and explore summit preparations".split(" ").map((word, i) => (
          <span key={i} className="word inline-block">
            {word}
          </span>
        ))}
      </p>

        </div>
      </div>
      
      {/* Gallery Filter */}
      <section className="pt-10 pb-4 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "all" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              All Photos
            </button>
            <button 
              onClick={() => setActiveCategory("officials")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "officials" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Defense Staff Chiefs
            </button>
            <button 
              onClick={() => setActiveCategory("venues")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "venues" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Venue
            </button>
            <button 
              onClick={() => setActiveCategory("planning")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "planning" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Planning Committee
            </button>
          </div>
          
          {activeCategory === "officials" && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-navy-dark">
                Chiefs of Defense Staff
              </h2>
              <p className="text-gray-600">
                Representing the 55 African Nations
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={image.imageUrl == "" ? "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" :image.imageUrl } 
                    alt={image.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-navy-dark text-lg">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.subtitle}
                  </p>
                  {image.country && (
                    <span className="inline-block mt-2 bg-navy-light text-white text-xs px-3 py-1 rounded-full">
                      {image.country}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {activeCategory === "officials" && filteredImages.length < 10 && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                More profiles of Chiefs of Defense Staff will be added as confirmations are received.
              </p>
            </div>
          )}
        </div>
      </section>
      
     
     <VenueMap/>
     <Banner/>
    </div>
  );
};

export default Gallery;