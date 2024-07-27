"use client";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CourseData {
  user: {
    enrolledCourses: {
      coursesdetails: Array<{
        courseid: string;
        courseimage: string;
        coursename: string;
        coursedesc: string;
      }>;
    }[];
  };
}

export default function DashboardCourse() {
  const params = useParams();
  const courseid = params.courseid as string;
  const { isLoaded, isSignedIn, user } = useUser();
  const [coursedata, setCoursedata] = useState<CourseData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id) {
        const res = await fetch(
          `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/userAllEnrolledCourses?userid=${user.id}`
        );
        const data: CourseData = await res.json();
        setCoursedata(data);
        console.log("Fetching User Course Data Paid Ones");
      }
    };

    fetchData();
  }, [courseid, user]);

  console.log(coursedata?.user.enrolledCourses[0].coursesdetails);

  return (
    <>
      {/* Uncomment this section if needed
      <section className="pt-24 pb-28 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
              Get The Drive Access.
            </h2>
            <p className="mb-7 text-lg text-gray-600 font-medium">
              Click Below To Get The Drive Access. On Clicking You will be
              redirected to a drive folder there you need to apply for access.
              If You have access then also you need to click below to go the
              drive folder.
            </p>
            <div className="mb-11 md:inline-block">
              {coursedata?.course?.lectureslinks.map((data, index) => (
                <a
                  key={index}
                  className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  href={data.lecturelink}
                >
                  Click Here
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}
      <section className="p-24 pb-28 bg-white overflow-hidden">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursedata?.user.enrolledCourses[0].coursesdetails?.map((data) => (
            <a
              key={data.courseid}
              className="group flex flex-col focus:outline-none"
              href={`/dashboard/${data.courseid}`}
            >
              <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                <img
                  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  src={data.courseimage}
                  alt="Blog Image"
                />
                <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
                  {data.coursename}
                </span>
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {data.coursename}
                </h3>
                <p className="mt-3 text-gray-800 line-clamp-3">
                  {data.coursedesc}
                </p>
                <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Explore
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
