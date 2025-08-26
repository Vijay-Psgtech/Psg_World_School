import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutBanner from "../../assets/images/banner-bg2.png";
import AboutBanner2 from "../../assets/images/banner-bg3.png";
import StudentImg1 from "../../assets/images/student1.jpg";
import CBSE from "../../assets/images/cbse.png";
import NIOS from "../../assets/images/nios.png"; 

// Simple animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const About = () => {
  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Banner with Parallax */}
      <section
        className="relative h-[90vh] flex items-end justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-green-100 via-white to-green-50 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-700">
          <span>🏠</span>
          <span className="text-gray-400">/</span>
          <span className="text-green-700 font-semibold">About Us</span>
        </div>
      </section>

      {/* About Content */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-12 -left-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-16 -right-12 w-96 h-96 bg-teal-300/40 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Learning & Innovation PSG Global @ Coimbatore
            </h2>
            <p className="text-emerald-700 font-semibold mb-6">
              Ignite Learning • Inspire Growth • Transform Futures
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed text-justify">
              At PSG Global @ Coimbatore, we believe that true education goes beyond textbooks.
              It is about igniting curiosity, inspiring purpose, and transforming young learners
              into confident World School citizens. Aligned with the PSG motto — Ignite, Inspire,
              Transform — our academic program is thoughtfully designed to shape not just minds,
              but also values, creativity, and resilience. Powered by Veranda K-12, we bring
              together academic rigour, real-world application, future-ready skills, and
              personal well-being — creating a holistic educational journey for every child.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision Banner with Parallax */}
      <section
        className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${AboutBanner2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-gray-900/60 to-teal-700/70"></div>
        <h2 className="relative z-10 text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Our Vision
        </h2>
      </section>

      {/* Vision Copy */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-white via-green-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-700 font-semibold text-lg mb-6">
            “Provide every child a nurturing, inclusive space to build confidence,
            emotional intelligence, and lifelong real-world skills”
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            We nurture future–ready leaders and World School citizens equipped to embrace and
            overcome the challenges of a dynamic world — through a value-enriched
            curriculum balancing physical, intellectual, and emotional development.
          </p>
        </div>
      </motion.section>

      {/* Carousel + Pillars */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-100 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Slider {...sliderSettings}>
              <div>
                <img
                  src={StudentImg1}
                  alt="Student 1"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
              </div>
              <div>
                <img
                  src={StudentImg1}
                  alt="Student 2"
                  className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
                />
              </div>
            </Slider>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Our Three Pillars of Holistic Education
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-emerald-700">Whole Child Focus – </span>
                intellectual, emotional, physical, and ethical growth.
              </p>
              <p>
                <span className="font-semibold text-emerald-700">Transformational Learning – </span>
                inquiry, problem-solving, collaboration, reflection.
              </p>
              <p>
                <span className="font-semibold text-emerald-700">Global Citizenship – </span>
                empathy, values, and worldwide readiness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-grey"
      >
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Values</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: "Excellence", d: "We aim for the highest standards across academics, activities, and character." },
            { t: "Integrity", d: "Honesty, transparency, and accountability guide our actions and relationships." },
            { t: "Respect & Empathy", d: "An inclusive culture built on kindness, dignity, and understanding." },
          ].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">{v.t}</h3>
              <p className="text-gray-600">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white overflow-hidden"
      >
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -right-16 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-emerald-50">
            To inspire learners to be happy, healthy, responsible World School citizens — and to
            attract, develop, and retain exceptional educators who bring this mission to life.
          </p>
        </div>
      </motion.section>

      {/* Why Choose */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-12">
            Why Choose PSG Global @ Coimbatore?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                CBSE + NIOS • Conceptual Clarity
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Innovation & skill-building • Caring, trained educators</li>
                <li>Spacious green campus with modern facilities</li>
                <li>Strong focus on sports, arts & student-led clubs</li>
                <li>Transparent communication & parent partnership</li>
                <li>Proven results & individual progress tracking</li>
                <li>Customized Student Learning Program</li>
              </ul>
            </motion.div>

            <motion.div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-md border-l md:border-l-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Purposeful Growth • Innovation & Compassion
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Whole-child development with emotional & ethical focus</li>
                <li>Student voice & real-life leadership opportunities</li>
                <li>Safe, supportive environment with trained counselors</li>
                <li>Diversity, culture, World School awareness & community service</li>
                <li>Hands-on learning: projects, fieldwork & labs</li>
                <li>Community engagement & social responsibility</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PSG Group */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-100"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            A Proud Part of the PSG Group of Schools
          </h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            PSG Global is a respected name across India. Being part of this group provides a strong academic
            foundation, collaborative growth, and continuous innovation — enriching every learner’s experience.
          </p>
        </div>
      </motion.section>

      {/* PRINCIPAL'S DESK — Parallax & Rich Card */}
      <section
  className="relative py-24 px-6 text-white bg-fixed bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${AboutBanner2})` }}
>
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-gray-900/70 to-teal-800/80 animate-gradient-x"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Principal Image Card */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-3 hover:shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition"
    >
      <motion.img
        src={StudentImg1}
        alt="Principal"
        className="rounded-2xl object-cover w-full h-[420px]" 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>

    {/* Principal Message */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold drop-shadow"
      >
        From the Principal’s Desk
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="italic text-emerald-200 font-medium"
      >
        “Education is not the filling of a pail, but the lighting of a fire.”
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-lg hover:bg-white/20 transition"
      >
        <p className="text-emerald-50 leading-relaxed text-justify">
          At PSG Global Coimbatore, true education begins with curiosity. We nurture young
          minds with compassion, creativity, and confidence — building strong character and
          life skills. Every learner is unique, and we help them discover and celebrate their
          individuality.
        </p>
        <p className="text-emerald-50 leading-relaxed text-justify mt-4">
          Through holistic experiences, we prepare students for challenges in and beyond
          classrooms. Respect for self, others, and the environment is woven into our culture
          — creating a safe, joyful, and inclusive environment where every child thrives.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="pt-2"
      >
        <p className="font-semibold text-emerald-200">
          — Principal, PSG Global @ Coimbatore
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Leadership Philosophy */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            Our Leadership Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
            Our leadership models lifelong learning, collaboration, and a deep commitment to every student’s
            potential — co-creating a thriving school culture with faculty, parents, and community.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            PSG Global School in Coimbatore offers an advanced academic curriculum and the freedom to personalise
            learning — helping students stand out with confidence and purpose.
          </p>
        </div>
      </motion.section>

      {/* Affiliations */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-emerald-50 via-white to-teal-100"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Affiliations</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 max-w-9xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100 transition"
          >
            <img src={CBSE} alt="CBSE" className="w-40 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-emerald-700">CBSE</h3>
            <p className="text-gray-600 mt-3">
              Robust academic framework balancing knowledge with 21st-century skills and holistic development.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100 transition"
          >
            <img src={NIOS} alt="NIOS" className="w-40 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-emerald-700">NIOS</h3>
            <p className="text-gray-600 mt-3">
              Flexible academic pathways that support diverse needs while maintaining high standards.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100 transition"
          >
            <img src={NIOS} alt="NIOS" className="w-40 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-emerald-700">NIOS</h3>
            <p className="text-gray-600 mt-3">
              Flexible academic pathways that support diverse needs while maintaining high standards.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100 transition"
          >
            <img src={CBSE} alt="NIOS" className="w-40 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-emerald-700">NIOS</h3>
            <p className="text-gray-600 mt-3">
              Flexible academic pathways that support diverse needs while maintaining high standards.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;

