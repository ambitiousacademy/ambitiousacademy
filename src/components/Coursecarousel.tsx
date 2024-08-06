import React, { useState, useEffect } from "react";

const Carouselcarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popUp, setPopUp] = useState<boolean>(false);
  const slides = [
    { src: "./photos/aditya.jpg", link: "/courses/667546bf72f4b13ae138e3a1" },
    { src: "./photos/nitesh.jpg", link: "/courses/66977de379aac3bbb3f33441" },
    { src: "./photos/rachana.jpg", link: "/course/rachana" },
    {
      src: "./photos/trishandya.jpg",
      link: "/courses/6676563d72f4b13ae10bc0de",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUp(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []); // Empty dependency array ensures this runs only once

  const PopupComponent = ({ closePopup }: { closePopup: () => void }) => (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-7">
        <button
          onClick={closePopup}
          className="text-right absolute top-0 right-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">
            Ambitious Coupons
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Fresh Deals Available. Buy Courses At Great Discounts!...
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mb-5 flex flex-col text-center w-full">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Certificate Courses
          </h2>
        </div>
      </div>
      <div
        id="default-carousel"
        className="relative w-3/4 mx-auto"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden rounded-lg mb-24 md:mb-0  h-48 md:min-h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentIndex ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <a href={slide.link}>
                <img
                  src={slide.src}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {popUp && <PopupComponent closePopup={() => setPopUp(false)} />}
    </>
  );
};

export default Carouselcarousel;
