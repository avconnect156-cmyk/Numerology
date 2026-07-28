"use client";

import React from "react";

const VastuIntroductionSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-12 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[2.5px] text-xs md:text-sm font-semibold">
            Ancient Science
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold leading-[1.1] text-white">
            Understanding
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Vastu Shastra
            </span>
          </h2>

          <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

        </div>

        {/* ================= Main Card ================= */}

        <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

          <div className="relative z-10">

       {/* ================= What is Vastu Shastra? ================= */}

<div className="mt-14">

  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-2xl">
      🏛️
    </div>

    <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
      What is Vastu Shastra?
    </h3>
  </div>

  <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
    Vastu Shastra is an ancient Indian science of architecture and design that
    guides how buildings, homes, temples, and cities should be constructed in
    harmony with nature, directions, energy flow, and cosmic forces.
  </p>

  <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
    The word{" "}
    <span className="font-semibold text-white">Vastu</span> means{" "}
    <span className="text-[#FFD54F] font-semibold">"dwelling"</span> and{" "}
    <span className="font-semibold text-white">Shastra</span> means{" "}
    <span className="text-[#FFD54F] font-semibold">
      "science or knowledge."
    </span>
  </p>

  {/* Panch Tatva */}

  <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 sm:p-8">

    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
        🌿
      </div>

      <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
        Panch Tatva (Five Elements)
      </h4>
    </div>

    <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
      It is based on balancing the five elements (Panch Tatva):
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

      {[
        "🌍 Earth (Prithvi)",
        "💧 Water (Jal)",
        "🔥 Fire (Agni)",
        "🌬️ Air (Vayu)",
        "✨ Space (Aakash)",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4 text-center"
        >
          <p className="text-sm sm:text-base font-medium text-white">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>

  <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6">

    <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-semibold text-[#FFD54F] leading-relaxed">
      The goal of Vastu is to create spaces that promote health,
      prosperity, peace, and positive energy.
    </p>

  </div>

</div>

{/* ================= Mythological Origins ================= */}

<div className="mt-14">

  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-2xl">
      📜
    </div>

    <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
      Mythological Origins of Vastu
    </h3>
  </div>

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    {/* Vishwakarma */}

    <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
          🛕
        </div>

        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
          Dev Shilpi Vishwakarma
        </h4>
      </div>

      <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
        In Hindu mythology, Bhagwan Vishwakarma is known as the divine
        architect of the gods (Devas). He is believed to have designed:
      </p>

      <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

        <li className="flex gap-3">
          <span className="text-[#FFD54F] font-bold">•</span>
          <span>Swarg Lok (Heaven)</span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#FFD54F] font-bold">•</span>
          <span>Dwarka (Krishna's Kingdom)</span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#FFD54F] font-bold">•</span>
          <span>Indraprastha (Pandavas' Capital)</span>
        </li>

      </ul>

      <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-5">

        <p className="text-center text-base sm:text-lg md:text-[20px] italic font-semibold text-[#FFD54F] leading-relaxed">
          He symbolizes perfect Vastu knowledge, where balance and harmony
          lead to prosperity and success.
        </p>

      </div>

    </div>

    {/* Mayasura */}

    <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
          🏰
        </div>

        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
          Danav Shilpi Mayasura
        </h4>
      </div>

      <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
        Among the Danavas (Asuras), the greatest architect was Mayasura
        (May). He was highly skilled and created extraordinary structures.
      </p>

    </div>

  </div>

</div>

{/* ================= Mayasabha ================= */}

<div className="mt-14">

  <div className="flex items-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-2xl">
      ✨
    </div>

    <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
      Mayasabha &amp; the Mahabharata Incident
    </h3>
  </div>

  <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
    Mayasura built the famous Mayasabha (Palace of Illusions) for the
    Pandavas at Indraprastha.
  </p>

  <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
        🏯
      </div>

      <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
        Architectural Illusions
      </h4>
    </div>

    <ul className="mt-8 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

      <li className="flex gap-3">
        <span className="text-[#FFD54F] font-bold">•</span>
        <span>Floors that looked like water but were solid.</span>
      </li>

      <li className="flex gap-3">
        <span className="text-[#FFD54F] font-bold">•</span>
        <span>Water bodies that appeared like floors.</span>
      </li>

      <li className="flex gap-3">
        <span className="text-[#FFD54F] font-bold">•</span>
        <span>Optical illusions in structure and design.</span>
      </li>

    </ul>

  </div>

</div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VastuIntroductionSection;