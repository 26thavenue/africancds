'use client'

import Link from 'next/link';
import Navbar from "../components/Navbar"
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import newsData from '../lib/news';
import Banner from '../components/Banner';
import toast from 'react-hot-toast';

// Custom images for news articles
const newsImages = [
  '/Media5.jpg',
  '/media/Media11.jpg',
  '/media/Media15.jpg',
];

export default function NewsPage() {
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

    const copyToClipboard =  () => {
      try {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Copied Link")
        
      } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        
      }
    };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative bg-black/85 min-h-[60dvh] lg:min-h-[90dvh] ">
         <div
          style={{
            backgroundImage: "url('/media/Media14.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto"
          }} 
          className="bg-primary overflow-hidden min-h-[60dvh] lg:min-h-[90dvh] absolute inset-0  opacity-50">
          
          <div></div>
          
        </div>
        <div className=" mx-auto relative z-10 flex flex-col h-full min-h-[60dvh] lg:min-h-[85dvh]">
          <Navbar/>
        
        <div className="flex-1 flex items-center justify-center text-center px-6 container mx-auto relative z-10">
          <div className="container mx-auto px-6 text-center">
            {/* <div className="inline-block  bg-primary rounded-full mb-8">
              <div className=" rounded-full px-6 py-2">
                <span className="text-white/90 text-sm font-medium">🔥 Breaking News Updates</span>
              </div>
            </div> */}
            
            <h1 ref={titleRef} className="text-4xl md:text-6xl  font-black text-white mb-8 flex flex-wrap justify-center gap-4">
              {"ACDSS News".split(" ").map((word, i) => (
                <span key={i} className="word inline-block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                  {word}
                </span>
              ))}
            </h1>
            
            <p ref={paragraphRef} className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto flex flex-wrap justify-center gap-2 leading-relaxed font-light">
              {"Stay updated with the latest developments in African defense ".split(" ").map((word, i) => (
                <span key={i} className="word inline-block">
                  {word}
                </span>
              ))}
            </p>
            
            {/* <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-whiteple-600 bg-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Scroll Down
              </button>
             
            </div> */}
          </div>
        </div>  
        </div>
      </div>

     

      {/* News List */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          {newsData?.map((news, index) => (
            <article key={news.id} ref={addToRefs} className="group">
              <div className="bg-white max-w-3xl rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={newsImages[index % newsImages.length]} 
                    alt={news.title} 
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm font-medium text-primary uppercase tracking-wider">Breaking News</p>
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <p className="text-sm text-gray-500 font-medium">{news.date}</p>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                    <Link href={`/news/${news.id}`} className="hover:text-primary transition-colors duration-300">
                      {news.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">{news.summary}</p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/news/${news.id}`} 
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Read More
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    <div className="flex items-center gap-4 text-gray-400">
                      {/* <button className="p-2 hover:text-blue-600 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button> */}
                      <button onClick={() => copyToClipboard()} className="p-2 cursor-pointer hover:text-primary transition-colors duration-300">
                        <svg className="w-5 h-5 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Load More Button */}
        {/* <div className="text-center mt-16">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div> */}
      </section>


      <Banner/>
    </div>
  );
}