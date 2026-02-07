import React from "react";
import { Wifi, Snowflake, Armchair, Newspaper, Droplets, Camera, Flame, BookOpen } from "lucide-react";

const facilitiesData = [
  {
    icon: <Wifi size={36} />,
    title: "High-Speed Wi-Fi",
    desc: "Fast and reliable internet access for online classes, research, and study materials."
  },
  {
    icon: <Snowflake size={36} />,
    title: "Fully Air-Conditioned",
    desc: "Cool and comfortable environment that helps students stay focused for long hours."
  },
  {
    icon: <Armchair size={36} />,
    title: "Comfortable Seating",
    desc: "Ergonomic chairs and spacious desks designed for long study sessions."
  },
  {
    icon: <Newspaper size={36} />,
    title: "Daily Newspapers",
    desc: "Stay updated with current affairs and competitive exam preparation materials."
  },
  {
    icon: <Droplets size={36} />,
    title: "RO Drinking Water",
    desc: "Safe and purified drinking water available throughout the day."
  },
  {
    icon: <Camera size={36} />,
    title: "CCTV Surveillance",
    desc: "24×7 security monitoring ensures a safe and secure study environment."
  },
  {
    icon: <Flame size={36} />,
    title: "Heater in Winter",
    desc: "Warm and cozy study space during cold seasons for uninterrupted learning."
  },
  {
    icon: <BookOpen size={36} />,
    title: "Peaceful Environment",
    desc: "Noise-free and disciplined atmosphere ideal for focused learning."
  }
];

const Facilities = () => {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-blue-900 mb-12">
        Our Facilities
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {facilitiesData.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
