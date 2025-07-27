'use client'

import Banner from "../components/Banner";
import VenueMap from "../components/VenueMap"
import Navbar from "../components/Navbar";
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Consultants = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const consultantsRef = useRef<HTMLDivElement | null>(null)

  const consultantsData = [
    {
      id: 1,
      title: "Levmora Energy Consulting",
      description: "Levmora is an energy consulting firm offering strategic solutions for acquisitions and optimizing business operations. The Consulting firm was founded to bridge stakeholder gaps and deliver quality interactions that help our clients businesses grow and develop new assets or horizons. With incredible access to decision makers across the entire energy value chain, including government, regulators, international oil, energy and service companies and indigenous energy players.",
      logo: "https://levmoraservices.com/wp-content/uploads/2022/05/levmora.png",
      website: "https://levmoraservices.com",
    
    },
    {
      id: 2,
      title: "Emerging Africa Group",
      description: "We are the parent company to a Pan-African investments and financial services group established to bridge Africa's access to finance gap. We want to grow Africa's economies through Environmental, Social and Governance focused financing and investing solutions, leveraging talent, innovation and collaboration.",
      logo: "https://emergingafricagroup.com/wp-content/uploads/2022/07/logo.png",
      website: "https://emergingafricagroup.com",
    
    },
    {
      id: 3,
      title: "Mediaczars Limited",
      description: "Mediczars is a dynamic media consulting firm known for helping brands thrive across digital, broadcast, and social platforms. With a strategic focus on communication, content creation, and audience engagement, Mediczars delivers measurable impact through a blend of creativity, data-driven insight, and cultural awareness. Whether it’s launching a campaign or enhancing digital presence, Mediczars brings the expertise needed to navigate today’s fast-evolving media landscape. As a trusted partner, they play a key role in amplifying brand visibility and ensuring media success.",
      logo: "Mediaczars.jpg",
     
      email: "mediaczars@gmail.com",
      phone: "+2348053257319"
    }
  ];

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

    gsap.from(consultantsRef.current?.children || [], {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: consultantsRef.current,
        start: 'top 85%',
      },
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div style={{
          backgroundImage: "url('https://www.elgor.org/wp-content/uploads/2022/05/consult1.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="bg-[#0B3D2E] relative w-full min-h-[90dvh] mx-auto rounded flex flex-col">
           <div className="absolute inset-0 bg-black/70 z-0"></div>
           <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 container mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2"
          >
            {"Our Consultants".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </h1>
         <p
        ref={paragraphRef}
        className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto flex flex-wrap justify-center gap-2"
      >
        {"Strategic partners delivering expert solutions across energy and financial services".split(" ").map((word, i) => (
          <span key={i} className="word inline-block">
            {word}
          </span>
        ))}
      </p>
        </div>
      </div>

      <div className="mx-auto">
         <p className=" mt-3 p-6 lg:p-12 lg:max-w-7xl text-base  lg:text-2xl lg:leading-10 text-center">
        Each firm featured here plays a pivotal role in shaping outcomes, driving innovation, and helping us solve complex challenges with clarity and confidence. Their contribution goes beyond routine consulting; they serve as trusted partners committed to excellence, collaboration, and impact. By leveraging their diverse industry knowledge and proven methodologies, we’re able to deliver results that truly matter. Explore the companies below and discover the experts working behind the scenes to help us achieve our goals.
      </p>
      
      </div>

     
      {/* Consultants Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-6">
          <div 
            
            className="flex items-center justify-center flex-col gap-12 max-w-3xl mx-auto"
          >
            {consultantsData.map((consultant) => (
              <div 
                key={consultant.id} 
                className="bg-white rounded-2xl overflow-hidden  transition-all duration-300 border border-gray-100"
              >
                {/* Logo Section */}
                
                <div className="bg-gray-50 p-8 text-center border-b">
                  <div className="w-48 h-24 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={consultant.logo} 
                      alt={`${consultant.title} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                    {consultant.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                    {consultant.description}
                  </p>

                  {/* Contact Information */}
                 <div className="space-y-4 mb-8">
  {/* Website */}
  {consultant?.website && (
    <div className="flex items-center text-gray-600">
      <svg className="w-5 h-5 mr-3 text-[#0B3D2E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
      </svg>
      <a 
        href={consultant.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-[#0B3D2E] transition-colors"
      >
        {consultant.website.replace('https://', '')}
      </a>
    </div>
  )}

  {/* Email */}
  {consultant?.email && (
    <div className="flex items-center text-gray-600">
      <svg className="w-5 h-5 mr-3 text-[#0B3D2E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
      <a href={`mailto:${consultant.email}`} className="hover:text-[#0B3D2E] transition-colors">
        {consultant.email}
      </a>
    </div>
  )}

  {/* Phone */}
  {consultant?.phone && (
    <div className="flex items-center text-gray-600">
      <svg className="w-5 h-5 mr-3 text-[#0B3D2E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
      <a href={`tel:${consultant.phone}`} className="hover:text-[#0B3D2E] transition-colors">
        {consultant.phone}
      </a>
    </div>
  )}
</div>

{/* Visit Website Button */}
{consultant?.website && (
  <a
    href={consultant.website}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-[#0B3D2E] hover:bg-[#1a5a47] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-center block"
  >
    Visit Website
  </a>
)}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <VenueMap/>
      <Banner/>
    </div>
  );
};

export default Consultants;