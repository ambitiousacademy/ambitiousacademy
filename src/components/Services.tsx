import React, { useEffect, useState } from "react";
<link rel="stylesheet" href="src\app\globals.css"></link>;

const Services = () => {
  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUp(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []); // Empty dependency array ensures this runs only once

  const PopupComponent = ({ closePopup }: { closePopup: () => void }) => (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-7 max-h-screen">
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
        <div className="">
          <img
            className="object-cover max-h-screen md:pb-12"
            src="./photos/LaunchDiscountPoster.jpg"
            alt="Launch Image Poster"
          />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="services-container">
        <div className="services-background"></div>
        <div className="services-content">
          <h2 className="services-title">Our Services :</h2>
          <div className="services-grid">
            <div className="services-items">
              <div className="service-item">
                <svg className="service-item-icon" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="service-item-title">Webinars</span>
              </div>
              <div className="service-item">
                <svg className="service-item-icon" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="service-item-title">Workshops</span>
              </div>
              <div className="service-item">
                <svg className="service-item-icon" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="service-item-title">Study Material</span>
              </div>
              <div className="service-item">
                <svg className="service-item-icon" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="service-item-title">Podcast</span>
              </div>
              <div className="service-item">
                <svg className="service-item-icon" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="service-item-title">CLAT UG Crash Course</span>
              </div>
            </div>
            <div className="service-image">
              <img src="/photos/services.png" alt="Our Services" />
            </div>
          </div>
        </div>
      </div>
      {popUp && <PopupComponent closePopup={() => setPopUp(false)} />}
    </>
  );
};

export default Services;
