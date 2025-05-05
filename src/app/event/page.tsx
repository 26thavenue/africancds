'use client'

import { CalendarDays} from "lucide-react"
import Banner from "../components/Banner"
import Link from "next/link"
import toast from "react-hot-toast"
import VenueMap from "../components/VenueMap"

const Events = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/eventSchedule.pdf"; 
    link.download = "eventSchedule.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Event Schedule has been downloaded!");
  };
  return (
    <main className='mb-16 '>

      <div className="bg-primary py-16 md:py-24 mb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event <span className="text-gold-light">Details</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advancing Africa’s Security with Strategic Defence Procurement & Cooperation
          </p>
           
        </div>
      </div>

      <section className="px-8 lg:px-24">
          <div className=' h-[90dvh] w-[90dvw] mx-auto rounded-3xl '>
            <img src="/africancs.jpg" className="w-full h-full object-cover rounded-3xl"/>
        </div>


        <div className='my-8 flex flex-col gap-4'>
            <h4 className='text-lg text-gray-600'> Sunday 25th  - Tuesday 27th August, 2025.</h4>
            <h1 className='text-5xl font-bold  text-[#0B3D2E]'>
                AFRICAN CHIEFS OF DEFENSE CONFERENCE 2024
            </h1>
        </div>

        <div className="my-8 flex flex-col gap-4"> 
            {/* <h2 className="text-2xl font-bold">About this Event</h2> */}
            <div className="flex gap-4 items-center">
                <CalendarDays size={20} stroke="gray" className=" " />
                <p className="text-sm">Event Lasts for 3 days</p>
            </div>

            <p className="my-2 text-lg">
                 Get ready to connect and engage with Africa’s Defence Chiefs at the Africa Chiefs of Defence Summit to be held from 18-19th June 2025 in Abuja, Nigeria. This landmark event marks a historic first-of-a-kind gathering that brings together Chiefs of Defence from across the continent and defence industry experts and contractors towards reshaping the future of defence procurement and cooperation in the region. This exclusive gathering will serve as an important platform for defence leaders to engage in high-level discussions on shared security challenges, exchange strategic insights, and strengthen regional and global cooperation.
            </p>

            <p className="my-2 text-lg">
                With growing security complexities in Africa, the summit aims to highlight latest advancements and innovations shaping defense landscape by providing a platform for international and regional defence solution providers to showcase modern equipment and technologies with the capabilities to support African defence forces in achieving their respective national security and defence objectives.
            </p>
        </div>

     

        <Link href="/register">
           <button className="px-12 py-4 bg-primary text-white rounded-md cursor-pointer hover:opacity-90 transition-opacity ">
              Register For Event
          </button>
        </Link>

        <button 
              onClick={handleDownload}
              className="border border-primary cursor-pointer  ml-4 text-primary hover:bg-primary/40 font-medium px-8 py-3 rounded transition-colors"
            >
              Download Schedule
        </button>
       
      </section>

       <section className="py-16 bg-white mt-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            Summit Schedule
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 ">
            {/* Day 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className="text-xl font-semibold text-yellow-500 ">Day 1 - August 25th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    08:00 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Registration and Welcome</p>
                    <p className="text-gray-600 text-sm">Transcorp Hotel Main Hall</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    09:30 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Opening Ceremony</p>
                    <p className="text-gray-600 text-sm">Presidential Address and Keynote Speeches</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    12:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lunch Break</p>
                    <p className="text-gray-600 text-sm">Networking Opportunity</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    02:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Plenary Session: Regional Security Challenges</p>
                    <p className="text-gray-600 text-sm">Panel Discussion with Regional Representatives</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    05:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Welcome Reception</p>
                    <p className="text-gray-600 text-sm">Hosted by the Chief of Defense Staff</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Day 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className="text-xl font-semibold text-yellow-500 ">Day 2 - August 26th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    09:00 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Thematic Workshops (Parallel Sessions)</p>
                    <p className="text-gray-600 text-sm">Counter-Terrorism, Peacekeeping, Maritime Security</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    12:30 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lunch Break</p>
                    <p className="text-gray-600 text-sm">Regional Coordination Meetings</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    02:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Technology Exhibition</p>
                    <p className="text-gray-600 text-sm">Defense Innovation Showcase</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    04:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Strategic Planning Session</p>
                    <p className="text-gray-600 text-sm">Continental Defense Coordination</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    07:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Gala Dinner</p>
                    <p className="text-gray-600 text-sm">Cultural Performances and Networking</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Day 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-yellow-500 ">Day 3 - August 27th, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    09:00 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Final Plenary Session</p>
                    <p className="text-gray-600 text-sm">Summary of Workshops and Recommendations</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    11:30 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Adoption of Summit Declaration</p>
                    <p className="text-gray-600 text-sm">Official Communiqué</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    12:30 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lunch Break</p>
                    <p className="text-gray-600 text-sm">Networking Opportunity</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    02:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Closing Ceremony</p>
                    <p className="text-gray-600 text-sm">Remarks and Next Steps</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    04:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Press Conference</p>
                    <p className="text-gray-600 text-sm">Summit Outcomes and Achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* CDS Statement */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-10 text-center">
            Statement from the Chief of Defense Staff
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-[url('https://africacdssummit.com/wp-content/uploads/2025/03/image006.png')] bg-cover bg-center"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  General Christopher Musa
                </h3>
                <p className="text-gray-600 mb-4">Chief of Defense Staff, Federal Republic of Nigeria</p>
                <p className="text-navy">
                  Statement on the Inauguration of the Planning Committee for the African Chiefs of Defense Staff Summit 2025
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Distinguished colleagues, esteemed officers, and members of the Planning Committee,
              </p>
              <p className="mb-4">
                It is with great honor and a profound sense of responsibility that I address you today at the inauguration of the Planning Committee for the upcoming African Chiefs of Defense Staff Summit 2025. This summit represents a pivotal moment for our continent's collective security architecture.
              </p>
              <p className="mb-4">
                Africa faces unique security challenges that transcend national borders. From transnational terrorism to maritime insecurity, from ethnic conflicts to climate-induced crises, the threats to our people's safety and wellbeing demand a unified and coordinated response. No single nation, regardless of its military strength or economic resources, can effectively address these challenges in isolation.
              </p>
              <p className="mb-4">
                The African Chiefs of Defense Staff Summit is conceived as a platform where we, as military leaders responsible for our nations' defense, can forge stronger bonds of cooperation, share critical intelligence, develop joint capability frameworks, and harmonize our strategic approaches to continental security.
              </p>
              <p className="mb-4">
                To the distinguished members of the Planning Committee, I charge you with the important task of organizing a summit that will not merely be a gathering of military officials, but a transformative event that produces tangible outcomes for Africa's security landscape. I have full confidence in your abilities to deliver on this mandate.
              </p>
              <p>
                Together, we shall work towards a more secure Africa, where peace enables prosperity, and where our defense institutions serve as pillars of stability for generations to come.
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