"use client";
import { useState } from "react";

const AboutUs = () => {
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isEmpoweringJourneyOpen, setIsEmpoweringJourneyOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);

  const toggleOfferings = () => {
    setIsOfferingsOpen(!isOfferingsOpen);
  };

  const toggleMission = () => {
    setIsMissionOpen(!isMissionOpen);
  };

  const toggleEmpoweringJourney = () => {
    setIsEmpoweringJourneyOpen(!isEmpoweringJourneyOpen);
  };

  const toggleJoinUs = () => {
    setIsJoinUsOpen(!isJoinUsOpen);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 border-double border-4 rounded-2xl text-left font-serif italic border-orange-600">
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
        <button
          className="text-2xl font-bold mb-2 w-full text-left"
          onClick={toggleOfferings}
        >
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-2xl font-bold mb-2">Our Offerings</h2>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
          </details>
        </button>
        {isOfferingsOpen && (
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">
                <strong>Certification Courses:</strong> Our diverse range of
                certification courses is crafted to enhance your career
                prospects. Whether you aim to upskill, reskill, or explore a new
                field, our courses meet industry standards and provide practical
                knowledge and skills. We offer specialized courses such as Law
                Certification Online and Skill Development Programs via various
                Skill Development Courses and Workshops, ensuring you gain the
                expertise needed to excel in your chosen career path. Explore
                our ambitious academy reviews to see how our certification
                courses have benefitted others.
              </li>
              <li className="mb-2">
                <strong>Comprehensive Test Series:</strong> Preparing for
                competitive exams can be daunting. Our comprehensive test
                series, meticulously designed to reflect the format and
                difficulty level of real exams, helps you prepare effectively.
                These test series help you identify your strengths and areas for
                improvement, giving you the edge to succeed in exams like law
                entrance tests.
              </li>
              <li className="mb-2">
                <strong>Insightful Webinars:</strong> Learning from experts is a
                core aspect of our educational philosophy. We host insightful
                webinars and seminars led by industry leaders and subject matter
                experts, providing up-to-date information, practical advice, and
                valuable insights to help you stay ahead in your field.
              </li>
              <li className="mb-2">
                <strong>Educational Podcast:</strong> Our educational podcasts
                cover a wide range of topics, offering an accessible way to
                enhance your knowledge and stay informed about the latest trends
                and best practices in various fields, including new government
                laws. Tune in to our podcasts for insights on free online
                certificate courses for law students and other relevant topics.
              </li>
              <li className="mb-2">
                <strong>Informative Blogs and Articles:</strong> Our blog and
                article section is a treasure trove of information and insights.
                Covering a wide range of topics, our content provides
                multi-dimensional perspectives on various subjects. Whether you
                seek industry trends, academic advice, or personal development
                tips, our blogs and articles enrich your learning experience.
              </li>
              <li className="mb-2">
                <strong>Freelancing Section:</strong> Our freelancing section
                connects freelancers with potential clients. Freelancers can
                create profiles, showcase their skills, and bid for projects in
                their niche. Clients can post job advertisements and find
                talented professionals to meet their needs, creating a dynamic
                and efficient marketplace. Our ambitious academy reviews
                frequently highlight the success stories from our freelancing
                section.
              </li>
              <li className="mb-2">
                <strong>Skill Development Programs:</strong> Our skill
                development programs are designed to provide you with the
                practical skills required in today’s job market. From technical
                skills to soft skills, our programs cover a broad spectrum of
                competencies that enhance your employability.
              </li>
              <li className="mb-2">
                <strong>Internship Programs:</strong> We offer internship
                programs that provide hands-on experience and exposure to
                real-world scenarios. These programs are tailored to help you
                apply theoretical knowledge in practical settings, thereby
                boosting your career prospects.
              </li>
            </ul>
          </p>
        )}
      </section>

      <section className="mb-6">
        <button
          className="text-2xl font-bold mb-2 w-full text-left"
          onClick={toggleMission}
        >
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
          </details>
        </button>
        {isMissionOpen && (
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">
                At THE AMBITIOUS ACADEMY, our mission is to make high-quality
                education accessible and effective for everyone. We believe that
                education is the key to empowerment, and we are committed to
                providing the tools and resources necessary for individuals to
                achieve their ambitions.
              </li>
            </ul>
          </p>
        )}
      </section>

      <section className="mb-6">
        <button
          className="text-2xl font-bold mb-2 w-full text-left"
          onClick={toggleEmpoweringJourney}
        >
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-2xl font-bold mb-2">
                Empowering Your Journey
              </h2>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
          </details>
        </button>
        {isEmpoweringJourneyOpen && (
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">
                We understand that every learner has unique goals and
                aspirations. Whether you’re aiming to enhance your skills,
                prepare for a challenging exam, expand your knowledge base, or
                find freelance opportunities, THE AMBITIOUS ACADEMY is here to
                support you every step of the way.
              </li>
            </ul>
          </p>
        )}
      </section>

      <section className="mb-6">
        <button
          className="text-2xl font-bold mb-2 w-full text-left"
          onClick={toggleJoinUs}
        >
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <h2 className="text-2xl font-bold mb-2">Join Us</h2>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
          </details>
        </button>
        {isJoinUsOpen && (
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">
                Take the first step towards achieving your ambitions by joining
                THE AMBITIOUS ACADEMY. Our community of learners is diverse,
                motivated, and dedicated to excellence. By becoming a part of
                our academy, you’ll gain access to top-notch educational
                resources, expert-led sessions, a supportive environment, and a
                vibrant freelancing marketplace that fosters growth and success.
                Join us today and take a step closer to realizing your
                ambitions. Together, we can unlock your potential and pave the
                way for a brighter future.
              </li>
            </ul>
          </p>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
