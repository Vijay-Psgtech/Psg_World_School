import React, { useEffect, useState } from "react";
import BannerImg1 from "../../assets/images/banner/b1.png";
import BannerImg2 from "../../assets/images/banner/b2.png";
import BannerImg3 from "../../assets/images/banner/b3.png";
import BannerImg4 from "../../assets/images/banner/b4.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const images = [BannerImg1, BannerImg2, BannerImg3, BannerImg4];

const tagline = "“Empowering Young Minds to Lead with Purpose in a Global Future”";

function Banner() {
  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // TypeWriter Effect
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
        <h2 className="text-lg md:text-2xl font-sans font-extrabold text-[#D4AF37] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] mb-4 tracking-wide text-center md:text-left">
         {displayedText}
        </h2>

        {/* Main Text */}
        <p className="text-sm md:text-lg lg:text-xl text-white/90 font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] leading-relaxed max-w-2xl font-light mb-10 text-center md:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
          At <span className="text-[#D4AF37] font-bold">PSG World School</span>, we believe education is not just about learning — it’s about becoming. As an IB World School, we nurture curiosity, creativity, and compassion, preparing every learner to thrive in the world’s best universities and, more importantly, to shape a better tomorrow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary */}
          <a
            href="#"
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-small md:font-medium shadow-md hover:bg-[#1D4ED8] transition"
          >
            Explore IB Journey <span className="ml-2">➔</span>
          </a>

          {/* Secondary */}
          <a
            href="#"
            className="bg-[#D4AF37] text-blue-900 px-6 py-3 rounded-full font-small md:font-medium shadow-md hover:bg-yellow-500 transition"
          >
            Book a Campus Visit <FaPhoneAlt className="inline ml-2" />
          </a>

          {/* Outline */}
          <a
            href="/admissions"
            className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-small md:font-medium shadow-md hover:bg-white/10 transition"
          >
            Admissions 2026–27 Open <span className="ml-2">➔</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
