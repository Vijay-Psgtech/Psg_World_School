import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Map & Contact Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="PSG World School Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7832.382858792162!2d77.00024787498151!3d11.024259654573672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1750401673457!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6 hover:shadow-xl transition">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FiMapPin className="text-yellow-500 text-3xl mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-1">
                  PSG World School
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Avinashi Road Peelamedu Coimbatore, Tamilnadu, India-641004
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FiPhone className="text-yellow-500 text-3xl mt-1" />
              <div>
                <p className="text-gray-700 font-medium">(0422) 4344522</p>
                <p className="text-gray-700">4344220</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FiMail className="text-yellow-500 text-3xl mt-1" />
              <div>
                <p className="text-gray-700">principal@psgps.edu.in</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Admission Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-gray-900 mb-4 leading-tight">
            Want Admission at{" "}
            <span className="text-yellow-500">PSG World School?</span>
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mb-6 rounded-full"></div>

          <div className="text-gray-700 space-y-5 mb-10 text-lg leading-relaxed">
            <p>
              Our admissions process is transparent, inclusive, and
              student-centered. We seek learners who are curious, open-minded,
              and ready to embrace the challenge of IB learning.
            </p>
            <p>
              Our educators are lifelong learners, continuously upskilled to
              meet evolving academic and emotional needs. We balance academic
              rigour with enriching co-curricular activities, nurturing.
            </p>
            <p>
              From leadership and communication to emotional intelligence and
              digital literacy, we empower students with vital life skills.
              Student well-being is central, supported by mindfulness, fitness,
              and community service.
            </p>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            Apply for Admission
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
