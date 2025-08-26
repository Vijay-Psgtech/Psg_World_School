import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Campus1 from "../../assets/images/campus/campus1.jpg";
import Campus2 from "../../assets/images/campus/campus2.jpg";
import Campus3 from "../../assets/images/campus/campus3.jpg";
import Campus4 from "../../assets/images/campus/campus4.jpg";

const highlights = [
  {
    title: "Smart Classrooms",
    img: Campus1,
    desc: "Our smart classrooms use digital tools to enhance interactive learning, making lessons engaging, visual, and easier to understand for all students.",
  },
  {
    title: "Library",
    img: Campus2,
    desc: "A vibrant and inviting space, our library is stocked with diverse titles across genres and languages, fostering reading habits, research skills, and quiet reflection.",
  },
  {
    title: "Labs",
    img: Campus3,
    desc: "Our advanced science and computer labs provide hands-on learning, fostering innovation, experimentation, and practical problem-solving skills among students.",
  },
  {
    title: "Playgrounds / Sports Facilities",
    img: Campus4,
    desc: "As a hub for physical activity, our playgrounds and sports facilities promote teamwork, discipline, and healthy competition, essential for holistic student development.",
  },
];

function CampusHighlights() {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    const cardWidth = 360; // Adjusted card width
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * cardWidth * 1.1,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <p className="w-16 border-t-2 border-blue-600 mb-4"></p>
        <h4 className="text-blue-500 font-semibold mb-2">Academic Programs</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Campus Highlights
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                       w-12 h-12 flex items-center justify-center 
                       rounded-full bg-white/80 backdrop-blur-md shadow-lg 
                       hover:scale-110 hover:bg-blue-600 hover:text-white 
                       transition"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll Left"
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[340px] max-w-sm rounded-2xl overflow-hidden 
                           bg-white shadow-md flex-shrink-0 scroll-snap-align-start 
                           transform transition hover:scale-[1.03] hover:shadow-xl"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Image with gradient */}
                <div className="relative h-56 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
                       w-12 h-12 flex items-center justify-center 
                       rounded-full bg-white/80 backdrop-blur-md shadow-lg 
                       hover:scale-110 hover:bg-blue-600 hover:text-white 
                       transition"
            onClick={() => scrollBy(1)}
            aria-label="Scroll Right"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CampusHighlights;
