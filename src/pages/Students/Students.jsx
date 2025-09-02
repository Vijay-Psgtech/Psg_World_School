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
import Image1 from "../../assets/images/a1.png";
import Image2 from "../../assets/images/a2.png";
import Image3 from "../../assets/images/building3.png";

const cardData = [
  {
    title: "Leadership & Global Citizenship",
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    image: Image1,
    points: [
      "Model United Nations (MUN), TEDx Youth, and student-led councils",
      "Community service programs aligned with UN Sustainable Development Goals",
      "Global exchange programs and partnerships with international schools",
    ],
  },
  {
    title: "Clubs & Societies",
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    image: Image2,
    points: [
      "Entrepreneurship & Start-up Incubator",
      "STEM and Coding Clubs",
      "Debate & Literature Circles",
      "Eco-Warriors & Sustainability Initiatives",
      "Music Bands, Theatre, and Fine Arts Guilds",
    ],
  },
  {
    title: "Sports & Adventure",
    icon: <Trophy className="w-8 h-8 text-orange-600" />,
    image: Image3,
    points: [
      "Athletics, swimming, basketball, football, cricket, tennis, and martial arts",
      "Outdoor learning, trekking, and leadership camps",
    ],
  },
];

const fadeIn = (direction = "up") => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 80 : 0,
    },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };
};

const Students = () => {
  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeIn("up")}
          className="relative text-black text-4xl md:text-5xl font-['Playfair_Display'] font-bold z-10"
        >
          Student Life  <span className="text-yellow-500">– Beyond Academics</span>
        </motion.h1>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-24 overflow-hidden">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn(index % 2 === 0 ? "left" : "right")}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {card.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {card.title}
                </h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition"
                  >
                    <span className="text-blue-500">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={card.image}
                alt={card.title}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Students;
