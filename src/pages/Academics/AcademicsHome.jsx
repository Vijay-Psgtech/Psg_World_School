import React, { useState } from "react";
import eypImg from "../../assets/images/students/eypImg.jpg";
import pypImg from "../../assets/images/students/pypImg.jpg";
import mypImg from "../../assets/images/students/mypImg.jpg";
import dpImg from "../../assets/images/students/dpImg.jpg";
import cpImg from "../../assets/images/students/cpImg.jpg";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const EducationData = [
  {
    id: 1,
    title: "Early Years (EYP)",
    subtitle: "",
    tagline: "NURTURE",
    description:
      "Our Early Years learning environment supports young learners through play-based and inquiry led experiences that promote social, emotional, physical, and cognitive development. The programme fosters curiosity, independence, and a love for learning in a safe and supportive setting.",
    image: eypImg,
  },
  {
    id: 2,
    title: "Primary Years Programme (PYP)",
    subtitle: "Ages 3–12",
    tagline: "NURTURE",
    description:
      "The IB Primary Years Programme (PYP) is designed for students aged 3–12 years and focuses on the development of the whole child. Learning is structured around inquiry, conceptual understanding, and transdisciplinary themes, enabling students to make connections between learning and real-life contexts.",
    image: pypImg,
  },
  {
    id: 3,
    title: "Middle Years Programme (MYP)",
    subtitle: "Ages 11–16",
    tagline: "DEVELOP",
    description:
      "The International Baccalaureate (IB) Middle Years Programme (MYP) is designed for students aged 11–16 years. It provides a challenging and balanced education that encourages students to make practical connections between their studies and the real world. The MYP supports students in developing intellectual discipline, personal responsibility, and a strong sense of identity during a critical stage of adolescence.",
    image: mypImg,
  },
  {
    id: 4,
    title: "Diploma Programme (DP)",
    subtitle: "Ages 16–19",
    tagline: "ACHIEVE",
    description:
      "The IB Diploma Programme (DP) is a two-year pre-university programme designed for students aged 16–19 years. It aims to develop students who have excellent breadth and depth of knowledge, alongside strong critical thinking and reflective skills. The DP provides a rigorous academic framework while supporting students’ intellectual, personal, emotional, and social development.",
    image: dpImg,
  },
  {
    id: 5,
    title: "Career-related Programme (CP)",
    subtitle: "Ages 16–19",
    tagline: "LEAD",
    description:
      "The IB Career-related Programme (CP) is designed for students aged 16–19 years who wish to engage in career-related learning alongside academic studies. The CP supports students in developing transferable skills needed for further education, training, and employment. The CP enables students to develop confidence, responsibility, and an understanding of ethical and global perspectives related to their chosen pathways. ",
    image: cpImg,
  },
];

function AcademicsHome() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow-50 font-sans">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-[3px] bg-gradient-to-r from-[#B18141] to-blue-600 mb-6 mx-auto rounded-full"
        ></motion.div>
        <h4 className="text-[#B18141] font-semibold mb-3 tracking-widest uppercase text-sm">
          <Typewriter
            words={[
              "The IB Continuum",
              "The IB Advantage at PSG",
              "Academic Outcomes",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h4>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 drop-shadow-sm">
          IB Programme 
        </h1>
      </div>

      {/* Cards */}
      <motion.div
        className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 justify-center items-start"
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setActiveId(isActive ? null : item.id)}

            >
              {/* COLLAPSED CARD */}
              {!isActive && (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                    activeId && activeId !== item.id
                      ? "opacity-40 grayscale"
                      : "opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[360px] object-cover transform group-hover:scale-105 transition duration-700"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>

                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 to-transparent"></div> */}

                  {/* Text */}
                  <div className="absolute bottom-0 p-6 text-left">
                    <p className="text-sm font-semibold text-[#B18141] tracking-wider uppercase">
                      {item.tagline}
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-1 leading-snug bg-clip-text">
                      {item.title}
                    </h2>
                    <p className="text-[#B18141] font-semibold text-sm">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Floating Button */}
                  <button className="absolute bottom-5 right-5 bg-[#B18141] text-blue-950 p-3 rounded-full shadow-lg hover:scale-110 hover:rotate-90 transition-transform duration-300">
                    <Plus size={20} />
                  </button>
                </motion.div>
              )}

              {/* EXPANDED CARD */}
              {isActive && (
                <motion.div
                  layout
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white rounded-3xl p-6 shadow-2xl flex flex-col relative min-h-[380px] backdrop-blur-md"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#B18141] mb-2 uppercase tracking-wide">
                      {item.tagline}
                    </p>
                    <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#B18141] to-[#B18141] bg-clip-text text-transparent">
                      {item.title}
                    </h2>
                    <p className="text-[#B18141] font-semibold mb-4">
                      {item.subtitle}
                    </p>

                    <div className="text-gray-200 leading-relaxed text-sm md:text-base overflow-y-auto max-h-[220px] pr-2 scrollbar-thin scrollbar-thumb-[#B18141]/60 scrollbar-track-transparent">
                      {item.description}
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    className="absolute bottom-5 right-5 bg-[#B18141] text-blue-950 p-3 rounded-full shadow-lg hover:scale-110 hover:rotate-90 transition-transform"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveId(null);
                    }}
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

export default AcademicsHome;
