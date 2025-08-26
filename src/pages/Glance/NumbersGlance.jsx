import React, { useRef } from "react";
import GlanceImg from "../../assets/images/glance.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Legacy" },
  { value: 6000, suffix: "+", label: "Students Across India" },
  { value: 6, suffix: "+", label: "Campuses Across India" },
  { value: 100, suffix: "%", label: "Results in 12th Exams" },
  { value: 100, suffix: "%", label: "Results in 10th Exam" },
  { value: 350, suffix: "+", label: "Highly-Qualified Teachers" },
];

function StatCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <span className="text-2xl font-bold mb-1">
      {count}
      {suffix}
    </span>
  );
}

function NumbersGlance() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative w-full bg-gray-100 py-10" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={GlanceImg}
          alt="Library Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 w-full text-white md:pr-12 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">
            PSG World's
          </h2>
          <h3 className="text-2xl font-semibold mb-4">Numbers at a Glance</h3>
          <p className="text-lg mb-6">
            For over a decade, PSG World School has transformed aspirations into
            achievements. With 6+ school campuses across India, we've guided
            over 6000 students. PSG World continues to shape the future of its
            students, one student at a time.
          </p>
        </div>
        {/* Right Side - Stats */}
        <div className="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 text-white">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start border-l border-white pl-4"
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
              <span className="text-md">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NumbersGlance;
