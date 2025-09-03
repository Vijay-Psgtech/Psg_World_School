import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Campus1 from "../../assets/images/campus/campus1.png";
import Campus2 from "../../assets/images/campus/campus2.jpg";
import Campus3 from "../../assets/images/campus/campus3.png";
import Campus4 from "../../assets/images/campus/campus4.png";
import Campus5 from "../../assets/images/campus/campus5.jpg";
import Campus6 from "../../assets/images/campus/campus6.png";

const newsData = [
  {
    title: "School Reopens for the New Academic Year",
    img: Campus1,
    date: "2024-06-01",
    desc: "PSG World School is excited to welcome students back for the new academic year. We have implemented new safety protocols to ensure a safe learning environment.",
  },
  {
    title: "Annual Sports Day Highlights",
    img: Campus2,
    date: "2024-05-15",
    desc: "The Annual Sports Day was a grand success with students showcasing their athletic talents. Congratulations to all participants and winners!",
  },
  {
    title: "Science Fair 2024",
    img: Campus3,
    date: "2024-04-20",
    desc: "Our Science Fair featured innovative projects from students across all grades. It was inspiring to see their creativity and scientific thinking in action.",
  },
  {
    title: "Cultural Fest Celebrations",
    img: Campus4,
    date: "2024-03-30",
    desc: "The Cultural Fest brought together students, teachers, and parents to celebrate diversity through music, dance, and art. A memorable event for all!",
  },
  {
    title: "School Reopens for the New Academic Year",
    img: Campus5,
    date: "2024-06-01",
    desc: "PSG World School is excited to welcome students back for the new academic year. We have implemented new safety protocols to ensure a safe learning environment.",
  },
  {
    title: "Annual Sports Day Highlights",
    img: Campus6,
    date: "2024-05-15",
    desc: "The Annual Sports Day was a grand success with students showcasing their athletic talents. Congratulations to all participants and winners!",
  },
];

const News = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50 font-sans">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-blue-600 mb-6 mx-auto rounded-full"></div>
        <h4 className="text-blue-900 font-semibold mb-3 tracking-widest uppercase text-sm">
          Latest updates
        </h4>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 drop-shadow-sm">
          News & Events
        </h1>
      </div>

      {/* News Cards */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-12 no-scrollbar"
        >
          {newsData.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[320px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs font-semibold text-red-600 mb-2">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Read More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default News;
