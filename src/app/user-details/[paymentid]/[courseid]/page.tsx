"use client";

import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import React, { useState, useEffect, ChangeEvent } from "react"; // Import ChangeEvent here
import axios from "axios";
import SteinStore from "stein-js-client";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  contactnumber: string;
  degree: string;
  year: string;
  courseenrolled: string;
  courseTitle: string;
  coursePrice: string;
  rateknowledgeofcourse: string;
  referral: string;
  yourreference: string;
  paymentid: string;
}

interface RadioOption {
  value: string;
  label: string;
}

interface RadioData {
  [key: string]: RadioOption[];
}

const radioData: RadioData = {
  rateknowledgeofcourse: [
    { value: "High", label: "High" },
    { value: "Average", label: "Average" },
    { value: "Below Average", label: "Below Average" },
  ],
  referral: [
    {
      value: "Concerned Faculty of the Course",
      label: "Concerned Faculty of the Course",
    },
    { value: "Instagram", label: "Instagram" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Our Website", label: "Our Website" },
    {
      value: "From any other source or reference",
      label: "From any other source or reference",
    },
  ],
};

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  handleChange,
}) => (
  <div className="mt-2">
    {options.map((option) => (
      <>
        <label key={option.value} className="inline-flex items-center ml-4">
          <input
            type="radio"
            className="form-radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
            required
          />
          <span className="ml-2">{option.label}</span>
        </label>
        <br />
      </>
    ))}
  </div>
);

const RegistrationForm: React.FC = () => {
  const params = useParams();
  const courseid = params.courseid as string;
  const paymentid = params.paymentid as string;
  const { isLoaded, isSignedIn, user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactnumber: "",
    degree: "",
    year: "",
    courseenrolled: courseid,
    courseTitle: "",
    coursePrice: "",
    rateknowledgeofcourse: "",
    referral: "",
    yourreference: "",
    paymentid: paymentid,
  });

  const [loading, setLoading] = useState(true);
  const [paymentValid, setPaymentValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const checkPaymentId = async () => {
      toast("Toast 1 Payment");
      try {
        const response = await axios.get(
          `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/isvalidpayment?paymentid=${paymentid}`
        );
        if (response.data.status === "valid") {
          setPaymentValid(true);
        } else {
          setPaymentValid(false);
          setErrorMessage(
            "You are not allowed to fill this form because of payment ID mismatch. Please contact administration if you have paid the money and are facing issues."
          );
        }
      } catch (error) {
        console.error("Error checking payment ID:", error);
        setPaymentValid(false);
        setErrorMessage(
          "An error occurred while validating the payment ID. Please try again later."
        );
      }
      setLoading(false);
    };

    checkPaymentId();
  }, [paymentid]);

  useEffect(() => {
    const fetchCourse = async () => {
      toast("Toast 2 Course");

      try {
        const response = await axios.get(
          `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-jvxnhwz/endpoint/getCourseDetails?courseId=${courseid}`
        );
        const courseData = response.data;
        setFormData((prevState) => ({
          ...prevState,
          courseTitle: courseData.courseTitle,
          coursePrice: courseData.coursePrice,
        }));
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    if (paymentValid) {
      fetchCourse();
    }
  }, [courseid, paymentValid]);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      toast("Toast 3 Signed In");
      setFormData((prevState) => ({
        ...prevState,
        name: user.fullName || "",
        email: user.emailAddresses[0]?.emailAddress || "",
        contactnumber: user.phoneNumbers[0]?.phoneNumber || "",
      }));
    }
  }, [isLoaded, isSignedIn, user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    toast.success("Sending Please Wait..");
    e.preventDefault();

    const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/66ad2f8a4d11fd04f01a24fa"
    );

    try {
      await store.append("sheet1", [formData]);
      toast.success("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        contactnumber: "",
        degree: "",
        year: "",
        courseenrolled: courseid,
        courseTitle: "",
        coursePrice: "",
        rateknowledgeofcourse: "",
        referral: "",
        yourreference: "",
        paymentid: paymentid,
      });
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!paymentValid) {
    return <div>{errorMessage}</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 shadow-md rounded-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="email"
          name="email"
          value={formData.email}
          readOnly
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Contact Number</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="contactnumber"
          value={formData.contactnumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Degree</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Year</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>

      {/* <div className="mb-4">
        <label className="block text-gray-700">Course Enrolled</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="courseenrolled"
          value={formData.courseenrolled}
          readOnly
          required
        />
      </div> */}

      <div className="mb-4">
        <label className="block text-gray-700">Course Enrolled Title</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="courseTitle"
          value={formData.courseTitle}
          readOnly
          required
        />
      </div>
      {/* 
      <div className="mb-4">
        <label className="block text-gray-700">Course Price</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="coursePrice"
          value={formData.coursePrice}
          readOnly
          required
        />
      </div> */}

      <div className="mb-4">
        <label className="block text-gray-700">
          Rate knowledge of the course
        </label>
        <RadioGroup
          name="rateknowledgeofcourse"
          options={radioData.rateknowledgeofcourse}
          selectedValue={formData.rateknowledgeofcourse}
          handleChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Referral</label>
        <RadioGroup
          name="referral"
          options={radioData.referral}
          selectedValue={formData.referral}
          handleChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Your Reference</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          name="yourreference"
          value={formData.yourreference}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
      <Toaster />
    </form>
  );
};

export default RegistrationForm;
