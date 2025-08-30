import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Library,
  FlaskConical,
  Dumbbell,
  Music,
  Palette,
  Leaf,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import AboutBanner from "../../assets/images/ap3.png";
import ClassRoom1 from "../../assets/images/room1.jpg";
import ClassRoom2 from "../../assets/images/room2.jpg";
import ClassRoom3 from "../../assets/images/Classroom3.jpg";

// Reusable Heading
const SectionHeading = ({ first, second, center, light }) => (
  <h2
    className={`text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-6 ${
      light ? "text-white" : "text-gray-900"
    } ${center ? "text-center" : ""}`}
  >
    <span className={light ? "text-white" : "text-black"}>{first} </span>
    <span className="text-yellow-500">{second}</span>
  </h2>
);

const FacilitiesPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const facilities = [
    {
      icon: <Palette className="w-10 h-10 text-pink-500" />,
      title: "Learning Spaces",
      desc: "Smart classrooms, flexible learning zones, and IB studios designed for inquiry.",
      img: ClassRoom3,
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-green-500" />,
      title: "Innovation Labs",
      desc: "Robotics, AI, 3D printing, design thinking, and sustainability projects.",
      img: ClassRoom2,
    },
    {
      icon: <Music className="w-10 h-10 text-indigo-500" />,
      title: "Arts & Culture",
      desc: "Performing arts theatre, music and dance studios, visual arts atelier.",
      img: ClassRoom1,
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-orange-500" />,
      title: "Sports & Wellness",
      desc: "Olympic-sized swimming pool, multi-sport grounds, indoor arenas, yoga and mindfulness programs.",
      img: ClassRoom2,
    },
    {
      icon: <Library className="w-10 h-10 text-yellow-600" />,
      title: "Library & Research Hub",
      desc: "Print, digital, and global resources integrated with IB learner projects.",
      img: ClassRoom1,
    },
    {
      icon: <Leaf className="w-10 h-10 text-emerald-600" />,
      title: "Sustainability Campus",
      desc: "Eco-conscious architecture, green zones, waste-to-energy initiatives.",
      img: ClassRoom3,
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800 leading-relaxed tracking-normal">
      {/* Banner */}
      <section className="relative h-[650px] flex items-end justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={AboutBanner}
          alt="Facilities Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
            Campus <span className="text-yellow-400">& Facilities</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-light">
            A Learning Environment that Inspires Excellence
          </p>
        </motion.div>
      </section>

      {/* Facilities with Expandable Panels */}
      <section className="bg-gradient-to-br from-white via-[#fdfbf7] to-[#faf7f0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading first="Our" second="Facilities" center />

          <div className="flex flex-col gap-8 mt-12">
            {facilities.map((facility, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-[#f2e7d7] overflow-hidden"
              >
                {/* Card Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    {facility.icon}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {facility.title}
                    </h3>
                  </div>
                  <span className="text-gray-500 text-2xl leading-none">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable Panel */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-t border-gray-200">
                        <motion.img
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          src={facility.img}
                          alt={facility.title}
                          className="rounded-xl shadow-md object-cover w-full h-64"
                        />
                        <motion.p
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-gray-600 text-lg leading-relaxed flex items-center"
                        >
                          {facility.desc}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#2b5ed4] via-[#112a55] to-[#0c42be] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <SectionHeading first="Begin" second="Your Journey" center light />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-200 mb-8 text-lg"
          >
            At PSG World School, world-class infrastructure empowers world-class
            learners.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#apply"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
            >
              Apply Now
            </a>
            <a
              href="#visit"
              className="border-2 border-yellow-300 text-yellow-100 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Book a Visit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
