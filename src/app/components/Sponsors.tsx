import React from 'react'

const Sponsors = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-12 text-center">
            Our Sponsors 
            </h2>
            
            {/* Partner Categories */}
            <div className="space-y-12">


      {/* Supporting Organizations */}
      <div className="text-center">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "African Business Roundtable", imageUrl: "AfricanBusinessRoundtable.jpg" },
            { name: "Nigerian Air Force", imageUrl: "NAirforce2.jpg" },
            { name: "Nigerian Army", imageUrl: "NigerianArmy2.jpg" },
            { name: "Nigerian Navy", imageUrl: "NigerianNavy.jpg" },
            { name: "ECOWAS", imageUrl: "ECOWAS.png" },
            { name: "African Union", imageUrl: "AfricanUnion.svg" },
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

export default Sponsors
