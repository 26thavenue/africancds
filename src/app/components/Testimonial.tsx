import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Event Participant",
    feedback:
      "The summit was an incredible experience! The sessions were insightful and the networking opportunities were amazing.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Panel Speaker",
    feedback:
      "I loved being part of the event. The organization was top-notch and the audience engagement was outstanding.",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Michael Lee",
    role: "Guest",
    feedback:
      "From start to finish, everything was seamless. The gala night was truly memorable.",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
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
    <div className=" bg-gray-100 w-full flex flex-col justify-center items-center  mx-auto p-6  lg:p-24">
      <h1 className="text-2xl lg:text-5xl font-bold text-center mb-8 ">
        Testimonials From Participants, Sposnors and Exhibitors
      </h1>

      <div className="relative max-w-2xl bg-white   shadow-md rounded-2xl p-8 flex flex-col items-center">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <p className="text-gray-700 w-lg italic text-center mb-4">
          “{testimonials[current].feedback}”
        </p>
        <h3 className="font-semibold">{testimonials[current].name}</h3>
        <span className="text-sm text-gray-500">
          {testimonials[current].role}
        </span>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </div>
  )
}
