import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Consultants = () => {

   const sectionsRef = useRef<HTMLDivElement[]>([])
  sectionsRef.current = [] 

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  useEffect(() => {
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


  const featuredConsultants = [
    {
        "id": 1,
        "name":"Lemorva Services",
        "icon":"https://levmoraservices.com/wp-content/uploads/2022/05/levmora.png",
        "specialty":"Sponsorhsip and Exhibition Consultants",
        "shortDesc":""
    },
    {
        "id": 2,
        "name":"Mediaczars Limited",
        "icon":"Mediaczars.jpg",
        "specialty":"Media Consultant",
        "shortDesc":""
    },
    {
        "id": 3,
        "name":"Emerging Africa Group",
        "icon":"https://emergingafricagroup.com/wp-content/uploads/2022/07/logo.png",
        "specialty":"Fianancial and Partnership Advisors",
        "shortDesc":""
    }
  ]

  return (
    <div>
        <section ref={addToRefs} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Our Consultants
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the esteemed consulting firms partnering with us to deliver strategic guidance and ensure the program’s success
          </p>
        </div>

        {/* Featured Consultants Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredConsultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white rounded-xl p-8 shadow-xs border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center">
                <img src={consultant.icon} alt={consultant.name} className="w-20 h-20 bg-white object-cover rounded-full   mb-6 mx-auto"/>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {consultant.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-4">
                  {consultant.specialty}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {consultant.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center">
          <button
            // onClick={onViewAll}
            className="inline-flex items-center px-8 py-4 bg-primary cursor-pointer text-white font-semibold rounded-full hover:bg-primary/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Consultants
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div> */}
      </div>
    </section>
    </div>
  )
}

export default Consultants
