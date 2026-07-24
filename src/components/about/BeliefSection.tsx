"use client";

import React from "react";

const BeliefSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 sm:px-5 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-[10px] sm:text-xs md:text-sm font-semibold">
            Spiritual Philosophy
          </span>

         <h2 className="mt-5 sm:mt-6 lg:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Our{" "}
        <span className="bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
            Belief
        </span>
    </h2>

          <div className="w-20 sm:w-24 lg:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-5 sm:mt-6 lg:mt-8"></div>

        </div>

        {/* ================= Card ================= */}

        <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[90px] sm:blur-[110px] lg:blur-[130px]" />

          <div className="relative z-10">

            {/* Icon + Title */}

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#FFD54F] to-[#F4B400] flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
                🕉️
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F]">
                Our Belief
              </h3>

            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              This sacred science is not merely predictive—
              <span className="font-semibold text-[#FFD54F]">
                {" "}it is deeply transformational.
              </span>

              <br />
              <br />

              We believe that life is governed by
              <span className="text-[#FFD54F] font-semibold">
                {" "}energy
              </span>{" "}
              and
              <span className="text-[#FFD54F] font-semibold">
                {" "}karma
              </span>
              , and by aligning both with universal principles, an individual
              can achieve true balance, fulfillment, and ultimately,
              <span className="text-[#FFD54F] font-semibold">
                {" "}liberation (moksha).
              </span>

            </p>

            <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28"></div>

          </div>

        </div>

        {/* ================= Understanding Life ================= */}

        <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 mt-8 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          <div className="absolute -bottom-20 -left-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[90px] sm:blur-[110px] lg:blur-[130px]" />

          <div className="relative z-10">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#FFD54F] to-[#F4B400] flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
                🌿
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F]">
                Understanding Life & Karma
              </h3>

            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              Human life is a journey that begins with the first breath and ends
              with the last.

              <br />
              <br />

              Everything that happens in between is not random; it is deeply
              influenced by karma and follows a pre-defined cosmic order.

            </p>

            <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-28"></div>

          </div>

        </div>

        {/* ================= What Defines Our Life ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Left */}

          <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFD54F] mb-6">
              What Defines Our Life?
            </h3>

            <ul className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              <li>• Where we are born</li>

              <li>• Who our parents are</li>

              <li>• Our relationships, career, and life experiences</li>

            </ul>

            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              Every individual enters this life carrying karmic impressions from
              past births, both positive and negative.

            </p>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFD54F] mb-6">
              Core Philosophy of Life
            </h3>

            <ul className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">

              <li>• Life is a continuous process of balancing karmas</li>

              <li>• We experience the results of our past actions (past-life karma)</li>

              <li>• Simultaneously, we create new karma through our present actions</li>

            </ul>

          </div>

        </div>

        {/* ================= Final Card ================= */}

        <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 mt-8">

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFD54F] mb-6">
            A Deep Spiritual Truth
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 text-white/85">
            Often, people question life's fairness:
          </p>

        </div>

      </div>

    </section>
  );
};

export default BeliefSection;