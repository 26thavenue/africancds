'use client'
import Banner from "../components/Banner";
import VenueMap from "../components/VenueMap"
import Navbar from "../components/Navbar";
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VideoComponent from "../components/VideoComponent";
import newsData from "../lib/news";

gsap.registerPlugin(ScrollTrigger)

const GALA_CONST = 'acdss-gala-night-2025'
const COMMENCEMENT_CONST = 'acdss-commencement-2025'


const Gallery = () => {

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const filterRef = useRef<HTMLDivElement | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)
  
  // Gallery section refs
  const preEventTitleRef = useRef<HTMLHeadingElement | null>(null)
  const preEventGridRef = useRef<HTMLDivElement | null>(null)
  const commencementTitleRef = useRef<HTMLHeadingElement | null>(null)
  const commencementGridRef = useRef<HTMLDivElement | null>(null)
  const galaTitleRef = useRef<HTMLHeadingElement | null>(null)
  const galaGridRef = useRef<HTMLDivElement | null>(null)


  const newImagesArr=  newsData.filter(
  (item) => item.id !== GALA_CONST && item.id !== COMMENCEMENT_CONST
  );

  const galaNightImagesArr = newsData.find((item) =>item.id == GALA_CONST)
  const commencementImagesArr = newsData.find((item) =>item.id == COMMENCEMENT_CONST)


  



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

    // Gallery section animations
    
    // Pre Event Section
    gsap.from(preEventTitleRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: preEventTitleRef.current,
        start: 'top 85%',
      },
    })

    const preEventImages = preEventGridRef.current?.querySelectorAll('img') || []
    gsap.from(preEventImages, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: preEventGridRef.current,
        start: 'top 85%',
      },
    })

    // Commencement Section
    gsap.from(commencementTitleRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: commencementTitleRef.current,
        start: 'top 85%',
      },
    })

    const commencementImages = commencementGridRef.current?.querySelectorAll('img') || []
    gsap.from(commencementImages, {
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: commencementGridRef.current,
        start: 'top 85%',
      },
    })

    // Gala Night Section
    gsap.from(galaTitleRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: galaTitleRef.current,
        start: 'top 85%',
      },
    })

    const galaImages = galaGridRef.current?.querySelectorAll('img') || []
    gsap.from(galaImages, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.08,
      ease: 'elastic.out(1, 0.75)',
      scrollTrigger: {
        trigger: galaGridRef.current,
        start: 'top 85%',
      },
    })

  }, [])


  return (
    <div className="min-h-screen flex flex-col">
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
      
      <VideoComponent/>
      
     
      
      
      {/* Gallery Grid */}
      <section className="py-8  flex flex-col items-center w-full bg-white ">
        
            {/* Pre Event Grid */}
            <h1 ref={preEventTitleRef} className='text-2xl lg:text-5xl font-bold my-2 lg:my-10'>Preparations for the Event</h1>
            <div ref={preEventGridRef} className='grid grid-cols-1 px-4 max-w-7xl gap-4 md:grid-cols-3 lg:grid-cols-4 mb-10 lg:mb-24'>
                {newImagesArr.map((i,k) =>(
                  i.images?.map((img, imgIndex) => (
                    <img 
                      key={`${k}-${imgIndex}`} 
                      src={img} 
                      alt={`Pre event ${imgIndex}`} 
                      className="w-[450px] h-[450px] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))
                ))}

            </div>

            {/* Commencement of Event Grid */}

             <h1 ref={commencementTitleRef} className=' p-4 text-2xl lg:text-5xl font-bold my-2 lg:my-10 text-center'>Commencement of the African Chief of Defence Event</h1>
            <div ref={commencementGridRef}  className='px-4 grid grid-cols-1 max-w-7xl gap-4 md:grid-cols-3 lg:grid-cols-4 mb-10 lg:mb-24'>
                {commencementImagesArr?.images.map((img, imgIndex) => (
                    <img 
                      key={`commencement-${imgIndex}`} 
                      src={img} 
                      alt={`Commencement ${imgIndex}`} 
                      className="w-[450px] h-[450px] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))
                }

            </div>


            {/* Gala Night */}

             <h1 ref={galaTitleRef} className=' text-2xl lg:text-5xl font-bold  lg:my-10'>Images from Our Gala Night</h1>
            <div ref={galaGridRef}  className='px-4 grid grid-cols-1 max-w-7xl gap-4 md:grid-cols-3 lg:grid-cols-4 mb-10 lg:mb-24'>
                {galaNightImagesArr?.images.map((img, imgIndex) => (
                    <img 
                      key={`gala-${imgIndex}`} 
                      src={img} 
                      alt={`Gala night ${imgIndex}`} 
                      className="w-[450px] h-[450px] rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))
                }

            </div>

        
      </section>
      
     
     <VenueMap/>
     <Banner/>
    </div>
  );
};

export default Gallery;