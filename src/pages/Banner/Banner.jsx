import React, { useEffect, useState } from "react";
import BannerImg1 from "../../assets/images/banner/b1.png";
import BannerImg2 from "../../assets/images/banner/b2.png";
import BannerImg3 from "../../assets/images/banner/b3.png";
import BannerImg4 from "../../assets/images/banner/b4.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const images = [BannerImg1, BannerImg2, BannerImg3, BannerImg4];

// Tagline text for typewriter
const tagline = "Empowering Young Minds to Lead with Purpose";

function Banner() {
  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Image Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    if (index < tagline.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + tagline.charAt(index));
        setIndex(index + 1);
      }, 80); // typing speed in ms
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative h-[600px] sm:h-[650px] md:h-[700px] lg:h-[780px] xl:h-[850px] font-sans overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${images[current]})` }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 h-full flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:px-12 lg:px-20"
      >
        {/* Tagline with typewriter */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-extrabold text-[#D4AF37] mb-4 tracking-wide text-center md:text-left drop-shadow-md leading-snug">
          {displayedText}
          <span className="animate-pulse">|</span> {/* blinking cursor */}
        </h2>

        {/* Main Text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-2xl md:max-w-3xl mb-8 text-center md:text-left drop-shadow-md">
          Discover a world-class learning environment where curiosity meets
          opportunity. Our IB curriculum, global standards, and nurturing
          faculty empower every student to excel academically and grow as
          compassionate leaders.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <a
            href="#"
            className="bg-blue-800 text-white px-6 sm:px-7 py-3 text-sm sm:text-base lg:text-lg rounded-full font-semibold shadow-lg hover:bg-blue-900 hover:scale-105 transform transition duration-300 text-center"
          >
            Explore IB Journey <span className="ml-2">➔</span>
          </a>
          <a
            href="#"
            className="bg-[#D4AF37] text-blue-900 px-6 sm:px-7 py-3 text-sm sm:text-base lg:text-lg rounded-full font-semibold shadow-lg hover:bg-yellow-500 hover:scale-105 transform transition duration-300 text-center"
          >
            Book a Campus Visit <FaPhoneAlt className="inline ml-2" />
          </a>
          <a
            href="/admissions"
            className="bg-transparent text-white border border-white px-6 sm:px-7 py-3 text-sm sm:text-base lg:text-lg rounded-full font-semibold shadow-lg hover:bg-white/20 hover:scale-105 transform transition duration-300 text-center"
          >
            Admissions 2026–27 Open <span className="ml-2">➔</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;

