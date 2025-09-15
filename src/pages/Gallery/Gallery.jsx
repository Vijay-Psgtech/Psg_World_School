import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../../assets/images/a1.png";
import img2 from "../../assets/images/a2.png";
import img3 from "../../assets/images/a4.png";
import img4 from "../../assets/images/room1.jpg";
import img5 from "../../assets/images/ap5.png";
import img6 from "../../assets/images/building1.png";
import img7 from "../../assets/images/building2.png";

const Gallery = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50 font-sans">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-blue-600 mb-6 mx-auto rounded-full"
        ></motion.div>
        <h4 className="text-blue-800 font-semibold mb-3 tracking-wide uppercase text-sm">
          <Typewriter
            words={["Galleria", "PSG World's Gallery"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h4>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 drop-shadow-sm">
          PSG World's Gallery
        </h1>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <img
            src={img1}
            alt="Gallery"
            className="rounded-lg shadow-md border-3 border-blue-900 cursor-pointer hover:scale-105 transition"
            loading="lazy"
          />
        </div>

        {/* Left middle column */}
        <div className="flex flex-col gap-4">
          <img
            src={img2}
            alt="Gallery"
            className="rounded-lg shadow-md border-3 border-blue-900 cursor-pointer hover:scale-105 transition"
            loading="lazy"
          />
          <img
            src={img3}
            alt="Gallery"
            className="rounded-lg shadow-md border-3 border-blue-900 cursor-pointer hover:scale-105 transition"
            loading="lazy"
          />
        </div>

        {/* Center big image */}
        <div className="md:col-span-1 lg:col-span-1">
          <img
            src={img4}
            alt="Gallery"
            className="rounded-lg shadow-xl border-3 border-blue-900 cursor-pointer hover:scale-105 transition w-full h-[450px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right middle column */}
        <div className="flex flex-col gap-4">
          <img
            src={img5}
            alt="Gallery"
            className="rounded-lg shadow-md border-3 border-blue-900 cursor-pointer hover:scale-105 transition"
            loading="lazy"
          />
          <img
            src={img6}
            alt="Gallery"
            className="rounded-lg shadow-md border-3 border-blue-900 cursor-pointer hover:scale-105 transition"
            loading="lazy"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <img
            src={img7}
            alt="Gallery"
            className="rounded-lg shadow-md border-3 border-blue-900 cursor-pointer hover:scale-105 transition"
            loading="lazy"
          />
        </div>
      </div>

      {/* View all button */}
      <div className="mt-10 text-center">
        <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md transition">
          View All Photos
        </button>
      </div>
    </section>
  );
};

export default Gallery;
