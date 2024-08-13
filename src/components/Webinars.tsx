import React, { useState,useEffect } from "react";

<link rel='stylesheet' href='src\app\globals.css'></link>


const Webinars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "./photos/2.jpg",
    "./photos/3.jpg",
    "./photos/4.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <section className="webinars-section mb-4">
      <div className="webinars-content">
        <h2 className="webinars-title">Upcoming Events</h2>
        <div className="slider-container">
          <button className="slider-button prev" onClick={prevSlide}>‹</button>
          <div className="slider">
            <div
              className="slides-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  className="webinar-image"
                  alt={`Webinar ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <button className="slider-button next" onClick={nextSlide}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Webinars;