"use client";

import React from "react";

const EnergyAlignmentSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

    

        {/* ================= Heading ================= */}

        <div className="text-center mb-12 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[2.5px] text-xs md:text-sm font-semibold">
            Energy Alignment
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold leading-[1.1] text-white">
            Vastu &
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Numerology Connection
            </span>
          </h2>

          <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

        </div>

        {/* ================= Main Card ================= */}

        <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

          <div className="relative z-10">

            {/* ================= Directional Energy ================= */}

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🧭
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  How Vastu and Numerology Interact
                </h3>

              </div>

              <h4 className="mt-8 text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                1. Directional Energy (Vastu) = Numerical Vibration
              </h4>

              <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Each direction in Vastu is ruled by a planet, and each planet
                corresponds to a number.
              </p>

              <div className="mt-8 overflow-x-auto rounded-3xl border border-[#FFD54F]/20">

                <table className="w-full text-left">

                  <thead className="bg-[#FFD54F]/10">

                    <tr>

                      <th className="px-5 py-4 text-[#FFD54F] font-semibold">
                        Direction
                      </th>

                      <th className="px-5 py-4 text-[#FFD54F] font-semibold">
                        Planet
                      </th>

                      <th className="px-5 py-4 text-[#FFD54F] font-semibold">
                        Number
                      </th>

                      <th className="px-5 py-4 text-[#FFD54F] font-semibold">
                        Energy
                      </th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-[#FFD54F]/10">

                    <tr>
                      <td className="px-5 py-4 text-white/90">East</td>
                      <td className="px-5 py-4 text-white/90">Sun</td>
                      <td className="px-5 py-4 text-white/90">1</td>
                      <td className="px-5 py-4 text-white/90">
                        Growth, Success
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">North</td>
                      <td className="px-5 py-4 text-white/90">Mercury</td>
                      <td className="px-5 py-4 text-white/90">5</td>
                      <td className="px-5 py-4 text-white/90">
                        Business, Communication
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">South</td>
                      <td className="px-5 py-4 text-white/90">Mars</td>
                      <td className="px-5 py-4 text-white/90">9</td>
                      <td className="px-5 py-4 text-white/90">
                        Power, Action
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">West</td>
                      <td className="px-5 py-4 text-white/90">Saturn</td>
                      <td className="px-5 py-4 text-white/90">8</td>
                      <td className="px-5 py-4 text-white/90">
                        Stability, Karma
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">
                        Northeast
                      </td>
                      <td className="px-5 py-4 text-white/90">Jupiter</td>
                      <td className="px-5 py-4 text-white/90">3</td>
                      <td className="px-5 py-4 text-white/90">
                        Wisdom, Expansion
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">
                        Southeast
                      </td>
                      <td className="px-5 py-4 text-white/90">Venus</td>
                      <td className="px-5 py-4 text-white/90">6</td>
                      <td className="px-5 py-4 text-white/90">
                        Luxury, Comfort
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">
                        Northwest
                      </td>
                      <td className="px-5 py-4 text-white/90">Moon</td>
                      <td className="px-5 py-4 text-white/90">2</td>
                      <td className="px-5 py-4 text-white/90">
                        Movement, Emotions
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 text-white/90">
                        Southwest
                      </td>
                      <td className="px-5 py-4 text-white/90">Rahu</td>
                      <td className="px-5 py-4 text-white/90">4</td>
                      <td className="px-5 py-4 text-white/90">
                        Stability, Control
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>
                          {/* ================= House Number & Vastu Energy ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🏠
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  2. House Number &amp; Vastu Energy
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Your house number carries a vibration, which must align with both:
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🔢
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      House Number
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Your Numerology Numbers</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>The Vastu Energy of the House</span>
                    </li>

                  </ul>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      ⚖️
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Alignment
                    </h4>

                  </div>

                  <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                    When the vibration of your house matches your personal
                    numerology and Vastu energy, life becomes more balanced,
                    opportunities improve, and progress becomes smoother.
                  </p>

                </div>

              </div>

              {/* Example */}

              <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                    💡
                  </div>

                  <h4 className="text-xl sm:text-[22px] font-bold text-[#FFD54F]">
                    Example
                  </h4>

                </div>

                <div className="mt-8 space-y-6">

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                    <h5 className="text-lg font-semibold text-[#FFD54F]">
                      Birth Number 5 (Mercury)
                    </h5>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Best suited with a North-facing house or a house having
                      Number 5 vibration.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                    <h5 className="text-lg font-semibold text-[#FFD54F]">
                      Strong Number 8 (Saturn)
                    </h5>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Needs stable directions like West or South-West for better
                      balance and long-term growth.
                    </p>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-red-400/20 bg-red-500/10 p-6">

                  <p className="text-center text-base sm:text-lg md:text-[20px] font-semibold text-red-300 leading-relaxed">
                    Mismatch can create discomfort and lack of progress.
                  </p>

                </div>

              </div>

            </div>
                        {/* ================= Name Numerology + Vastu Space ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🔠
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  3. Name Numerology + Vastu Space
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Your name number influences your identity, while your space
                influences your environment.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🧑
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Name Number
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-white/85">
                    Your name number influences your identity, personality,
                    public image and recognition.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🏡
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Vastu Space
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-white/85">
                    Your surroundings influence your daily experiences,
                    opportunities and overall life energy.
                  </p>

                </div>

              </div>

              <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

                <h4 className="text-xl sm:text-[22px] font-bold text-[#FFD54F]">
                  If Both are Aligned
                </h4>

                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5 text-center">

                    <div className="text-3xl">⭐</div>

                    <p className="mt-3 text-white font-medium">
                      Recognition Increases
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5 text-center">

                    <div className="text-3xl">📈</div>

                    <p className="mt-3 text-white font-medium">
                      Opportunities Improve
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5 text-center">

                    <div className="text-3xl">💪</div>

                    <p className="mt-3 text-white font-medium">
                      Confidence Grows
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= Modern-Day Application ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🌍
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Modern-Day Application
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Today, this powerful combination of Numerology and Vastu is
                applied across many areas of life.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🏢
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Business & Branding
                    </h4>

                  </div>

                  <ul className="mt-5 space-y-3 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F]">•</span>
                      <span>Company names aligned with numbers.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F]">•</span>
                      <span>Office Vastu aligned with the owner's number.</span>
                    </li>

                  </ul>

                </div>

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      🏘️
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Real Estate
                    </h4>

                  </div>

                  <ul className="mt-5 space-y-3 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F]">•</span>
                      <span>Choosing property based on Vastu and Numerology.</span>
                    </li>

                  </ul>

                </div>

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                      📱
                    </div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Lifestyle
                    </h4>

                  </div>

                  <ul className="mt-5 space-y-3 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F]">•</span>
                      <span>Mobile numbers.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F]">•</span>
                      <span>Vehicle numbers.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F]">•</span>
                      <span>Important date selection.</span>
                    </li>

                  </ul>

                </div>

              </div>

            </div>
                        {/* ================= Name Numerology + Vastu Space ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🏷️
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Name Numerology + Vastu Space
                </h3>

              </div>

              <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

                <p className="text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                  Your <span className="font-semibold text-white">Name Number</span>
                  {" "}influences your identity, while your surroundings influence
                  your daily energy and experiences.
                </p>

                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                  When both are properly aligned, they create a powerful foundation
                  for success and overall well-being.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                    <div className="text-4xl">🌟</div>

                    <h4 className="mt-4 text-lg sm:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                      Recognition
                    </h4>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Recognition increases through balanced personal vibration.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                    <div className="text-4xl">🚀</div>

                    <h4 className="mt-4 text-lg sm:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                      Opportunities
                    </h4>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Better opportunities begin to flow naturally.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                    <div className="text-4xl">💪</div>

                    <h4 className="mt-4 text-lg sm:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                      Confidence
                    </h4>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                      Confidence and inner stability become stronger.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= Modern-Day Application ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🌍
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Modern-Day Application
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Today this powerful combination of
                <span className="font-semibold text-white">
                  {" "}Vastu Shastra
                </span>
                {" "}and
                <span className="font-semibold text-white">
                  {" "}Numerology
                </span>
                {" "}is used in many practical areas of life.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">

                {/* Business */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                  <div className="flex items-center gap-3">

                    <div className="text-3xl">🏢</div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Business & Branding
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Company names aligned with number.</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Office Vastu aligned with the owner's number.
                      </span>
                    </li>

                  </ul>

                </div>

                {/* Real Estate */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                  <div className="flex items-center gap-3">

                    <div className="text-3xl">🏠</div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Real Estate
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Choosing property based on both Vastu and Numerology.
                      </span>
                    </li>

                  </ul>

                </div>

                {/* Lifestyle */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                  <div className="flex items-center gap-3">

                    <div className="text-3xl">✨</div>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Lifestyle
                    </h4>

                  </div>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Mobile numbers</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Vehicle numbers</span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>Important dates selection</span>
                    </li>

                  </ul>

                </div>

              </div>

            </div>
                        {/* ================= Final Thought ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🌟
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Final Thought
                </h3>

              </div>

              <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <p className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-[#FFD54F] leading-relaxed">
                    Vastu sets the stage
                  </p>

                  <div className="my-4 h-px w-full bg-[#FFD54F]/20" />

                  <p className="text-center text-xl sm:text-2xl md:text-[28px] font-bold text-[#FFD54F] leading-relaxed">
                    Numerology tunes the frequency
                  </p>

                </div>

                <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 px-6 py-8">

                  <p className="text-center text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-semibold text-white leading-relaxed">
                    When both are aligned:
                  </p>

                  <p className="mt-5 text-center text-xl sm:text-2xl md:text-[28px] lg:text-[30px] italic font-bold text-[#FFD54F] leading-relaxed">
                    “The space supports your numbers,
                    <br />
                    and your numbers activate the space.”
                  </p>

                </div>

              </div>

            </div>
                        {/* ================= Our Approach ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  🕉️
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Our Approach: 3 Pillars of Transformation
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                We believe that lasting transformation comes from combining
                three ancient sciences. Each one addresses a different aspect
                of life, and together they create complete balance and harmony.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">

                {/* Astrology */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                      🔭
                    </div>

                    <h4 className="text-xl sm:text-[22px] font-bold text-[#FFD54F]">
                      Astrology
                    </h4>

                  </div>

                  <p className="mt-2 text-sm text-[#FFD54F]/80">
                    (Kundli Science)
                  </p>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Understand life path, timing, and karmic patterns.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Identify opportunities and challenges.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Provide precise guidance.
                      </span>
                    </li>

                  </ul>

                </div>

                {/* Vastu */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                      🏠
                    </div>

                    <h4 className="text-xl sm:text-[22px] font-bold text-[#FFD54F]">
                      Vastu Shastra
                    </h4>

                  </div>

                  <p className="mt-2 text-sm text-[#FFD54F]/80">
                    (Energy Alignment)
                  </p>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Align home and workplace energy.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Remove negativity and blockages.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Enhance positivity and growth.
                      </span>
                    </li>

                  </ul>

                </div>

                {/* Numerology */}

                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                      🔢
                    </div>

                    <h4 className="text-xl sm:text-[22px] font-bold text-[#FFD54F]">
                      Numerology
                    </h4>

                  </div>

                  <p className="mt-2 text-sm text-[#FFD54F]/80">
                    (Vibrational Alignment)
                  </p>

                  <ul className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-white/85">

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Optimize name, business name, and numbers.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Align personal vibration with universal energy.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="text-[#FFD54F] font-bold">•</span>
                      <span>
                        Improve success, stability, and recognition.
                      </span>
                    </li>

                  </ul>

                </div>

              </div>

            </div>
                        {/* ================= Our Philosophy ================= */}

            <div className="mt-14">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                  ✨
                </div>

                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                  Our Philosophy
                </h3>

              </div>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Our goal is not merely to predict events but to help you understand
                the root cause of life's challenges and provide practical guidance
                for lasting transformation.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <span className="text-3xl">🌱</span>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Root Cause
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-white/85">
                    Focus on
                    <span className="font-semibold text-white">
                      {" "}Karma
                    </span>
                    , not just prediction.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <span className="text-3xl">🛠️</span>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Practical Guidance
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-white/85">
                    Practical and actionable solutions for everyday life.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <span className="text-3xl">🕉️</span>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Spiritual Wisdom
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-white/85">
                    Deep spiritual understanding combined with modern
                    application.
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <div className="flex items-center gap-3">

                    <span className="text-3xl">🚀</span>

                    <h4 className="text-xl font-bold text-[#FFD54F]">
                      Real Transformation
                    </h4>

                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-7 text-white/85">
                    Designed for lasting transformation, not temporary relief.
                  </p>

                </div>

              </div>

              {/* Closing Quote */}

              <div className="mt-10 rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-8 sm:p-10">

                <p className="text-center text-lg sm:text-xl md:text-[24px] lg:text-[26px] font-semibold text-white leading-relaxed">
                  True transformation begins when
                </p>

                <p className="mt-4 text-center text-xl sm:text-2xl md:text-[30px] lg:text-[34px] font-bold text-[#FFD54F] leading-relaxed">
                  Astrology guides your path,
                  <br />
                  Vastu harmonizes your space,
                  <br />
                  Numerology aligns your vibration,
                  <br />
                  and Karma shapes your destiny.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EnergyAlignmentSection;