import React from "react";
import BannerImg from "../../assets/images/banner.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="relative h-[600px] lg:h-[720px]">
      {/* Banner Image */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-5" />
      {/* Banner Content - Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col justify-center items-start z-20 text-left px-4 md:px-16 lg:px-24"
      >
        <p className="text-xl font-bold md:text-2xl text-white/80 mb-8 max-w-lg">
          PSG World School nurtures young minds to become leaders of tomorrow.
          Join a vibrant community focused on holistic development, innovation,
          and lifelong learning.
        </p>
        <div className="flex gap-4">
          <a
            href="#admission-enquiry"
            className="bg-yellow-500 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-yellow-600 transition"
          >
            Admission Enquiry
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Explore More
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
