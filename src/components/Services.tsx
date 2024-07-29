import React from 'react';
 <link rel='stylesheet' href='src\app\globals.css'></link>

const Services = () => {
  return (
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
  );
};

export default Services;
