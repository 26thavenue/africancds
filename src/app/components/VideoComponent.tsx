import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Maximize, Clock } from 'lucide-react';

 const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Vimeo embed URL with privacy and customization parameters
  const embedUrl = "https://player.vimeo.com/video/1114633485?" + 
    "badge=0" +          
    "&autopause=0" +      
    "&player_id=0" +      
    "&app_id=58479" +     
    "&portrait=0" +       
    "&title=0" +          // Hide video title
    "&byline=0" +         // Hide username/byline
    "&color=667eea" +     // Custom player color
    "&dnt=1" +            // Do not track
    "&transparent=0" +    // Dark background
    "&responsive=1";      // Responsive sizing

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className=" bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

         <div>
            <h1 className='text-5xl  font-bold my-10'>Video Highlight from Our Event </h1>
        </div>

        {/* Video Container */}
        <div className="bg-white rounded-2xl  overflow-hidden transition-all duration-300  hover:-translate-y-1">
       

          {/* Video Player */}
          <div className="relative">
            <div className="aspect-video bg-black relative group">
              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer z-10 group-hover:bg-opacity-30 transition-all duration-300"
                  onClick={handlePlayClick}
                >
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-16 h-16 text-white ml-2" fill="white" />
                  </div>
                </div>
              )}
              
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="African Defense Summit Video"
              />
            </div>

            {/* Custom Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            </div>
          </div>

        
        </div>

      
      </div>
    </div>
  );
}

export default VideoComponent