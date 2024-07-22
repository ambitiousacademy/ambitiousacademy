import React from "react";

const Webinars = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto px-4">
        <div className="mb-5 flex flex-col text-center w-full">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight"></h2>
        </div>
      </div>
      <div
        id="default-carousel"
        className="relative w-3/4 mx-auto"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden rounded-lg mb-24 md:mb-0  h-48 md:min-h-screen">
          <div
            className={`absolute inset-0 transition-transform duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={`./photos/Webinar1.jpg`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            />
          </div>
        </div>
      </div>
      <div
        id="default-carousel"
        className="relative w-3/4 mx-auto"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden rounded-lg mb-24 md:mb-0  h-48 md:min-h-screen">
          <div
            className={`absolute inset-0 transition-transform duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={`./photos/Webinar2.jpg`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
