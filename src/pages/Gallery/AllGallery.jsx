import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/Variants";
import { Link } from "react-router-dom";

import buildImg1 from "../../assets/images/building1.png";
import buildImg2 from "../../assets/images/building2.png";
import buildImg3 from "../../assets/images/building3.png";
import buildImg4 from "../../assets/images/a4.png";
import buildImg5 from "../../assets/images/ap5.png";

import classImg1 from "../../assets/images/a1.png";
import classImg2 from "../../assets/images/room1.jpg";
import classImg3 from "../../assets/images/room2.jpg";
import classImg4 from "../../assets/images/classroom3.jpg";

import labImg1 from "../../assets/images/students/cp.webp";
import labImg2 from "../../assets/images/students/Dp.webp";
import labImg3 from "../../assets/images/students/myp.png";
import labImg4 from "../../assets/images/students/pyp.png";

const ImageData = {
  Buildings: [buildImg1, buildImg2, buildImg3, buildImg4, buildImg5],
  Classes: [classImg1, classImg2, classImg3],
  Labs: [labImg1, labImg2, labImg3, labImg4],
};

const AllGallery = ({ onSelectAlbum }) => {
  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${classImg4})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight text-white text-center drop-shadow-lg"
        >
          Our <span className="text-yellow-400">Gallery</span>
          <div className="w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </motion.h1>
      </section>

      {/* Album Collection */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Object.entries(ImageData).map(([category, images], idx) => (
          <Link to={`/gallery/${category}`}>
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={images[0]} // first image as album cover
                alt={category}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                <p className="text-white text-2xl font-semibold">{category}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGallery;
