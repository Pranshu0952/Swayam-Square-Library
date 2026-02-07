import React from "react";

const Location = () => {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-16">
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-12 animate-fadeIn">
        Contact & Location
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* 📍 Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg animate-slideLeft">
          <iframe
            title="Library Location"
            src="https://www.google.com/maps?q=Naipalapur,Sitapur,Uttar+Pradesh&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* 📝 Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg space-y-5 animate-slideRight">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Location;
