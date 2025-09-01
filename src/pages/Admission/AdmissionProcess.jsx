import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FileText, Users, ClipboardCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <FileText className="w-10 h-10 text-yellow-700" />,
    title: "Online Inquiry Form",
    description:
      "Start your journey by filling out our simple online inquiry form to share your interest.",
  },
  {
    id: 2,
    icon: <Users className="w-10 h-10 text-yellow-700" />,
    title: "Campus Tour & Interaction",
    description:
      "Experience our vibrant campus, meet our faculty, and get a glimpse of student life.",
  },
  {
    id: 3,
    icon: <ClipboardCheck className="w-10 h-10 text-yellow-700" />,
    title: "Entrance Assessment",
    description:
      "Applicants undergo an entrance assessment and profile review to understand their readiness.",
  },
  {
    id: 4,
    icon: <GraduationCap className="w-10 h-10 text-yellow-700" />,
    title: "Parent Meeting & Admission",
    description:
      "A final interaction with parents followed by an offer of admission to join PSG World School.",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 font-serif"
        >
          Admissions
        </motion.h2>
        <p className="text-lg text-gray-600">
          <span className="font-semibold text-blue-800">
            Join the PSG World School Community
          </span>
          <br />
          Our admissions process is transparent, inclusive, and student-centered. 
          We seek learners who are curious, open-minded, and ready to embrace the challenge of IB learning.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-6 bg-yellow-100 rounded-full p-5">{step.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;
