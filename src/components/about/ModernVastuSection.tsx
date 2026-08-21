"use client";

import React from "react";

const ModernVastuSection = () => {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

            {/* ================= Background Glow ================= */}

            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= Heading ================= */}

                <div className="text-center mb-12 lg:mb-16">

                    <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[2.5px] text-xs md:text-sm font-semibold">
                        Modern Vastu
                    </span>

                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold leading-[1.1] text-white">
                        Vastu in the
                        <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
                            Current Era
                        </span>
                    </h2>

                    <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

                </div>

                {/* ================= Main Card ================= */}

                <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

                    {/* Glow */}

                    <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

                    <div className="relative z-10">

                        {/* ================= Vastu in Current Era ================= */}

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🏡
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    Vastu in the Current Era
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Today, <span className="font-semibold text-white">Vastu Shastra</span> is
                                still widely practiced, but in a modern and practical form.
                            </p>

                        </div>

                        {/* ================= Modern Applications ================= */}

                        <div className="mt-10 grid gap-8 lg:grid-cols-2">
                            {/* ================= In Homes ================= */}

                            <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 sm:p-8">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                        🏠
                                    </div>

                                    <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                        In Homes
                                    </h4>

                                </div>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    Today, Vastu principles are commonly applied in residential
                                    spaces to improve harmony, comfort, and positive energy flow.
                                </p>

                                <div className="mt-8 space-y-4">

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">🚪</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Entrance direction planning
                                        </p>

                                    </div>

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">🔥</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Kitchen in the southeast (Fire element)
                                        </p>

                                    </div>

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">🛏️</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Bedrooms placed for mental peace
                                        </p>

                                    </div>

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">✨</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Avoid clutter for better energy flow
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* ================= In Offices & Business ================= */}

                            <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 sm:p-8">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                        🏢
                                    </div>

                                    <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                        In Offices &amp; Business
                                    </h4>

                                </div>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    Vastu is also followed in offices and commercial spaces to
                                    encourage productivity, financial stability, and smooth
                                    business growth.
                                </p>

                                <div className="mt-8 space-y-4">

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">🪑</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Proper desk placement for productivity
                                        </p>

                                    </div>

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">🚪</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Entrance alignment for better customer flow
                                        </p>

                                    </div>

                                    <div className="flex items-start gap-4 rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-4">

                                        <span className="text-[#FFD54F] text-xl">💰</span>

                                        <p className="text-sm sm:text-base leading-7 text-white/85">
                                            Cash counters positioned for financial stability
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ================= Modern Integration ================= */}

                        <div className="mt-14">
                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🌍
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    Vastu in Today&apos;s Time
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                In today&apos;s time, Vastu is often combined with modern sciences and
                                practical design principles to create healthier, more balanced,
                                and energy-efficient living and working spaces.
                            </p>

                            <div className="mt-8 grid gap-6 lg:grid-cols-2">

                                {/* Architecture */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            🏛️
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Architecture &amp; Interior Design
                                        </h4>

                                    </div>

                                    <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        Modern architecture and interior design frequently adopt
                                        Vastu principles while planning homes, offices, and
                                        commercial buildings.
                                    </p>

                                </div>

                                {/* Psychology */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            🧠
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Psychology
                                        </h4>

                                    </div>

                                    <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        The way a space is designed directly affects our mood,
                                        emotions, focus, productivity, and overall mental
                                        well-being.
                                    </p>

                                </div>

                                {/* Environmental Science */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            🌿
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Environmental Science
                                        </h4>

                                    </div>

                                    <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        Ventilation, natural lighting, airflow, and sustainable
                                        planning are all concepts that complement the principles of
                                        Vastu Shastra.
                                    </p>

                                </div>

                                {/* Feng Shui */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            ☯️
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Similar Concepts
                                        </h4>

                                    </div>

                                    <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        Even globally, concepts similar to Vastu exist, such as
                                        <span className="font-semibold text-white">
                                            {" "}Feng Shui{" "}
                                        </span>
                                        in China, which also emphasizes harmony, balance, and
                                        positive energy within living spaces.
                                    </p>

                                </div>

                            </div>

                            {/* ================= Conclusion ================= */}

                            <div className="mt-10 rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6 sm:p-8">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/20 text-xl">
                                        ✨
                                    </div>

                                    <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                        Conclusion
                                    </h4>

                                </div>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/90">
                                    Vastu Shastra is not just about the placement of rooms—it is a
                                    complete energy science that harmonizes nature, directions,
                                    and living spaces. Its timeless principles continue to remain
                                    relevant by combining ancient wisdom with modern architecture,
                                    environmental science, and practical design.
                                </p>

                            </div>

                        </div>

                        {/* ================= 16 Directions ================= */}

                        <div className="mt-14">
                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🧭
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    1. 16 Directions (Shodash Disha)
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Vastu works on the alignment of the
                                <span className="font-semibold text-white">
                                    {" "}16 Directions (Shodash Disha)
                                </span>
                                . Every direction carries a unique energy and has a specific
                                influence on different aspects of life.
                            </p>

                            {/* Main & Sub Directions */}

                            <div className="mt-8 grid gap-6 lg:grid-cols-2">

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-lg">
                                            🧭
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Main Directions
                                        </h4>

                                    </div>

                                    <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                                        <li className="flex gap-3">
                                            <span className="text-[#FFD54F] font-bold">•</span>
                                            <span>North</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-[#FFD54F] font-bold">•</span>
                                            <span>South</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-[#FFD54F] font-bold">•</span>
                                            <span>East</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-[#FFD54F] font-bold">•</span>
                                            <span>West</span>
                                        </li>

                                    </ul>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-lg">
                                            📍
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Other Directions
                                        </h4>

                                    </div>

                                    <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                                        <li className="flex gap-3">
                                            <span className="text-[#FFD54F] font-bold">•</span>
                                            <span>4 Sub Directions — NE, SE, SW, NW</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-[#FFD54F] font-bold">•</span>
                                            <span>8 Additional Micro-Directions</span>
                                        </li>

                                    </ul>

                                </div>

                            </div>

                            {/* Direction Influence */}

                            <div className="mt-10 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-lg">
                                        ✨
                                    </div>

                                    <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                        Directional Energies
                                    </h4>

                                </div>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    Each direction carries a specific type of energy and
                                    influences different areas of life:
                                </p>

                                <div className="mt-8 grid gap-4 md:grid-cols-2">

                                    <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">
                                        <h5 className="font-semibold text-[#FFD54F]">
                                            🟢 North
                                        </h5>
                                        <p className="mt-2 text-sm sm:text-base text-white/85">
                                            Wealth (Kuber)
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">
                                        <h5 className="font-semibold text-[#FFD54F]">
                                            🌅 East
                                        </h5>
                                        <p className="mt-2 text-sm sm:text-base text-white/85">
                                            Growth &amp; Health (Sun)
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">
                                        <h5 className="font-semibold text-[#FFD54F]">
                                            🧱 South
                                        </h5>
                                        <p className="mt-2 text-sm sm:text-base text-white/85">
                                            Stability &amp; Discipline
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">
                                        <h5 className="font-semibold text-[#FFD54F]">
                                            🌄 West
                                        </h5>
                                        <p className="mt-2 text-sm sm:text-base text-white/85">
                                            Gains &amp; Opportunities
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ================= 5 Elements (Panch Tatva) ================= */}

                        <div className="mt-14">
                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🌿
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    2. 5 Elements (Panch Tatva)
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Every space must maintain a balance among the
                                <span className="font-semibold text-white">
                                    {" "}Five Elements (Panch Tatva)
                                </span>
                                . These elements influence stability, emotions, energy,
                                relationships, and overall harmony within a space.
                            </p>

                            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🌍</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Earth
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base text-white/85 leading-7">
                                        Stability
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">💧</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Water
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base text-white/85 leading-7">
                                        Emotions &amp; Flow
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🔥</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Fire
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base text-white/85 leading-7">
                                        Energy &amp; Transformation
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🌬️</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Air
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base text-white/85 leading-7">
                                        Movement &amp; Relationships
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">✨</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Space
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base text-white/85 leading-7">
                                        Expansion &amp; Clarity
                                    </p>

                                </div>

                            </div>

                            <div className="mt-10 rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6 sm:p-8">

                                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-semibold text-[#FFD54F] leading-relaxed">
                                    When these five elements remain in balance, a space naturally
                                    supports health, peace, prosperity, and positive energy.
                                </p>

                            </div>

                        </div>

                        {/* ================= 45 Devtas ================= */}

                        <div className="mt-14">
                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🛕
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    3. 45 Devtas in Vastu Purush Mandala
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                According to Vastu Shastra, every plot or building is divided
                                into the <span className="font-semibold text-white">Vastu Purush Mandala</span>,
                                where <span className="font-semibold text-white">45 different Devtas</span>
                                reside. Each deity governs a specific zone and influences the
                                energy of that space.
                            </p>

                            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🪷</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Brahma
                                        </h4>
                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Center of the Mandala – Balance of Energy
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">⚡</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Indra
                                        </h4>
                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        East – Power &amp; Authority
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">💰</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Kuber
                                        </h4>
                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        North – Wealth &amp; Prosperity
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🔥</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Agni
                                        </h4>
                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Southeast – Fire &amp; Energy
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🌊</span>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                            Varun
                                        </h4>
                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        West – Water &amp; Stability
                                    </p>

                                </div>

                            </div>

                            <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6">

                                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-semibold text-[#FFD54F] leading-relaxed">
                                    Every zone of a building should be respected according to its
                                    presiding deity. Ignoring these natural energy zones may
                                    create imbalance.
                                </p>

                            </div>

                        </div>

                        {/* ================= 9 Planets ================= */}

                        <div className="mt-14">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🪐
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    4. 9 Planets (Navgraha Influence)
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Vastu Shastra is deeply connected with the
                                <span className="font-semibold text-white">
                                    {" "}Navgraha (Nine Planets)
                                </span>.
                                Every direction and zone of a space is influenced by a
                                particular planetary energy.
                            </p>

                            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                                {[
                                    ["☀️", "Sun", "Authority & Health – East"],
                                    ["🌙", "Moon", "Mind & Emotions – North West"],
                                    ["🔴", "Mars", "Energy & Property – South"],
                                    ["🟢", "Mercury", "Communication & Business – North"],
                                    ["🟡", "Jupiter", "Wisdom & Growth – North East"],
                                    ["💎", "Venus", "Luxury & Relationships – South East"],
                                    ["🪨", "Saturn", "Karma & Discipline – West"],
                                    ["☊", "Rahu", "Karmic Influences – South West"],
                                    ["☋", "Ketu", "Karmic Influences – Center to North East"],
                                ].map(([icon, title, desc]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-5"
                                    >
                                        <div className="flex items-center gap-3">

                                            <span className="text-2xl">{icon}</span>

                                            <h4 className="text-lg font-bold text-[#FFD54F]">
                                                {title}
                                            </h4>

                                        </div>

                                        <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                                            {desc}
                                        </p>

                                    </div>
                                ))}

                            </div>

                            {/* Final Message */}

                            <div className="mt-10 rounded-3xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-8">

                                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-semibold text-[#FFD54F] leading-relaxed">
                                    Vastu Shastra is a complete science of energy that harmonizes
                                    <span className="text-white"> Directions</span>,
                                    <span className="text-white"> Panch Tatva</span>,
                                    <span className="text-white"> 45 Devtas</span>, and
                                    <span className="text-white"> Navgraha</span> to create
                                    spaces filled with balance, prosperity, peace, and positive
                                    vibrations.
                                </p>

                            </div>
                            {/* ================= The Most Important Concept: Alignment ================= */}

                            <div className="mt-14 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                        🎯
                                    </div>

                                    <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                        The Most Important Concept: Alignment
                                    </h3>

                                </div>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    All these energies must be aligned properly:
                                </p>

                                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                    {[
                                        "✔ Directions",
                                        "✔ Elements",
                                        "✔ 45 Devtas",
                                        "✔ Planets as per Kundli",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 px-5 py-4"
                                        >
                                            <p className="font-medium text-white">
                                                {item}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                                <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6">

                                    <p className="text-center text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F] leading-relaxed">
                                        Vastu should be aligned with your Kundli (Birth Chart)
                                    </p>

                                </div>

                                <p className="mt-8 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    Because:
                                </p>

                                <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                                    <li className="flex gap-4">
                                        <span className="text-[#FFD54F] font-bold">•</span>
                                        <span>Every individual has a unique planetary combination.</span>
                                    </li>

                                    <li className="flex gap-4">
                                        <span className="text-[#FFD54F] font-bold">•</span>
                                        <span>A house or office should support that personal energy.</span>
                                    </li>

                                </ul>

                                <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-gradient-to-r from-[#FFD54F]/10 via-[#F4B400]/5 to-[#FFD54F]/10 p-6">

                                    <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white leading-relaxed">
                                        ✨ <span className="text-[#FFD54F]">Vastu</span> is not just structure—it is
                                        <span className="font-bold text-[#FFD54F]"> energy management.</span>
                                    </p>

                                    <p className="mt-5 text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white leading-relaxed">
                                        ✨ <span className="text-[#FFD54F]">Kundli</span> is not just a horoscope—it is
                                        <span className="font-bold text-[#FFD54F]"> personal energy mapping.</span>
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

export default ModernVastuSection;
