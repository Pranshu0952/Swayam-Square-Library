import React from "react";
import heroImg from "/bg.png";
import Regitation from '../common/rigestation/LibraryRegister'

const Hero = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Best Study Environment in Sitapur
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Peaceful • Silent • Fully AC • 24×7 Open
        </p>

        <a
          href="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Join Now
        </a>
      </div>
    </section>
  );
};

export default Hero;