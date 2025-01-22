import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
      }, 5000); // Change de slide toutes les 5 secondes
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Navigation
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl mt-4">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out
            ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute w-full h-full object-cover"
          />
          {/* Overlay texte */}
          <div className="absolute inset-0 bg-white bg-opacity-10 flex flex-col justify-start items-center text-black">
            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
        aria-label="Précédent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
        aria-label="Suivant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all
              ${index === current 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;