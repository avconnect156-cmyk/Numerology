"use client";

import React from "react";
import Section from "../ui/Section";
import {
  Users,
  Heart,
  Calendar,
  Briefcase,
  Sparkles,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Life Path Analysis",
    description:
      "Discover your life's purpose and the unique path you were born to travel.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Expression Number",
    description:
      "Unlock your natural talents and how you express yourself to the world.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Name Numerology",
    description:
      "Analyze the power and vibration behind your name and its impact on your destiny.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Birth Day Insight",
    description:
      "Understand the special gifts bestowed upon you by your day of birth.",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    title: "Compatibility Reading",
    description:
      "Explore the dynamics between you and your partner through numbers.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Annual Forecast",
    description:
      "Get ready for the year ahead with a detailed personalized prediction.",
    icon: <Users className="w-6 h-6" />,
  },
];

const Services = () => {
  return (
    <Section
      id="services"
      className="bg-[linear-gradient(180deg,_#0F172A_0%,_#134E4A_60%,_#14532D_100%)] pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 -translate-y-4 md:-translate-y-6"
    >
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
          Our Services
        </h2>

       <p className="mt-6 max-w-4xl mx-auto text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-white/85">
  Discover{" "}
  <span className="bg-gradient-to-r from-[#FFD54F] via-[#F4B400] to-[#FFEA8A] bg-clip-text text-transparent font-semibold">
    personalized numerology insights
  </span>{" "}
  that reveal your{" "}
  <span className="text-white font-medium">
    life's purpose
  </span>
  ,{" "}
  <span className="bg-gradient-to-r from-[#FFD54F] via-[#F4B400] to-[#FFEA8A] bg-clip-text text-transparent font-semibold">
    relationships
  </span>
  ,{" "}
  <span className="bg-gradient-to-r from-[#FFD54F] via-[#F4B400] to-[#FFEA8A] bg-clip-text text-transparent font-semibold">
    career path
  </span>
  , and{" "}
  <span className="bg-gradient-to-r from-[#FFD54F] via-[#F4B400] to-[#FFEA8A] bg-clip-text text-transparent font-semibold">
    future opportunities
  </span>
  <br className="hidden md:block" />
  with remarkable{" "}
  <span className="italic text-white font-medium">
    clarity, confidence, and timeless wisdom.
  </span>
</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-[#FCFBF7] rounded-2xl p-6 border border-white/30 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37]"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD54F] to-[#F4B400] text-[#134E4A] mb-5 transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0F172A] font-serif mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-7">
              {service.description}
            </p>

            {/* Bottom Accent */}
            <div className="mt-5 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-300 group-hover:w-14"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;