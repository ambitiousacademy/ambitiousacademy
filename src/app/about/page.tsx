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
                "Our diverse range of certification courses is crafted to enhance your career prospects. Whether you aim to upskill, reskill, or explore a new field, our courses meet industry standards and provide practical knowledge and skills. We offer specialized courses such as Law Certification Online and Skill Development Programs via various Skill Development Courses and Workshops, ensuring you gain the expertise needed to excel in your chosen career path. Explore our ambitious academy reviews to see how our certification courses have benefitted others.",
            },
            {
              title: "Comprehensive Test Series",
              content:
                " Preparing for competitive exams can be daunting. Our comprehensive test series, meticulously designed to reflect the format and difficulty level of real exams, helps you prepare effectively. These test series help you identify your strengths and areas for improvement, giving you the edge to succeed in exams like law entrance tests.",
            },
            {
              title: "Insightful Webinars",
              content:
                "Learning from experts is a core aspect of our educational philosophy. We host insightful webinars and seminars led by industry leaders and subject matter experts, providing up-to-date information, practical advice, and valuable insights to help you stay ahead in your field.",
            },
            {
              title: "Educational Podcast",
              content:
                "Our educational podcasts cover a wide range of topics, offering an accessible way to enhance your knowledge and stay informed about the latest trends and best practices in various fields, including new government laws. Tune in to our podcasts for insights on free online certificate courses for law students and other relevant topics.",
            },
            {
              title: "Informative Blogs and Articles",
              content:
                "Our blog and article section is a treasure trove of information and insights. Covering a wide range of topics, our content provides multi-dimensional perspectives on various subjects. Whether you seek industry trends, academic advice, or personal development tips, our blogs and articles enrich your learning experience.",
            },
            {
              title: "Freelancing Section",
              content:
                "Our freelancing section connects freelancers with potential clients. Freelancers can create profiles, showcase their skills, and bid for projects in their niche. Clients can post job advertisements and find talented professionals to meet their needs, creating a dynamic and efficient marketplace. Our ambitious academy reviews frequently highlight the success stories from our freelancing section.",
            },
            {
              title: "Skill Development Programs",
              content:
                " Our skill development programs are designed to provide you with the practical skills required in today’s job market. From technical skills to soft skills, our programs cover a broad spectrum of competencies that enhance your employability",
            },
            {
              title: "Internship Programs",
              content:
                "We offer internship programs that provide hands-on experience and exposure to real-world scenarios. These programs are tailored to help you apply theoretical knowledge in practical settings, thereby boosting your career prospects.",
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
