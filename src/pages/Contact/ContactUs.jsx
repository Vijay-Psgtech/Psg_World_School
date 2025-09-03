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
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold tracking-tight drop-shadow-lg"
        >
          <span className="text-black">Contact</span>{" "}
            <span className="text-yellow-500">Us</span>
        </motion.h1>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-800 text-3xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Our Address</h3>
            <p className="text-gray-600 mt-2">
              S.F. No. 472, Civil Aerodrome Post, Coimbatore, Tamil Nadu –
              641014.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaEnvelope className="text-blue-800 text-3xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Email Us</h3>
            <p className="text-gray-600 mt-2">
              admissions@psgworldschool.edu.in
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-blue-800 text-3xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Call Us</h3>
            <p className="text-gray-600 mt-2">+91 XXXXX XXXXX</p>
          </div>
        </motion.div>
      </section>

      {/* Google Maps + Form */}
      <section className="px-6 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Google Map */}
        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow">
          <iframe
            title="school-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0537513396685!2d77.03128737498162!3d11.034594154378855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858526b5c0591%3A0x6c452206816788d4!2sPSG%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1756792652876!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaTwitter />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
