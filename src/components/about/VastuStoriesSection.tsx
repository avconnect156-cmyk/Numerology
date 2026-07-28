"use client";

import React from "react";

const VastuStoriesSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-12 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[2.5px] text-xs md:text-sm font-semibold">
            Stories & Lessons
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold leading-[1.1] text-white">
            Mythological
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Stories of Vastu
            </span>
          </h2>

          <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8" />

        </div>

        {/* ================= Main Card ================= */}

        <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

          <div className="relative z-10">

            {/* ================= The Key Event ================= */}

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  ⚔️
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  The Key Event
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                As mentioned in the historical context of the Mahabharata,
                the Mayasabha (Palace of Illusions) became the setting for one
                of the most significant events that eventually contributed to
                the great war.
              </p>

              {/* Event Timeline */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
                      🌊
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Illusion
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    Duryodhan mistook a water pond, created through the palace's
                    illusion, as a solid floor and fell into it.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
                      😊
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Draupadi's Reaction
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    Draupadi laughed (or smiled, depending on interpretation),
                    which deeply hurt Duryodhan's pride and self-respect.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
                      😠
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Hurt Ego
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    The incident caused a deep wound to Duryodhan's ego,
                    increasing his anger and desire for revenge.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD54F]/10 border border-[#FFD54F]/20 text-xl">
                      ⚔️
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Consequence
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    This humiliation became one of the important triggers that
                    eventually led to the Mahabharata war.
                  </p>

                </div>

              </div>

            </div>
                        {/* ================= Interpretation in Vastu Context ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🧭
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Interpretation in Vastu Context
                </h3>

              </div>

              <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

                <p className="text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                  This story reflects that even great architecture, if not
                  aligned with clarity and human understanding, can create
                  imbalance, ego, and conflict.
                </p>

                <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      ⚖️
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                      Vastu Lesson
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                    True Vastu is not only about creating magnificent buildings.
                    It also emphasizes clarity, harmony, balance, and spaces
                    that support peace instead of confusion.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= Other Mythological Examples ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🏛️
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Other Mythological Examples
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Ancient scriptures present several remarkable examples of
                architecture that demonstrate how prosperity, power, and
                righteousness influence the outcome of even the greatest
                creations.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                                {/* ================= Sone Ki Lanka ================= */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40 hover:shadow-[0_15px_40px_rgba(255,213,79,0.15)]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🏰
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Sone Ki Lanka
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Built by Vishwakarma originally for Lord Shiva.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Later ruled by Ravana.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        It was a marvel of architecture, made of gold,
                        symbolizing wealth and perfection.
                      </span>
                    </li>

                  </ul>

                  <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-5">

                    <h5 className="text-base sm:text-lg font-bold text-[#FFD54F]">
                      Lesson
                    </h5>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Despite perfect Vastu and grandeur, misuse of power and
                      ego led to destruction.
                    </p>

                  </div>

                </div>

                {/* ================= Dwarka ================= */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40 hover:shadow-[0_15px_40px_rgba(255,213,79,0.15)]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🌊
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Dwarka
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Designed by Vishwakarma.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Built in perfect alignment with the sea and natural
                        forces.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Considered highly advanced and prosperous.
                      </span>
                    </li>

                  </ul>

                  <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-5">

                    <h5 className="text-base sm:text-lg font-bold text-[#FFD54F]">
                      Lesson
                    </h5>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Proper Vastu combined with Dharma (righteousness)
                      leads to harmony and success.
                    </p>

                  </div>

                </div>

                {/* ================= Indraprastha ================= */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40 hover:shadow-[0_15px_40px_rgba(255,213,79,0.15)]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🏛️
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Indraprastha
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Designed with precision and balance.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Prosperous and powerful due to alignment of energy
                        and governance.
                      </span>
                    </li>

                  </ul>

                </div>

              </div>
            </div>
                        {/* ================= Key Learnings from Mythology ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  📖
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Key Learnings from Mythology
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                From these stories, Vastu teaches timeless principles that remain
                relevant even today.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🌿
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Balance of Nature
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    Balance of nature is essential.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🏛️
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Practical Design
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    Design should be practical, not deceptive.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      ⚖️
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Avoid Ego
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    Ego and misuse of space lead to downfall.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      ✨
                    </div>

                    <h4 className="text-lg sm:text-[20px] md:text-[22px] font-bold text-[#FFD54F]">
                      Positive Energy
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base md:text-[15px] leading-7 text-white/85">
                    Positive energy and intention matter more than luxury.
                  </p>

                </div>

              </div>

              {/* Final Message */}

              <div className="mt-10 rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6 sm:p-8">

                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-semibold italic text-[#FFD54F] leading-relaxed">
                  Vastu is not merely about constructing buildings—
                  it is about creating spaces where nature, energy,
                  and righteous living exist in harmony.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VastuStoriesSection;