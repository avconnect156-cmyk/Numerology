"use client";

import React from "react";

const ConsultationSteps: React.FC = () => {
  return (
    <div className="relative max-w-xl">

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-[88px] w-[2px] bg-[#F4B400]" />

        {/* STEP 1 */}
        <div className="relative flex gap-8 min-h-[170px]">
          <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Enter Your Details
            </h3>

            <p className="mt-3 max-w-md text-white/70 leading-8">
              Share your date of birth, name, and place of birth with us.
            </p>

            <div className="mt-8 h-px w-52 bg-white/10" />
          </div>
        </div>

        {/* STEP 2 */}
        <div className="relative flex gap-8 min-h-[170px]">
          <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Numerology Analysis
            </h3>

            <p className="mt-3 max-w-md text-white/70 leading-8">
              Our experts carefully analyze your numbers to reveal your
              strengths, challenges, hidden talents, and future opportunities.
            </p>

            <div className="mt-8 h-px w-52 bg-white/10" />
          </div>
        </div>

        {/* STEP 3 */}
        <div className="relative flex gap-8 min-h-[170px]">
          <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Personalized Report
            </h3>

            <p className="mt-3 max-w-md text-white/70 leading-8">
              Receive a premium report covering your Life Path, Destiny, Career,
              Relationships, Wealth, Health, and much more.
            </p>

            <div className="mt-8 h-px w-52 bg-white/10" />
          </div>
        </div>

        {/* STEP 4 */}
        <div className="relative flex gap-8 min-h-[170px]">
          <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Personalized Remedies
            </h3>

            <p className="mt-3 max-w-md text-white/70 leading-8">
              Discover lucky numbers, gemstones, colors, and personalized
              remedies to bring greater balance, prosperity, and success into
              your life.
            </p>

            <div className="mt-8 h-px w-52 bg-white/10" />
          </div>
        </div>

        {/* STEP 5 */}
        <div className="relative flex gap-8 min-h-[170px]">
          <div className="mt-2 h-4 w-4 flex-shrink-0 rounded-full bg-[#FFD54F]" />

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white">
              Download Your Report
            </h3>

            <p className="mt-3 max-w-md text-white/70 leading-8">
              Instantly download your beautifully designed Premium Numerology
              Report and begin your journey with clarity, confidence, and
              purpose.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConsultationSteps;