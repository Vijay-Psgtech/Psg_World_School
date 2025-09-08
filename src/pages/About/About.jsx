import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGlobe,
  FaBookOpen,
  FaSchool,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
import AboutBanner from "../../assets/images/campus/campus16.png";
import AboutBanner2 from "../../assets/images/campus/campus18.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};
const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const About = () => {
  const text = `"Education is not the filling of a pail, but the lighting of a fire." 
  Our journey blends innovation with values, preparing students to thrive as global citizens.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const features = [
    {
      icon: <FaUniversity />,
      text: "A century-old PSG legacy driving global excellence.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaGlobe />,
      text: "IB network recognition, trusted by top universities.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <FaBookOpen />,
      text: "Full IB continuum: PYP, MYP, DP, and CP.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaSchool />,
      text: "World-class campus designed for inquiry and innovation.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: <FaLightbulb />,
      text: "Future-ready skills: leadership, research, and digital literacy.",
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      icon: <FaHeart />,
      text: "Rooted in service, values, and social responsibility.",
      color: "from-red-400 to-orange-500",
    },
  ];

  // Typewriter Effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 40); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      >
        <div className="absolute inset-0 bg-blue-900/24"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight drop-shadow-lg">
            <span className="text-black">About</span>{" "}
            <span className="text-yellow-500">Us</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-900 max-w-3xl mx-auto">
            A Century of Excellence • A Future of Global Learning
          </p>
          <div className="w-28 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </section>

      {/* Our Story */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-br from-white via-[#fdfbf7] to-[#faf7f0]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-['Playfair_Display'] font-bold">
              <span className="text-black">Our</span>{" "}
              <span className="text-yellow-500">Story</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mt-4 mb-6"></div>
            <p className="text-lg text-blue-950 leading-relaxed text-justify">
              Rooted in the 100-year heritage of PSG Institutions, PSG World
              School stands as a beacon of tradition and innovation. With
              authorization as an IB World School, we ensure our learners
              experience education aligned with globally benchmarked
              International Baccalaureate philosophy.
            </p>
          </div>

          {/* Typewriter Card */}
          <div className="bg-amber-200 shadow-lg rounded-2xl border border-[#f2e7d7] p-6 relative">
            <motion.p className="text-blue-950 italic leading-relaxed text-lg sm:text-xl">
              {displayedText}
              <span className="animate-pulse text-blue-900">|</span>
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBanner2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3f]/90 via-[#112a55]/25 to-[#c5a45f]/70"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="text-5xl font-['Playfair_Display'] font-bold drop-shadow-lg">
            <span className="text-black">Our</span>{" "}
            <span className="text-yellow-500">Vision</span>
          </h2>
          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-4 mb-6"></div>
          <p className="text-zinc-200 text-lg leading-relaxed">
            To nurture ethical, empathetic, and future-ready leaders through
            values-driven, inquiry-based education—shaping global citizens who
            inspire change.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Title Section */}
          <div className="text-left space-y-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold leading-tight">
              <span className="text-black">Our</span>{" "}
              <span className="text-yellow-500">Mission</span>
            </h2>
            <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600"></div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              PSG IB World School commits to academic rigor balanced with
              compassion, creativity, and intercultural understanding.
            </p>
          </div>

          {/* Right Content Section */}
          <motion.div
            variants={fadeInUp}
            className="relative p-10 rounded-2xl shadow-lg bg-gradient-to-r from-white via-[#fff9f0] to-[#f6d365] border border-[#f2e7d7] transition transform hover:shadow-2xl hover:scale-105"
          >
            {/* Triangle Accent */}
            <div className="absolute -left-6 top-6 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-[#f6d365] border-b-[40px] border-b-transparent"></div>

            <ul className="space-y-4 text-gray-800 font-medium relative z-10">
              {[
                "Empower students with curiosity and courage to make a difference.",
                "Cultivate principled learners for a sustainable future.",
                "Deliver a globally relevant and value-driven curriculum.",
                "Nurture creativity, reflection, and social responsibility.",
                "Inspire kindness, innovation, and lifelong learning.",
                "Foster resilience, inclusivity, and excellence in all pursuits.",
              ].map((m, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 group hover:text-yellow-700 transition"
                >
                  <span className="text-yellow-600 font-bold group-hover:scale-125 transition">
                    ✦
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Motto */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#2b5ed4] via-[#112a55] to-[#0c42be]">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
          <span className="text-black">Our</span>{" "}
          <span className="text-yellow-500">Motto</span>
        </h2>
        <p className="text-2xl font-semibold text-yellow-200 tracking-wide">
          i³
          <br />
          Ignite • Innovate • Inspire
          <br />
        </p>
      </section>

      {/* Why Choose Us */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-br from-white via-[#fdfbf7] to-[#faf7f0]"
      >
        {/* Section Heading */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold">
            <span className="text-black">Why</span>{" "}
            <span className="text-yellow-500">Choose</span>{" "}
            <span className="text-black">PSG</span>{" "}
            <span className="text-yellow-500">World</span>{" "}
            <span className="text-black">School</span>{" "}
            <span className="text-yellow-500">IB?</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mx-auto mt-4"></div>
        </div>

        {/* Highlighted Features */}
        <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
          {/* Background subtle circles */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-white text-xl mb-4 shadow-md`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default About;
