import React, { useEffect, useState } from "react";
import BannerImg1 from "../../assets/images/banner/b1.png";
import BannerImg2 from "../../assets/images/banner/b2.png";
import BannerImg3 from "../../assets/images/banner/b3.png";
import BannerImg4 from "../../assets/images/banner/b4.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const images = [BannerImg1, BannerImg2, BannerImg3, BannerImg4];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[580px] md:h-[650px] lg:h-[720px] font-sans overflow-hidden">
      {/* Background Image Carousel*/}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${images[current]})` }}
        ></motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-blue-950/24 to-transparent"></div>

      {/* Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
      >
        {/* Tagline */}
        <h2 className="text-xl md:text-2xl font-serif font-extrabold text-[#D4AF37] mb-4 tracking-wide text-center md:text-left">
          Empowering Young Minds to Lead with Purpose
        </h2>

        {/* Main Text */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-bold leading-relaxed max-w-2xl font-light mb-10 text-center md:text-left">
          Discover a world-class learning environment where curiosity meets
          opportunity. Our IB curriculum, global standards, and nurturing
          faculty empower every student to excel academically and grow as
          compassionate leaders.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary */}
          <a
            href="#"
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#1D4ED8] transition"
          >
            Explore IB Journey <span className="ml-2">➔</span>
          </a>

          {/* Secondary */}
          <a
            href="#"
            className="bg-[#D4AF37] text-blue-900 px-6 py-3 rounded-full font-medium shadow-md hover:bg-yellow-500 transition"
          >
            Book a Campus Visit <FaPhoneAlt className="inline ml-2" />
          </a>

          {/* Outline */}
          <a
            href="/admissions"
            className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-white/10 transition"
          >
            Admissions 2026–27 Open <span className="ml-2">➔</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
