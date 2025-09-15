import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "His Excellency Bello Matawalle",
    role: "Summit Speaker",
    feedback:
      "This summit is more than a meeting it is a bold statement of our collective commitment to build a safer stronger more United Africa",
    image:"/testimonials/Bello.jpg"
  },
  {
    name: "Vice President Kashmiri Shettima",
    role: "Summit Speaker",
    feedback:
      "This Summit, the first of its kind could not have happened at a better time",
    image:"/testimonials/VP.jpg"
  },
  {
    name: "Deputy Secretary General United Nations",
    role: "Keynote Speaker",
    feedback:
      "Strategic defence collaboration is not a slogan, it is the bridge between the threats we face today and the peace we promise tomorrow. I have seen the challenge. I have also seen what's possible when we find common ground. The outcomes of this week must be heard beyond this room.",
    image:"/testimonials/Deputy.jpg"
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-gray-100 w-full flex flex-col justify-center items-center mx-auto p-6 lg:p-24">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
        Testimonials From Participants, Sponsors and Exhibitors
      </h2>

      <div className="relative max-w-lg bg-white shadow-md rounded-2xl p-8 flex flex-col items-center">
        {testimonials[current].image ?  
        <div className=" rounded-full ">
          <img src={testimonials[current].image} alt={testimonials[current].name} className="w-24 h-24 rounded-full object-cover"/>
        </div> :
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-bold text-xl">
            {testimonials[current].name.split(' ').map(word => word[0]).slice(0, 2).join('')}
          </span>
        </div>
        }
        
        
        <div className="flex flex-col  px-4">
           <p className="text-gray-700 text-base lg:text-lg italic text-center mb-6 leading-relaxed">
              "{testimonials[current].feedback}"
            </p>
            
            <h3 className="font-semibold text-lg  lg:text-xl text-center mb-1">
              {testimonials[current].name}
            </h3>
            <span className="text-sm text-gray-500 text-center">
              {testimonials[current].role}
            </span>

        </div>

        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute  cursor-pointer  right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </div>
  )
}