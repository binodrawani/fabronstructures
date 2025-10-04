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
          We're always looking for talented individuals to help us grow. Check out
          our open positions below and apply today!
        </p>
      </div>

      {/* Open Positions */}
      <p className="text-gray-600 text-lg">
          No positions are available at the moment. You can still send us your resume at{" "}
          <a href="mailto:email@example.com" className="text-indigo-600 hover:underline">
            projects@fabronstructures.com
          </a>{" "}
          and we’ll reach out when an opportunity arises.
        </p>
    </div>
  );
};

export default CareerPage;
