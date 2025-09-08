import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe2,
  BookOpen,
  Cpu,
  Leaf,
  Music,
  Trophy,
  Mountain,
} from "lucide-react";
import Image1 from "../../assets/images/campus/campus25.png";
import Image2 from "../../assets/images/campus/campus26.png";
import Image3 from "../../assets/images/campus/campus27.png";

const cardData = [
  {
    title: "Leadership & Global Citizenship",
    icon: <Globe2 className="w-10 h-10 text-blue-600" />,
    image: Image1,
    points: [
      "Model United Nations (MUN), TEDx Youth, and student-led councils",
      "Community service programs aligned with UN Sustainable Development Goals",
      "Global exchange programs and partnerships with international schools",
    ],
    accent: "from-blue-100/60 to-indigo-100/40",
  },
  {
    title: "Clubs & Societies",
    icon: <BookOpen className="w-10 h-10 text-green-600" />,
    image: Image2,
    points: [
      "Entrepreneurship & Start-up Incubator",
      "STEM and Coding Clubs",
      "Debate & Literature Circles",
      "Eco-Warriors & Sustainability Initiatives",
      "Music Bands, Theatre, and Fine Arts Guilds",
    ],
    accent: "from-green-100/60 to-emerald-100/40",
  },
  {
    title: "Sports & Adventure",
    icon: <Trophy className="w-10 h-10 text-orange-600" />,
    image: Image3,
    points: [
      "Athletics, swimming, basketball, football, cricket, tennis, and martial arts",
      "Outdoor learning, trekking, and leadership camps",
    ],
    accent: "from-yellow-100/60 to-orange-100/40",
  },
];

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 80 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, delay, ease: "easeOut" },
    },
  };
};

const Students = () => {
  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up")}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight text-white drop-shadow-lg">
            Student Life{" "}
            <span className="text-yellow-400">– Beyond Academics</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A vibrant community that balances intellectual pursuits with
            creativity, leadership, sports, and global experiences.
          </p>
          <div className="w-32 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full h-16 bg-gradient-to-tr from-yellow-50 to-white clip-path-triangle"></div>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 py-20 space-y-32 overflow-hidden">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.2)}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-white/70 to-white/40 shadow-md backdrop-blur-md"
                >
                  {card.icon}
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800 font-['Playfair_Display']">
                  {card.title}
                </h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                {card.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 bg-gradient-to-r from-white/70 to-white/30 backdrop-blur-md border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
                  >
                    <span className="text-yellow-500 font-bold">✦</span>
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`relative rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br ${card.accent} p-3`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-2xl shadow-md object-cover w-full h-[350px]"
              />
              {/* Floating Accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200/30 rounded-full blur-2xl animate-pulse"></div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Students;
