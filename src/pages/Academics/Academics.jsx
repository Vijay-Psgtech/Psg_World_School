import React from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import AboutBanner from "../../assets/images/banner-bg6.png";
import CBSE from "../../assets/images/cbse.png";
import NIOS from "../../assets/images/nios.png";
import STU from "../../assets/images/STU1.jpg";
import STU1 from "../../assets/images/STU2.jpg";

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

  return (
    <div className="w-full font-sans text-gray-800 leading-relaxed tracking-normal">
      {/* Banner Section */}
      <section className="relative h-[650px] flex items-end justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={AboutBanner}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <di v className="absolute inset-0 bg-black/60"></di>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-2xl">
            Academics
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-light">
            Igniting Curiosity | Inspiring Growth | Transforming Futures
          </p>
        </motion.div>
      </section>
      {/* Breadcrumb */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-100 to-green-100 py-3 px-6 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-700">
          <span>🏠</span>
          <span className="text-gray-400">/</span>
          <span className="text-green-700 font-medium">Academics</span>
        </div>
      </motion.section>
      {/* About Content */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-r from-green-50 via-white to-emerald-50"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
              Learning & Innovation at
              <span className="text-emerald-600"> PSG Global</span>
            </h2>
            <div className="h-1 w-24 bg-emerald-500 rounded mb-6"></div>
            <p className="text-lg text-emerald-700 font-semibold mb-4 tracking-wide uppercase">
              Ignite Learning • Inspire Growth • Transform Futures
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-emerald-700">
                PSG Global Coimbatore
              </span>
              , education goes beyond textbooks. Our programs ignite curiosity,
              inspire purpose, and transform learners into confident World
              School citizens. Powered by{" "}
              <span className="font-semibold">Veranda K-12</span>, we integrate
              academic rigor, creativity, well-being, and future-ready skills
              for a holistic journey.
            </p>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full bg-emerald-200 rounded-3xl blur-2xl opacity-30"></div>
            <img
              src={STU}
              alt="Learning"
              className="relative rounded-3xl shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </motion.section>
      {/* Curriculum + Affiliations */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-purple-100 via-pink-50 to-orange-50">
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm mb-6">
            Curriculum Designed for the{" "}
            <span className="text-pink-600">21st Century</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            We offer the{" "}
            <span className="font-semibold text-pink-600">CBSE curriculum</span>{" "}
            (Grades I–XII) for structured academic excellence. Additionally,
            <span className="font-semibold text-purple-600"> NIOS</span>{" "}
            provides a flexible alternative for students with unique learning
            needs.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-14">
            Our <span className="text-pink-600">Affiliations</span>
          </h3>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              {
                img: CBSE,
                title: "CBSE",
                desc: "From Kindergarten to Grade 12, our CBSE programme builds inquiry, critical thinking, and balanced development.",
              },
              {
                img: NIOS,
                title: "NIOS",
                desc: "A flexible pathway offering personalised learning without compromising on academic standards.",
              },
              {
                img: STU,
                title: "Student Clubs",
                desc: "Opportunities for leadership, creativity, and teamwork through vibrant co-curricular activities.",
              },
              {
                img: STU1,
                title: "Community Programs",
                desc: "Clubs & events that build empathy, service, and holistic growth beyond academics.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition transform duration-300 border border-gray-100"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl object-cover h-[200px] w-full mb-5 shadow-lg"
                />
                <h4 className="text-lg font-bold text-pink-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Teaching Pedagogy */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
            How We Teach:{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Transformational Pedagogy
            </span>
          </h2>

          {/* Teaching & Assessments */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Teaching */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h4 className="text-xl font-semibold text-indigo-700 mb-4">
                Engaging & Student-Centric Learning
              </h4>
              <ul className="space-y-3 text-gray-700 list-disc pl-5 text-sm">
                <li>Concept-based & real-world contextual learning</li>
                <li>Blended classrooms with digital innovation</li>
                <li>Hands-on experiments and storytelling</li>
                <li>Collaborative, interdisciplinary projects</li>
                <li>Personalized remediation & enrichment</li>
              </ul>
            </motion.div>

            {/* Assessment */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h4 className="text-xl font-semibold text-emerald-700 mb-4">
                Comprehensive Assessments
              </h4>
              <ul className="space-y-3 text-gray-700 list-disc pl-5 text-sm">
                <li>Formative assessments: quizzes, projects</li>
                <li>Summative evaluations: term exams</li>
                <li>MyEdge LMS for tracking & insights</li>
                <li>Parent-teacher transparency via ERP & PTMs</li>
              </ul>
            </motion.div>
          </div>

          {/* Future-Ready Learning */}
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Future-Ready Learning at{" "}
            <span className="text-green-700">PSG Global</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { icon: "🎯", text: "Goal-Oriented Skill Development" },
              { icon: "💡", text: "Innovation through Digital Tools" },
              { icon: "🌱", text: "Holistic Growth & Sustainability" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition transform"
              >
                {/* Gradient Ring Around Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-3xl shadow-md">
                  <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                    {item.icon}
                  </span>
                </div>
                <p className="text-gray-700 text-base font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Grade 11 Streams */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.3),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.3),transparent_40%)]"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-14"
          >
            Grade 11 –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-500 to-emerald-600">
              PSG International
            </span>
          </motion.h2>

          {/* Streams */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Science",
                list: [
                  "Eng / Math / Phy / Che / Bio / Food & Nutrition",
                  "Eng / Math / Phy / Che / CS / AI",
                  "Eng / Bio / Phy / Chem / Psychology / Food & Nutrition",
                ],
              },
              {
                title: "Commerce",
                list: [
                  "Eng / Acc / Bst / Eco / AM / Mkt",
                  "Eng / Acc / Bst / Eco / Math / Mkt",
                  "Eng / Acc / Bst / Eco / IP / Mkt",
                  "Eng / Acc / Bst / Eco / Psy / Mkt",
                ],
              },
              {
                title: "Humanities",
                list: [
                  "Eng / Eco / Pol Sci / Entrepreneurship / Psy / Mkt",
                  "Eng / Eco / Sociology / Pol Sci / Psychology / Mkt",
                  "Eng / Eco / Sociology / Pol Sci / Applied Math / Mkt",
                  "Eng / Eco / Sociology / Pol Sci / IP",
                ],
              },
            ].map((stream, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.05 }}
                className="relative backdrop-blur-md bg-white/70 border border-white/40 shadow-xl rounded-2xl p-8 transition transform hover:shadow-2xl hover:border-green-400 hover:bg-white/90"
              >
                <h3 className="text-2xl font-semibold text-green-700 mb-5">
                  {stream.title}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {stream.list.map((l, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 hover:text-green-700 transition"
                    >
                      <span className="text-green-500">•</span> {l}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Signature Programs + Wellness */}(
      <section
        className="relative py-24 px-6 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('src/assets/images/banner-bg6.png')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-900/80"></div>

        <div className="relative max-w-7xl mx-auto text-center mb-16 text-white">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl font-extrabold tracking-wide drop-shadow-lg"
          >
            Signature Programs & Wellness
          </motion.h2>
        </div>

        {/* Signature Programs Cards */}
        <div className="relative grid md:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
          {[
            {
              title: "Avinya – Innovation Hub",
              desc: "A national-level platform by Veranda K-12 fostering entrepreneurship, collaboration & creativity.",
            },
            {
              title: "Game On – Sports Festival",
              desc: "Interschool sports event promoting discipline, fitness, wellness & teamwork.",
            },
            {
              title: "The Beat – Art & Culture",
              desc: "A fusion festival celebrating creativity, talent, and cultural diversity.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 text-left
                       hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-green-700 group-hover:text-green-900">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-700">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Academic & Wellness Support */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white drop-shadow-lg mb-10"
        >
          Specialised Academic & Wellness Support
        </motion.h3>

        <div className="relative grid md:grid-cols-2 gap-10 text-left max-w-5xl mx-auto text-white">
          <ul className="space-y-4 text-lg">
            <li className="hover:translate-x-2 transition-transform duration-300">
              ✨ Wellness Curriculum with SEL & counseling
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              ✨ Green School Model aligned to UN SDGs
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              ✨ Parent Engagement: workshops & storytime
            </li>
          </ul>
          <ul className="space-y-4 text-lg">
            <li className="hover:translate-x-2 transition-transform duration-300">
              ✨ Age-specific sports & fitness program
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              ✨ Safety & child protection protocols
            </li>
            <li className="hover:translate-x-2 transition-transform duration-300">
              ✨ Beyond Books: reading circles & fairs
            </li>
          </ul>
        </div>
      </section>
      <section className="relative py-24 px-6 bg-gradient-to-b from-emerald-50 via-green-100/60 to-white overflow-hidden">
        {/* Animated Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-emerald-50 opacity-50 animate-pulse"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg"
          >
            Unlock Your Future at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">
              PSG Global
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Empowering our students at PSG Global Coimbatore to secure
            admissions in top universities and colleges worldwide with ease.
          </motion.p>

          {/* Carousel Logos */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14"
          >
            <div ref={sliderRef} className="keen-slider">
              {[
                { src: "src/assets/images/iit_lg.png", alt: "IIT Madras" },
                { src: "src/assets/images/bit_lg.png", alt: "Anna University" },
                { src: "src/assets/images/mp_lg.png", alt: "Manipal" },
                { src: "src/assets/images/vit_lg.png", alt: "VIT" },
                { src: "src/assets/images/srm_lg.png", alt: "SRM University" },
              ].map((logo, i) => (
                <div
                  key={i}
                  className="keen-slider__slide flex justify-center items-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 md:h-24 object-contain drop-shadow-lg hover:drop-shadow-2xl bg-white/80 backdrop-blur-md rounded-xl p-4"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Beyond Academics */}
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 text-3xl md:text-4xl font-bold text-gray-900 drop-shadow"
          >
            Beyond Academics:{" "}
            <span className="text-green-700">
              Where Inspiration Meets Expression
            </span>
          </motion.h3>
        </div>
      </section>
    </div>
  );
}
