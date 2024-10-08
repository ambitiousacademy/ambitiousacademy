
import React, { useState, useEffect, useRef } from "react";
<link rel='stylesheet' href='src\app\globals.css'></link> // Import the CSS file properly

const Webinars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
    const slides = [
      [ // First slide with two images
        { src: './photos/2.jpg', alt: 'Image 1' ,link: '/page1'},
        { src: './photos/3.jpg', alt: 'Image 2',link: '/page1' }
      ],
      [ // Second slide with one image
        { src: './photos/4.jpg', alt: 'Image 3',link: '/page1'}
      ]
    ];
  
    const totalSlides = slides.length;
    const slideInterval = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      startSlideInterval();
      return () => stopSlideInterval();
    }, []);
  
    const startSlideInterval = () => {
      slideInterval.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };
  
    const stopSlideInterval = () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
  
   
    return (
      <div className="section">
       <div className="webinars-content">
       <h2 className="webinars-title">Upcoming Events</h2>
       <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              {slide.map((image, idx) => (
                 <a href={image.link} key={idx}>
                 <img src={image.src} alt={image.alt} />
               </a>
              ))}
            </div>
            
          ))}
         
         <button
        onClick={prevSlide}
        className="nav-button left"
        aria-label="Previous Slide"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
          </svg>
        </span>
      </button>
        {/* <button className="slider-btn prev" onClick={prevSlide}>‹</button>
        <button className="slider-btn next" onClick={nextSlide}>›</button> */}
       <button
        onClick={nextSlide}
        className="nav-button right"
        aria-label="Next Slide"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </span>
      </button>
        </div>
      
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            ></span>
          ))}
          
        </div>
      </div>
      </div>
     </div>
    );
};

export default Webinars;



