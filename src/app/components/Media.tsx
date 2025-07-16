'use client'

import Link from 'next/link';
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import newsData from '../lib/news';
import toast from 'react-hot-toast';

// Custom images for news articles
const newsImages = [
  '/Media5.jpg',
  '/media/Media11.jpg',
  '/media/Media15.jpg',
];

export default function NewsSection() {
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

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Copied Link")
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  // Show only the first 2 news articles
  const featuredNews = newsData?.slice(0, 2) || [];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          {featuredNews.map((news, index) => (
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
        
        {/* Link to read all news */}
        <div className="text-center mt-16">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Read All News
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}