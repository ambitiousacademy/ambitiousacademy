"use client";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface LectureLink {
  _id: string;
  lecturename: string;
  lecturelink: string;
  lectureTutorName: string;
  lectureduration: string;
  subject: string;
}

interface Course {
  _id: string;
  courseid: string;
  lectureslinks: LectureLink[];
}

interface CourseData {
  course: Course;
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
          `${process.env.NEXT_PUBLIC_WEB_URL}/protectedCourses?userid=${user.id}&courseid=${courseid}`
        );
        const data: CourseData = await res.json();
        setCoursedata(data);
        console.log("Fetching User Course Data Paid Ones");
      }
    };

    fetchData();
  }, [courseid, user]);

  console.log(coursedata);

  return (
    <>
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
      {/* 
      <div className="px-4 py-5 border-b rounded-t sm:px-6 mb-64">
        <div className="overflow-hidden bg-white shadow sm:rounded-md ">
          <ul className="divide-y divide-gray-200 my-auto">
            {coursedata?.course?.lectureslinks.map((data, index) => (
              <li key={index}>
                <a href={data.lecturelink} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-md ">
                        {data.lecturename}
                      </p>
                      <div className="flex flex-shrink-0 ml-2">
                        <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {data.lectureTutorName}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center font-light text-gray-500 text-md ">
                          {data.lectureduration}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
}
