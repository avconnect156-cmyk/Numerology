"use client";

import React from "react";

const VedangasSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-16 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 sm:px-5 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">
            Six Sacred Limbs
          </span>

          <h2 className="mt-5 sm:mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            The
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Six Vedangas
            </span>
          </h2>

          <div className="w-20 sm:w-24 lg:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-5 sm:mt-6 lg:mt-8"></div>

        </div>

        {/* ================= Premium Card ================= */}

        <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[90px] sm:blur-[110px] lg:blur-[130px]" />

          <div className="relative z-10">

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFD54F] mb-6 sm:mb-8">
              The Six Vedangas (Limbs of the Vedas)
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-7 sm:leading-8 lg:leading-9">

              Apart from{" "}
              <span className="font-semibold text-white">
                Jyotish
              </span>
              , the other five{" "}
              <span className="font-semibold text-[#FFD54F]">
                Vedangas
              </span>{" "}
              are metaphorically compared to parts of the human body.

            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-4 rounded-xl border border-[#FFD54F]/10 bg-white/5 p-4">
                <span className="text-2xl">👃</span>
                <p className="text-sm sm:text-base lg:text-lg text-white">
                  <span className="font-semibold text-[#FFD54F]">
                    1. Shiksha (Phonetics)
                  </span>{" "}
                  – Nose
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#FFD54F]/10 bg-white/5 p-4">
                <span className="text-2xl">👄</span>
                <p className="text-sm sm:text-base lg:text-lg text-white">
                  <span className="font-semibold text-[#FFD54F]">
                    2. Vyakarana (Grammar)
                  </span>{" "}
                  – Mouth
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#FFD54F]/10 bg-white/5 p-4">
                <span className="text-2xl">👂</span>
                <p className="text-sm sm:text-base lg:text-lg text-white">
                  <span className="font-semibold text-[#FFD54F]">
                    3. Nirukta (Etymology)
                  </span>{" "}
                  – Ears
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#FFD54F]/10 bg-white/5 p-4">
                <span className="text-2xl">🦶</span>
                <p className="text-sm sm:text-base lg:text-lg text-white">
                  <span className="font-semibold text-[#FFD54F]">
                    4. Chandas (Meter / Prosody)
                  </span>{" "}
                  – Feet
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#FFD54F]/10 bg-white/5 p-4">
                <span className="text-2xl">✋</span>
                <p className="text-sm sm:text-base lg:text-lg text-white">
                  <span className="font-semibold text-[#FFD54F]">
                    5. Kalpa (Rituals & Procedures)
                  </span>{" "}
                  – Hands
                </p>
              </div>

            </div>

            <p className="mt-8 text-sm sm:text-base lg:text-lg text-white/85 leading-7 sm:leading-8 lg:leading-9">

              Together, these disciplines form a complete system for understanding and applying{" "}
              <span className="font-semibold text-[#FFD54F]">
                Vedic wisdom.
              </span>

            </p>

            <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-24 lg:group-hover:w-32"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VedangasSection;