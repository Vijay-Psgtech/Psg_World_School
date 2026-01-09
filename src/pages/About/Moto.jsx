import React from "react";
import bgImg from "../../assets/images/classroom.png";

const Moto = () => {
  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-center py-16">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-wide">
          Our <span className="text-[#B18141]">Motto</span>
        </h2>

        {/* i3 */}
        <h3 className="text-6xl md:text-7xl font-bold text-[#B18141] drop-shadow-lg mb-6">
          i<sup className="text-3xl text-white">3</sup>
        </h3>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-white font-light tracking-widest uppercase">
          <span className="text-[#3B82F6] font-semibold">Ignite</span>,{" "}
          <span className="text-[#B18141] font-semibold">Innovate</span>,{" "}
          <span className="text-white font-semibold">Inspire</span>
        </p>

        {/* Decorative line */}
        <div className="mt-8 w-24 h-[2px] bg-[#B18141] mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Moto;
