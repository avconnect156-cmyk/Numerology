"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/app/Modal/Modal";
import usePricing from "@/hooks/usePricing";

// ✅ Pricing Type
type PricingType = {
  price: number;
  finalPrice: number;
  discount: number;
  buttonText: string;
  countdown: number;
  offerId: string;
};

const StickyBottomBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const pricing = usePricing() as PricingType | null;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // ✅ WAIT FOR REAL ADMIN DATA
  const countdown = pricing?.countdown;
  const offerId = pricing?.offerId;

  // ✅ TIMER SETUP
  useEffect(() => {
    if (!pricing || !countdown || !offerId) return;

    const storedOfferId = localStorage.getItem("offer_id");

    // Reset timer only if admin changes offer
    if (storedOfferId && storedOfferId !== offerId) {
      localStorage.removeItem("offer_end_time");
      localStorage.removeItem("offer_expired");
    }

    localStorage.setItem("offer_id", offerId);

    const expired = localStorage.getItem("offer_expired");

    if (expired === "true") {
      setTimeLeft(0);
      setIsReady(true);
      return;
    }

    let endTime = localStorage.getItem("offer_end_time");

    if (!endTime) {
      const newEndTime = Date.now() + countdown * 1000;

      localStorage.setItem(
        "offer_end_time",
        newEndTime.toString()
      );

      endTime = newEndTime.toString();
    }

    const updateTimer = () => {
      const remaining = Math.max(
        0,
        Math.floor((parseInt(endTime as string) - Date.now()) / 1000)
      );

      setTimeLeft(remaining);

      if (remaining <= 0) {
        localStorage.setItem("offer_expired", "true");
      }
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    setIsReady(true);

    return () => clearInterval(interval);
  }, [pricing, countdown, offerId]);

  // Format Time
  const formatTime = (sec: number): string => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");

    return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
  };

  const isExpired = timeLeft <= 0;

  // Pricing
  const price = pricing?.price ?? 1999;

  const finalPrice = !isExpired
    ? pricing?.finalPrice ?? price
    : price;

  const discount = !isExpired
    ? pricing?.discount ?? 0
    : 0;

  const buttonText =
    pricing?.buttonText ?? "Get Your Full Report";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#081C3A] via-[#06142B] to-[#020B18] border-t border-[#D4AF37]/30 backdrop-blur-xl shadow-[0_-12px_35px_rgba(0,0,0,0.45)] px-4 py-3">

      <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[64px]">

        {/* LEFT PRICE */}
        <div className="hidden md:block absolute left-0 pl-4">

          <p className="text-xl md:text-2xl font-serif font-bold text-[#FFD700]">

            {!isExpired && (
              <span className="line-through text-gray-400 mr-2">
                ₹ {price}
              </span>
            )}

            ₹ {finalPrice}
          </p>

          {!isExpired && discount > 0 && (
            <span className="inline-flex items-center rounded-full bg-red-500/15 border border-red-500/30 px-2 py-1 text-xs font-bold text-red-400">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* CENTER BUTTON */}

        <Button
          onClick={handleOpen}
          className="rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#F4C430] !text-[#081C3A] font-bold px-10 h-12 shadow-[0_8px_30px_rgba(212,175,55,0.35)] border border-[#FFD700]/40 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:cursor-pointer"
        >
          {buttonText}
        </Button>

        {/* RIGHT TIMER */}
        <div className="hidden md:block absolute right-0 pr-4">

          {isReady && !isExpired && (
            <p className="text-[#FFD700] font-bold text-lg md:text-xl">
              ⏳ {formatTime(timeLeft)}
            </p>
          )}

        </div>

      </div>
            {/* MOBILE */}
      <div className="md:hidden flex flex-col items-center mt-3 gap-2">

        {/* Price */}
        <p className="text-lg font-serif font-bold text-[#FFD700]">

          {!isExpired && (
            <span className="line-through text-gray-400 mr-2">
              ₹ {price}
            </span>
          )}

          ₹ {finalPrice}
        </p>

        {/* Discount */}
        {!isExpired && discount > 0 && (
          <span className="inline-flex items-center rounded-full bg-red-500/15 border border-red-500/30 px-3 py-1 text-xs font-bold text-red-400">
            {discount}% OFF
          </span>
        )}

        {/* Timer */}
        {isReady && !isExpired && (
          <div className="flex items-center gap-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-4 py-2">
            <span className="text-sm">⏳</span>
            <p className="text-sm font-bold text-[#FFD700]">
              {formatTime(timeLeft)}
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default StickyBottomBar;