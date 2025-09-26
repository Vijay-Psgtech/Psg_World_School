import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/Variants";

// Images (reuse same dataset as AllGallery)
import buildImg1 from "../../assets/images/building1.png";
import buildImg2 from "../../assets/images/building2.png";
import buildImg3 from "../../assets/images/building3.png";
import buildImg4 from "../../assets/images/a4.png";
import buildImg5 from "../../assets/images/ap5.png";

import classImg1 from "../../assets/images/a1.png";
import classImg2 from "../../assets/images/room1.jpg";
import classImg3 from "../../assets/images/room2.jpg";

import labImg1 from "../../assets/images/students/cp.webp";
import labImg2 from "../../assets/images/students/Dp.webp";
import labImg3 from "../../assets/images/students/myp.png";
import labImg4 from "../../assets/images/students/pyp.png";

// Album Data
const ImageData = {
  Buildings: [buildImg1, buildImg2, buildImg3, buildImg4, buildImg5],
  Classes: [classImg1, classImg2, classImg3],
  Labs: [labImg1, labImg2, labImg3, labImg4],
};

const GalleryAlbum = () => {
  const { albumName } = useParams();
  const images = ImageData[albumName];

  if (!images) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Album not found</h2>
        <Link
          to="/all-gallery"
          className="text-blue-600 hover:underline font-medium"
        >
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-white via-blue-50 to-yellow-50">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight text-white text-center drop-shadow-lg"
        >
          {albumName} Album
          <div className="w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </motion.h1>
      </section>

      {/* Images Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src={img}
                alt={`${albumName}-${i}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-medium tracking-wide">
                  {albumName} {i + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            to="/all-gallery"
            className="inline-block px-6 py-3 rounded-lg bg-blue-900 text-white font-medium shadow-md hover:bg-yellow-500 hover:text-blue-900 transition"
          >
            ← Back to All Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryAlbum;
