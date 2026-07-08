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
    <section className="bg-[#0b0230]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
         <h2 className="text-4xl md:text-6xl font-serif text-[white]">
            This is what you get
            <br />
            in the Report
          </h2>

          <div className="w-24 h-[2px] bg-[white] mx-auto mt-8"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-y-20 gap-x-14 sm:grid-cols-2 lg:grid-cols-4">
          {reportItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group"
            >
              {/* Number */}
              <h3 className="text-5xl font-light text-white/90  transition-colors duration-300">
                {item.number}
              </h3>

              {/* Title */}
              <h4 className="mt-8 text-2xl font-medium text-white leading-snug  transition-colors duration-300">
                {item.title}
              </h4>

              {/* Description */}
              <p className="mt-4 text-lg leading-9 text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}