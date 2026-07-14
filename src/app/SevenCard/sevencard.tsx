"use client";

import { motion } from "framer-motion";

const reportItems = [
  {
    number: "01",
    title: "Birth Chart",
    desc: "Discover your complete numerology birth chart and understand the foundation of your destiny.",
  },
  {
    number: "02",
    title: "Life Path Number",
    desc: "Reveal your life's purpose, strengths, and the journey you are destined to follow.",
  },
  {
    number: "03",
    title: "Destiny Number",
    desc: "Understand your ultimate mission and the opportunities waiting for you.",
  },
  {
    number: "04",
    title: "Soul Urge Number",
    desc: "Discover your deepest desires, motivations, and what truly fulfills your soul.",
  },
  {
    number: "05",
    title: "Expression Number",
    desc: "Learn about your natural talents and how you express yourself to the world.",
  },
  {
    number: "06",
    title: "Personality Number",
    desc: "See how people perceive you and the first impression you naturally create.",
  },
  {
    number: "07",
    title: "Birthday Number",
    desc: "Explore the special gifts and abilities associated with your birth date.",
  },
  {
    number: "08",
    title: "Driver & Conductor",
    desc: "Understand how your Driver and Conductor Numbers influence your personality.",
  },
  {
    number: "09",
    title: "Lo Shu Grid Analysis",
    desc: "Get a detailed analysis of your Lo Shu Grid including strengths and missing numbers.",
  },
  {
    number: "10",
    title: "Missing Numbers",
    desc: "Find which numbers are absent in your chart and how they affect your life.",
  },
  {
    number: "11",
    title: "Lucky Numbers",
    desc: "Discover your most favorable numbers for success, wealth, and happiness.",
  },
  {
    number: "12",
    title: "Career Guidance",
    desc: "Know which professions and career paths align with your numerology chart.",
  },
  {
    number: "13",
    title: "Relationship Compatibility",
    desc: "Understand your compatibility with your partner, family, and friends.",
  },
  {
    number: "14",
    title: "Health & Wellness",
    desc: "Learn about your energetic strengths and areas that require balance.",
  },
  {
    number: "15",
    title: "Personalized Remedies",
    desc: "Receive practical remedies, colors, gemstones, mantras, and rituals.",
  },
  {
    number: "16",
    title: "Yearly Forecast",
    desc: "Get predictions and guidance for your upcoming months and future opportunities.",
  },
];

export default function ReportSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#07111F_0%,_#0F172A_35%,_#134E4A_75%,_#14532D_100%)] py-24">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#FFD54F]/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[6px] text-[#FFD54F] font-semibold mb-5">
            Premium Numerology Report
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-white">
            Everything Included
            <br />

            <span className="bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
              In Your Personalized Report
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-white/75 leading-8">
            Every report is carefully personalized using your birth details,
            revealing powerful insights into your destiny, relationships,
            career, health, finances, and future.
          </p>

          <div className="w-28 h-[3px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] mx-auto mt-10"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {reportItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#FFD54F]/40 hover:bg-white/10 hover:shadow-[0_15px_45px_rgba(255,213,79,0.15)]"
            >
              {/* Number */}
              <h3 className="text-5xl font-light bg-gradient-to-r from-[#FFE27A] via-[#FFD54F] to-[#F4B400] bg-clip-text text-transparent">
                {item.number}
              </h3>

              {/* Title */}
              <h4 className="mt-6 text-2xl font-semibold text-white leading-snug">
                {item.title}
              </h4>

              {/* Description */}
              <p className="mt-4 text-base leading-8 text-white/75">
                {item.desc}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#F4B400] transition-all duration-300 group-hover:w-16"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}