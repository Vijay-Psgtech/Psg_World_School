import React, { useEffect, useState } from "react";
import BannerImg1 from "../../assets/images/banner/b1.png";
import BannerImg2 from "../../assets/images/banner/b2.png";
import BannerImg3 from "../../assets/images/banner/b3.png";
import BannerImg4 from "../../assets/images/banner/b4.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaAward } from "react-icons/fa";

const images = [BannerImg1, BannerImg2, BannerImg3, BannerImg4];

const tagline = "“Empowering Young Minds to Lead with Purpose in a Global Future”";

function Banner() {
  const [current, setCurrent] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
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
    <div className="relative h-[670px] md:h-[680px] lg:h-[750px] font-sans overflow-hidden">
      {/* Background Image Carousel*/}
      <AnimatePresence>
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
        <h2 className="text-lg md:text-2xl font-sans font-extrabold text-[#B18141] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] mb-4 tracking-wide text-center md:text-left">
         {displayedText}
        </h2>

        {/* <p className="text-sm text-white mb-6 text-center md:text-left"> <span className="inline-block bg-black/30 px-3 py-1 rounded-full text-xs md:text-lg" style={{ fontFamily: "Inter, sans-serif" }}> ✦ We are in the process of IB authorization and will soon become a candidacy school ✦</span></p> */}

        {/* Main Text */}
        <p className="text-sm md:text-lg lg:text-xl text-white/90 font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] leading-relaxed max-w-2xl font-light mb-10 text-center md:text-left" style={{ fontFamily: "Inter, sans-serif" }}>
          At <span className="text-[#B18141] font-bold">PSG World School</span>, we believe education is not just about learning — it’s about becoming. As a World School, we nurture curiosity, creativity, and compassion, preparing every learner to thrive in the world’s best universities and, more importantly, to shape a better tomorrow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primary */}
          <a
            href="#"
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-xl font-small md:font-medium shadow-md hover:bg-[#1D4ED8] transition"
          >
            Explore our Journey <span className="ml-2">➔</span>
          </a>

          {/* Secondary */}
          <a
            href="#"
            className="bg-[#B18141] text-blue-900 px-6 py-3 rounded-xl font-small md:font-medium shadow-md hover:bg-yellow-700 transition"
          >
            Book a Campus Visit <FaPhoneAlt className="inline ml-2" />
          </a>

          {/* Outline */}
          <a
            href="/admissions"
            className="bg-transparent text-white border border-white px-6 py-3 rounded-xl font-small md:font-medium shadow-md hover:bg-white/10 transition"
          >
            Admissions 2026–27 Open <span className="ml-2">➔</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Banner;
