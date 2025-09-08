import React, { useState } from "react";
import pypImg from "../../assets/images/students/pyp.jpg";
import mypImg from "../../assets/images/students/myp.jpg";
import dpImg from "../../assets/images/students/dp.jpg";
import cpImg from "../../assets/images/students/cp.jpg";
import { motion} from "framer-motion";
import { Plus, X } from "lucide-react";

const EducationData = [
  {
    id: 1,
    title: "Primary Years Programme (PYP)",
    subtitle: "Ages 3–12",
    tagline: "NURTURE",
    description:
      "Nurturing inquiry, creativity, and confidence in young learners. The PYP encourages curiosity and exploration, building a strong foundation for lifelong learning.",
    image: pypImg,
  },
  {
    id: 2,
    title: "Middle Years Programme (MYP)",
    subtitle: "Ages 11–16",
    tagline: "DEVELOP",
    description:
      "Developing analytical skills, intercultural understanding, and personal responsibility. The MYP fosters critical thinking and global awareness for growing minds.",
    image: mypImg,
  },
  {
    id: 3,
    title: "Diploma Programme (DP)",
    subtitle: "Ages 16–19",
    tagline: "ACHIEVE",
    description:
      "Globally recognized, academically rigorous preparation for top universities. The DP challenges students to excel academically and personally.",
    image: dpImg,
  },
  {
    id: 4,
    title: "Career-related Programme (CP)",
    subtitle: "Ages 16–19",
    tagline: "LEAD",
    description:
      "Blending academic studies with career-oriented pathways, designed for future leaders. The CP empowers students to pursue their passions and professional goals.",
    image: cpImg,
  },
];

function Education() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50 font-sans">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="w-20 border-t-4 border-yellow-400 mx-auto mb-4"></p>
        <h6 className="text-blue-900 font-semibold mb-3 tracking-wide uppercase">
          Academics – The IB Advantage at PSG
        </h6>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 drop-shadow-sm">
          The IB Continuum
        </h1>
      </div>

      {/* Cards */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {EducationData.map((item, index) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setActiveId(isActive ? null : item.id)}
            >
              {/* Default Card */}
              {!isActive && (
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 ${
                    activeId && activeId !== item.id
                      ? "opacity-40 grayscale"
                      : "opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[380px] object-cover transform group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
                  <div className="absolute bottom-0 p-6 text-left">
                    <p className="text-sm font-semibold text-yellow-400 tracking-wide">
                      {item.tagline}
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-1">
                      {item.title}
                    </h2>
                    <p className="text-yellow-300 font-semibold text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                  <button className="absolute bottom-5 right-5 bg-yellow-400 text-blue-950 p-3 rounded-full shadow-lg hover:scale-110 transition">
                    <Plus size={20} />
                  </button>
                </div>
              )}

              {/* Expanded Card */}
              {isActive && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-blue-950 text-white rounded-2xl p-8 shadow-2xl flex flex-col justify-between h-[380px]"
                >
                  <div>
                    <p className="text-sm font-semibold text-yellow-400 mb-2">
                      {item.tagline}
                    </p>
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-yellow-400 font-semibold mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                  <button
                    className="self-end bg-yellow-400 text-blue-950 p-3 rounded-full shadow-lg hover:scale-110 transition"
                    onClick={() => setActiveId(null)}
                  >
                    <X size={20} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Education;
