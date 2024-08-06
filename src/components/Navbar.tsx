"use client";

import React, { useEffect, useState } from "react";
// import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const [isvalidadmin, setIsValidAdmin] = useState(false);
  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    const fetchcourse = async () => {
      try {
        const response = await axios.get(
          `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/admins?adminId=${user?.id}`
        );
        // console.log(response.data.data)
        setIsValidAdmin(response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchcourse();
  }, [user]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUp(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []); // Empty dependency array ensures this runs only once

  const PopupComponent = ({ closePopup }: { closePopup: () => void }) => (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[#DEF9C4] border border-gray-200 rounded-xl shadow-sm p-4 sm:p-7">
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
      <nav className="bg-[#DEF9C4] border-gray-200 sticky top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {
              <img
                src="/photos/logo.svg"
                className="h-10 self-center"
                alt="Login"
              />
            }
            <span className="self-center text-2xl font-style: italic  whitespace-nowrap">
              Ambitious Academy
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-orange-500 rounded-lg bg-[#DEF9C4] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#DEF9C4]">
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/comingsoon"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>
              {isSignedIn && (
                <li>
                  <a
                    href="/dashboard"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Dashboard
                  </a>
                </li>
              )}
              {isvalidadmin && (
                <li>
                  <a
                    href="/admin"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Admin
                  </a>
                </li>
              )}
              <li>
                <a
                  href="/contact-us"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                {isSignedIn ? (
                  // <button onClick={() => signOut({ redirectUrl: '/' })} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  //   Sign Out
                  // </button>
                  <UserButton />
                ) : (
                  <Link
                    href="/sign-in"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {popUp && <PopupComponent closePopup={() => setPopUp(false)} />}
    </>
  );
};

export default Navbar;
