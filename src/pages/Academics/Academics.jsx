import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  GraduationCap,
  University,
  Sparkles,
  Palette,
  Music,
  Globe,
  Dumbbell,
  Lightbulb,
  Users,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutBanner from "../../assets/images/a2.png";
import STU from "../../assets/images/ap3.png";
import eypImg from "../../assets/images/students/eypImg.jpg";
import pypImg from "../../assets/images/students/pypImg.jpg";
import mypImg from "../../assets/images/students/mypImg.jpg";
import dpImg from "../../assets/images/students/dpImg.jpg";
import cpImg from "../../assets/images/students/cpImg.jpg";
import IBImage from "../../assets/images/campus/library and research hub 2.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function Academics() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 5, spacing: 30 } },
      "(max-width: 640px)": { slides: { perView: 2, spacing: 15 } },
    },
    drag: true,
    created(s) {
      s.moveToIdx(0, true, { duration: 8000 });
    },
    slideChanged(s) {
      s.moveToIdx(s.track.details.abs + 1, true, { duration: 8000 });
    },
  });

  const outcomes = [
    {
      id: 1,
      icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
      text: "Aspire for IB Diploma scores above the global benchmark (33–34).",
    },
    {
      id: 2,
      icon: <University className="w-8 h-8 text-yellow-400" />,
      text: "University placements at Ivy League, Oxbridge, NUS, NTU, Ashoka, IITs, and more.",
    },
    {
      id: 3,
      icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
      text: "PSG graduates as innovators, entrepreneurs, researchers, and change-makers.",
    },
  ];

  const items = [
    { icon: Globe, title: "Cultural Exchange" },
    { icon: Users, title: "Leadership Programs" },
    { icon: Lightbulb, title: "Innovation Hubs" },
    { icon: Palette, title: "Arts & Creativity" },
    { icon: Dumbbell, title: "Sports & Fitness" },
    { icon: Music, title: "Community Engagement" },
  ];

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="w-full font-sans text-yellow-500 leading-relaxed tracking-normal">
      {/* Banner */}
      <section className="relative h-[750px] flex items-end justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={AboutBanner}
          alt="Academics Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-[#FFD700]/10 to-transparent"></div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold drop-shadow-lg">
            <span className="text-black">Academics</span>{" "}
            <span className="text-yellow-500">– The IB Advantage at PSG</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200">
            Excellence • Global Perspective • Lifelong Learning
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mx-auto mt-4"></div>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-white via-[#fdfbf7] to-white py-3 px-6 shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
          <span>🏠</span>
          <span className="text-gray-400">/</span>
          <span className="text-[#345092] font-semibold">Academics</span>
        </div>
      </motion.section>

      {/* IB Continuum */}
       <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-br from-white via-[#fdfcf7] to-[#f6f9ff]"
      >
        {/* Title */}
        <div
          className="max-w-6xl mx-auto text-center mb-14 relative"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold">
            <span className="text-black">The</span> <br />
            <span className="text-yellow-500">IB Continuum </span>
          </h2>
          <div className="w-24 h-[4px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mx-auto mt-4 rounded-full shadow-md"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            PSG World School offers the full IB Continuum, ensuring every stage
            of learning is internationally benchmarked and future-focused.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-full mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {[
            {
              title: "Early Years (EYP)",
              desc: "Our Early Years learning environment supports young learners through play-based and inquiry led experiences that promote social, emotional, physical, and cognitive development. The programme fosters curiosity, independence, and a love for learning in a safe and supportive setting.",
              images: eypImg,
            },
            {
              title: "Primary Years Programme (PYP)",
              desc: "The IB Primary Years Programme (PYP) is designed for students aged 3–12 years and focuses on the development of the whole child. Learning is structured around inquiry, conceptual understanding, and transdisciplinary themes, enabling students to make connections between learning and real-life contexts.",
              images: pypImg,
            },
            {
              title: "Middle Years Programme (MYP)",
              desc: "The International Baccalaureate (IB) Middle Years Programme (MYP) is designed for students aged 11–16 years. It provides a challenging and balanced education that encourages students to make practical connections between their studies and the real world. The MYP supports students in developing intellectual discipline, personal responsibility, and a strong sense of identity during a critical stage of adolescence.",
              images: mypImg,

            },
            {
              title: "Diploma Programme (DP)",
              desc: "The IB Diploma Programme (DP) is a two-year pre-university programme designed for students aged 16–19 years. It aims to develop students who have excellent breadth and depth of knowledge, alongside strong critical thinking and reflective skills. The DP provides a rigorous academic framework while supporting students’ intellectual, personal, emotional, and social development.",
              images: dpImg,

            },
            {
              title: "Career-related Programme (CP)",
              desc: "The IB Career-related Programme (CP) is designed for students aged 16–19 years who wish to engage in career-related learning alongside academic studies. The CP supports students in developing transferable skills needed for further education, training, and employment. The CP enables students to develop confidence, responsibility, and an understanding of ethical and global perspectives related to their chosen pathways.",
              images: cpImg,

            },
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              data-aos="zoom-in-up"
              whileHover={{ scale: 1.05 }}
              className="relative group p-6 rounded-2xl shadow-lg border border-yellow-400/40 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-yellow-500"
            > 
              <img
                src={p.images}
                alt={p.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base overflow-y-auto max-h-[200px] pr-2 no-scrollbar scrollbar-thin scrollbar-thumb-gray-400/60 scrollbar-track-transparent">{p.desc}</p>
            </motion.div>
          ))}  
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      </motion.section>

      {/* IB Philosophy */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-25 px-12 bg-gradient-to-br from-white via-[#fdfbf7] to-[#faf7f0]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-21 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold">
              <span className="text-black">International</span>{" "}
              <span className="text-yellow-500">Baccalaureate</span>{" "}
              <span className="text-black">Philosophy</span>
            </h2>

            <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600"></div>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              The International Baccalaureate (IB) is an internationally
              recognized educational foundation that develops students who are
              motivated to learn, think critically, and act with integrity. IB
              programmes encourage learners to understand multiple perspectives,
              respect cultural diversity, and take responsibility for their own
              learning.
            </p>

            <p className="text-lg text-gray-900 leading-relaxed text-text-center">
              At PSG World School, our educational practices are aligned with
              the IB philosophy, emphasizing inquiry, reflection, and meaningful
              learning experiences that prepare students for a complex and
              interconnected world.
            </p>
          </div>

          {/* Right Highlight Card */}
          <motion.div
            variants={fadeInUp}
            className="relative p-2 rounded-2xl shadow-lg bg-gradient-to-r from-white via-[#fff9f0] to-[#f6d365] border border-[#f2e7d7] overflow-hidden"
          >
            {/* Decorative triangle (optional – remove if not needed) */}
            <div className="absolute -left-12 top-6 w-0 h-0 border-t-[4px] border-t-transparent border-r-[40px] border-r-[#f6d365] border-b-[40px] border-b-transparent z-10" />

            {/* Image */}
            <img
              src={IBImage} // replace with your preferred image
              alt="International Baccalaureate Philosophy"
              className="w-full h-[420px] md:h-[420px] object-cover rounded-x2"
            />

            {/* Optional overlay (remove if not needed) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Academic Outcomes with Parallax */}
      <section
        className="relative py-28 px-6 text-white"
        style={{
          backgroundImage: `url(${STU})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-200/20"></div>

        <div className="relative max-w-6xl mx-auto text-center mb-14">
          <motion.h2
            className="text-4xl font-['Playfair_Display'] font-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black">Academic</span>{" "}
            <span className="text-yellow-500">Outcomes</span>
          </motion.h2>
          <motion.div
            className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>

        {/* Cards */}
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.id}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-yellow-400/30 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-lg text-gray-100 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Beyond Academics */}
      {/* Beyond Academics */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-br from-white via-[#fff9f0] to-[#fefbf5]"
      >
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold">
            <span className="text-black">Beyond </span>
            <span className="text-yellow-600">Academics</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            We believe education extends beyond the classroom — through cultural
            exchange, leadership programs, innovation hubs, arts, sports, and
            community engagement that prepare students to thrive globally.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-lg bg-white border border-amber-50 hover:bg-gradient-to-br hover:from-white hover:to-yellow-50 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-md group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={32} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-yellow-700 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
