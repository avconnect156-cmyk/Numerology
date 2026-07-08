"use client";

import React, { useState } from "react";
import Section from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Numerology?",
      answer:
        "Numerology is the study of numbers and their energetic influence on our lives. It reveals hidden patterns, personality traits, and life cycles based on your birth date and name.",
    },
    {
      question: "How can a reading help me?",
      answer:
        "A reading can provide clarity on your life purpose, relationship compatibility, career path, and upcoming opportunities. It acts as a roadmap for your soul's journey.",
    },
    {
      question: "Do I need my birth time?",
      answer:
        "For a full comprehensive chart, birth time is recommended but much can be done with just the birth date and full name.",
    },
  ];

  return (
    <Section id="faq" className="py-12 md:py-16 bg-[#F9F9F9]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left - Visuals */}
        <div className="relative h-[420px] hidden md:flex items-center justify-center">
          {/* Floating Main Number */}
          <motion.div
            className="relative font-serif text-[240px] leading-none text-[#1C1C1C] opacity-90 select-none"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            8

            {/* Floating 2 */}
            <motion.span
              className="absolute -top-8 -right-20 text-[150px] text-white opacity-80 rotate-12"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              2
            </motion.span>

            {/* Floating 6 */}
            <motion.span
              className="absolute -bottom-8 -left-24 text-[170px] text-white opacity-10 -rotate-12"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              6
            </motion.span>

            {/* Floating 19 */}
            <motion.span
              className="absolute top-0 -right-44 text-[180px] text-white opacity-5"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              19
            </motion.span>
          </motion.div>
        </div>

        {/* Right - Accordion */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="text-lg font-bold tracking-[0.2em] text-white uppercase">
              Common Questions
            </div>

            <h2 className="text-4xl md:text-5xl font-medium font-serif text-white">
              Feel free to ask <br />
              <span className="italic">more questions</span>
            </h2>

            <p className="text-white text-sm">
              Can't find the answer you're looking for? Reach out to our
              customer support team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-white transition-all duration-300 ${
                  activeIndex === index ? "pb-5" : "pb-3"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span
                    className={`font-serif text-xl ${
                      activeIndex === index
                        ? "text-white"
                        : "text-white transition-colors"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span className="text-white text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-white leading-relaxed text-sm max-w-md">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <Link href="/contact">
            <div className="pt-3">
              <Button className="rounded-md bg-white shadow-none border !text-black hover:bg-white px-8 py-3 text-xs uppercase tracking-wider font-bold">
                Contact Us
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;