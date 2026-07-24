"use client";

import React from "react";

const PurposeSection = () => {
  return (
<section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 xl:pt-48 xl:pb-28 bg-[linear-gradient(180deg,#020617_0%,#0F172A_45%,#134E4A_80%,#14532D_100%)]">

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-[#C5A065] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-12 lg:mb-16">

          <span className="inline-block px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[3px] text-xs sm:text-sm font-semibold">
            About AstroVastuConnect
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight text-white">
            Our
            <span className="bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              {" "}Purpose
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/75">
            Empowering individuals with the timeless wisdom of Vedic sciences
            to create a life filled with clarity, harmony, success, and purpose.
          </p>

          <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

        </div>

        {/* ================= Cards ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">

          {/* ================= Mission ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

            <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

            <div className="relative z-10">

              {/* Icon + Title */}

              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFD54F] to-[#F4B400] flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                  ✨
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F]">
                  Our Mission
                </h3>

              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">
                <span className="font-semibold text-white">
                  AstroVastu Connect (AVC)
                </span>{" "}
                is committed to helping people achieve
                <span className="text-[#FFD54F] font-semibold">
                  {" "}growth
                </span>,
                <span className="text-[#FFD54F] font-semibold">
                  {" "}success
                </span>,
                <span className="text-[#FFD54F] font-semibold">
                  {" "}inner peace
                </span>,
                and
                <span className="text-[#FFD54F] font-semibold">
                  {" "}lasting transformation
                </span>.

                <br />
                <br />

                Through authentic Vedic knowledge, we guide every individual
                toward a balanced life by aligning personal energy with
                universal principles.
              </p>

              <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28"></div>

            </div>

          </div>

          {/* ================= Vision ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

            <div className="relative z-10">

              {/* Icon + Title */}

              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFD54F] to-[#F4B400] flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                  🌟
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F]">
                  Our Vision
                </h3>

              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">
                We envision a world where the ancient sciences of
                <span className="text-[#FFD54F] font-semibold">
                  {" "}Astrology
                </span>,
                <span className="text-[#FFD54F] font-semibold">
                  {" "}Vastu Shastra
                </span>,
                <span className="text-[#FFD54F] font-semibold">
                  {" "}Numerology
                </span>,
                and other sacred disciplines inspire people to unlock their
                highest potential.

                <br />
                <br />

                Our goal is to help individuals live with
                <span className="text-[#FFD54F] font-semibold">
                  {" "}clarity
                </span>,
                <span className="text-[#FFD54F] font-semibold">
                  {" "}confidence
                </span>,
                and
                <span className="text-[#FFD54F] font-semibold">
                  {" "}purpose
                </span>,
                creating meaningful transformation for generations to come.
              </p>

              <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PurposeSection;