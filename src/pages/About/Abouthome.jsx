import React from 'react';
import BannerImg from "../../assets/images/banner.png";

const Abouthome = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        {/* Left: Content */}
        <div className="md:w-1/2 w-full mb-8 md:px-12 md:mb-0 md:pr-12">
            <p className='w-16 border-t-2 border-blue-600 mb-4'></p>
            <h6 className="text-blue-600 font-semibold mb-2 ">Our school campus</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 py-2">
            About PSG World School
          </h2>
          <p className="text-md text-gray-600 mb-6 py-2">
           PSG World School Coimbatore stands as a beacon of progressive education in South India. As part of the reputed PSG World School Group of Schools, we offer a dynamic learning journey guided by the principles of the National Education Policy (NEP) and the National Curriculum Framework (NCF). Our holistic pedagogy integrates academic rigor with experiential and values-based learning, cultivating confident, creative, and curious learners. With campuses in Chennai (Bollineni Hillside & Perungudi), Coimbatore, Trichy, and Bengaluru, PSG World School nurtures students with a forward-thinking curriculum, rooted in Indian ethos and global best practices. We are committed to creating lifelong learners who thrive in a rapidly changing world.
          </p>
        </div>
        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={BannerImg}
            alt="About PSG World School"
            className="w-full max-w-lg rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Abouthome;