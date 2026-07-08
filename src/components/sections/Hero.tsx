"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Modal from "../../app/Modal/Modal";
import usePricing from "@/hooks/usePricing";

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
  const [isReady, setIsReady] = useState(false);

  const pricing = usePricing() as PricingType | null;

  // Timer Setup
  useEffect(() => {
    if (!pricing?.countdown) return;

    const savedEndTime = localStorage.getItem("offer_end_time");

    if (savedEndTime) {
      const remaining = Math.floor(
        (parseInt(savedEndTime) - Date.now()) / 1000
      );
      setTimeLeft(remaining > 0 ? remaining : 0);
    } else {
      const endTime = Date.now() + pricing.countdown * 1000;
      localStorage.setItem("offer_end_time", endTime.toString());
      setTimeLeft(pricing.countdown);
    }

    setIsReady(true);
  }, [pricing]);

  // Countdown
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const isExpired = isReady && timeLeft <= 0;

  return (
    <>
      <Section className="pt-28 pb-16 md:pt-24 lg:pt-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="font-serif font-medium leading-tight text-white text-[clamp(36px,6vw,68px)]">
              Infinite power of <br />
              <span className="italic">numerology</span>
            </h1>

            <p className="text-lg text-white/90 leading-8 max-w-xl mx-auto lg:mx-0">
              Instantly unlock your personalized Life Path Report and discover
              your true purpose, career opportunities, relationship insights,
              strengths, challenges, and future possibilities—all in one
              powerful numerology report.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={() => setOpen(true)}
                className="rounded-xl bg-white !text-black border border-black uppercase font-bold shadow-none px-8 py-3 hover:cursor-pointer"
              >
                {!isExpired && pricing?.discount
                  ? `BUY NOW AT ${pricing.discount}% OFF`
                  : "BUY NOW"}
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[500px] h-[500px] overflow-hidden rounded-t-[220px] rounded-b-none shadow-2xl">
              <Image
                src="/image2.jpg"
                alt="Numerology"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Section>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;