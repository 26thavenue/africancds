import { useState, useRef, useEffect, RefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types for items per view
type ItemsPerView = {
  mobile: number;
  tablet: number;
  desktop: number;
};

// Props for the component
interface ImageCarouselProps {
  images: string[];
  title?: string;
  className?: string;
  itemsPerView?: ItemsPerView;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  title,
  className = "",
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsToShow, setItemsToShow] = useState<number>(itemsPerView.mobile);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerView.desktop);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.mobile);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [itemsPerView]);

  const totalSlides = Math.ceil(images.length / itemsToShow);
  const maxIndex = totalSlides - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`carousel-container ${className}`}>
      {title && (
        <h2 className="text-2xl lg:text-4xl font-bold my-2 lg:my-10 text-center">
          {title}
        </h2>
      )}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Carousel wrapper */}
        <div className="overflow-hidden rounded-lg">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex gap-4"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {images
                  .slice(
                    slideIndex * itemsToShow,
                    (slideIndex + 1) * itemsToShow
                  )
                  .map((img, imgIndex) => (
                    <div key={`${slideIndex}-${imgIndex}`} className="flex-1 min-w-0">
                      <img
                        src={img}
                        alt={`${title || "Gallery"} ${
                          slideIndex * itemsToShow + imgIndex + 1
                        }`}
                        className="w-full h-[300px] lg:h-[450px] rounded-lg object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => {
                          // Optional: Add lightbox functionality here
                          console.log("Image clicked:", img);
                        }}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
