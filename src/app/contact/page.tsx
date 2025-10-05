"use client";
import React, { useState, useEffect } from "react";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react"; // icons

const ContactPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (This is just a demo.)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-42">
      <div
        className={`w-full max-w-5xl grid md:grid-cols-2 gap-10 items-start transform transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Side - Contact Info */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to us through the form or directly via the details below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-purple-500" />
                <span className="text-gray-700">Sector-4, Bokaro Steel City, Jharkhand 827004, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-500" />
                <span className="text-gray-700">projects@fabronstructures.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white transition"
              >
                F
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white transition"
              >
                T
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white transition"
              >
                in
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.76060673423!2d77.0688998!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3f8f8c6e23%3A0x80d82fb1f7e9d2c!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <User className="w-5 h-5 text-purple-500" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <Mail className="w-5 h-5 text-purple-500" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <MessageSquare className="w-5 h-5 text-purple-500" /> Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
            >
               Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
