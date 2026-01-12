import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGlobe,
  FaBookOpen,
  FaSchool,
  FaLightbulb,
} from "react-icons/fa";
import AboutBanner from "../../assets/images/campus/campus16.png";
import AboutBanner2 from "../../assets/images/campus/campus18.png";
import CommunityImage from "../../assets/images/pyp3.png";

/* ---------------- Animations ---------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
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
  const text = `"Empowering Young Minds to Lead with Purpose in a Global Future".`;
  const [ibStatus, setIbStatus] = React.useState("AUTHORIZED");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const features = [
    {
      icon: <FaUniversity />,
      text: "Education aligned with IB standards and practices.",
      color: "from-[#B18141] to-orange-500",
    },
    {
      icon: <FaGlobe />,
      text: "Focus on holistic development and learner agency.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <FaBookOpen />,
      text: "Inclusive, safe, and supportive learning environment.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaSchool />,
      text: "Emphasis on values, reflection, and global understanding.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: <FaLightbulb />,
      text: "Backed by the legacy and educational excellence of the PSG Trust.",
      color: "from-purple-400 to-fuchsia-500",
    },
  ];

  /* ---------------- Typewriter ---------------- */
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="w-full font-sans text-gray-900 bg-white">
      {/* Hero */}
      <section
        className="relative h-[85vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight drop-shadow-lg">
            <span className="text-black">About</span>{" "}
            <span className="text-[#B18141]">Us</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            A Century of Excellence • A Future of Global Learning
          </p>
          <div className="w-28 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141] mx-auto mt-6 rounded-full"></div>
        </div>
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
              <span className="text-[#B18141]">Story</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141] mt-4 mb-6"></div>
            <p className="text-lg text-blue-950 leading-relaxed text-justify">
              Rooted in the 100-year heritage of PSG Institutions, PSG World
              School stands as a beacon of tradition and innovation. With
              authorization as an IB World School, we ensure our learners
              experience education aligned with globally benchmarked
              International Baccalaureate philosophy.
            </p>
          </div>

          <div className="bg-[#B18141]/70 shadow-lg rounded-2xl border border-[#f2e7d7] p-6">
            <motion.p className="text-blue-950 italic leading-relaxed text-lg sm:text-xl">
              {displayedText}
              <span className="animate-pulse text-blue-900">|</span>
            </motion.p>
          </div>
        </div>
      </motion.section>
      {/* Vision */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Title */}
          <div className="text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold leading-tight">
              <span className="text-black">Our</span>{" "}
              <span className="text-[#B18141]">Vision</span>
            </h2>
            <div className="w-20 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141]"></div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              A transformative learning experience that nurtures principled,
              innovative, and compassionate global citizens.
            </p>
          </div>

          {/* Right Card */}
          <motion.div
            variants={fadeInUp}
            className="relative p-10 rounded-2xl shadow-lg bg-gradient-to-r from-white via-[#B18141]/30 to-[#B18141]/50 border border-[#B18141] transition transform hover:shadow-2xl hover:scale-105"
          >
            {/* Triangle Accent (left) */}
            <div className="absolute -left-6 top-6 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-[#B18141] border-b-[40px] border-b-transparent"></div>

            <div className="text-gray-800 font-medium relative z-10 leading-relaxed space-y-4">
              <p>
                At PSG IB World School, our educational vision is rooted in six
                core themes that shape a transformative learning experience.
                Global Citizenship and International-Mindedness are central to
                nurturing students who are aware, empathetic, and responsible
                contributors to the global community. We cultivate Leadership
                with Purpose and Integrity, guiding learners to become ethical,
                principled leaders who act with vision and courage. Through a
                strong foundation in Academic and Personal Excellence, we
                promote inquiry-based learning, critical thinking, and a
                commitment to lifelong growth. Innovation is woven into our
                culture, with a focus on Innovation, Inquiry, and Creativity,
                encouraging students to explore, problem-solve, and thrive in a
                rapidly changing world. Our approach emphasizes Compassion,
                Ethics, and Values, instilling emotional intelligence, empathy,
                and a strong moral compass. Finally, we are dedicated to
                providing a Holistic, Empowering Learning Environment that is
                inclusive, student-centered, and designed to unlock each
                learner’s full potential while making a positive impact on the
                community.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Mission */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Card */}
          <motion.div
            variants={fadeInUp}
            className="order-2 md:order-1 relative p-10 rounded-2xl shadow-lg bg-gradient-to-r from-white via-[#B18141]/20 to-[#B18141]/50 border border-[#f2e7d7] transition transform hover:shadow-2xl hover:scale-105"
          >
            {/* Triangle Accent (right) */}
            <div
              className="absolute -right-6 top-6 w-0 h-0 
                border-t-[40px] border-t-transparent 
                border-l-[40px] border-l-[#B18141] 
                border-b-[40px] border-b-transparent"
            ></div>

            <ul className="space-y-4 text-gray-800 font-medium relative z-10">
              {[
                "We aim to empower students through holistic education, nurturing curiosity, compassion, and the courage to make a difference.",
                "Our mission is to cultivate reflective, open-minded, and principled learners who actively contribute to a peaceful and sustainable world.",
                "Through a globally relevant curriculum and value-based approach, we guide students to be confident, ethical, and lifelong learners.",
                "To develop well-rounded individuals through rigorous academics, creative exploration, and social responsibility.",
                "We inspire students to think critically, act kindly, and learn continuously—building a future grounded in empathy and innovation.",
                "Our school provides a safe, inclusive environment where students are encouraged to ask questions, embrace challenges, and pursue excellence.",
                "To foster intellectual, emotional, and social growth through inquiry-based learning and collaborative partnerships.",
                "We strive to nurture each child's unique potential by cultivating academic integrity, creativity, and resilience.",
                "To offer transformative learning experiences that connect knowledge with real-world action, guided by the IB learner profile.",
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

          {/* Right Title */}
          <div className="order-1 md:order-2 text-left md:text-right space-y-6">
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold leading-tight">
              <span className="text-black">Our</span>{" "}
              <span className="text-[#B18141]">Mission</span>
            </h2>
            <div className="md:ml-auto w-20 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141]"></div>
            <p className="text-gray-600 text-lg leading-relaxed md:ml-auto md:max-w-md">
              PSG IB World School commits to academic rigor balanced with
              compassion, creativity, and intercultural understanding, and
              personal growth.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Motto (Parallax) */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBanner2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b5ed4]/70 via-[#112a55]/70 to-[#0c42be]/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4 text-white drop-shadow-lg">
            <span className="text-white">Our</span>{" "}
            <span className="text-[#B18141]">Motto</span>
          </h2>
          <p className="text-2xl font-semibold text-[#B18141] tracking-wide">
            i³
            <br />
            Ignite • Innovate • Inspire
          </p>
        </div>
      </section>
      {/* Community of Learners */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left Image Placeholder */}
          <motion.div
            variants={fadeInUp}
            className="w-full h-[460px]  overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={CommunityImage}
              alt="PSG World School Campus"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div variants={fadeInUp} className="space-y-12">
            <h2 className="text-4xl font-['Playfair_Display'] font-bold">
              A Community of <span className="text-[#B18141]">Learners</span>{" "}
              with a Global Perspective
            </h2>
            <div className="w-20 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141]"></div>
            <p className="text-lg text-gray-900 leading-relaxed text-justify">
              PSG World School is committed to delivering a high-quality
              international education guided by the principles of the
              International Baccalaureate (IB). Our school aims to develop
              students who are inquisitive, knowledgeable, and caring, and who
              are prepared to contribute positively to a complex and
              interconnected world.
            </p>
          </motion.div>
        </div>
      </motion.section>
  
      {/*--- School Status Section commented ---*/}
      {/* <section className="relative py-28 px-6 bg-gradient-to-br from-white via-white to-[#fafafa] border-t overflow-hidden"> */}
        {/* Animated Decorative Background */}
        {/* <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-3xl"
        /> */}

        {/* <div className="relative max-w-7xl mx-auto"> */}
          {/* Heading */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-gray-900">
              International Baccalaureate{" "}
              <span className="text-[#B18141]">School Status</span>
            </h2>
            <div className="w-28 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141] mx-auto mt-6 rounded-full" />
          </motion.div> */}

          {/* Toggle Buttons */}
          {/* <div className="flex justify-center gap-6 mb-20">
            <button
              onClick={() => setIbStatus("AUTHORIZED")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                ibStatus === "AUTHORIZED"
                  ? "bg-[#B18141] text-black shadow-xl scale-105"
                  : "bg-white text-green-700 border border-green-200 hover:bg-green-50"
              }`}
            >
              ✔ Authorized School
            </button>

            <button
              onClick={() => setIbStatus("CANDIDATE")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                ibStatus === "CANDIDATE"
                  ? "bg-[#B18141] text-black shadow-xl scale-105"
                  : "bg-white text-yellow-800 border border-yellow-200 hover:bg-yellow-50"
              }`}
            >
              ⏳ Candidate School
            </button>
          </div> */}

          {/* Content */}
          {/* <motion.div
            key={ibStatus}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-14 items-center"
          > */}
            {/* Left Content */}
            {/* {ibStatus === "AUTHORIZED" ? (
              <div className="bg-white/80 backdrop-blur-xl border border-green-200 rounded-3xl p-12 shadow-2xl">
                <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                  Option A – IB Authorized School
                </span>

                <p className="text-lg text-gray-800 leading-relaxed">
                  PSG World School is an IB World School authorized to offer the
                  Primary Years Programme (PYP).
                </p>

                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  IB World Schools share a common philosophy — a commitment to
                  high-quality, challenging, international education.
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Status",
                      text: "Fully recognized and accredited by the IB",
                    },
                    {
                      title: "Activities",
                      text: "Delivers authorized IB programmes",
                    },
                    {
                      title: "Key Point",
                      text: "Reviewed every 4–5 years by IB",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border border-green-100 shadow-md hover:shadow-xl transition"
                    >
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-xl border border-yellow-200 rounded-3xl p-12 shadow-2xl">
                <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                  Option B – IB Candidate School
                </span>

                <p className="text-lg text-gray-800 leading-relaxed">
                  PSG World School is a candidate school for the International
                  Baccalaureate (IB) Primary Years Programme (PYP).
                </p>

                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  The school is pursuing authorization as an IB World School.
                  Candidate status does not guarantee authorization.
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Status",
                      text: "In transition; pursuing authorization",
                    },
                    {
                      title: "Activities",
                      text: "Curriculum alignment, staff training, IB readiness",
                    },
                    {
                      title: "Key Point",
                      text: "Not yet authorized to teach full IB programmes",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border border-yellow-100 shadow-md hover:shadow-xl transition"
                    >
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Right Visual */}
            {/* <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white"
            > */}
              {/* Background Image */}
              {/* <img
                src={
                  ibStatus === "AUTHORIZED"
                    ? "/src/assets/images/banner/b2.png" // ← replace with your real image path */}
                    {/* : "/src/assets/images/banner/b1.png" // ← replace with your real image path */}
                {/* }
                alt="IB School Status"
                className="absolute inset-0 w-full h-full object-cover"
              /> */}

              {/* <div className="absolute inset-0 bg-black/40" /> */}

              {/* <div className="relative z-10 h-full flex items-center justify-center p-10"> */}
                {/* <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl max-w-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {ibStatus === "AUTHORIZED"
                      ? "IB World School"
                      : "IB Candidate School"}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {ibStatus === "AUTHORIZED"
                      ? "Authorized to deliver the International Baccalaureate Primary Years Programme."
                      : "Progressing towards IB authorization through curriculum alignment and staff development."}
                  </p>
                </div> */}
              {/* </div> */}

              {/* <div
                className={`absolute top-0 left-0 h-1 w-full ${
                  ibStatus === "AUTHORIZED" ? "bg-green-500" : "bg-yellow-500"
                }`}
              />
            </motion.div>
          </motion.div> */}

          {/* Disclaimer */}
          {/* <p className="mt-20 text-sm text-gray-500 italic text-center">
            International Baccalaureate® and IB® are registered trademarks of
            the International Baccalaureate Organization.
          </p>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-br from-white via-[#fdfbf7] to-[#faf7f0]"
      >
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold">
            <span className="text-black">Why</span>{" "}
            <span className="text-[#B18141]">Choose</span>{" "}
            <span className="text-black">PSG</span>{" "}
            <span className="text-[#B18141]">World</span>{" "}
            <span className="text-black">School</span>{" "}
            <span className="text-[#B18141]">IB?</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141] mx-auto mt-4"></div>
        </div>

        <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50 overflow-hidden">
          {/* Background Circles */}
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
