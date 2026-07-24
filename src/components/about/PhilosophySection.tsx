"use client";

import React from "react";

const PhilosophySection = () => {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">

      {/* Background Glow */}
      <div className="absolute -top-24 right-0 w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 sm:px-5 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">
            Ancient Wisdom
          </span>

          <h2 className="mt-5 sm:mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            The Connection Between

            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Astrology (Jyotish) & The Vedas
            </span>
          </h2>

          <div className="w-20 sm:w-24 lg:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-5 sm:mt-6 lg:mt-8"></div>

        </div>

        {/* Content Card */}
        <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />

          <div className="relative z-10">

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFD54F] mb-5 sm:mb-6 lg:mb-8">
              The Fundamental Philosophy
            </h3>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              <span className="font-semibold text-white">
                Vedic Astrology, known as Jyotish,
              </span>{" "}
              is an integral part of the Vedic tradition and is deeply rooted
              in ancient scriptures such as the

              <span className="text-[#FFD54F] font-semibold">
                {" "}Vedas
              </span>
              ,

              <span className="text-[#FFD54F] font-semibold">
                {" "}Upanishads
              </span>
              ,

              and

              <span className="text-[#FFD54F] font-semibold">
                {" "}Vedangas
              </span>
              .

              <br />
              <br />

              Within the Vedic framework, six auxiliary disciplines known as the

              <span className="text-[#FFD54F] font-semibold">
                {" "}Vedangas
              </span>{" "}

              were established to support the understanding and application of
              Vedic knowledge.

              <br />
              <br />

              Among them,

              <span className="font-bold text-[#FFD54F]">
                {" "}Jyotish is regarded as the "Eye of the Vedas."
              </span>

            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-24 lg:group-hover:w-32"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PhilosophySection;