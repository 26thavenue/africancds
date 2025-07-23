'use client'

import { CalendarDays} from "lucide-react"
import Banner from "../components/Banner"
import Link from "next/link"
import toast from "react-hot-toast"
import VenueMap from "../components/VenueMap"
import Navbar from "../components/Navbar"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Events = () => {
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


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/eventSchedule2.jpg"; 
    link.download = "eventSchedule2.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Event Schedule has been downloaded!");
  };
  return (
    <main className='mb-16 '>

      {/* Hero */}
      <div
      style={{
        backgroundImage: "url('/pattern2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }} 
      className="bg-primary  mb-16 min-h-[60dvh] lg:min-h-[90dvh] flex flex-col items-center justify-center">
        <Navbar/>
        <div className="flex-1 flex items-center justify-center text-center px-6 container mx-auto">
            <div className="container mx-auto px-6 text-center">
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2">
              {"Event Details".split(" ").map((word, i) => (
                <span key={i} className="word inline-block">
                  {word}
                </span>
              ))}
            </h1>
            <p ref={paragraphRef} className="text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto flex flex-wrap justify-center gap-2">
            {"Advancing Africa’s Security with Strategic Defence Procurement & Cooperation".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </p>
          </div>
        </div>
        
      </div>

      <section ref={addToRefs} className="px-8 lg:px-24">
          <div className=' h-[50dvh] lg:h-[90dvh] w-[80dvw] lg:w-[90dvw] mx-auto rounded-3xl '>
            <img src="/africancs.jpg" className="w-full h-full object-cover rounded-3xl"/>
        </div>


        <div className='my-8 flex flex-col gap-4'>
            <h4 className='text-base lg:text-lg text-gray-600'> Monday 25th  - Tuesday 27th August, 2025.</h4>
            <h1 className='text-2xl lg:text-5xl font-bold  text-[#0B3D2E]'>
                AFRICAN CHIEFS OF DEFENCE SUMMIT 2025
            </h1>
        </div>

        <div className="my-8 flex flex-col gap-4"> 
            {/* <h2 className="text-2xl font-bold">About this Event</h2> */}
            <div className="flex gap-4 items-center">
                <CalendarDays size={20} stroke="gray" className=" " />
                <p className="text-sm">Event Lasts for 3 days</p>
            </div>

            <p className="my-2 text-base lg:text-lg">
                 Get ready to connect and engage with Africa’s Defence Chiefs at the Africa Chiefs of Defence Summit to be held from 25-27th of August 2025 in Abuja, Nigeria. This landmark event marks a historic first-of-a-kind gathering that brings together Chiefs of Defence from across the continent and defence industry experts and contractors towards reshaping the future of defence procurement and cooperation in the region. This exclusive gathering will serve as an important platform for defence leaders to engage in high-level discussions on shared security challenges, exchange strategic insights, and strengthen regional and global cooperation.
            </p>

            <p className="my-2 text-base lg:text-lg">
                With growing security complexities in Africa, the summit aims to highlight latest advancements and innovations shaping defence landscape by providing a platform for international and regional defence solution providers to showcase modern equipment and technologies with the capabilities to support African defence forces in achieving their respective national security and defence objectives.
            </p>
        </div>

     

        <Link href="/register">
           <button className="px-12 py-4 bg-primary text-white rounded-md cursor-pointer hover:opacity-90 transition-opacity ">
              Register For Event
          </button>
        </Link>

        <button 
              onClick={handleDownload}
              className="border border-primary cursor-pointer  ml-0 my-3 lg:my-0 lg:ml-4 text-primary hover:bg-primary/20 font-medium px-10 py-3 rounded transition-colors"
            >
              Download Schedule
        </button>
       
      </section>

       <section ref={addToRefs} className="py-16 bg-gray-100 mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-10 text-center">
            Summit Schedule
          </h2>
           <div className="max-w-4xl mx-auto space-y-8 ">
             <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className=" text-base lg:text-xl font-semibold text-yellow-500 ">Arrival - August 24th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex ">
                  <div className=" flex-shrink-0 text-primary font-semibold w-48">
                    05:00 AM - 5:00 PM
                  </div>
                  <div>
                    
                    <p className="text-gray-600 ">Arrival/Reception/Registration/Check in </p>
                  </div>
                </div>
                <div className="flex ">
                  <div className=" flex-shrink-0 text-primary font-semibold w-48">
                    7:00 PM - 8:00 PM
                  </div>
                  <div>
                   
                    <p className="text-gray-600 ">Cocktail</p>
                  </div>
                </div>
                
                
        
              </div>
            </div>
            {/* Day 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className=" text-base lg:text-xl font-semibold text-yellow-500 ">Day 1 - August 25th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      08:00 AM – 09:30 AM
    </div>
    <div>
      <p className="text-gray-600">Registration of Attendees</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      09:30 AM – 10:00 AM
    </div>
    <div>
      <p className="text-gray-600">Arrival of Special Guests/VIPs</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:00 AM – 10:05 AM
    </div>
    <div>
      <p className="text-gray-600">Arrival of Special Guest of Honour</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:05 AM – 10:10 AM
    </div>
    <div>
      <p className="text-gray-600">National Anthem</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:10 AM – 10:15 AM
    </div>
    <div>
      <p className="text-gray-600">AU Anthem</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:15 AM – 10:20 AM
    </div>
    <div>
      <p className="text-gray-600">Safety and Venue Orientation Brief</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:20 AM – 10:35 AM
    </div>
    <div>
      <p className="text-gray-600">Welcome Address by the CDS</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:35 AM – 10:55 AM
    </div>
    <div>
      <p className="text-gray-600">Goodwill Messages</p>
      
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      10:55 AM – 11:10 AM
    </div>
    <div>
      <p className="text-gray-600">Keynote Address</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      11:10 AM – 11:35 AM
    </div>
    <div>
      <p className="text-gray-600">Opening Remarks by the C-in-C (SGOH)</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      11:35 AM – 11:50 AM
    </div>
    <div>
      <p className="text-gray-600">Presentation of Souvenirs</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      11:50 AM – 12:05 PM
    </div>
    <div>
      <p className="text-gray-600">Group Photograph/ Tea Break</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      12:05 PM – 01:30 PM
    </div>
    <div>
      <p className="text-gray-600">Tour of Exhibition Stands by SGOH & Guests</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      01:30 PM – 02:30 PM
    </div>
    <div>
      <p className="text-gray-600">Lunch</p>
    </div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">02:30 PM – 04:35 PM</div>
    <div><p className="text-gray-600">First Plenary Session</p></div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">04:35 PM – 04:50 PM</div>
    <div><p className="text-gray-600">Closing of Plenary (Presentation of Souvenirs)</p></div>
  </div>

  <div className="flex ">
    <div className="flex-shrink-0 text-primary font-semibold w-48">04:50 PM – 06:00 PM</div>
    <div><p className="text-gray-600">Exhibition Continues</p></div>
  </div>


            </div>

            </div>
            
            {/* Day 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className="text-base lg:text-xl font-semibold text-yellow-500 ">Day 2 - August 26th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      9:00 AM - 9:10 AM
    </div>
    <div>
      <p className="text-gray-600">Highlight of the Day’s Activities</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      9:10 AM - 11:00 AM
    </div>
    <div>
      <p className="text-gray-600">Second Plenary</p>
      
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      11:00 AM - 11:30 AM
    </div>
    <div>
      <p className="text-gray-600">Business Roundtable</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      11:30 AM - 12:00 PM
    </div>
    <div>
      <p className="text-gray-600">Tea Break</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      12:00 PM - 1:50 PM
    </div>
    <div>
      <p className="text-gray-600">Third Plenary</p>
      
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      1:50 PM - 2:00 PM
    </div>
    <div>
      <p className="text-gray-600">Closing of Plenary (Presentation of Souvenirs)</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      2:00 PM - 3:00 PM
    </div>
    <div>
      <p className="text-gray-600">Lunch</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      3:00 PM - 4:00 PM
    </div>
    <div>
      <p className="text-gray-600">Exhibition / Business Meetings / CDS’ Closed Door Session</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      5:00 PM - 6:30 PM
    </div>
    <div>
      <p className="text-gray-600">Bus Tour of Abuja//Exhibition Continues</p>
    </div>
  </div>
</div>

            </div>
            
            {/* Day 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500 mr-2" />
                  <h3 className="text-base lg:text-xl font-semibold text-yellow-500 ">Day 3 - August 27th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      09:00 AM - 09:10 AM
    </div>
    <div>
      <p className="text-gray-600">Highlight of the Day’s Activities</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      09:10 AM - 11:00 AM
    </div>
    <div>
      <p className="text-gray-600">Fourth Plenary Session</p>
      
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      11:00 AM - 12:00 PM
    </div>
    <div>
      <p className="text-gray-600">Tea Break</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      12:00 PM - 1:50 PM
    </div>
    <div>
      <p className="text-gray-600">Fifth Plenary Session</p>
     
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      1:50 PM - 2:00 PM
    </div>
    <div>
      <p className="text-gray-600">Closing of Plenary (Presentation of Souvenirs)</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      2:00 PM - 3:00 PM
    </div>
    <div>
      <p className="text-gray-600">Lunch</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      3:00 PM - 3:20 PM
    </div>
    <div>
      <p className="text-gray-600">Presentation of Communique</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      3:20 PM - 3:35 PM
    </div>
    <div>
      <p className="text-gray-600">Closing Remarks</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      3:35 PM - 7:00 PM
    </div>
    <div>
      <p className="text-gray-600">Private Time</p>
    </div>
  </div>

  <div className="flex">
    <div className="flex-shrink-0 text-primary font-semibold w-48">
      7:00 PM
    </div>
    <div>
      <p className="text-gray-600">Dinner</p>
    </div>
  </div>
</div>

            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className=" text-base lg:text-xl font-semibold text-yellow-500 ">Day 4 - August 28th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex ">
                  <div className=" flex-shrink-0 text-primary font-semibold w-48">
                    07:00 AM - 23:59 PM
                  </div>
                  <div>
                    
                    <p className="text-gray-600 ">Departure </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
         
          
        </div>
      </section>
      
      
      
      {/* CDS Statement */}
      <section
        ref={addToRefs}
        style={{
        backgroundImage: "url('/pattern2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto"
      }} 
       className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-10 text-center">
            Statement from the Chief of Defence Staff
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-[url('https://africacdssummit.com/wp-content/uploads/2025/03/image006.png')] bg-cover bg-center"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  General Christopher Gwabin Musa
                </h3>
                <p className="text-gray-600 mb-0 lg:mb-4">Chief of Defence Staff, Federal Republic of Nigeria</p>
                {/* <p className="text-navy">
                  Statement on the Inauguration of the Planning Committee for the African Chiefs of Defence Staff Summit 2025
                </p> */}
              </div>
            </div>
            
            <div className="prose max-w-none text-black">
              <p className="mb-4">
                Distinguished colleagues, esteemed officers, and members of the Planning Committee,
              </p>
              <p className="mb-4">
                It is with great honor and a profound sense of responsibility that I address you today at the inauguration of the Planning Committee for the upcoming African Chiefs of Defence Staff Summit 2025. This summit represents a pivotal moment for our continent's collective security architecture.
              </p>
              <p className="mb-4">
                Africa faces unique security challenges that transcend national borders. From transnational terrorism to maritime insecurity, from ethnic conflicts to climate-induced crises, the threats to our people's safety and wellbeing demand a unified and coordinated response. No single nation, regardless of its military strength or economic resources, can effectively address these challenges in isolation.
              </p>
              {/* <p className="mb-4">
                The African Chiefs of Defence Staff Summit is conceived as a platform where we, as military leaders responsible for our nations' defence, can forge stronger bonds of cooperation, share critical intelligence, develop joint capability frameworks, and harmonize our strategic approaches to continental security.
              </p> */}
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


      <VenueMap/>

      <Banner/>


        
        
    </main>
  )
}

export default Events