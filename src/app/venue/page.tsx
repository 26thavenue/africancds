'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MapPin, Car, Plane } from "lucide-react";
import Banner from '../components/Banner';



const ImageSlider = () => {
  const containerRef = useRef(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const images=[
    "https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2022/12/HHC_6876.jpg?fit=1500%2C1001&amp;ssl=1",
    "https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2021/05/ABUHI_0317.jpg?fit=1199%2C786&ssl=1",
    "https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2025/04/IMG_7487.jpeg?fit=1170%2C821&ssl=1",
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
  return (
    <main className=''>
       <div className="bg-primary py-16 md:py-24 mb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Event <span className="text-gold-light">Location</span>
          </h1>
          <p className="text-l lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Transcorp Hilton Hotel, Abuja, Nigeria
          </p>
        </div>
      </div>

          <img 
              className="h-[400px] lg:h-[70dvh] w-[90dvw] mx-auto rounded-3xl object-cover"
              loading="lazy" 
              src="https://i0.wp.com/www.transcorphotels.com/wp-content/uploads/2022/12/HHC_6876.jpg?fit=1500%2C1001&amp;ssl=1"  alt="" />
       
         <div className="my-16 px-8 lg:px-24 ">
            <h2 className="text-3xl font-bold mb-4">Transcorp Hotels</h2>
      <p className="mb-6">
        Transcorp Hotels Plc is one of Nigeria’s leading hospitality companies, known for delivering
        excellent guest experiences and world-class service. It is a subsidiary of Transnational Corporation
        of Nigeria (Transcorp) and operates premium hotels that cater to both business and leisure travelers.
      </p>
      <p className="mb-6">
        The Transcorp Hilton Hotel in Abuja stands as one of Nigeria's premier luxury hotels and a landmark in the capital city. As the host venue for the African Chiefs of Defense Staff Summit 2025, it offers world-class facilities that meet international standards for high-level diplomatic and military gatherings.

Located in the heart of Nigeria's federal capital territory, the hotel is situated in close proximity to key government buildings, embassies, and international organizations, making it an ideal venue for this prestigious continental event.

The summit will utilize the hotel's extensive conference facilities, including the Congress Hall for plenary sessions, multiple executive meeting rooms for breakout discussions, and expansive exhibition spaces for technology displays and national delegations.
      </p>

     

      <p className="mt-6">
        Transcorp Hotels is committed to redefining hospitality in Africa through innovation, sustainability,
        and guest satisfaction.
      </p>
        </div>

        <div className="my-8">
            <ImageSlider/>
        </div>

        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
            Getting to the Venue
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* From Airport */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-light p-3 rounded-full mr-4">
                  <Plane size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark">From Nnamdi Azikiwe International Airport</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>Distance: Approximately 40 km (25 miles)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Travel Time: About 30-45 minutes depending on traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Official summit transportation will be provided for delegates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Taxis and ride-sharing services are also available</span>
                </li>
              </ul>
            </div>
            
            {/* By Car */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-light p-3 rounded-full mr-4">
                  <Car size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark">By Car</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>Located in the central district of Abuja</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Accessible via Aguiyi Ironsi Street</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Complimentary parking available for summit delegates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Security protocols will be in place for all vehicles</span>
                </li>
              </ul>
            </div>
            
            {/* Local Transportation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-light p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark">Local Information</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>5-10 minutes from major government buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Close to diplomatic zones and embassies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Shuttle services available throughout the summit</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Security escort available for officials upon request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white p-8 lg:px-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
            About Abuja
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  As the capital city of Nigeria, Abuja is a planned modern city located in the center of the country. Designed in the 1980s and officially becoming Nigeria's capital in 1991, it represents one of Africa's most organized urban centers.
                </p>
                <p className="mb-4">
                  Abuja features a unique blend of modern architecture, carefully planned districts, and natural landscapes. The city is home to numerous government buildings, diplomatic missions, cultural landmarks, and business centers.
                </p>
                <p>
                  With its central location within Nigeria and excellent international connections through the Nnamdi Azikiwe International Airport, Abuja serves as an ideal host city for continental gatherings like the African Chiefs of Defense Staff Summit.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-navy-dark mb-4">Notable Landmarks Near the Venue</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Aso Rock Presidential Villa
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    National Assembly Complex
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Defense Headquarters
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Abuja National Mosque
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    National Christian Centre
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" 
                  alt="Abuja Cityscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3" 
                  alt="Abuja National Mosque" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
                  alt="Abuja Cityscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Banner/>

       

    </main>
  )
}

export default Venue