import React from "react";
import img1 from "../../assets/gallery1.png";
import img2 from "../../assets/gallery2.jpeg";
import img3 from "../../assets/gallery3.jpeg";
import img4 from "../../assets/gallery4.jpeg";
import img5 from "../../assets/gallery5.jpeg";
import img6 from "../../assets/gallery6.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-12">
        Photo Gallery
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md group"
          >
            <img
              src={img}
              alt="Library"
              className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
