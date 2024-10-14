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

//  export default Webinars;



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
// import React, { useState, useEffect } from "react";
// <link rel='stylesheet' href='src\app\globals.css'></link>
// const Webinars = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       image: "./photos/2.jpg",
//       link: "/webinar-1" // URL for the first image
//     },
//     {
//       image: "./photos/3.jpg",
//       link: "/webinar-2" // URL for the second image
//     },
//     {
//       image: "./photos/4.jpg",
//       link: "/webinar-3" // URL for the third image
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Auto change slide every 5 seconds
//     return () => clearInterval(interval); // Cleanup interval on unmount
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
//               style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
//             >
//               {slides.map((slide, index) => (
//                 <a href={slide.link} key={index}>
//                   <img
//                     src={slide.image}
//                       className="webinar-image" 
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

  // const slides = [
  //   { image: "./photos/2.jpg", link: "/webinar-1" },
  //   { image: "./photos/3.jpg", link: "/webinar-2" },
  //   { image: "./photos/4.jpg", link: "/webinar-3" }
  // ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  // return (
    // <section className="webinars-section mb-4">
    //   <div className="webinars-content">
    //     <h2 className="webinars-title">Upcoming Events</h2>
    //     <div className="slider-container">
    //       <button className="slider-button prev" onClick={prevSlide}>‹</button>
    //       <div className="slider">
    //         <div
    //           className="slides-wrapper"
    //           style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
    //         >
    //           {slides.map((slide, index) => (
    //             <a href={slide.link} key={index}>
    //               <img
    //                 src={slide.image}
    //                 className="webinar-image"
    //                 alt={`Webinar ${index + 1}`}
    //               />
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //       <button className="slider-button next" onClick={nextSlide}>›</button>
    //     </div>
    //   </div>
    // </section>
    
  // );
  // const Slider = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);
"use clients"
import React, { useState, useEffect, useRef } from "react";
import image1 from '../../public/photos/2.jpg';
import image2 from '../../public/photos/3.jpg';
import image3 from '../../public/photos/4.jpg';
<link rel='stylesheet' href='src\app\globals.css'></link> // Import the CSS file properly

const Webinars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
      // imageUrl: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600',
       imageUrl:image1.src,link: "/WorkshopDetails",
    },
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
      // imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
       imageUrl:image2.src,link: "/ResearchMethodology",
    },
    {
      // title: 'Lorem Ipsum', 
      // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
       imageUrl:image3.src,link: "https://forms.gle/nQEjMymbn4JTPmHe6",

      // imageUrl: 'https://img.freepik.com/premium-vector/flat-law-firm-instagram-posts-collection_23-2149340592.jpg',
    },
  
    // {
    //   // title: 'Lorem Ipsum', 
    //   // description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, velit.",
    //    imageUrl:image5.src,

    //   // imageUrl: 'https://img.freepik.com/premium-vector/flat-law-firm-instagram-posts-collection_23-2149340592.jpg',
    // },
  ];
  
//     const totalSlides = slides.length;
//     const slideInterval = useRef<NodeJS.Timeout | null>(null);
  
//     useEffect(() => {
//       startSlideInterval();
//       return () => stopSlideInterval();
//     }, []);
  
//     const startSlideInterval = () => {
//       slideInterval.current = setInterval(() => {
//         nextSlide();
//       }, 5000);
//     };
  
//     const stopSlideInterval = () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };
  
//     const nextSlide = () => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     };
  
//     const prevSlide = () => {
//       setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     };
  
   
//     return (
//       <div className="section">
//        <div className="webinars-content">
//        <h2 className="webinars-title">Upcoming Events</h2>
//        <div className="slider-container">
//         <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div className="slide" key={index}>
//               {slide.map((image, idx) => (
//                  <a href={image.link} key={idx}>
//                  <img src={image.src} alt={image.alt} />
//                </a>
//               ))}
//             </div>
            
//           ))}
         
//          <button>
//         onClick={prevSlide}
//         className="nav-button left"
//         aria-label="Previous Slide"
//       >
//         <span className="text-2xl" aria-hidden="true">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
//           </svg>
//         </span>
//       </button>
//         {/* <button className="slider-btn prev" onClick={prevSlide}>‹</button>
//         <button className="slider-btn next" onClick={nextSlide}>›</button> */}
//        <button
//         onClick={nextSlide}
//         className="nav-button right"
//         aria-label="Next Slide"
//       >
//         <span className="text-2xl" aria-hidden="true">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
//           </svg>
//         </span>
//       </button>
//         </div>
      
//         <div className="slider-dots">
//           {slides.map((_, idx) => (
//             <span
//               key={idx}
//               className={`dot ${currentSlide === idx ? 'active' : ''}`}
//               onClick={() => setCurrentSlide(idx)}
//             ></span>
//           ))}
          
//         </div>
//       </div>
//       </div>
    
//      </div>
//     );
// };
const totalSlides = slides.length;
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval();
  }, []);

  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 7000);
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
    <section className="webinars-section mb-4">
       <div className="webinars-content">
        <h2 className="webinars-title">Upcoming Events</h2>
    <div className="slider-container">
      <div className="slide-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
              <a href={slide.link}>
                  <img
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="webinar-image"
                  />
                </a>
            {/* <div className="slide-content"> */}
              {/* <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p> */}
              {/* <div className="mt-5">
                <a className="learn-more" href="#">
                  Learn More
                </a>
              </div> */}
            {/* </div> */}
          </div>
        ))}
      </div>

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
    </div></section>
  );
};


export default Webinars;


