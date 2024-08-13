"use client";
import { useState } from "react";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-double border-4 rounded-2xl text-center font-serif italic border-orange-600">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Welcome to THE AMBITIOUS ACADEMY
        </h2>
        <p>
          At THE AMBITIOUS ACADEMY, we are committed to being your premier
          destination for skill development and academic excellence. Our online
          learning platform is meticulously designed to serve individuals at
          various stages of their educational and professional journeys. We
          offer a comprehensive range of resources and services that help you
          achieve your goals and maximize your potential.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Our Offerings</h2>
        <ul className="list-inside">
          {[
            {
              title: "Certification Courses",
              content:
                "Our diverse range of certification courses is crafted to enhance your career prospects...",
            },
            {
              title: "Comprehensive Test Series",
              content:
                "Preparing for competitive exams can be daunting. Our comprehensive test series...",
            },
            {
              title: "Insightful Webinars",
              content:
                "Learning from experts is a core aspect of our educational philosophy...",
            },
            {
              title: "Educational Podcast",
              content:
                "Our educational podcasts cover a wide range of topics, offering an accessible way to enhance your knowledge...",
            },
            {
              title: "Informative Blogs and Articles",
              content:
                "Our blog and article section is a treasure trove of information and insights...",
            },
            {
              title: "Freelancing Section",
              content:
                "Our freelancing section connects freelancers with potential clients...",
            },
            {
              title: "Skill Development Programs",
              content:
                "Our skill development programs are designed to provide you with the practical skills required in today’s job market...",
            },
            {
              title: "Internship Programs",
              content:
                "We offer internship programs that provide hands-on experience and exposure to real-world scenarios...",
            },
          ].map((offering, index) => (
            <li key={index} className="mb-2 ">
              <button
                className="w-full text-left font-bold"
                onClick={() => toggleAccordion(index)}
              >
                <p className="flex flex-row">
                  <span className="pr-2">
                    {index + 1}: {offering.title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </p>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-left">{offering.content}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p>
          At THE AMBITIOUS ACADEMY, our mission is to make high-quality
          education accessible and effective for everyone...
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Empowering Your Journey</h2>
        <p>
          We understand that every learner has unique goals and aspirations...
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Join Us</h2>
        <p>
          Take the first step towards achieving your ambitions by joining THE
          AMBITIOUS ACADEMY...
        </p>
        <h3 className="text-2xl font-bold mb-2 mt-4">
          Welcome to THE AMBITIOUS ACADEMY, where your success story begins!!
        </h3>
      </section>
    </div>
  );
};

export default AboutUs;
