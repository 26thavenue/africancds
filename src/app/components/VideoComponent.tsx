import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, Maximize, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoComponent = () => {
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef(null);
  
  // Animation refs
  const sectionRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  // Fixed Vimeo embed URL - properly concatenated string
  const embedUrl = "https://player.vimeo.com/video/1114633485?" + 
    "badge=0" +          
    "&autopause=0" +      
    "&player_id=0" +      
    "&app_id=58479" +     
    "&portrait=0" +       
    "&title=0" +          
    "&byline=0" +              
    "&dnt=1" +  
    "&color=9ca3af" +           
    "&transparent=0" +    
    "&responsive=1" +     
    "&autoplay=0" +       
    "&muted=0" +         
    "&controls=1";        

  useEffect(() => {
    const titleWords = titleRef.current?.textContent?.split(' ') || [];
    if (titleRef.current && titleWords.length > 0) {
      titleRef.current.innerHTML = titleWords.map(word => 
        `<span class="word inline-block">${word}</span>`
      ).join(' ');
      
      const wordElements = titleRef.current.querySelectorAll('.word');
      
      gsap.from(wordElements, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      });
    }

    // Video container animation
    gsap.from(videoContainerRef.current, {
      opacity: 0,
      y: 100,
      scale: 0.9,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: 'top 85%',
      },
    });


  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-gray-100 p-4 md:p-16 mb-0 lg:mb-16 transition-all duration-1000 max-w-screen"
    >
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 
            ref={titleRef}
            className='text-2xl lg:text-4xl font-bold my-10 text-center'
          >
            Video Highlight from African Chief of Defense Summit 2025
          </h2>
        </div>

        {/* Video Container */}
        <div 
          ref={videoContainerRef}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
        >
          {/* Video Player */}
          <div className="relative">
            <div className="aspect-video bg-black relative group">
              <iframe
                ref={iframeRef}
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; picture-in-picture"
                allowFullScreen
                title="African Defense Summit Video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;