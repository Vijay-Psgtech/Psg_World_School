import React from "react";
import BannerImg from "../../assets/images/building2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";
import { Typewriter } from "react-simple-typewriter";

const Abouthome = () => {
  return (
    <section className="w-full py-20 bg-white font-sans relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left: Content */}
        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full mb-12 md:mb-0 md:pr-12"
        >
          {/* Decorative Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-blue-600 mb-6 rounded-full"
          ></motion.div>

          {/* Subtitle */}
          <h6 className="text-blue-800 font-semibold mb-3 tracking-widest uppercase text-sm">
            <Typewriter
              words={[
                "Our School Campus",
                "Excellence in Education",
                "Global Vision",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h6>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6 leading-snug drop-shadow-sm">
            About Us – Legacy with a Global Vision
          </h2>

          {/* Body */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
            Rooted in the 100-year educational heritage of PSG Institutions,
            <span className="text-blue-900 font-semibold">
              {" "}
              PSG World School{" "}
            </span>
            blends tradition with innovation. Our authorization as an IB World
            School ensures every learner experiences globally benchmarked
            education aligned with the International Baccalaureate philosophy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/about"
              className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
            >
              Learn More →
            </a>
            <a
              href="/admissions"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-medium shadow-md hover:bg-yellow-500 transition"
            >
              Admissions →
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex justify-center"
        >
          <div className="relative">
            <img
              src={BannerImg}
              alt="About PSG World School"
              className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
            {/* Decorative Border/Glow */}
            <div className="absolute inset-0 rounded-2xl border-4 border-blue-900/20 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Abouthome;
