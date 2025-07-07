// File: app/news/[id]/page.js (or pages/news/[id].js for Pages Router)
'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from "../../components/Navbar"
import newsData from '../../lib/news'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Banner from '@/app/components/Banner'
import toast from 'react-hot-toast'

// Custom images for news articles
const newsImages = [
  '/Media5.jpg',
  '/media/Media11.jpg',
  '/media/Media15.jpg',
];

export default function NewsArticle() {
  const params = useParams()
  const { id } = params
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  
  const article = newsData.find(news => news.id === id)
  
  
  const articleIndex = newsData.findIndex(news => news.id === id)
  const imageUrl = newsImages[articleIndex % newsImages.length]

  
  if (!article) {
    notFound()
  }

  useEffect(() => {
    // Animation for the page elements
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      })
    }

    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3
      })
    }

    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.6
      })
    }
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
      {/* Header */}
      <div className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Navbar />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-white transition-colors">
                News
              </Link>
              <span>/</span>
              <span className="text-white">Article</span>
            </div>
          </nav>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-1 bg-primary rounded-full mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white/90 text-sm font-medium">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
            
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            {/* <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {article.summary}
            </p> */}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Featured Image */}
          <div ref={imageRef} className="mb-12">
            <img 
              src={imageUrl} 
              alt={article.title}
              className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Article Content */}
          <article ref={contentRef} className="prose prose-lg max-w-none">
            <div className=" rounded-2xl  p-8 md:p-12">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-700">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">ACDSS Committee</p>
                      <p className="text-gray-600 text-sm"> & Security News</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button> */}
                    <button onClick={() => copyToClipboard()} className="p-2 cursor-pointer text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Related Images</h2>
            <div className="grid lg:grid-cols-2  gap-4">
              {article.images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg  transition-all duration-300">
                  <img 
                    src={`/${image}`} 
                    alt={`Related image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center">
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>

           
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.filter(news => news.id !== id).slice(0, 3).map((relatedNews, index) => (
              <Link key={relatedNews.id} href={`/news/${relatedNews.id}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={newsImages[index % newsImages.length]} 
                    alt={relatedNews.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedNews.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedNews.summary}
                    </p>
                    <p className="text-primarytext-sm font-medium mt-4">
                      {new Date(relatedNews.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Banner/>
    </div>
  )
}

