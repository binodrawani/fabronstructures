"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { motion } from "framer-motion";
import { CheckCircle, Target, Rocket } from "lucide-react";

import { Metadata } from "next";


const services = [
  "Shop drawings",
  "Erections drawings",
  "Advanced bill of materials and KSS report",
  "Field/shop Bolt List Reports / point-to-point bolt List",
  "CNC, DXF Files, CAD Files",
  "Customize drawing title blocks and reports",
  "3D IFC model",
];

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen py-42 ">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          About <span className="text-yellow-300">Fabron Structures</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Delivering accurate, reliable, and cost-effective steel detailing
          solutions worldwide with expertise, innovation, and trust.
        </motion.p>
      </section>

      {/* Company Intro */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <span className="font-semibold">Fabron Structures</span> is a
            specialized structural steel detailing company delivering solutions
            for fabricators, engineers, and contractors worldwide. Our team
            brings technical expertise, industry knowledge, and advanced tools
            to every project — from shop drawings and erection drawings to 3D
            modelling and CNC/NC files.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Proficient in Autodesk Advance Steel and Tekla Structures, we ensure
            high-precision models and error-free drawings that meet global
            standards including{" "}
            <span className="font-semibold">
              AISC (American Institute of Steel Construction)
            </span>{" "}
            and{" "}
            <span className="font-semibold">
              OSHA (Occupational Safety and Health Administration)
            </span>
            .
          </p>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">Fabron Structures</span>, we
            believe every successful structure begins with precise detailing.
            With advanced software, international standards, and a skilled team,
            we turn vision into reality with clarity, accuracy, and trust.
          </p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our <span className="text-blue-600">Vision & Mission</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.2 }}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4"
          >
            <Target className="text-blue-600 w-8 h-8" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To be recognized as a global leader in steel detailing by setting
            benchmarks in quality, innovation, and trust.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.2 }}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4"
          >
            <Rocket className="text-green-600 w-8 h-8" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To provide accurate, reliable, and cost-effective structural steel
            detailing services that empower fabricators, engineers, and
            contractors.
          </p>
        </motion.div>
      </div>
    </section>


      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What We <span className="text-blue-600">Provide</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;
