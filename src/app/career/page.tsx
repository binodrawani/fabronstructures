"use client";
import React, { useState, useEffect } from "react";

const careers = [
  {
    title: "Senior .NET Developer",
    location: "Remote / India",
    type: "Full-Time",
  },
  {
    title: "Frontend Developer (React)",
    location: "Bangalore, India",
    type: "Full-Time",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / India",
    type: "Contract",
  },
  {
    title: "DevOps Engineer",
    location: "Hyderabad, India",
    type: "Full-Time",
  },
];

const CareerPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-42">
      {/* Hero Section */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Join Our Team
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re always looking for talented individuals to help us grow. Check out
          our open positions below and apply today!
        </p>
      </div>

      {/* Open Positions */}
      <p className="text-gray-600 text-lg px-60">
          You can directly send us your resume at{" "}
          <a href="mailto:email@example.com" className="text-indigo-600 hover:underline">
            projects@fabronstructures.com
          </a>{" "}
          else fill out the below form.
        </p>
        {/* Horizontal bar */}
        <div className="my-2 flex items-center justify-center">
  <div className="w-1/4 border-t border-dashed border-gray-300"></div>
  <span className="mx-4 text-gray-500">🌟</span>
  <div className="w-1/4 border-t border-dashed border-gray-300"></div>
</div>
        {/* Resume upload form */}
        <div className=" flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Career Application
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              
              className="mt-1 block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
    {/* End of upload resume form */}
    
        {/* Horizontal line1 */}
      
        {/* HOrizontal Line3 */}
        <div className="my-12 w-full h-16 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
  <p className="text-gray-600 font-medium">Ready to build your career with us</p>
</div>
        {/* HOrizontal Line4 */}
        

    </div>

  );
};

export default CareerPage;
