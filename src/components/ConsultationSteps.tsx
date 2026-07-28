"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Enter Your Details",
    description:
      "Share your date of birth, name, and place of birth with us.",
  },
  {
    title: "Numerology Analysis",
    description:
      "Our experts carefully analyze your numbers to reveal your strengths, challenges, hidden talents, and future opportunities.",
  },
  {
    title: "Personalized Report",
    description:
      "Receive a premium report covering your Life Path, Destiny, Career, Relationships, Wealth, Health, and much more.",
  },
  {
    title: "Personalized Remedies",
    description:
      "Discover lucky numbers, gemstones, colors, and personalized remedies to bring greater balance, prosperity, and success into your life.",
  },
  {
    title: "Download Your Report",
    description:
      "Instantly download your beautifully designed Premium Numerology Report and begin your journey with clarity, confidence, and purpose.",
  },
];

const ConsultationSteps: React.FC = () => {
  return (
    <div className="relative max-w-xl">
      <div className="relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex gap-8 min-h-[170px]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            {/* Timeline */}
            <div className="flex flex-col items-center">
              {/* Animated Dot */}
              <motion.div
                className="mt-2 h-4 w-4 rounded-full bg-[#FFD54F] z-10 flex-shrink-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.15 + 0.1,
                }}
              />

              {/* Vertical Line (Hidden on Last Step) */}
              {index !== steps.length - 1 && (
                <motion.div
                  className="mt-2 w-[2px] flex-1 bg-[#F4B400]"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.2,
                  }}
                  style={{ transformOrigin: "top" }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <motion.h3
                className="text-2xl font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.15,
                }}
              >
                {step.title}
              </motion.h3>

              <motion.p
                className="mt-3 max-w-md leading-8 text-white/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                }}
              >
                {step.description}
              </motion.p>

              {/* Divider (Hidden on Last Step) */}
              {index !== steps.length - 1 && (
                <motion.div
                  className="mt-8 h-px w-52 bg-white/10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.4,
                  }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationSteps;