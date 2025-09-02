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
    "&autoplay=1" +       
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
      className="bg-gray-100 p-4 md:p-16 mb-0 lg:mb-16 transition-all duration-1000"
    >
      <div className="max-w-5xl mx-auto">
        <div>
          <h1 
            ref={titleRef}
            className='text-2xl lg:text-5xl font-bold my-10 text-center'
          >
            Video Highlight from African Chief of Defense Summit 2025
          </h1>
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

            {/* Custom Controls Overlay */}
            {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white hover:text-indigo-300 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <div className="flex items-center space-x-2 text-white text-sm">
                  <Clock className="w-4 h-4" />
                  <span>15:30</span>
                </div>
              </div>
              
              <button className="text-white hover:text-indigo-300 transition-colors">
                <Maximize className="w-5 h-5" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;