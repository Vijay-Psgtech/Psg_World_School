import React from "react";
import image1 from "../../assets/images/gallery/image1.jpeg";
import image2 from "../../assets/images/gallery/image2.jpg";
import image3 from "../../assets/images/gallery/image3.png";
import image4 from "../../assets/images/gallery/image4.jpg";
import image5 from "../../assets/images/gallery/image5.jpeg";
import image6 from "../../assets/images/gallery/image6.jpg";

const GalleryImages = [
  { src: image1, alt: "Gallery Image 1" },
  { src: image2, alt: "Gallery Image 2" },
  { src: image3, alt: "Gallery Image 3" },
  { src: image4, alt: "Gallery Image 4" },
  { src: image5, alt: "Gallery Image 5" },
  { src: image6, alt: "Gallery Image 6" },
];

const Gallery = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="w-16 border-t-2 border-blue-600 mx-auto mb-4"></p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            PSG World's School Gallery
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GalleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <p className="text-white text-lg font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
