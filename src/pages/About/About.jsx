import React from "react";
import { motion } from "framer-motion";
import AboutBanner from "../../assets/images/a4.png";
import AboutBanner2 from "../../assets/images/a1.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const About = () => {
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
          <div className="bg-amber-200 shadow-lg rounded-2xl border border-[#f2e7d7] p-6">
            <p className="text-blue-950 italic leading-relaxed">
              "Education is not the filling of a pail, but the lighting of a
              fire."
              <br />
              Our journey blends innovation with values, preparing students to
              thrive as global citizens.
            </p>
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
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold">
            <span className="text-black">Our</span>{" "}
            <span className="text-yellow-500">Mission</span>
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            PSG IB World School commits to academic rigor balanced with
            compassion, creativity, and intercultural understanding.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="p-10 rounded-2xl shadow-lg bg-gradient-to-r from-white via-[#fff9f0] to-[#f6d365] border border-[#f2e7d7] transition transform hover:shadow-2xl hover:scale-105 hover:from-[#f6d365] hover:via-[#fff9f0] hover:to-white"
          >
            <ul className="space-y-4 text-gray-800 font-medium">
              {[
                "Empower students with curiosity and courage to make a difference.",
                "Cultivate principled learners for a sustainable future.",
                "Deliver a globally relevant and value-driven curriculum.",
                "Nurture creativity, reflection, and social responsibility.",
                "Inspire kindness, innovation, and lifelong learning.",
                "Foster resilience, inclusivity, and excellence in all pursuits.",
              ].map((m, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">✦</span>
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

        {/* Single Highlighted Box */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="p-10 rounded-2xl shadow-lg bg-gradient-to-r from-white via-[#fff9f0] to-[#e2bf4a] border border-[#f2e7d7] transition transform hover:shadow-2xl hover:scale-105 hover:from-[#f6d365] hover:via-[#fff9f0] hover:to-white"
          >
            <ul className="space-y-4 text-gray-800 font-medium text-lg text-left">
              {[
                "🎓 A century-old PSG legacy driving global excellence.",
                "🌐 IB network recognition, trusted by top universities.",
                "📚 Full IB continuum: PYP, MYP, DP, and CP.",
                "🏫 World-class campus designed for inquiry and innovation.",
                "💡 Future-ready skills: leadership, research, and digital literacy.",
                "❤️ Rooted in service, values, and social responsibility.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
