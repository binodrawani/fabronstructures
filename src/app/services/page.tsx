"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaPalette, FaLightbulb } from "react-icons/fa";
import { Metadata } from "next";

const myservices = [
  {
    icon: <FaLaptopCode size={40} className="text-white" />,
    title: "Shop Drawings",
    description: "From concept to fabrication, ourFrom concept to fabrication, our shop drawings bring clarity to steel structures.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <FaDatabase size={40} className="text-white" />,
    title: "Erections drawings",
    description: "These drawings guide erectors with clear layouts, connection details, and member positions for safe and efficient steel structure installation",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <FaPalette size={40} className="text-white" />,
    title: "3D IFC model",
    description: "The IFC model delivers a clear 3D view of steel members and connections, reducing errors and improving accuracy in fabrication and erection",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: <FaLightbulb size={40} className="text-white" />,
    title: "Advanced bill of materials and KSS report",
    description: "Advanced BOM and KSS reports provide accurate material lists and part information, ensuring optimized procurement and fabrication planning",
    color: "from-yellow-400 to-yellow-600",
  },
];

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-36 px-6 md:px-16">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-16">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {myservices.map((service, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-3xl shadow-xl bg-gradient-to-r ${service.color} hover:scale-105 transform transition-transform duration-300 cursor-pointer`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-6">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-white mb-4">{service.title}</h2>
            <p className="text-white">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
