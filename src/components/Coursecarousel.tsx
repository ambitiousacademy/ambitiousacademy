import React from "react";
import '/src/app/globals.css';

const Carouselcarousel: React.FC = () => {
  const slides = [
    { src: "./photos/CertificateCourseinDraftingandConveyancing.jpg", link:"/courses/66977de379aac3bbb3f33441" },
    { src: "./photos/CertificateCourseonComparativeCriminalLaw.jpg", link:"/courses/6676563d72f4b13ae10bc0de" },
    { src: "./photos/CertificateCourseonEnvironmentalLaw.jpg", link:"/courses/66a534c9a388f8e38c30c5c6" },
    { src: "./photos/CertificateCourseonCompetitionLaw.jpg", link: "/courses/667546bf72f4b13ae138e3a1" },
    { src: "./photos/CertificateCourseonCopyrightlaws.jpg", link: "/courses/66977d6579aac3bbb3f2b291"},
  ];
  
  return (
    <section className="courses-section">
      <div className="courses-content">
        <h2 className="courses-title">Certificate Courses</h2>
        <div className="courses-grid">
          {slides.slice(0, slides.length - 1).map((slide, index) => (
            <div key={index} className="courses-card">
              <a href={slide.link}>
                <img
                  src={slide.src}
                  className="courses-image"
                  alt={`Course ${index + 1}`}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="last-row">
          <div className="courses-card">
            <a href={slides[slides.length - 1].link}>
              <img
                src={slides[slides.length - 1].src}
                className="courses-image"
                alt={`Course ${slides.length}`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carouselcarousel;
