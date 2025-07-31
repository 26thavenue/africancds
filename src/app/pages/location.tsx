'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Car, Plane } from "lucide-react";
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VenueMap from '../components/VenueMap';

gsap.registerPlugin(ScrollTrigger)

const ImageSlider = () => {
  const containerRef = useRef(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const images = [
    "https://www.julius-berger.com/fileadmin/_processed_/9/c/csm_25.06.13_news_release_commissioning_of_bola_ahmed_tinubu_international_conference_centre_1_23315d7d6c.jpg",
    "https://www.julius-berger.com/fileadmin/_processed_/a/9/csm_25.06.13_news_release_commissioning_of_bola_ahmed_tinubu_international_conference_centre_2_5f30719d85.jpg",
    "https://www.julius-berger.com/fileadmin/_processed_/f/f/csm_25.06.13_news_release_commissioning_of_bola_ahmed_tinubu_international_conference_centre_790a022547.jpg",
    "https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2025/04/Transcorp_eventcenter-4-scaled.jpg?fit=2560%2C1707&ssl=1",
    "https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2024/08/ABUHI_1050-2.jpg?fit=1198%2C632&ssl=1",
    "https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2025/01/PANO0001-Edit-2-4-copy-scaled.jpg?fit=2048%2C2560&ssl=1",
  ]

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } })

    images.forEach((_, index) => {
      tl.to(containerRef.current, {
        x: -index * 340, 
        duration: 2,
      }, `+=2`) 
    })
  }, [])

 

  return (
    <div className=" overflow-hidden mx-auto relative">
      <div
        ref={containerRef}
        className="flex gap-4"
        style={{ width: `${images.length * 340}px` }}
      >
        {images.map((k, i) => (
          <div
            key={i}
           ref={(el) => {
              slideRefs.current[i] = el
            }}
            className="w-[100dvw] lg:w-[700px] h-[300px] lg:h-[500px] flex-shrink-0 overflow-hidden relative bg-green-50 rounded-xl"
            style={{
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <img loading="lazy" src={k} alt="Trnascorp Hotel" className="w-full h-full object-cover"/>
            
          </div>
        ))}
      </div>
    </div>
  )
}

const Venue = () => {
   const titleRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const sectionRefs = useRef<HTMLDivElement[]>([])
  sectionRefs.current = []

  const addToSectionRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  useEffect(() => {
    const titleWords = titleRef.current?.querySelectorAll('.word') || []
    const subtitleWords = subtitleRef.current?.querySelectorAll('.word') || []

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

    gsap.from(subtitleWords, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: 'top 80%',
      },
    })

    sectionRefs.current.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
      })
    })
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black min-h-[60vh] lg:min-h-[90vh]">
        <div
          className="absolute inset-0 bg-black/40 opacity-80"
          style={{
            backgroundImage: "url('/BolaAhmedCenter')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Navbar />
        <div className="relative z-10 flex flex-col justify-center items-center container mx-auto px-6 text-center min-h-[60vh] lg:min-h-[75vh]">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2"
          >
            {"Event Location".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">{word}</span>
            ))}
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-white max-w-4xl mx-auto flex flex-wrap justify-center gap-2"
          >
            {"Bola Ahmed Tinubu International Conference Centre, Abuja, Nigeria".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">{word}</span>
            ))}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div ref={addToSectionRefs} className="py-16 px-6 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
          Bola Ahmed Tinubu International Conference Centre
        </h2>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg lg:text-xl leading-relaxed">
            The Bola Ahmed Tinubu International Conference Centre (ICC), formerly known as the Abuja International Conference Centre, stands as Nigeria's premier venue for international conferences and diplomatic gatherings. Recently renovated and reopened by President Bola Ahmed Tinubu, this state-of-the-art facility represents the pinnacle of modern conference infrastructure in West Africa.
          </p>
          
          <p className="text-lg lg:text-xl leading-relaxed">
            Located in the heart of Abuja, Nigeria's federal capital, the Conference Centre has been transformed into a world-class venue that meets the highest international standards for diplomatic and military gatherings. As the host venue for the African Chiefs of Defence Summit 2025, it offers cutting-edge facilities including advanced audiovisual systems, simultaneous interpretation capabilities, and comprehensive security infrastructure.
          </p>
          
          <p className="text-lg lg:text-xl leading-relaxed">
            The Centre features multiple conference halls, including the main auditorium for plenary sessions, executive meeting rooms for bilateral discussions, and expansive exhibition spaces for technology displays and national delegations. Its strategic location in close proximity to government buildings, embassies, and international organizations makes it the ideal venue for this prestigious continental event.
          </p>
        </div>

        {/* Renovation Highlights */}
        <div className="bg-primary/15 p-8 rounded-xl mt-8 border-l-4 border-primary">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Recent Renovation Highlights</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Upgraded audiovisual and communication systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Enhanced security infrastructure and protocols</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Modernized conference facilities with international standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">•</span>
              <span>Improved accessibility and delegate comfort amenities</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Slider Section */}
      <div ref={addToSectionRefs} className="py-16 px-6">
        <ImageSlider />
      </div>

      {/* Getting to Venue Section */}
      <section ref={addToSectionRefs} className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Getting to the Venue
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* From Airport */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary p-4 rounded-full mr-4">
                  <Plane size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">From Airport</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>Distance: Approximately 40 km (25 miles)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Travel Time: 30-45 minutes depending on traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Official summit transportation provided for delegates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Taxis and ride-sharing services available</span>
                </li>
              </ul>
            </div>
            
            {/* By Car */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary p-4 rounded-full mr-4">
                  <Car size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">By Car</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>Located in central district of Abuja</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Accessible via major Abuja arterial roads</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Secure parking facilities for delegates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Enhanced security protocols for all vehicles</span>
                </li>
              </ul>
            </div>
            
            {/* Local Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary p-4 rounded-full mr-4">
                  <MapPin size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Local Information</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>5-10 minutes from major government buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Close to diplomatic zones and embassies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Dedicated shuttle services throughout summit</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Security escort available upon request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Abuja Section */}
      <section ref={addToSectionRefs} className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            About Abuja
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg lg:text-xl leading-relaxed">
                  As the capital city of Nigeria, Abuja is a planned modern city located in the center of the country. Designed in the 1980s and officially becoming Nigeria's capital in 1991, it represents one of Africa's most organized urban centers.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Abuja features a unique blend of modern architecture, carefully planned districts, and natural landscapes. The city is home to numerous government buildings, diplomatic missions, cultural landmarks, and business centers.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                  With its central location within Nigeria and excellent international connections through the Nnamdi Azikiwe International Airport, Abuja serves as an ideal host city for continental gatherings like the African Chiefs of Defence Summit.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Notable Landmarks Near the Venue</h3>
                <ul className="space-y-3 text-lg">
                  {[
                    'Aso Rock Presidential Villa',
                    'National Assembly Complex',
                    'Defence Headquarters',
                    'Abuja National Mosque',
                    'National Christian Centre'
                  ].map((landmark, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-48 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" 
                  alt="Abuja Cityscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3" 
                  alt="Abuja National Mosque" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-48 col-span-2 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
                  alt="Abuja Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <VenueMap />
    </main>
  )
}

export default Venue