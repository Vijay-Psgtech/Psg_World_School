import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import Campus1 from "../../assets/images/campus/campus1.png";
import Campus2 from "../../assets/images/campus/campus2.jpg";
import Campus3 from "../../assets/images/campus/campus3.png";
import Campus4 from "../../assets/images/campus/campus4.png";
import Campus5 from "../../assets/images/campus/campus5.jpg";
import Campus6 from "../../assets/images/campus/campus6.png";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "School Reopens for the New Academic Year",
      img: Campus1,
      date: "June 1, 2024",
      desc: "Excited to welcome students back with new safety protocols.",
    },
    {
      id: 2,
      title: "Annual Sports Day Highlights",
      img: Campus2,
      date: "May 15, 2024",
      desc: "A grand success with amazing athletic performances.",
    },
    {
      id: 3,
      title: "Science Fair 2024",
      img: Campus3,
      date: "April 20, 2024",
      desc: "Students showcased creativity and scientific thinking.",
    },
    {
      id: 4,
      title: "Cultural Fest Celebrations",
      img: Campus4,
      date: "March 30, 2024",
      desc: "Celebrating diversity with music, dance & art.",
    },
    {
      id: 5,
      title: "New Academic Initiatives",
      img: Campus5,
      date: "Feb 10, 2024",
      desc: "Launching new programs for skill-based learning.",
    },
    {
      id: 6,
      title: "Students Shine in Competitions",
      img: Campus6,
      date: "Jan 20, 2024",
      desc: "Proud moments as students win regional awards.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 3) % newsData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 3 + newsData.length) % newsData.length);
  };

  const visibleCards = [
    newsData[current],
    newsData[(current + 1) % newsData.length],
    newsData[(current + 2) % newsData.length],
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50 font-sans">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-blue-600 mb-6 mx-auto rounded-full"></div>
        <h4 className="text-blue-900 font-semibold mb-3 tracking-widest uppercase text-sm">
          Latest Updates
        </h4>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 drop-shadow-sm">
          News & Events
        </h1>
      </div>

      {/* News Cards */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {visibleCards.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-red-600 uppercase">
                  {item.date}
                </p>
                <h3 className="text-lg font-semibold mt-2 text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows at bottom */}
        <div className="flex gap-6 mt-10 items-center">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white border shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft size={22} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white border shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight size={22} className="text-gray-700" />
          </button>
        </div>

        {/* Read More */}
        <div className="mt-6">
          <a
            href="#"
            className="text-blue-700 font-medium hover:underline flex items-center gap-1"
          >
            Read More <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
