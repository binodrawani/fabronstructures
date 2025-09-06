"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Metadata } from "next";

const projects = [
    {
      title: "Steel Detailing Project A",
      description: "Comprehensive detailing for a commercial building structure.",
    },
    {
      title: "Bridge Design Project B",
      description: "Structural detailing for a large-scale bridge project.",
    },
    {
      title: "Industrial Plant Project C",
      description: "3D modeling and detailing for industrial structures.",
    },
  ];

const Portfolio = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-50 py-46 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our <span className="text-blue-600">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <Briefcase className="text-blue-600 w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Portfolio;
