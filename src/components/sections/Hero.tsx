"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Modal from "../../app/Modal/Modal";
import usePricing from "@/hooks/usePricing";
import NumerologyBackground from "@/components/NumerologyBackground";

type PricingType = {
  price: number;
  finalPrice: number;
  discount: number;
  buttonText: string;
  countdown: number;
};

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  const pricing = usePricing() as PricingType | null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !pricing?.countdown) return;

    const savedEndTime = localStorage.getItem("offer_end_time");

    if (savedEndTime) {
      const remaining = Math.max(
        0,
        Math.floor((Number(savedEndTime) - Date.now()) / 1000)
      );

      setTimeLeft(remaining);
    } else {
      const endTime = Date.now() + pricing.countdown * 1000;

      localStorage.setItem(
        "offer_end_time",
        endTime.toString()
      );

      setTimeLeft(pricing.countdown);
    }
  }, [mounted, pricing]);

  useEffect(() => {
    if (!mounted || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, timeLeft]);

  const isExpired = mounted && timeLeft <= 0;

  const price = pricing?.price ?? 1999;

  const finalPrice = !isExpired
    ? pricing?.finalPrice ?? price
    : price;

  return (
    <>
      <Section className="relative overflow-hidden pt-28 pb-16 md:pt-24 lg:pt-28 bg-[linear-gradient(135deg,_#020617_0%,_#0F172A_45%,_#134E4A_75%,_#022C22_100%)]">

        <NumerologyBackground />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center space-y-8 text-center lg:text-left"
          >

            {/* Trust Badge */}

            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4">
                <span className="text-white text-sm font-small ">
                  Based on ancient numerology – trusted by{" "}
                  <span className="font-bold text-yellow-300">
                    10,000+
                  </span>{" "}
                  people
                </span>
              </div>
            </div>

            {/* Heading */}

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-white max-w-3xl">

              Within Your Birth

              <br />

              <span className="bg-gradient-to-r from-blue-300 via-white to-yellow-300 bg-clip-text text-transparent">

                Numbers Gain Clarity

                <br />

                On Your Purpose, Potential & Future Journey.

              </span>

            </h1>

            {/* CTA Button */}


            <div className="flex flex-col items-center lg:items-start gap-3">

              {/* Main Button */}
              <Button
                onClick={() => setOpen(true)}
                className="!rounded-full bg-gradient-to-r from-[#FFD54F] via-[#FFC107] to-[#F4B400] !text-black font-bold text-lg uppercase px-10 py-4 min-w-[320px] shadow-none hover:scale-105 transition-all duration-300"
              >
                BUY NOW AT • ₹{finalPrice}
              </Button>

              {/* Centered Free Report Link */}
              <div className="w-[320px] flex justify-center">
                <button
                  onClick={() => {
                    // Add your action here
                    console.log("Free report clicked");
                  }}
                  className="text-white/80 text-sm font-medium underline underline-offset-4 decoration-1 hover:text-yellow-300 transition-all duration-300 cursor-pointer"
                >
                  Or Get a Short Report for Free
                </button>
              </div>

            </div>


          </motion.div>
          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div className="relative">

              {/* Soft Glow */}
             
              {/* Premium Gold Border */}
              <div className="rounded-[32px] bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B] p-[2px]">

                {/* Image Card */}
                <div className="relative overflow-hidden rounded-[30px] bg-[#0F172A] border border-white/10 w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[350px] md:h-[450px] lg:w-[380px] lg:h-[480px] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">

                  <Image
                    src="/image4.png"
                    alt="Premium Numerology Report"
                    fill
                    priority
                    sizes="(max-width:1024px) 90vw, 380px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Section>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Hero;