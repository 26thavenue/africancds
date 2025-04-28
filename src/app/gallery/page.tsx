'use client'

import { useState } from "react";
import Banner from "../components/Banner";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryImages = [
    {
      id: 1,
      category: "officials",
      title: "Chief of Defense Staff - Nigeria",
      subtitle: "General Samuel Olatunde",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      country: "Nigeria"
    },
    {
      id: 2,
      category: "officials",
      title: "Chief of Defense Staff - Ghana",
      subtitle: "Vice Admiral Seth Amoama",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      country: "Ghana"
    },
    {
      id: 3,
      category: "officials",
      title: "Chief of Defense Staff - South Africa",
      subtitle: "General Rudzani Maphwanya",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      country: "South Africa"
    },
    {
      id: 4,
      category: "officials",
      title: "Chief of Defense Staff - Egypt",
      subtitle: "General Mohammed Zaki",
      imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
      country: "Egypt"
    },
    {
      id: 5,
      category: "officials",
      title: "Chief of Defense Staff - Kenya",
      subtitle: "General Robert Kibochi",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      country: "Kenya"
    },
    {
      id: 6,
      category: "officials",
      title: "Chief of Defense Staff - Algeria",
      subtitle: "General Said Chengriha",
      imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919",
      country: "Algeria"
    },
    {
      id: 7,
      category: "venues",
      title: "Transcorp Hotel - Exterior",
      subtitle: "Summit Venue",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 8,
      category: "venues",
      title: "Main Conference Hall",
      subtitle: "Plenary Sessions Venue",
      imageUrl: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
    },
    {
      id: 9,
      category: "venues",
      title: "Exhibition Area",
      subtitle: "Defense Technology Showcase",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      id: 10,
      category: "planning",
      title: "Planning Committee Meeting",
      subtitle: "Inaugural Session",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    },
    {
      id: 11,
      category: "planning",
      title: "Site Inspection",
      subtitle: "Venue Preparation",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
      id: 12,
      category: "planning",
      title: "Press Conference",
      subtitle: "Summit Announcement",
      imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
    }
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="bg-[#0B3D2E] py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Summit <span className="text-gold-light">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the Defense Staff Chiefs and explore summit preparations
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
                  ? "bg-[#0B3D2E] text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              All Photos
            </button>
            <button 
              onClick={() => setActiveCategory("officials")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "officials" 
                  ? "bg-[#0B3D2E] text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Defense Staff Chiefs
            </button>
            <button 
              onClick={() => setActiveCategory("venues")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "venues" 
                  ? "bg-[#0B3D2E] text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Venue
            </button>
            <button 
              onClick={() => setActiveCategory("planning")}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === "planning" 
                  ? "bg-[#0B3D2E] text-white" 
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
                    src={image.imageUrl} 
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
      
     
      
     <Banner/>
    </div>
  );
};

export default Gallery;