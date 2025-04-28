'use client'

import Hero from "./components/Hero";
import { Calendar, Users, Target, MapPin } from "lucide-react";
import Link from "next/link"; 
import Banner from "./components/Banner";

const Index = () => {
  const thematicAreas = [
    "Regional Security Cooperation",
    "Counter-Terrorism Strategies",
    "Peacekeeping Operations",
    "Defense Technology and Innovation",
    "Maritime Security",
    "Border Security Management"
  ];

  const objectives = [
    "Strengthen military cooperation among African nations",
    "Develop joint strategies to address security challenges",
    "Share intelligence and best practices in defense",
    "Foster partnerships for peace and stability",
    "Enhance capacity building for defense institutions"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-dark mb-6 text-center">
              Welcome to the African Chiefs of Defense Staff Summit
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                The African Chiefs of Defense Staff (ACDS) Summit is a prestigious gathering of military leaders from across the African continent...
              </p>
              <p>
                The 2025 summit represents a significant opportunity for strengthening military diplomacy...
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Information Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-dark mb-12 text-center">
            Summit Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Info Cards */}
            {[{ icon: Calendar, title: "Date", detail: "July 9-11, 2025", sub: "Three days of collaboration and strategic dialogue" },
              { icon: MapPin, title: "Venue", detail: "Transcorp Hotel, Abuja", sub: "A premier venue in Nigeria's capital city" },
              { icon: Users, title: "Participants", detail: "Defense Staff Chiefs from 55 Countries", sub: "Representing all African nations" },
              { icon: Target, title: "Focus", detail: "Continental Security & Cooperation", sub: "Building a safer Africa through collaboration" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-yellow-500 text-black p-3 rounded-full mb-4">
                  <item.icon size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.detail}</p>
                <p className="text-gray-600 text-sm mt-2">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/event" className="inline-flex items-center text-navy-dark font-medium hover:text-navy transition-colors">
              Learn more about the event
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">
            Summit Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-24 bg-white">
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

      <Banner />
    </div>
  );
};

export default Index;
