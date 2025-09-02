import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Campus1 from "../../assets/images/campus/campus1.png";
import Campus2 from "../../assets/images/campus/campus2.jpg";
import Campus3 from "../../assets/images/campus/campus3.png";
import Campus4 from "../../assets/images/campus/campus4.png";
import Campus5 from "../../assets/images/campus/campus5.jpg";
import Campus6 from "../../assets/images/campus/campus6.png";

const highlights = [
  {
    title: "Learning Spaces",
    img: Campus1,
    desc: "Smart classrooms, flexible learning zones, and IB studios designed for inquiry.",
  },
  {
    title: "Innovation Labs",
    img: Campus2,
    desc: "Robotics, AI, 3D printing, design thinking, and sustainability projects.",
  },
  {
    title: "Arts & Culture",
    img: Campus3,
    desc: "Performing arts theatre, music and dance studios, visual arts atelier.",
  },
  {
    title: "Sports & Wellness",
    img: Campus4,
    desc: "Olympic-sized swimming pool, multi-sport grounds, indoor arenas, yoga and mindfulness programs.",
  },
  {
    title: "Library & Research Hub",
    img: Campus5,
    desc: "Print, digital, and global resources integrated with IB learner projects.",
  },
  {
    title: "Sustainability Campus",
    img: Campus6,
    desc: "Eco-conscious architecture, green zones, waste-to-energy initiatives.",
  },
];

function CampusHighlights() {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    const cardWidth = 360;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * cardWidth * 1.1,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-yellow-50 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-20 h-[3px] bg-gradient-to-r from-yellow-400 to-blue-600 mb-6 rounded-full"
          ></motion.div>
          <h4 className="text-blue-800 font-semibold mb-3 tracking-widest uppercase text-sm">
            A Learning Environment that Inspires Excellence
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 drop-shadow-sm">
            Campus & Facilities
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute left-2 top-1/3 -translate-y-1/2 z-10 
                       w-12 h-12 flex items-center justify-center 
                       rounded-full bg-white/70 backdrop-blur-md shadow-lg 
                       hover:scale-110 hover:bg-blue-600 hover:text-white 
                       transition"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll Left"
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-6 scroll-smooth no-scrollbar px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="min-w-[320px] md:min-w-[360px] max-w-sm rounded-2xl overflow-hidden 
                           bg-white shadow-lg flex-shrink-0 scroll-snap-align-start 
                           transform transition hover:scale-[1.04] hover:shadow-2xl"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Image Section */}
                <div className="relative h-56 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            className="absolute right-2 top-1/3 -translate-y-1/2 z-10 
                       w-12 h-12 flex items-center justify-center 
                       rounded-full bg-white/70 backdrop-blur-md shadow-lg 
                       hover:scale-110 hover:bg-blue-600 hover:text-white 
                       transition"
            onClick={() => scrollBy(1)}
            aria-label="Scroll Right"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CampusHighlights;
