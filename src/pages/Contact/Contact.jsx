import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="w-full bg-white p-16 md:py-24 md:px-32">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Map & Contact Info */}
        <div className="w-full md:w-1/2">
          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow mb-6">
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
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <FiMapPin className="text-pink-500 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-1">PSG World School</h4>
                <p className="text-gray-600">
                    Avinashi Road
                    Peelamedu Coimbatore,
                    Tamilnadu, India-641004
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-pink-500 text-2xl" />
              <div>
                <p className="text-gray-600">(0422) 4344522</p>
                <p className="text-gray-600">4344220</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiMail className="text-pink-500 text-2xl" />
              <div>
                <p className="text-gray-600">principal@psgps.edu.in</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Admission Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Want Admission at PSG World School?
          </h2>
          <p className="text-gray-600 mb-2">
            Connect with our admission counsellor for free personal guidance
          </p>
          <div className="text-gray-700 space-y-4 mb-8">
            <p>
              At PSG World School, education goes beyond books and exams. Our classrooms spark curiosity, creativity, and collaboration, embracing each child’s unique learning style and pace. We blend technology with teaching to prepare students for a digital future, while our value-based approach builds empathy, integrity, and social awareness.
            </p>
            <p>
              Our educators are lifelong learners, continuously upskilled to meet evolving academic and emotional needs. We balance academic rigour with enriching co-curricular activities, nurturing.
            </p>
            <p>
              From leadership and communication to emotional intelligence and digital literacy, we empower students with vital life skills. Student well-being is central, supported by mindfulness, fitness, and community service. With consistent academic results, global exposure, and strong parent-school partnerships, PSG World School shapes not just successful learners, but responsible citizens and compassionate individuals—ready for life, not just exams.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow transition w-full md:w-auto">
            Admission Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;