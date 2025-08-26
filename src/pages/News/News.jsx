import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Campus1 from "../../assets/images/campus/campus1.jpg";
import Campus2 from "../../assets/images/campus/campus2.jpg";
import Campus3 from "../../assets/images/campus/campus3.jpg";
import Campus4 from "../../assets/images/campus/campus4.jpg";

const NewsData = [
  {
    title: "School Reopens for the New Academic Year",
    img: Campus1,
    date: "2024-06-01",
    desc: "PSG World School is excited to welcome students back for the new academic year. We have implemented new safety protocols to ensure a safe learning environment.",
  },
  {
    title: "Annual Sports Day Highlights",
    img: Campus2,
    date: "2024-05-15",
    desc: "The Annual Sports Day was a grand success with students showcasing their athletic talents. Congratulations to all participants and winners!",
  },
  {
    title: "Science Fair 2024",
    img: Campus3,
    date: "2024-04-20",
    desc: "Our Science Fair featured innovative projects from students across all grades. It was inspiring to see their creativity and scientific thinking in action.",
  },
  {
    title: "Cultural Fest Celebrations",
    img: Campus4,
    date: "2024-03-30",
    desc: "The Cultural Fest brought together students, teachers, and parents to celebrate diversity through music, dance, and art. A memorable event for all!",
  },
];

const News = () => {
  const scrollRef = useRef(null);

  const scrollBy = (direction) => {
    const cardWidth = 360; // Adjusted card width for snapping
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * cardWidth * 1.1,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <p className="w-16 border-t-2 border-blue-600 mb-4"></p>
        <h4 className="text-blue-500 font-semibold mb-2">Latest Updates</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          News & Events
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                       w-12 h-12 flex items-center justify-center 
                       rounded-full bg-white/80 backdrop-blur-md shadow-lg 
                       hover:scale-110 hover:bg-blue-600 hover:text-white 
                       transition hidden md:flex"
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
            {NewsData.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[340px] max-w-sm rounded-2xl overflow-hidden 
                           bg-white shadow-md flex-shrink-0 scroll-snap-align-start 
                           transform transition hover:scale-[1.03] hover:shadow-xl"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Image with overlay */}
                <div className="relative h-56 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-lg font-bold text-white drop-shadow">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-4 block text-blue-700 font-semibold text-right hover:underline"
                  >
                    Read More →
                  </a>
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
                       transition hidden md:flex"
            onClick={() => scrollBy(1)}
            aria-label="Scroll Right"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
