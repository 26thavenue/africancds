import React from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Partners = () => {
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


  return (
    <section ref={addToRefs} className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            These valued partners are committed to advancing the goals of our initiative. Their expertise and support make meaningful change possible.
          </p>
        </div>
            {/* Partner Categories */}
          <div className="space-y-12">


      {/* Supporting Organizations */}
      <div className="text-center">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "African Union", imageUrl: "AfricanUnion.svg" },
            { name: "ECOWAS", imageUrl: "ECOWAS.png" },
            { name: "African Business Roundtable", imageUrl: "AfricanBusinessRoundtable.jpg" },
            { name: "Nigerian Army", imageUrl: "NigerianArmy2.jpg" },
            { name: "Nigerian Navy", imageUrl: "NigerianNavy.jpg" },
            { name: "Nigerian Air Force", imageUrl: "NAirforce2.jpg" },
           
          
      
          ].map((partner, index) => (
            <div key={index} className="bg-white  p-6 rounded-lg hover:shadow-md transition-shadow flex items-center justify-center flex-col">
              <div className="w-32 h-32 lg:w-64 lg:h-64 rounded mb-4 flex items-center justify-center">
                <img src={partner.imageUrl || "/placeholder.png"} alt={partner.name} className=" w-24 h-24 lg:h-48 lg:w-48 object-contain " />
              </div>
              <h4 className="font-semibold text-sm lg:text-lg text-primary mb-1">{partner.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</section>
  )
}

export default Partners
