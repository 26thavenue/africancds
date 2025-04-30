'use client'

import { Calendar, MapPin } from "lucide-react";
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative bg-primary/90 py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbGl0YXJ5fGVufDB8fDB8fHww')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            African Chiefs of <span className="text-gold-light">Defense Staff</span> Summit
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Strengthening Continental Security Cooperation and Defense Coordination
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center justify-center text-yellow-500">
              <Calendar size={20} className="mr-2" />
              <span>July 9-11, 2025</span>
            </div>
            <div className="flex items-center justify-center text-yellow-500">
              <MapPin size={20} className="mr-2" />
              <span>Transcorp Hotel, Abuja</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="bg-yellow-500  hover:bg-yellow-700 text-navy-dark font-medium px-8 py-3 rounded transition-colors"
            >
              Register Now
            </Link>
            <Link 
              href="/event" 
              className="border border-yellow-700 text-white hover:bg-yellow-700 font-medium px-8 py-3 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
