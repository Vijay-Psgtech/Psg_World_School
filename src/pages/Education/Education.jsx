import React, { useState } from "react";
import preschoolImg from "../../assets/images/students/preschool.jpg";
import middleSchoolImg from "../../assets/images/students/middleschool.jpg";
import highSchoolImg from "../../assets/images/students/hsc.jpg";

const EducationData = [
  {
    id: 1,
    title: "Pre-K to Grade 5",
    subtitle: "Country Day and Junior School",
    tagline: "EXPLORE",
    description:
      "YOUR CHILD WILL SAFELY EXPLORE THEIR WORLD in a nurturing and intimate environment, through a variety of different settings and content areas.",
    image: `${preschoolImg}`,
  },
  {
    id: 2,
    title: "Grade 6-8",
    subtitle: "",
    tagline: "GROW",
    description:
      "Students in Grades 6-8 will build independence, confidence, and curiosity through engaging learning experiences designed to spark creativity and growth.",
    image: `${middleSchoolImg}`,
  },
  {
    id: 3,
    title: "Grades 9-12",
    subtitle: "",
    tagline: "FLOURISH",
    description:
      "High school students will flourish as leaders and innovators, ready to embrace opportunities and challenges in academics, arts, athletics, and beyond.",
    image: `${highSchoolImg}`,
  },
];

function Education() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-purple-50">
      <div className="text-center mb-12">
        <p className="w-16 border-t-2 border-blue-600 mx-auto mb-4"></p>
        <h1 className="text-4xl font-bold text-gray-900">Education Programs</h1>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {EducationData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              className="w-100 h-[420px] perspective cursor-pointer transform transition hover:scale-[1.03]"
              onClick={() => setActiveId(isActive ? null : item.id)}
            >
              <div
                className={`relative flex-1 rounded-lg overflow-hidden transition-all duration-500 ${
                  activeId && activeId !== item.id
                    ? "opacity-40 grayscale"
                    : "opacity-100"
                }`}
              >
                {/* Expanded View */}
                {activeId === item.id ? (
                  <div className="bg-[#0a2856] text-white h-full flex flex-col justify-between p-8 rounded-lg">
                    <div>
                      <p className="text-sm font-semibold text-yellow-400 mb-2">
                        {item.tagline}
                      </p>
                      <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                      <p className="text-lg font-semibold text-yellow-400 mb-4">
                        {item.subtitle}
                      </p>
                      <p className="text-gray-200 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <button
                      className="mt-6 bg-yellow-400 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center"
                      onClick={() => setActiveId(null)}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  /* Default Card View */
                  <div className="relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-sm font-semibold text-yellow-400">
                        {item.tagline}
                      </p>
                      <h2 className="text-2xl font-bold text-white">
                        {item.title}
                      </h2>
                      <p className="text-yellow-400 font-semibold">
                        {item.subtitle}
                      </p>
                    </div>
                    <button
                      className="absolute bottom-4 right-4 bg-yellow-400 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center"
                      onClick={() => setActiveId(item.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
