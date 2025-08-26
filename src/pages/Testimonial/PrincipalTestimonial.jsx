import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import TestimonialImg from "../../assets/images/trustee.png";
import { motion } from "framer-motion";
import { fadeIn, TextZoomIn } from '../../utils/Variants';

function PrincipalTestimonial() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100 py-20 flex flex-col justify-center items-center">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <p className="w-20 mx-auto border-t-4 border-blue-600 mb-4"></p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          From the Desk of the Principal
        </h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-20">
        {/* Left Image Card */}
        <div className="relative w-full md:w-1/2 max-w-md rounded-2xl overflow-hidden shadow-xl bg-white transform hover:scale-105 transition duration-500">
          <img
            src={TestimonialImg}
            alt="Principal"
            className="w-full h-[420px] object-cover object-top rounded-2xl"
          />
          {/* Decorative Quote Icon */}
          <FaQuoteLeft className="absolute top-6 left-6 text-yellow-400 text-4xl drop-shadow-lg" />
        </div>

        {/* Right Content */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full md:w-1/2 max-w-2xl">
          <FaQuoteRight className="absolute top-6 right-6 text-blue-300 text-4xl opacity-50" />
          <motion.p 
            variants={TextZoomIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            At <span className="font-semibold text-blue-700">PSG World School</span>, 
            we believe in nurturing every child’s unique potential through holistic education. 
            Our dedicated faculty, modern facilities, and innovative curriculum empower students 
            to become confident, responsible, and compassionate individuals. 
            We strive to create a vibrant learning environment that encourages curiosity, 
            creativity, and lifelong learning. Together, we are shaping future leaders who will 
            make a positive impact on society.
          </motion.p>
          <span className="block text-blue-700 font-semibold text-right text-lg">
            – Principal
          </span>
        </div>
      </div>
    </section>
  );
}

export default PrincipalTestimonial;
