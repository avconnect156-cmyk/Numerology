"use client";

import React from "react";

const timeline = [
  {
    title: "Oral Tradition (Shruti Parampara)",
    icon: "📖",
    description:
      "In ancient times, the Vedas were not written down. They were considered sacred sound vibrations and were transmitted orally. Great sages (Rishis) received this divine knowledge through deep meditation and passed it to their disciples through memorization. This Guru–Shishya (teacher–student) tradition ensured the preservation of this knowledge across generations.",
  },
  {
    title: "Compilation by Sage Ved Vyasa",
    icon: "🪶",
    description:
      "As human memory and lifespan declined towards the end of the Dwapara Yuga, Maharishi Krishna Dvaipayana Ved Vyasa systematically compiled and divided the Vedas into four parts—Rigveda, Yajurveda, Samaveda, and Atharvaveda—to preserve them in written form.",
  },
  {
    title: "Loss, Reconstruction & Evolution of Knowledge",
    icon: "📜",
    description:
      "Over time, especially during the Kaliyuga, invasions and disruptions led to the destruction of many original Vedic texts, scriptures, and Puranas. Much of the knowledge was later reconstructed and preserved again by dedicated lineages within the Guru–Shishya tradition.",
  },
  {
    title: "Modern Practice of Jyotish",
    icon: "🔱",
    description:
      "What we study and practice today is often considered a refined and rediscovered version of this ancient wisdom. Through continuous research and interpretation, humanity has reached a point where, with accurate birth details—date, time, and place—a Jyotish can provide meaningful insights into a person's past, present, and potential future.",
  },
  {
    title: "Contribution of Great Sages",
    icon: "🧘",
    description:
      "The development and transmission of Jyotish have been greatly influenced by revered sages such as Maharishi Parashara, Maharishi Bhrigu, Maharishi Garg, and Maharishi Jaimini. Their teachings and scriptures form the foundation upon which modern Vedic Astrology is practiced today.",
  },
];

const PreservationSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 sm:px-5 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">
            Sacred Tradition
          </span>

          <h2 className="mt-5 sm:mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Preservation &

            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Transmission of Vedic Knowledge
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/75">
            The Vedic tradition has been preserved through an unbroken lineage
            of enlightened sages, dedicated teachers, and devoted disciples
            across generations.
          </p>

          <div className="w-20 sm:w-24 lg:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-5 sm:mt-6 lg:mt-8"></div>

        </div>

        {/* ================= Timeline ================= */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 sm:left-7 lg:left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#FFD54F] via-[#C5A065] to-transparent"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                      {timeline.map((item, index) => (

            <div
              key={index}
              className="group relative flex items-start gap-4 sm:gap-6 lg:gap-8"
            >

              {/* Timeline Circle */}

              <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD54F] to-[#F4B400] text-2xl sm:text-3xl shadow-lg">
                {item.icon}
              </div>

              {/* Card */}

              <div className="flex-1 relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

                {/* Glow */}

                <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full bg-[#FFD54F]/10 blur-[90px] sm:blur-[100px]" />

                <div className="relative z-10">

                  {/* Title */}

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F] leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/80">
                    {item.description}
                  </p>

                  {/* Hover Line */}

                  <div className="mt-6 sm:mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-20 lg:group-hover:w-28"></div>

                </div>

              </div>

            </div>

          ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default PreservationSection;