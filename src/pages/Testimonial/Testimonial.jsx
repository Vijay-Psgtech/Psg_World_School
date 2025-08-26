import React from "react";
import BgImg from "../../assets/images/banner.png";
import { motion } from "framer-motion";
import { fadeIn } from '../../utils/Variants';

const testimonials = [
  {
    quote:
      '"PSG World School has been transformative for my child. The focus on innovation, creativity, and life skills is unparalleled."',
    author: "Student's Parent",
  },
  {
    quote:
      '"The holistic approach at PSG World School has brought out the best in my child, academically and beyond."',
    author: "Parent of Grade 11 Student",
  },
];

const Testimonial = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-16">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 z-0" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/80 via-gray-400/70 to-gray-400/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.h2 
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          className="text-5xl font-bold text-white text-center mb-12 tracking-wide">
          Testimonials
        </motion.h2>

        <motion.div 
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full px-4 md:px-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8 flex flex-col justify-between text-center w-full md:w-1/3"
            >
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium flex-grow">
                {item.quote}
              </p>
              <p className="font-bold text-gray-800">- {item.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
