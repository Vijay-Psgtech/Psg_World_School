import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Library,
  FlaskConical,
  Dumbbell,
  Music,
  Palette,
  Globe,
  ShieldCheck,
  Bus,
  Baby,
  Star,
  PhoneCall
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";


// Import your images
import AboutBanner from "../../assets/images/banner-bg3.png";
import ClassRoom from "../../assets/images/Classroom.jpg";
import ClassRoom1 from "../../assets/images/room1.jpg";
import ClassRoom2 from "../../assets/images/room2.jpg";
import ClassRoom3 from "../../assets/images/Classroom3.jpg";

const FacilitiesPage = () => {
  const [activeTab, setActiveTab] = useState("labs");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const tabs = [
    { id: "smart", label: "Smart Classrooms" },
    { id: "labs", label: "Labs That Spark Discovery" },
    { id: "library", label: "Library & Reading Lounge" },
    { id: "sports", label: "Sports & Physical Education" },
  ];

  const content = {
    smart: {
      title: "Smart Classrooms",
      desc: [
        "Interactive boards and flexible seating for hands-on learning.",
        "Technology-enabled classrooms that support inquiry-based learning.",
        "Air-conditioned and ergonomically designed for comfort.",
      ],
      img: ClassRoom,
    },
    labs: {
      title: "Labs That Spark Discovery",
      desc: [
        "🔬 Science Laboratories: Dedicated Physics, Chemistry, and Biology labs that promote experiential learning, observation, and inquiry.",
        "💻 Computer Lab: State-of-the-art systems with high-speed internet and educational software to build coding, research, and digital literacy skills.",
        "⚙️ STEM Lab: A hands-on innovation zone with tools for robotics, design thinking, and engineering challenges aligned to global STEM standards.",
      ],
      img: ClassRoom3,
    },
    library: {
      title: "Library & Reading Lounge",
      desc: [
        "A well-stocked library with books, journals, and digital resources.",
        "Encourages independent thinking and lifelong reading habits.",
        "Dedicated lounge spaces for research and quiet study.",
      ],
      img: ClassRoom1,
    },
    sports: {
      title: "Sports & Physical Education",
      desc: [
        "Extensive indoor & outdoor sports facilities for overall fitness.",
        "Yoga & wellness sessions that promote balance and teamwork.",
        "Special zones for early learners to develop motor skills.",
      ],
      img: ClassRoom2,
    },
  };

const amenities = [
  {
    id: 1,
    title: "Joyful Early Years: Kindergarten Zone",
    desc: "Designed specifically for our youngest learners, our Kindergarten spaces prioritize:",
    icon: <Baby className="w-10 h-10 text-pink-500" />,
    points: [
      "Safe, hygienic, and vibrant classrooms",
      "Child-friendly furniture and sensory corners",
      "Emphasis on emotional safety, imagination, and routine",
      "Play-based, age-appropriate learning materials",
      "Outdoor learning corners and mini playgrounds",
    ],
  },
  {
    id: 2,
    title: "Safe & Comfortable Transport",
    desc: "Our school transport service is efficient, safe, and child-friendly:",
    icon: <Bus className="w-10 h-10 text-indigo-500" />,
    points: [
      "GPS-enabled buses with real-time tracking",
      "Optimized routes for student convenience",
      "Experienced drivers and trained lady attendants",
      "Strict hygiene and vehicle maintenance protocols",
    ],
  },
  {
    id: 3,
    title: "Safety & Security",
    desc: "Your child’s well-being is our top priority. We follow strict safety protocols:",
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    points: [
      "24x7 CCTV surveillance across key campus zones",
      "ESG Certification: Meeting global Environmental, Social, and Governance standards",
      "Regular evacuation drills and child protection workshops",
      "Fire Safety Equipment",
    ],
  },
];




  const facilities = [
    {
      icon: <Library className="w-12 h-12 text-indigo-500" />,
      title: "Modern Library",
      desc: "A rich collection of books, journals, and digital resources.",
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-green-500" />,
      title: "Science Labs",
      desc: "Advanced labs to nurture scientific curiosity and innovation.",
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-red-500" />,
      title: "Sports Complex",
      desc: "Indoor & outdoor facilities to boost fitness and teamwork.",
    },
    {
      icon: <Music className="w-12 h-12 text-yellow-500" />,
      title: "Music Room",
      desc: "A creative hub for students to explore rhythm and melody.",
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-500" />,
      title: "Art Studio",
      desc: "A colorful space for creativity, painting, and sculpture.",
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Global Exchange",
      desc: "Collaborations with schools worldwide to widen horizons.",
    },
  ];

  // ✅ Parallax setup
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="w-full font-sans text-gray-800 leading-relaxed tracking-normal">
      {/* Banner Section */}
      <section className="relative h-[650px] flex items-end justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={AboutBanner}
          alt="Facilities Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-2xl">
            Facilities
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-light">
            Transforming Futures with World-Class Infrastructure
          </p>
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto text-center mb-12 px-6">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            Our Facilities
          </h2>
          <p
            className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Explore world-class infrastructure designed to nurture young minds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelected(facility)}
            >
              <div className="flex flex-col items-center space-y-4">
                {facility.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-center">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <div className="flex flex-col items-center space-y-4">
                {selected.icon}
                <h3 className="text-2xl font-bold text-gray-800">
                  {selected.title}
                </h3>
                <p className="text-gray-600 text-center">{selected.desc}</p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 15px rgba(79,70,229,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infrastructure & Facilities Tabs */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Infrastructure & Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
            At PSG World School @ Coimbatore, our facilities and infrastructure are
            designed to provide a safe, inspiring, and holistic environment for
            every learner. From smart classrooms to advanced labs, library,
            reading lounges, sports facilities, wellness programs, and
            nutritious meals — every facility is built to help students explore,
            grow, and thrive in a nurturing, future-ready setting.
          </p>

          {/* Tabs */}
          <div className="flex justify-center space-x-6 border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-3 text-lg font-medium transition relative ${
                  activeTab === tab.id
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <img
                src={content[activeTab].img}
                alt={content[activeTab].title}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {content[activeTab].title}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {content[activeTab].desc.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ✅ Amenities with Parallax Image */}
      <section className="relative w-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Amenities at our School
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At PSG World School @ Coimbatore, we provide a safe, supportive, and enriching 
            environment where every child feels valued and cared for. Our Kindergarten 
            zone offers joyful spaces with play–based learning, sensory corners, and 
            outdoor play areas. Student safety is ensured through 24x7 CCTV surveillance, 
            regular safety drills, and global ESG standards.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comfortable, GPS–enabled transport with trained staff ensures safe travel. 
            Health and wellness are prioritized through an on–campus infirmary, annual 
            check–ups, AC classrooms, and structured emotional well–being programs. 
            Our cafeteria serves nutritious, hygienically prepared meals, with menus 
            guided by expert nutritionists. Every facility is designed to help students 
            grow, thrive, and enjoy their school journey.
          </p>
        </motion.div>

        {/* Parallax Image */}
        <motion.div
          style={{ y }}
          className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={AboutBanner}
            alt="Amenities at our School"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
       <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Amenities & Student Well-being
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
            Our facilities are designed with a focus on safety, comfort, and
            holistic growth, ensuring every child feels cared for and supported.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {amenities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-amber-400 py-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Ready to begin your journey with PSG World School?
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Apply Now Button */}
          <a
            href="#apply"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
          >
            Apply Now
          </a>

          {/* Book a Visit Button */}
          <a
            href="#visit"
            className="flex items-center justify-center gap-2 border-2 border-amber-200 text-amber-100 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
          >
            <PhoneCall className="w-5 h-5" />
            Book a Visit
          </a>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default FacilitiesPage;
