import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AboutBanne1 from "../../assets/images/campus/campus15.png";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { GraduationCap, Users, FileText, Star, HandCoins } from "lucide-react";

const Admission = () => {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

   const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  // Content Data
  const steps = [
    { icon: <FileText className="w-6 h-6 text-emerald-600" />, title: "Online Inquiry Form Submission" },
    { icon: <Users className="w-6 h-6 text-emerald-600" />, title: "Campus Tour & Interaction" },
    { icon: <GraduationCap className="w-6 h-6 text-emerald-600" />, title: "Entrance Assessment & Student Profile Review" },
    { icon: <Star className="w-6 h-6 text-emerald-600" />, title: "Parent Meeting and Offer of Admission" },
  ];

  const scholarships = [
    { icon: <Star className="w-6 h-6 text-yellow-500" />, title: "Merit-Based Scholarships", desc: "For high achievers across academics, sports, and arts." },
    { icon: <HandCoins className="w-6 h-6 text-yellow-500" />, title: "Need-Based Financial Aid", desc: "Ensuring inclusivity and equal opportunity for every learner." },
  ];

  const ageCriteria = [
    { no: 1, grade: "Reception", range: "3–4 years", uk: "Nursery", us: "Pre-School" },
    { no: 2, grade: "Prep 1", range: "4–5 years", uk: "Reception", us: "Pre-KG" },
    { no: 3, grade: "Prep 2", range: "5–6 years", uk: "Year 1", us: "KG" },
    { no: 4, grade: "Grade 1", range: "6–7 years", uk: "Year 2", us: "Grade 1" },
    { no: 5, grade: "Grade 2", range: "7–8 years", uk: "Year 3", us: "Grade 2" },
    { no: 6, grade: "Grade 3", range: "8–9 years", uk: "Year 4", us: "Grade 3" },
    { no: 7, grade: "Grade 4", range: "9–10 years", uk: "Year 5", us: "Grade 4" },
    { no: 8, grade: "Grade 5", range: "10–11 years", uk: "Year 6", us: "Grade 5" },
  ];

  // ✅ Reusable heading
  const Heading = ({ black, yellow }) => (
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      <span className="text-gray-900">{black} </span>
      <span className="text-yellow-300">{yellow}</span>
    </h2>
  );

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative h-[90vh] flex items-end justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBanne1})` }}
      >
        <div className="absolute inset-0 bg-blue-900/24 to-transparent"></div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg 
               bg-yellow-300 bg-clip-text text-transparent italic">
  Admissions
 
</h1>
<div className="w-20 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 mx-auto mt-4"></div>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-emerald-200 via-green-100 to-emerald-50 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-700">
          <span>🏠</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-800 font-semibold">Admissions</span>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <Heading black="Join the" yellow="PSG World School Community" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Our admissions process is transparent, inclusive, and student-centered. 
            We seek learners who are curious, open-minded, and ready to embrace 
            the challenge of IB learning.
          </p>
        </div>
      </section>

      {/* Path to Admission */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
          <Heading black="Path to" yellow="Admission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 border"
              >
                {step.icon}
                <p className="text-gray-700 font-medium">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
          <Heading black="Scholarships &" yellow="Financial Aid" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {scholarships.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-white shadow-sm border rounded-xl p-6 flex items-start gap-4">
                {item.icon}
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Criteria Table */}
       <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Heading black="Age" yellow="Criteria" />
          <div className="w-20 h-[3px] bg-gradient-to-r from-emerald-500 via-yellow-400 to-indigo-500 rounded-full mx-auto mt-4 mb-10"></div>
        </motion.div>

        {/* Animated Table */}
        <div className="overflow-x-auto">
          <motion.table
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full border-collapse rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-left">
              <tr>
                {["No", "Grade", "Age Range", "UK System", "US System"].map(
                  (col, i) => (
                    <motion.th
                      key={i}
                      variants={item}
                      className="p-4 text-sm sm:text-base font-semibold tracking-wide"
                    >
                      {col}
                    </motion.th>
                  )
                )}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 bg-white">
              {ageCriteria.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={item}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(240,253,244,0.8)",
                  }}
                  className="transition duration-300 cursor-pointer"
                >
                  <td className="p-4 font-semibold text-gray-700">{row.no}</td>
                  <td className="p-4 text-emerald-700 font-medium">
                    {row.grade}
                  </td>
                  <td className="p-4 text-gray-600">{row.range}</td>
                  <td className="p-4 text-indigo-700">{row.uk}</td>
                  <td className="p-4 text-yellow-700">{row.us}</td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Admission;