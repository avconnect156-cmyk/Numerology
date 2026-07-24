"use client";

import React from "react";

const features = [
  {
    icon: "💡",
    title: "Guiding Light",
    description:
      "Just as a person cannot navigate the world without eyesight, the profound wisdom of the Vedas cannot be fully understood without Jyotish. It provides the vision needed to interpret cosmic patterns, planetary movements, and the deeper meaning of life events.",
  },
  {
    icon: "⏳",
    title: "Understanding Time (Kala)",
    description:
      "Jyotish enables us to determine the right timing (Muhurat) for important actions whether it is rituals, ceremonies, or major life decisions. It offers insight into the flow of time—past, present, and future—and aligns human actions with cosmic rhythms.",
  },
  {
    icon: "✨",
    title: "Science of Light",
    description:
      "The word Jyotish itself means 'Science of Light.' Just as physical eyes help us see the material world, Jyotish uses the light of celestial bodies to illuminate one's life path, karma, and destiny.",
  },
];

const EyeOfVedas = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-16 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 sm:px-5 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">
            Sacred Wisdom
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight text-white">
            Why is Jyotish Called the

            <span className="bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              {" "}Eye of the Vedas?
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/75">
            Discover why Jyotish is regarded as the vision that illuminates the
            profound wisdom of the Vedas and guides humanity through the light
            of divine knowledge.
          </p>

          <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

        </div>

        {/* ================= Cards ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

          {features.map((item) => (

            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]"
            >

              {/* Decorative Glow */}

              <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

              <div className="relative z-10">                {/* Icon + Title */}

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFD54F] to-[#F4B400] flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 shadow-lg">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F] leading-tight">
                    {item.title}
                  </h3>

                </div>

                {/* Description */}

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28"></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default EyeOfVedas;