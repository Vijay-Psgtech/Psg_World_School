import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";
import { Users, Globe2, BookOpen, Leaf, Music, Cpu, Dumbbell, Mountain } from "lucide-react";

const StudentLife = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 font-sans">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16 font-serif"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-lg mb-4">
            Student Life – Beyond Academics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At PSG World School, life extends beyond the classroom. 
            We empower learners with leadership, creativity, global exposure, and a spirit of adventure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Leadership & Global Citizenship */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-blue-700 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-blue-700 w-8 h-8" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Leadership & Global Citizenship
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>• Model United Nations (MUN), TEDx Youth, and student-led councils.</li>
              <li>• Community service programs aligned with UN Sustainable Development Goals.</li>
              <li>• Global exchange programs and partnerships with international schools.</li>
            </ul>
          </motion.div>

          {/* Clubs & Societies */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-yellow-400 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-yellow-500 w-8 h-8" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Clubs & Societies
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>• Entrepreneurship & Start-up Incubator</li>
              <li>• STEM and Coding Clubs</li>
              <li>• Debate & Literature Circles</li>
              <li>• Eco-Warriors & Sustainability Initiatives</li>
              <li>• Music Bands, Theatre, and Fine Arts Guilds</li>
            </ul>
          </motion.div>

          {/* Sports & Adventure */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-green-600 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="text-green-600 w-8 h-8" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Sports & Adventure
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>• Athletics, swimming, basketball, football, cricket, tennis, and martial arts.</li>
              <li>• Outdoor learning, trekking, and leadership camps.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
