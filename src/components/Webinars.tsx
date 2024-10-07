// import React, { useState,useEffect } from "react";

// <link rel='stylesheet' href='src\app\globals.css'></link>


// const Webinars = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "./photos/2.jpg",
//     "./photos/3.jpg",
//     "./photos/4.jpg",
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);
//   return (
//     <section className="webinars-section mb-4">
//       <div className="webinars-content">
//         <h2 className="webinars-title">Upcoming Events</h2>
//         <div className="slider-container">
//           <button className="slider-button prev" onClick={prevSlide}>‹</button>
//           <div className="slider">
//             <div
//               className="slides-wrapper"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {slides.map((slide, index) => (
//                 <img
//                   key={index}
//                   src={slide}
//                   className="webinar-image"
//                   alt={`Webinar ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//           <button className="slider-button next" onClick={nextSlide}>›</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Webinars;
// import React, { useState, useEffect } from "react";
// <link rel='stylesheet' href='src\app\globals.css'></link>

// const Webinars = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       image: "./photos/2.jpg",
//       link: "/webinar-1" // Change this to the desired URL for the first image
//     },
//     {
//       image: "./photos/3.jpg",
//       link: "/webinar-2" // Change this to the desired URL for the second image
//     },
//     {
//       image: "./photos/4.jpg",
//       link: "/webinar-3" // Change this to the desired URL for the third image
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <section className="webinars-section mb-4">
//       <div className="webinars-content">
//         <h2 className="webinars-title">Upcoming Events</h2>
//         <div className="slider-container">
//           <button className="slider-button prev" onClick={prevSlide}>‹</button>
//           <div className="slider">
//             <div
//               className="slides-wrapper"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {slides.map((slide, index) => (
//                 <a href={slide.link} key={index}>
//                   <img
//                     src={slide.image}
//                     className="webinar-image"
//                     alt={`Webinar ${index + 1}`}
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//           <button className="slider-button next" onClick={nextSlide}>›</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Webinars;
import React, { useState, useEffect } from "react";
<link rel='stylesheet' href='src\app\globals.css'></link>
const Webinars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "./photos/2.jpg",
      link: "/webinar-1" // URL for the first image
    },
    {
      image: "./photos/3.jpg",
      link: "/webinar-2" // URL for the second image
    },
    {
      image: "./photos/4.jpg",
      link: "/webinar-3" // URL for the third image
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
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
              style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
            >
              {slides.map((slide, index) => (
                <a href={slide.link} key={index}>
                  <img
                    src={slide.image}
                      className="webinar-image" 
                    alt={`Webinar ${index + 1}`}
                  />
                </a>
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

