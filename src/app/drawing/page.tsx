
"use client";
import React, { useEffect, useState } from "react";

const drawings = [
  { id: 1, title: "Drawing 1", img: "/images/drawing/comingsoon.jpg" },
  { id: 2, title: "Drawing 2", img: "/images/drawing/comingsoon.jpg" },
  { id: 3, title: "Drawing 3", img: "/images/drawing/comingsoon.jpg" },
  { id: 4, title: "Drawing 4", img: "/images/drawing/comingsoon.jpg" },
];

const Drawing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-8 py-42">
      {/* Animated heading */}
      <h1 className={`text-5xl font-bold text-center mb-12 transition-transform duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        Sample Drawings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {drawings.map((drawing, index) => (
          <div
            key={drawing.id}
            className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
            style={{
              animation: loaded
                ? `fadeInUp 0.5s ease forwards ${index * 0.1}s`
                : "none",
            }}
          >
            <img
              src={drawing.img}
              alt={drawing.title}
              className="w-full h-64 object-cover "
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <h2 className="text-white text-lg font-semibold">{drawing.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    </>
  );
};
export default Drawing;
