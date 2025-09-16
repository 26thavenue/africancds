'use client'
import Banner from "../components/Banner";
import VenueMap from "../components/VenueMap"
import Navbar from "../components/Navbar";
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoComponent from "../components/VideoComponent";
import ImageCarousel from "../components/ImageCarousel";
import newsData from "../lib/news";

gsap.registerPlugin(ScrollTrigger)

const GALA_CONST = 'acdss-gala-night-2025'
const COMMENCEMENT_CONST = 'acdss-commencement-2025'


const Gallery = () => {

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const filterRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)
  
  // Gallery section refs for carousel containers
  const preEventCarouselRef = useRef<HTMLDivElement | null>(null)
  const commencementCarouselRef = useRef<HTMLDivElement | null>(null)
  const galaCarouselRef = useRef<HTMLDivElement | null>(null)

  const newImagesArr = newsData.filter(
    (item) => item.id !== GALA_CONST && item.id !== COMMENCEMENT_CONST
  );

  const galaNightImagesArr = newsData.find((item) => item.id == GALA_CONST)
  const commencementImagesArr = newsData.find((item) => item.id == COMMENCEMENT_CONST)

  // Flatten the pre-event images array
  const preEventImages = newImagesArr.flatMap(item => item.images || []);

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

    gsap.from(filterRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: filterRef.current,
        start: 'top 85%',
      },
    })

    gsap.from(galleryRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: galleryRef.current,
        start: 'top 85%',
      },
    })

    // Carousel section animations
    gsap.from(preEventCarouselRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: preEventCarouselRef.current,
        start: 'top 85%',
      },
    })

    gsap.from(commencementCarouselRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: commencementCarouselRef.current,
        start: 'top 85%',
      },
    })

    gsap.from(galaCarouselRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: galaCarouselRef.current,
        start: 'top 85%',
      },
    })

  }, [])

  return (
    <div className="min-h-screen flex flex-col max-w-screen">
      {/* Hero Section */}
      <div style={{
          backgroundImage: "url('/pic1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="bg-[#0B3D2E] relative w-full min-h-[90dvh] mx-auto rounded flex flex-col">
           <div className="absolute inset-0 bg-black/10  z-0"></div>
           <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 container mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-2"
          >
            {"Summit Gallery".split(" ").map((word, i) => (
              <span key={i} className="word inline-block">
                {word}
              </span>
            ))}
          </h1>
         <p
        ref={paragraphRef}
        className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto flex flex-wrap justify-center gap-2"
      >
        {"Experience the Event Story in Pictures and Highlights".split(" ").map((word, i) => (
          <span key={i} className="word inline-block">
            {word}
          </span>
        ))}
      </p>

        </div>
      </div>
      
      
      
      {/* Gallery Carousels Section */}
      <section className="py-8 flex flex-col items-center w-full bg-white">
        
        {/* Pre Event Carousel */}
        <div ref={preEventCarouselRef} className="w-full mb-10 lg:mb-24">
          <ImageCarousel
            images={preEventImages}
            title="Preparations for the Event"
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
          />
        </div>

        {/* Commencement Carousel */}
        <div ref={commencementCarouselRef} className="w-full mb-10 lg:mb-24">
          <ImageCarousel
            images={commencementImagesArr?.images || []}
            title="Commencement of the African Chief of Defence Event"
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          />
        </div>

        {/* Gala Night Carousel */}
        <div ref={galaCarouselRef} className="w-full mb-10 lg:mb-24">
          <ImageCarousel
            images={galaNightImagesArr?.images || []}
            title="Images from Our Gala Night"
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          />
        </div>

      </section>
      
      <VenueMap/>
      <Banner/>
    </div>
  );
};

export default Gallery;