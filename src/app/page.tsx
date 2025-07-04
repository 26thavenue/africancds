'use client'

import Hero from "./components/Hero";
import { Calendar, Users, Target, MapPin } from "lucide-react";
import Link from "next/link"; 
import Banner from "./components/Banner";
import VenueMap from "./components/VenueMap"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticipatingCountries from "./components/ParticipatingCountries";
import Media from "./components/Media";


const Index = () => {

  gsap.registerPlugin(ScrollTrigger)

  const introRef = useRef(null)
  const infoRef = useRef(null)
  const objectivesRef = useRef(null)
  const thematicRef = useRef(null)
  const statementRef = useRef(null)

  const thematicAreas = [
    "Border Management and Regional Security in Africa",
    "Strategic Defence Collaborations for Counter-Terrorism",
    "Leveraging Artificial Intelligence for Regional Security",
    "Public Private Partnerships in Defence Strategies",
    "Regional Cooperation for African Maritime Security",
  ];

  const objectives = [
    "To Initiate Discussions on Collective Strategies for African Security Issues",
    "To Facilitate Collaborative Response to Peace and Security Issues in Africa",
    "To Develop Mechanisms for Integrating the Private Sector into Africa’s Defence Efforts",
    "To Establish a Roundtable for the Initiation of Homegrown Solutions to Africa’s Defence Needs",
  ];

  useEffect(() => {
    const sections = [
      introRef.current,
      infoRef.current,
      objectivesRef.current,
      thematicRef.current,
      statementRef.current
    ]

  sections.forEach((section) => {
    if (section) {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', 
          toggleActions: 'play none none none',
        }
      })
    }
  })
}, [])



  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Introduction Section */}
      <section className=" py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy-dark mb-6 text-center">
              Welcome to the African Chiefs of Defence Staff Summit
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4 text-base lg:text-xl">
                The African Chiefs of Defence Staff (ACDS) Summit is a prestigious gathering of military leaders from across the African continent. This landmark event brings together the top defence officials from all 54 African nations to discuss critical security challenges, foster cooperation, and develop joint strategies for ensuring peace and stability across Africa.
              </p>
              <p className="text-base lg:text-xl">
                The 2025 summit represents a significant opportunity for strengthening military diplomacy, sharing expertise, and building a unified approach to continental security. Through collaborative dialogue and strategic partnerships, the ACDS Summit aims to enhance the capacity of African nations to address both traditional and emerging security threats.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section ref={introRef} className="relative py-24 lg:py-28">
      

      <div className="absolute inset-0 bg-primary  z-10" >
        <div 
        style={{
          backgroundImage: `url("/bgg.png")`,
          opacity: 0.30
        }}
        className="absolute inset-0 bg-cover bg-center "
      ></div>
      </div>
      

  {/* Content Layer - Full opacity, sits above background */}
  <div className="container mx-auto px-6 relative z-10">
    <h2 className="text-2xl text-white lg:text-3xl font-bold mb-12 text-center">
      Summit Information
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Your cards will be fully opaque and readable */}
      {[{ icon: Calendar, to:"/event", title: "Date", detail: "August 25-27th 2025", sub: "Three days of collaboration and strategic dialogue" },
        { icon: MapPin, to:"/location", title: "Venue", detail: "Transcorp Hilton Hotel, Abuja", sub: "A premier venue in Nigeria's capital city" },
        { icon: Users, to:"/gallery", title: "Participants", detail: "Chiefs of Defence Staff from 54 Countries in Africa", sub: "Defence Industries Exhibitors amongst others" },
        { icon: Target,to:"/event", title: "Focus", detail: "Continental Security & Cooperation", sub: "Building a safer Africa through collaboration" }
      ].map((item, idx) => (
        <Link key={idx} href={item.to} className="">
          <div className="bg-white min-h-[250px] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-yellow-500 text-black p-3 rounded-full mb-4">
              <item.icon size={32} className="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.detail}</p>
            <p className="text-gray-600 text-sm mt-2">{item.sub}</p>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link href="/event" className="hover:underline text-white inline-flex items-center  font-medium hover:text-navy transition-colors">
        Learn more about the event
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</section>

      {/* Objectives Section */}
      <section ref={objectivesRef} className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">
            Summit Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="border border-yellow-500 p-6 rounded-lg flex items-start">
                <div className="bg-yellow-500 h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p>{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Areas Section */}
      <section
      ref={thematicRef}
       
      className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Thematic Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thematicAreas.map((theme, index) => (
              <div key={index} className="bg-gray-100 border-l-4 border-yellow-500 p-6 rounded-r-lg hover:bg-gray-200 transition-colors">
                <h3 className="text-lg font-semibold text-primary">{theme}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section
       ref={statementRef} 
       style={{
        backgroundImage: "url('/pattern2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }} 
       className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Statement from the Chief of Defence Staff
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-[url('https://africacdssummit.com/wp-content/uploads/2025/03/image006.png')] bg-cover bg-center"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  General Christopher Gwabin Musa
                </h3>
                <p className="text-gray-600 mb-4">Chief of Defence Staff, Federal Republic of Nigeria</p>
                <p className="text-navy">
                  Statement on the Inauguration of the Planning Committee for the African Chiefs of Defence Staff Summit 2025
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Distinguished colleagues, esteemed officers, and members of the Planning Committee,
              </p>
              <p className="mb-4">
                It is with great honor and a profound sense of responsibility that I address you today at the inauguration of the Planning Committee for the upcoming African Chiefs of Defence Staff Summit 2025. This summit represents a pivotal moment for our continent's collective security architecture.
              </p>
              <p className="mb-4">
                Africa faces unique security challenges that transcend national borders. From transnational terrorism to maritime insecurity, from ethnic conflicts to climate-induced crises, the threats to our people's safety and wellbeing demand a unified and coordinated response. No single nation, regardless of its military strength or economic resources, can effectively address these challenges in isolation.
              </p>
              <p className="mb-4">
                The African Chiefs of Defence Staff Summit is conceived as a platform where we, as military leaders responsible for our nations' defence, can forge stronger bonds of cooperation, share critical intelligence, develop joint capability frameworks, and harmonize our strategic approaches to continental security.
              </p>
              <p className="mb-4">
                To the distinguished members of the Planning Committee, I charge you with the important task of organizing a summit that will not merely be a gathering of military officials, but a transformative event that produces tangible outcomes for Africa's security landscape. I have full confidence in your abilities to deliver on this mandate.
              </p>
              <p>
                Together, we shall work towards a more secure Africa, where peace enables prosperity, and where our defence institutions serve as pillars of stability for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ParticipatingCountries/>
      <Media/>

      <VenueMap/>
      <Banner />
    </div>
  );
};

export default Index;
