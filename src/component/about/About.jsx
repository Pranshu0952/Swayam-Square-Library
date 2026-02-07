import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 px-6 md:px-16">
      
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-12">
        About
      </h2>

      {/* Card Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Welcome to Swyam Square Library
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            Shyam Library is a study center situated near Hanuman Mandir in 
            Naipalapur, Sitapur, Uttar Pradesh (261001). We provide a quiet 
            and conducive environment specifically designed for students 
            who seek to focus on their studies.
          </p>

          <p className="text-gray-700 text-lg mt-4 leading-relaxed">
            Our library is recognized as an ideal place for dedicated learning,
            offering comfort, peace, and a distraction-free atmosphere for 
            academic success.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={"./bg.png"}
            alt="Library Study Environment"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
