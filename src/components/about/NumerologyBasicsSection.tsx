"use client";

import React from "react";

const NumerologyBasicsSection = () => {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

            {/* ================= Background Glow ================= */}

            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] lg:w-[650px] lg:h-[650px] rounded-full bg-[#FFD54F]/10 blur-[100px] sm:blur-[120px] lg:blur-[160px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= Heading ================= */}

                <div className="text-center mb-12 lg:mb-16">

                    <span className="inline-flex items-center px-4 py-2 md:px-5 md:py-2 rounded-full border border-[#FFD54F]/30 bg-[#FFD54F]/10 text-[#FFD54F] uppercase tracking-[2px] md:tracking-[2.5px] text-xs md:text-sm font-semibold">
                        Science of Numbers
                    </span>

                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-serif font-bold leading-[1.1] text-white">
                        Numerology –
                        <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
                            The Science of Numbers &amp; Energy
                        </span>
                    </h2>

                    <div className="w-24 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-8"></div>

                </div>

                {/* ================= Main Card ================= */}

                <div className="group relative overflow-hidden rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[#FFD54F]/50 hover:shadow-[0_20px_60px_rgba(255,213,79,0.18)]">

                    {/* Glow */}

                    <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#FFD54F]/10 blur-[100px]" />

                    <div className="relative z-10">

                        {/* ================= What is Numerology ================= */}

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🔢
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    What is Numerology?
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Numerology is an ancient science that studies the vibrations of
                                numbers and their influence on human life, destiny, and
                                environment.
                            </p>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Every number carries a specific frequency and energy, which
                                connects directly with:
                            </p>

                            {/* ================= Influence Cards ================= */}

                            <div className="mt-8 grid gap-5 md:grid-cols-3">

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🧑</span>

                                        <h4 className="text-lg sm:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                                            Personality
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Your natural qualities, behaviour, strengths and character.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">✨</span>

                                        <h4 className="text-lg sm:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                                            Destiny
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Your life path, opportunities and purpose.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🌟</span>

                                        <h4 className="text-lg sm:text-[20px] lg:text-[22px] font-bold text-[#FFD54F]">
                                            Success
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Your relationships, achievements and overall life journey.
                                    </p>

                                </div>

                            </div>

                        </div>
                        {/* ================= Core Concept of Numerology ================= */}

                        <div className="mt-14">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    ⚡
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    Core Concept of Numerology
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Numerology works on numbers as
                                <span className="font-semibold text-white">
                                    {" "}energy codes
                                </span>{" "}
                                that influence different aspects of our lives.
                            </p>

                            {/* ================= Energy Codes ================= */}

                            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">📝</span>

                                        <h4 className="text-lg sm:text-[20px] font-bold text-[#FFD54F]">
                                            Name
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Your name or business name carries a unique vibration that
                                        influences recognition and success.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🎂</span>

                                        <h4 className="text-lg sm:text-[20px] font-bold text-[#FFD54F]">
                                            Date of Birth
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        Your birth date reveals your personality, destiny and life
                                        path.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">📱</span>

                                        <h4 className="text-lg sm:text-[20px] font-bold text-[#FFD54F]">
                                            Mobile Number
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        The vibration of your mobile number can affect communication,
                                        opportunities and daily experiences.
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6 text-center">

                                    <div className="flex items-center justify-center gap-3">

                                        <span className="text-3xl">🏠</span>

                                        <h4 className="text-lg sm:text-[20px] font-bold text-[#FFD54F]">
                                            House Number
                                        </h4>

                                    </div>

                                    <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                        The energy of your house number influences the environment
                                        and experiences within that space.
                                    </p>

                                </div>

                            </div>

                            {/* ================= Highlight ================= */}

                            <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6">

                                <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white leading-relaxed">
                                    These numbers are
                                    <span className="text-[#FFD54F] font-bold">
                                        {" "}not random
                                    </span>
                                    {" "}— they are directly connected with
                                    <span className="text-[#FFD54F] font-bold">
                                        {" "}cosmic vibrations
                                    </span>
                                    {" "}and
                                    <span className="text-[#FFD54F] font-bold">
                                        {" "}planetary forces.
                                    </span>
                                </p>

                            </div>

                        </div>
                        {/* ================= Core Numbers in Numerology ================= */}

                        <div className="mt-14">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🔢
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    Core Numbers in Numerology
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Numerology identifies three primary numbers that reveal your
                                personality, destiny, and the energy you project to the world.
                            </p>

                            {/* ================= Three Core Numbers ================= */}

                            <div className="mt-8 grid gap-6 lg:grid-cols-3">

                                {/* Birth Number */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            🎂
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Birth Number
                                        </h4>

                                    </div>

                                    <p className="mt-3 text-[#FFD54F] font-medium">
                                        (Mulank)
                                    </p>

                                    <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        Derived from your
                                        <span className="font-semibold text-white">
                                            {" "}date of birth.
                                        </span>
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">

                                        <p className="text-center text-sm sm:text-base leading-7 text-white/85">
                                            Represents your
                                            <span className="text-[#FFD54F] font-semibold">
                                                {" "}basic personality
                                            </span>
                                            {" "}and
                                            <span className="text-[#FFD54F] font-semibold">
                                                {" "}natural qualities.
                                            </span>
                                        </p>

                                    </div>

                                </div>

                                {/* Destiny Number */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            🌟
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Destiny Number
                                        </h4>

                                    </div>

                                    <p className="mt-3 text-[#FFD54F] font-medium">
                                        (Bhagyank)
                                    </p>

                                    <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        Derived from your
                                        <span className="font-semibold text-white">
                                            {" "}complete date of birth.
                                        </span>
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">

                                        <p className="text-center text-sm sm:text-base leading-7 text-white/85">
                                            Represents your
                                            <span className="text-[#FFD54F] font-semibold">
                                                {" "}life path,
                                            </span>
                                            {" "}destiny and
                                            <span className="text-[#FFD54F] font-semibold">
                                                {" "}future opportunities.
                                            </span>
                                        </p>

                                    </div>

                                </div>

                                {/* Name Number */}

                                <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-xl">
                                            ✍️
                                        </div>

                                        <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                            Name Number
                                        </h4>

                                    </div>

                                    <p className="mt-3 text-[#FFD54F] font-medium">
                                        (Name Vibration)
                                    </p>

                                    <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                        Calculated from the
                                        <span className="font-semibold text-white">
                                            {" "}spelling of your name.
                                        </span>
                                    </p>

                                    <div className="mt-6 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-5">

                                        <p className="text-center text-sm sm:text-base leading-7 text-white/85">
                                            Influences your
                                            <span className="text-[#FFD54F] font-semibold">
                                                {" "}success,
                                            </span>
                                            {" "}public image and
                                            <span className="text-[#FFD54F] font-semibold">
                                                {" "}recognition.
                                            </span>
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* ================= Numbers (1 to 9) & Their Energies ================= */}

                        <div className="mt-14">

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                    🌌
                                </div>

                                <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                    Numbers (1 to 9) & Their Energies
                                </h3>

                            </div>

                            <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                Every number from <span className="font-semibold text-white">1 to 9</span> carries
                                a unique vibration and is ruled by a specific planet. These planetary
                                energies influence different aspects of personality, destiny, and life.
                            </p>

                            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                                {[
                                    {
                                        number: "1",
                                        planet: "Sun ☀️",
                                        energy: "Leadership, Authority",
                                    },
                                    {
                                        number: "2",
                                        planet: "Moon 🌙",
                                        energy: "Emotions, Sensitivity",
                                    },
                                    {
                                        number: "3",
                                        planet: "Jupiter 🪐",
                                        energy: "Growth, Wisdom",
                                    },
                                    {
                                        number: "4",
                                        planet: "Rahu ☊",
                                        energy: "Unconventional, Struggle",
                                    },
                                    {
                                        number: "5",
                                        planet: "Mercury ☿",
                                        energy: "Communication, Business",
                                    },
                                    {
                                        number: "6",
                                        planet: "Venus ♀",
                                        energy: "Luxury, Relationships",
                                    },
                                    {
                                        number: "7",
                                        planet: "Ketu ☋",
                                        energy: "Spirituality, Introspection",
                                    },
                                    {
                                        number: "8",
                                        planet: "Saturn ♄",
                                        energy: "Karma, Discipline",
                                    },
                                    {
                                        number: "9",
                                        planet: "Mars ♂",
                                        energy: "Energy, Courage",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.number}
                                        className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-[#FFD54F]/40 hover:bg-[#FFD54F]/5"
                                    >
                                        <div className="flex items-center justify-between">

                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10">

                                                <span className="text-2xl font-bold text-[#FFD54F]">
                                                    {item.number}
                                                </span>

                                            </div>

                                            <span className="rounded-full border border-[#FFD54F]/20 bg-[#FFD54F]/10 px-3 py-1 text-sm font-semibold text-[#FFD54F]">
                                                {item.planet}
                                            </span>

                                        </div>

                                        <h4 className="mt-6 text-xl sm:text-[22px] lg:text-[24px] font-bold text-white">
                                            Number {item.number}
                                        </h4>

                                        <p className="mt-3 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                            <span className="font-semibold text-[#FFD54F]">
                                                Planet:
                                            </span>{" "}
                                            {item.planet}
                                        </p>

                                        <p className="mt-2 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                            <span className="font-semibold text-[#FFD54F]">
                                                Energy:
                                            </span>{" "}
                                            {item.energy}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>
                        {/* ================= Final Message ================= */}

                        <div className="mt-14">

                            <div className="rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                                        ✨
                                    </div>

                                    <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                                        Final Message
                                    </h3>

                                </div>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    Numerology is not merely about numbers—it is the science of
                                    understanding the hidden vibrations and energies that influence
                                    every aspect of life. By understanding these energies, we gain
                                    greater clarity about our personality, purpose, relationships,
                                    career, and the opportunities that come our way.
                                </p>

                                <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                                    Every number carries a unique frequency, and when these
                                    frequencies are understood correctly, they become a powerful
                                    guide for making better decisions and living a more balanced
                                    and meaningful life.
                                </p>

                                {/* Highlight Quote */}

                                <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 px-6 py-6">

                                    <p className="text-center text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-bold text-[#FFD54F] leading-relaxed">
                                        &quot;Numbers are not just symbols—
                                        <br />
                                        they are vibrations that connect
                                        <br />
                                        human life with cosmic energy.&quot;
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                {/* ================= Vibrational Alignment ================= */}

                <div className="mt-14 rounded-3xl border border-[#FFD54F]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">

                    <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 text-2xl">
                            🔗
                        </div>

                        <h3 className="text-2xl sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#FFD54F]">
                            Vibrational Alignment
                        </h3>

                    </div>

                    <p className="mt-6 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                        Numerology is about the alignment of numbers in your life. When these
                        numbers are balanced and work in harmony, they support personal growth,
                        stability, and success.
                    </p>

                    {/* Alignment Cards */}

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            "✔ Birth Number",
                            "✔ Destiny Number",
                            "✔ Name Number",
                            "✔ Important Numbers (Mobile, Vehicle, House, Business)",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 px-5 py-4"
                            >
                                <p className="text-sm sm:text-base font-medium text-white">
                                    {item}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Alignment Result */}

                    <div className="mt-8 grid gap-6 md:grid-cols-2">

                        <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-6">

                            <h4 className="flex items-center gap-2 text-xl font-bold text-green-300">
                                ✅ Proper Alignment
                            </h4>

                            <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                When these numbers are aligned, life flows more smoothly with greater
                                harmony, opportunities, and progress.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6">

                            <h4 className="flex items-center gap-2 text-xl font-bold text-red-300">
                                ⚠️ Misalignment
                            </h4>

                            <p className="mt-4 text-sm sm:text-base leading-7 text-white/85">
                                When these numbers are not aligned, struggles, delays, confusion, and
                                imbalance tend to increase.
                            </p>

                        </div>

                    </div>

                    {/* Kundli Connection */}

                    <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                        <div className="flex items-center gap-3">

                            <span className="text-2xl">🪐</span>

                            <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                Numerology + Kundli Connection
                            </h4>

                        </div>

                        <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                            Just like Vastu, Numerology should also be aligned with your
                            <span className="font-semibold text-white"> Kundli (Birth Chart)</span>.
                        </p>

                        <ul className="mt-6 space-y-4 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">

                            <li className="flex gap-4">
                                <span className="text-[#FFD54F] font-bold">•</span>
                                <span>Numbers are ruled by planets.</span>
                            </li>

                            <li className="flex gap-4">
                                <span className="text-[#FFD54F] font-bold">•</span>
                                <span>
                                    Kundli shows your planetary strengths and weaknesses.
                                </span>
                            </li>

                        </ul>

                    </div>

                    {/* Vastu Connection */}

                    <div className="mt-10 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/5 p-6">

                        <div className="flex items-center gap-3">

                            <span className="text-2xl">🏡</span>

                            <h4 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                                Numerology + Vastu Connection
                            </h4>

                        </div>

                        <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                            Numerology and Vastu Shastra are two powerful energy sciences that work
                            on different dimensions but should function together for complete balance
                            in life.
                        </p>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            <div className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6">

                                <h5 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                    🔢 Numerology
                                </h5>

                                <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                                    Personal &amp; Number Energy
                                </p>

                            </div>

                            <div className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6">

                                <h5 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                    🧭 Vastu
                                </h5>

                                <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                                    Space &amp; Directional Energy
                                </p>

                            </div>

                        </div>

                        <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-[#FFD54F]/10 p-6">

                            <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] font-semibold text-[#FFD54F] leading-relaxed">
                                When both are aligned, they create harmony, success, and growth.
                            </p>

                        </div>

                        <h5 className="mt-10 text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#FFD54F]">
                            Core Concept
                        </h5>

                        <p className="mt-5 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-7 text-white/85">
                            Every space has a vibration, and every person has a number vibration.
                        </p>

                        <div className="mt-8 grid gap-6 md:grid-cols-2">

                            <div className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6">

                                <h5 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                    🏠 House / Office
                                </h5>

                                <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                                    Vastu Energy (Directions &amp; Elements)
                                </p>

                            </div>

                            <div className="rounded-2xl border border-[#FFD54F]/20 bg-white/5 p-6">

                                <h5 className="text-lg sm:text-xl font-bold text-[#FFD54F]">
                                    👤 Person
                                </h5>

                                <p className="mt-3 text-sm sm:text-base leading-7 text-white/85">
                                    Numerology Energy (Birth Number &amp; Destiny Number)
                                </p>

                            </div>

                        </div>

                        <div className="mt-8 rounded-2xl border border-[#FFD54F]/20 bg-gradient-to-r from-[#FFD54F]/10 via-[#F4B400]/5 to-[#FFD54F]/10 p-6">

                            <p className="text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white leading-relaxed">
                                ✅ If the vibration of the place matches the person,
                                <span className="text-[#FFD54F]"> success flows naturally.</span>
                            </p>

                            <p className="mt-5 text-center text-base sm:text-lg md:text-[20px] lg:text-[22px] italic font-semibold text-white leading-relaxed">
                                ⚠️ If not,
                                <span className="text-[#FFD54F]"> struggles, delays, and imbalance occur.</span>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default NumerologyBasicsSection;
