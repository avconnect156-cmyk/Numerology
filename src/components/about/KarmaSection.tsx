"use client";

import React from "react";

const KarmaSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center mb-12 lg:mb-16">

          <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[2.5px] text-xs md:text-sm font-semibold">
            Karma & Dharma
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold leading-[1.1] text-white">
            Understanding
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              Karma & Life
            </span>
          </h2>

          <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

        </div>

        {/* ================= Main Card ================= */}

        <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

          <div className="relative z-10">

            <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
              A Deep Spiritual Truth
            </h3>

            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
              Often, people question life's fairness:
            </p>

            <div className="mt-6 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5 sm:p-6">

              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white text-center leading-relaxed">
                “Why do people doing wrong seem happy, while those walking the
                spiritual path still suffer?”
              </p>

            </div>

            {/* ================= Reality ================= */}

            <div className="mt-10">

              <h4 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                The Reality
              </h4>

              <ul className="mt-6 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>
                    A person doing wrong may be enjoying
                    <span className="font-semibold text-white">
                      {" "}past-life good karma.
                    </span>
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>
                    However, their present actions are generating
                    <span className="font-semibold text-white">
                      {" "}negative karma for the future.
                    </span>
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>
                    Over time, when past good karma is exhausted, the accumulated negative karma manifests.
                  </span>
                </li>

              </ul>

              <div className="mt-8 rounded-xl bg-[#FFD54F]/10 border border-[#FFD54F]/20 px-6 py-5">

                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                  Result: Downfall becomes inevitable
                </p>

              </div>

            </div>
                        {/* ================= Dharma ================= */}

            <div className="mt-14">

              <h4 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                The Path of Dharma (Righteous Living)
              </h4>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                A person walking the path of righteousness may:
              </p>

              <ul className="mt-6 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>Perform prayers (Pooja)</span>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>Practice charity (Daan)</span>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>Maintain good conduct</span>
                </li>

              </ul>

              <p className="mt-8 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Even if such a person faces challenges, they are:
              </p>

              <ul className="mt-6 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>Gradually clearing past negative karma</span>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>Simultaneously building strong positive karma</span>
                </li>

              </ul>

            </div>

            {/* ================= Turning Point ================= */}

            <div className="mt-14">

              <h4 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                The Turning Point
              </h4>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                When this karmic balance shifts:
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <h5 className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                    Negative Karma
                  </h5>

                  <p className="mt-3 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                    Neutralized
                  </p>

                </div>

                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                  <h5 className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                    Positive Karma
                  </h5>

                  <p className="mt-3 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                    Peak Level
                  </p>

                </div>

              </div>

              <div className="mt-10">

                <h5 className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                  Result
                </h5>

                <ul className="mt-6 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                  <li className="flex gap-4">
                    <span className="text-[#FFD54F] font-bold">•</span>
                    <span>Yash (Fame)</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#FFD54F] font-bold">•</span>
                    <span>Kirti (Respect)</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#FFD54F] font-bold">•</span>
                    <span>Dhan (Wealth)</span>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-[#FFD54F] font-bold">•</span>
                    <span>Shanti (Inner Peace)</span>
                  </li>

                </ul>

              </div>

              <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6">

                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white leading-relaxed">
                  This phase can be called the
                  <span className="text-[#FFD54F]">
                    {" "}“Limitless Growth Phase”
                  </span>
                  , all the successful people we see and know are in this very phase.
                </p>

                <p className="mt-4 text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                  “Jisme Hath daalte hai Sona ban Jaata hai”
                </p>

              </div>

            </div>
                        {/* ================= Explanation ================= */}

            <div className="mt-14">

              <h4 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                Explanation
              </h4>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">

                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6">

                  <h5 className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-blue-300">
                    Dharma Path (Blue)
                  </h5>

                  <p className="mt-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                    Slow start → Massive success later
                  </p>

                  <p className="mt-3 font-semibold text-blue-300 text-base sm:text-lg md:text-[20px] lg:text-[22px]">
                    (Sky is the limit)
                  </p>

                </div>

                <div className="rounded-2xl border border-pink-400/20 bg-pink-500/10 p-6">

                  <h5 className="text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-pink-300">
                    Adharma Path (Pink)
                  </h5>

                  <p className="mt-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                    Fast rise → Sudden fall
                  </p>

                  <p className="mt-3 font-semibold text-pink-300 text-base sm:text-lg md:text-[20px] lg:text-[22px]">
                    (Durgati)
                  </p>

                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed text-white font-medium">
                  "So, karma plays a major role in our lives in determining the
                  direction (disha) and condition (dasha) of our present and
                  future."
                </p>

              </div>

            </div>

            {/* ================= Another Important Observation ================= */}

            <div className="mt-14">

              <h4 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                Another Important Observation
              </h4>

              <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                We often hear:
              </p>

              <div className="mt-6 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                <p className="text-center italic text-base sm:text-lg md:text-[20px] lg:text-[22px] text-white font-semibold leading-relaxed">
                  “Two people are born at the same time, with the same planetary
                  positions, yet their lives are completely different.”
                </p>

              </div>

              <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6">

                <p className="text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                  Fact is "A businessman's child will first become a businessman.
                  They carry forward their ancestors' work. Whether they achieve
                  success or not is a matter for later. Similarly, a working
                  person's child will give importance to a job first, and an
                  auto driver's child will prioritize driving an auto. But how
                  things change depends entirely on their own karma (actions)
                  and their destiny. Even if two people are born at the same
                  date and time, their lives can be completely different."
                </p>

              </div>

            </div>
                        {/* ================= Why Does This Happen ================= */}

            <div className="mt-12 sm:mt-14">

              <h4 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                Why Does This Happen?
              </h4>

              <h5 className="mt-8 text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold text-white">
                The Reason
              </h5>

              <ul className="mt-6 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>
                    A birth chart (Kundli) shows potential and tendencies.
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>
                    But actual life outcomes depend on past karma balance.
                  </span>
                </li>

              </ul>

              <p className="mt-8 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                Each individual carries:
              </p>

              <div className="mt-6 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                <p className="text-center text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-semibold text-[#FFD54F]">
                  Past Good Karma &amp; Past Bad Karma
                </p>

              </div>

              <p className="mt-8 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                These determine:
              </p>

              <ul className="mt-6 space-y-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                <li className="flex gap-4">
                  <span className="text-[#FFD54F] font-bold">•</span>
                  <span>
                    Starting point in life, opportunities available, and
                    challenges faced.
                  </span>
                </li>

              </ul>

            </div>
                        {/* ================= Conclusion ================= */}

            <div className="mt-12 sm:mt-14">

              <h4 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                Conclusion
              </h4>

              <div className="mt-8 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12">

                <p className="text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                  Our life is governed by the balance of

                  <span className="font-semibold text-white">
                    {" "}past karmas
                  </span>

                  {" "}and

                  <span className="font-semibold text-white">
                    {" "}present actions.
                  </span>

                  {" "}An astrologer can guide you, show you the right direction,
                  and help you understand the timing of life events—but no one
                  can change destiny completely.

                  <br />
                  <br />

                  What can be changed, however, is the

                  <span className="text-[#FFD54F] font-semibold">
                    {" "}quality of life
                  </span>

                  {" "}and the

                  <span className="text-[#FFD54F] font-semibold">
                    {" "}intensity of experiences
                  </span>

                  , through conscious actions and right guidance.

                  <br />
                  <br />

                  Karma plays the most important role. Our birth, our
                  circumstances, and our surroundings are influenced by
                  planetary positions and environmental energies.

                  <br />
                  <br />

                  When difficult planetary periods (bad dasha) arise, people
                  often expect instant solutions—believing that a mantra or
                  remedy will immediately solve all problems.

                  <br />
                  <br />

                  But the deeper truth is:

                </p>

                <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 px-6 py-6">

                  <p className="text-center text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F] leading-relaxed">
                    Lasting and powerful results come only through Dharma
                    <br />
                    (the path of righteousness).
                  </p>

                </div>

              </div>

              <div className="mt-8 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-500 group-hover:w-32"></div>

            </div>
            {/* ================= Higher Path ================= */}

<div className="mt-14">

  <h4 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
    The Higher Path
  </h4>

  <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
    If we truly want faster and meaningful transformation, we must go beyond
    planetary remedies and take refuge in higher divine energies, such as:
  </p>


  {/* Divine Energies Card */}

  <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 sm:p-8">

    <ul className="space-y-5 text-sm sm:text-base md:text-[16px] leading-7 text-white/90">

      <li className="flex gap-4 items-center">
        <span className="text-[#FFD54F] font-bold text-lg">•</span>
        <span>Bhagwan Bholenath (Shiva)</span>
      </li>

      <li className="flex gap-4 items-center">
        <span className="text-[#FFD54F] font-bold text-lg">•</span>
        <span>Bhagwan Narayan (Vishnu)</span>
      </li>

      <li className="flex gap-4 items-center">
        <span className="text-[#FFD54F] font-bold text-lg">•</span>
        <span>Maa Shakti</span>
      </li>

      <li className="flex gap-4 items-center">
        <span className="text-[#FFD54F] font-bold text-lg">•</span>
        <span>Bajrangbali (Hanuman)</span>
      </li>

      <li className="flex gap-4 items-center">
        <span className="text-[#FFD54F] font-bold text-lg">•</span>
        <span>Maa Kali</span>
      </li>

      <li className="flex gap-4 items-center">
        <span className="text-[#FFD54F] font-bold text-lg">•</span>
        <span>Bhairav</span>
      </li>

    </ul>

  </div>


  {/* Devotion Message */}

  <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6 sm:p-8">

    <p className="text-sm sm:text-base md:text-[16px] leading-7 text-white/85">
      When a person surrenders with true devotion
      <span className="font-semibold text-white"> (Shraddha) </span>
      and faith
      <span className="font-semibold text-white"> (Bhakti), </span>
      life gradually starts aligning on its own.
      Problems begin to settle, and inner strength increases.
    </p>


    <div className="mt-6 rounded-xl bg-[#FFD54F]/10 border border-[#FFD54F]/20 px-6 py-5">

      <p className="text-center text-base sm:text-lg md:text-[20px] italic font-semibold text-[#FFD54F] leading-relaxed">
        Jab insaan sachchi bhakti se Ishwar ki sharan mein aata hai,
        tab dheere dheere sab kuch sahi hone lagta hai.
      </p>

    </div>

  </div>

</div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default KarmaSection;