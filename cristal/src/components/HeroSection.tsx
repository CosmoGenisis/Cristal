'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1547908069-e6a413bd1e9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZXMlMjBtdWx0aXBsZSUyMGJvdHRsZXMlMjBwcm9kdWN0JTIwZGlzcGxheXxlbnwwfDB8fGJsdWV8MTc1NjQxNjQwN3ww&ixlib=rb-4.1.0&q=85",
    title: "Premium Water Bottles",
    subtitle: "Pure, Safe, and Refreshing",
    attribution: "CHUTTERSNAP on Unsplash"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1595500382155-e7cd8180c301?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxsYWJvcmF0b3J5JTIwd2F0ZXIlMjB0ZXN0aW5nJTIwcXVhbGl0eSUyMGNvbnRyb2x8ZW58MHwwfHxibHVlfDE3NTY0MTY0MDd8MA&ixlib=rb-4.1.0&q=85",
    title: "Quality Testing",
    subtitle: "Advanced Laboratory Standards",
    attribution: "Raghav Bhasin on Unsplash"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1660315751623-187f83ab33c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmUlMjB3YXRlciUyMGJvdHRsaW5nfGVufDB8MHx8Ymx1ZXwxNzU2NDE2NDA3fDA&ixlib=rb-4.1.0&q=85",
    title: "Modern Production",
    subtitle: "State-of-the-Art Facilities",
    attribution: "Uliya Kurilova on Unsplash"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={`${slide.title} - ${slide.attribution}`}
              className="w-full h-full object-cover"
              width="1920"
              height="800"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/80 via-ocean-blue/60 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="heading-hero text-pure-white mb-6 slide-up">
                    {slide.title}
                  </h1>
                  <p className="body-lg text-ice-blue mb-8 slide-up">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 slide-up">
                    <button className="px-8 py-4 bg-emerald-green text-pure-white heading-sm rounded-lg hover:bg-forest-green transition-all duration-300 transform hover:scale-105 pulse-glow">
                      Explore Products
                    </button>
                    <button className="px-8 py-4 border-2 border-pure-white text-pure-white heading-sm rounded-lg hover:bg-pure-white hover:text-primary-blue transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pure-white/20 backdrop-blur-sm text-pure-white p-3 rounded-full hover:bg-pure-white/30 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pure-white/20 backdrop-blur-sm text-pure-white p-3 rounded-full hover:bg-pure-white/30 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-pure-white scale-125'
                : 'bg-pure-white/50 hover:bg-pure-white/75'
            }`}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-light-cyan/30 rounded-full float-animation`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}