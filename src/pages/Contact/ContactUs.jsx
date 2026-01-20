import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image1 from "../../assets/images/campus/campus17.png";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/Variants";

const ContactUs = () => {
  return (
    <div className="w-full font-sans bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight drop-shadow-lg"
        >
          <span className="text-black">Contact</span>{" "}
          <span className="text-[#B18141]">Us</span>
          <div className="w-32 h-[3px] bg-gradient-to-r from-[#B18141]/50 via-[#B18141]/40 to-[#B18141] mx-auto mt-6 rounded-full"></div>
        </motion.h1>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center"
        >
          {/* --- Address Card --- */}
          <div className="relative bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-1 overflow-hidden">
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Icon */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-3xl mb-5 shadow-inner">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Our Address
            </h3>
            <p className="text-gray-600 leading-relaxed text-md">
              S.F. No. 472, Civil Aerodrome Post, <br />
              Coimbatore, Tamil Nadu – 641014.
            </p>
          </div>

          {/* --- Email Card --- */}
          <div className="relative bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-1 overflow-hidden">
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Icon */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-3xl mb-5 shadow-inner">
              <FaEnvelope />
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              Email Us
            </h3>
            <p className="text-gray-600 leading-relaxed text-md">
              <a
                href="mailto:admissions@psgworldschool.edu.in"
                className="block hover:text-blue-600 transition-colors"
              >
                admissions@psgworldschool.edu.in
              </a>
              <a
                href="mailto:info@psgworldschool.edu.in"
                className="block hover:text-blue-600 transition-colors"
              >
                info@psgworldschool.edu.in
              </a>
            </p>
          </div>
        </motion.div>
      </section>
      {/* Google Maps + Form */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Google Map */}
        {/* <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow">
          <iframe
            title="school-location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d723.1839519043874!2d77.03636583148037!3d11.032349065951538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1768370930891!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}

        <div className="w-full h-[400px] rounded-2xl shadow-xl overflow-hidden bg-gray-100">
          <img
            src="/map.jpg"
            alt="PSG World School Location"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Inquiry Form */}
        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Book a Tour / Request Info
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-10 bg-blue-900 text-white text-center">
        <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:text-[#B18141] transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-[#B18141] transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#B18141] transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-[#B18141] transition">
            <FaTwitter />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
