import React from "react";
import { Check } from "lucide-react";

const reasons = [
  "Education aligned with World standards and practices",
  "Focus on holistic development and learner agency",
  "Inclusive, safe, and supportive learning environment",
  "Emphasis on values, reflection, and global understanding",
  "Backed by the legacy and educational excellence of the PSG Trust",
];

const Why = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-yellow/50 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-semibold text-[#B18141] tracking-wide">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mt-3 leading-snug drop-shadow-sm">
            Why PSG World School?
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl">
            PSG World School, is committed to delivering a high-quality
            international education guided by the principles of the 
            {/* <span className="font-bold text-[#B18141]"> International Baccalaureate (IB)</span>. Our school aims to develop */}
            students who are inquisitive, knowledgeable, and caring, and who are
            prepared to contribute positively to a complex and interconnected
            world.
          </p>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1">
                    <Check size={18} color="#B18141" />
                  </span>
                  <span className="text-gray-800">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
